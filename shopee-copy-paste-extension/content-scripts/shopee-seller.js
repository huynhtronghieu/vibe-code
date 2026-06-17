// Content Script for Shopee Seller Centre page

(function () {
  if (document.getElementById("shopee-seller-helper")) return;

  // React Input value setter bypass helper
  function setReactInputValue(input, value) {
    if (!input) return;
    const lastValue = input.value;
    input.value = value;
    const event = new Event("input", { bubbles: true });
    event.simulated = true;

    // React 16+ value tracker bypass
    const tracker = input._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
    input.dispatchEvent(new Event("change", { bubbles: true }));

    // Extra events to trigger validation
    input.dispatchEvent(new Event("blur", { bubbles: true }));
  }

  // Set value for ContentEditable fields
  function setReactContentEditable(element, value) {
    if (!element) return;
    element.focus();
    element.innerText = value;
    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
    element.dispatchEvent(new Event("blur", { bubbles: true }));
  }

  // Clean description text to ensure no more than 1 consecutive newline exists (preventing double spacing in rich text editors)
  function cleanDescriptionSpacing(text) {
    if (!text) return "";
    let cleaned = text.replace(/\r/g, "");
    // Collapse any sequence of 2 or more consecutive newlines (with optional spaces/tabs) into a single newline
    cleaned = cleaned.replace(/\n([ \t]*\n)+/g, "\n");
    // Trim end of each line to clean up trailing spaces
    cleaned = cleaned.split("\n").map(line => line.trimEnd()).join("\n");
    return cleaned.trim();
  }

  // Convert any base64 image to standard JPEG using canvas to ensure 100% compatibility with Shopee's upload server
  async function convertToJpeg(base64Str) {
    if (!base64Str) return null;

    console.log("[ShopeeCopier] Converting image to standard JPEG for compatibility...");
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          // Fill background with white in case of transparency (since JPEG doesn't support alpha channel)
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
          const jpegBase64 = canvas.toDataURL("image/jpeg", 0.95);
          resolve(jpegBase64);
        } catch (e) {
          console.error("[ShopeeCopier] Canvas conversion failed, using original base64:", e);
          resolve(base64Str);
        }
      };
      img.onerror = (err) => {
        console.error("[ShopeeCopier] Image load failed for conversion, using original base64:", err);
        resolve(base64Str); // Fallback
      };
      img.src = base64Str;
    });
  }

  // Close any Shopee guide/standardized popovers that might block inputs
  async function closePopovers() {
    const popoverButtons = Array.from(document.querySelectorAll(".pulse-popover-button button, .eds-popover__content button, [class*='popover'] button"));
    for (const btn of popoverButtons) {
      const text = btn.textContent.trim().toLowerCase();
      if (text.includes("đã hiểu") || text.includes("got it") || text.includes("ok") || text.includes("close") || text.includes("đóng")) {
        console.log("[ShopeeCopier] Closing popover:", btn);
        try {
          btn.click();
          await new Promise(resolve => setTimeout(resolve, 300));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }

  // Enable all shipping channels on the Vận chuyển tab
  async function enableAllShippingChannels() {
    console.log("[ShopeeCopier] Attempting to enable all shipping channels...");

    // Find all custom switch elements on the page
    const switches = Array.from(document.querySelectorAll(".shopee-switch, .eds-switch, [class*='switch']"));
    console.log(`[ShopeeCopier] Found ${switches.length} switch elements.`);

    let clickedAny = false;
    const processedInputs = new Set();

    for (let idx = 0; idx < switches.length; idx++) {
      const sw = switches[idx];
      const input = sw.querySelector("input[type='checkbox']");
      if (input) {
        processedInputs.add(input);
      }

      const isChecked = (input && input.checked) ||
        sw.className.includes("checked") ||
        sw.className.includes("active") ||
        sw.getAttribute("aria-checked") === "true";

      if (!isChecked) {
        console.log(`[ShopeeCopier] Enabling shipping switch #${idx}...`);
        if (input) {
          triggerMouseEventSequence(input);
          try { input.click(); } catch (e) { }
        } else {
          triggerMouseEventSequence(sw);
        }
        clickedAny = true;
        // Wait 300ms to allow React state updates to settle
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }

    // Direct check: scan all checkboxes on the page
    const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"));
    console.log(`[ShopeeCopier] Direct check: Found ${checkboxes.length} checkboxes.`);
    for (let idx = 0; idx < checkboxes.length; idx++) {
      const cb = checkboxes[idx];
      if (processedInputs.has(cb)) continue;

      const isChecked = cb.checked || cb.getAttribute("aria-checked") === "true";
      if (!isChecked) {
        console.log(`[ShopeeCopier] Enabling direct checkbox #${idx}...`);
        triggerMouseEventSequence(cb);
        try { cb.click(); } catch (e) { }
        clickedAny = true;
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }

    return clickedAny;
  }

  // Helper to trigger a full React-compatible click sequence
  function triggerMouseEventSequence(element) {
    if (!element) return;
    console.log("[ShopeeCopier] Triggering MouseEvent sequence on:", element);
    if (typeof element.focus === "function") {
      element.focus();
    }
    element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window }));
    element.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window }));
    element.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
  }

  // Select "No brand" from the Brand dropdown
  async function selectNoBrand() {
    console.log("[ShopeeCopier] Attempting to select 'No brand'...");

    let brandContainer = document.querySelector(".product-brand-item");
    if (!brandContainer) {
      // Find the Brand container. Brand labels are usually "Thương hiệu" or "Brand"
      const elements = Array.from(document.querySelectorAll("label, div, span, p"));
      for (const el of elements) {
        if (el.children.length > 2) continue; // Skip large container elements
        const text = el.textContent.trim().toLowerCase();
        if (text === "thương hiệu" || text === "brand" || (text.includes("thương hiệu") && text.length < 20)) {
          brandContainer = el.closest(".edit-row, .form-item, .shopee-form-item, .item-container, div[class*='form-item'], div[class*='row']");
          if (brandContainer) {
            console.log("[ShopeeCopier] Found Brand container via label:", brandContainer);
            break;
          }
        }
      }
    } else {
      console.log("[ShopeeCopier] Found Brand container via class:", brandContainer);
    }

    if (!brandContainer) {
      console.log("[ShopeeCopier] Brand container not found. Skipping selectNoBrand to avoid false positive matches.");
      return false;
    }

    // Find the clickable trigger inside brandContainer
    const trigger = brandContainer.querySelector(".eds-selector, .shopee-select, .eds-select, .shopee-selector, [class*='select'], [class*='dropdown'], div[role='combobox'], input") ||
      (brandContainer.classList.contains("shopee-select") || brandContainer.classList.contains("shopee-selector") || brandContainer.classList.contains("eds-selector") ? brandContainer : null);

    if (trigger) {
      console.log("[ShopeeCopier] Clicking Brand dropdown trigger element:", trigger);
      triggerMouseEventSequence(trigger);

      // Wait for the dropdown popover list to render in the DOM (approx 800ms)
      await new Promise(resolve => setTimeout(resolve, 800));

      // Find absolute-positioned popover containers or dropdown menus appended to body
      const popups = Array.from(document.body.children).filter(el => {
        const tag = el.tagName.toLowerCase();
        if (tag !== "div" && tag !== "ul") return false;

        const className = el.className || "";
        const style = window.getComputedStyle(el);
        const position = style.position;
        const zIndex = parseInt(style.zIndex, 10) || 0;

        return (
          className.includes("popover") ||
          className.includes("dropdown") ||
          className.includes("select") ||
          className.includes("menu") ||
          position === "absolute" ||
          position === "fixed" ||
          zIndex >= 1000
        );
      });
      console.log(`[ShopeeCopier] Scanning ${popups.length} active popup/dropdown elements...`);

      // Search for the "No brand" option inside these popup containers first
      for (const popup of popups) {
        const options = Array.from(popup.querySelectorAll("div, li, span, p, a, [class*='option'], [class*='item']"));
        const matched = options.find(opt => {
          const text = opt.textContent.trim().toLowerCase();
          return text === "no brand" || text === "no_brand" || text === "không có thương hiệu";
        });

        if (matched) {
          console.log("[ShopeeCopier] Found 'No brand' option inside popup, clicking:", matched);
          triggerMouseEventSequence(matched);
          await new Promise(resolve => setTimeout(resolve, 500));
          return true;
        }
      }

      // Look for search input inside the popover to search for "No brand" if not found
      for (const popup of popups) {
        const searchInput = popup.querySelector("input[type='text'], input[placeholder*='tìm'], input[placeholder*='search']");
        if (searchInput) {
          console.log("[ShopeeCopier] Found brand search input, focusing and typing 'No brand'...");
          searchInput.focus();
          setReactInputValue(searchInput, "No brand");

          // Wait 600ms for filtering to complete
          await new Promise(resolve => setTimeout(resolve, 600));

          const options = Array.from(popup.querySelectorAll("div, li, span, p, a, [class*='option'], [class*='item']"));
          const matched = options.find(opt => {
            const text = opt.textContent.trim().toLowerCase();
            return text === "no brand" || text === "no_brand" || text === "không có thương hiệu";
          });

          if (matched) {
            console.log("[ShopeeCopier] Found 'No brand' option after search filter, clicking:", matched);
            triggerMouseEventSequence(matched);
            await new Promise(resolve => setTimeout(resolve, 500));
            return true;
          }
        }
      }

      // General fallback in document body (only matching elements inside actual body portal overlay divs)
      const portalDivs = Array.from(document.body.children).filter(el => {
        const style = window.getComputedStyle(el);
        return el.tagName.toLowerCase() === "div" && (style.position === "absolute" || style.position === "fixed");
      });
      for (const portal of portalDivs) {
        const allTextElements = Array.from(portal.querySelectorAll("div, li, span, p, a, [class*='option'], [class*='item']"));
        const matched = allTextElements.find(el => {
          const text = el.textContent.trim().toLowerCase();
          return text === "no brand" || text === "no_brand" || text === "không có thương hiệu";
        });
        if (matched) {
          console.log("[ShopeeCopier] Found 'No brand' inside visible portal div, clicking:", matched);
          triggerMouseEventSequence(matched);
          await new Promise(resolve => setTimeout(resolve, 500));
          return true;
        }
      }
    }

    console.log("[ShopeeCopier] Failed to locate or click the Brand dropdown option.");
    return false;
  }

  // Helper to find Variation Group 2 card
  function findVariationGroup2Card() {
    let card2 = document.querySelector("[data-product-edit-field-unique-id='tierVariation_1']");
    if (card2) return card2;

    const cards = Array.from(document.querySelectorAll(".variation-edit-item, .variation-edit-item-content, [class*='variation-edit-item']"));
    if (cards.length > 1) {
      return cards[1];
    }

    // Search by text content: "Nhóm phân loại 2" or "Phân loại 2"
    const elements = Array.from(document.querySelectorAll("div, section, form, [class*='variation']"));
    for (const el of elements) {
      if (el.textContent.length > 1000) continue;
      const text = el.textContent.toLowerCase();
      if (text.includes("nhóm phân loại 2") || text.includes("phân loại 2") || text.includes("phân loại2")) {
        if (el.querySelector("input") || el.querySelector("button") || el.querySelector(".variation-delete-btn")) {
          // Verify it's not the first card
          const hasGroup1Text = text.includes("nhóm phân loại 1") || text.includes("phân loại 1") || text.includes("phân loại1");
          if (!hasGroup1Text) {
            return el;
          }
        }
      }
    }
    return null;
  }

  // Helper to delete a variation group card and wait for it to be removed from the DOM
  async function deleteVariationGroup(card) {
    if (!card) return false;

    console.log("[ShopeeCopier] Attempting to delete variation group card:", card);

    // Find the delete button inside the card
    const deleteBtn = Array.from(card.querySelectorAll("button, div, span, i, a, svg")).find(el => {
      const text = el.textContent.trim().toLowerCase();
      const className = (el.className || "").toLowerCase();
      return text === "xóa" ||
        text === "delete" ||
        text === "remove" ||
        className.includes("delete") ||
        className.includes("trash") ||
        className.includes("remove") ||
        className.includes("close") ||
        className.includes("variation-delete") ||
        (el.querySelector("svg") && el.querySelector("svg").outerHTML.toLowerCase().includes("delete"));
    });

    if (!deleteBtn) {
      console.log("[ShopeeCopier] Delete button not found inside variation group card.");
      return false;
    }

    const actualBtn = deleteBtn.closest("button") || deleteBtn;
    console.log("[ShopeeCopier] Clicking Delete button on variation group:", actualBtn);
    triggerMouseEventSequence(actualBtn);
    try { actualBtn.click(); } catch (e) { }

    // Poll for confirmation dialog for up to 2 seconds
    let confirmClicked = false;
    const startConfirm = Date.now();
    while (Date.now() - startConfirm < 2000) {
      const confirmBtn = Array.from(document.querySelectorAll("button, div, span, [class*='button'], [class*='btn']")).find(el => {
        const text = el.textContent.trim().toLowerCase();
        const isClickable = el.tagName.toLowerCase() === "button" ||
          el.closest("button") ||
          el.className.includes("btn") ||
          el.className.includes("button") ||
          el.getAttribute("role") === "button";

        if (!isClickable) return false;

        // Only match buttons inside modals or popovers
        const isInsideModal = el.closest(".eds-modal, .shopee-modal, .modal, .popover, [class*='modal'], [class*='popover'], [class*='dialog'], .eds-popover");
        if (!isInsideModal) return false;

        return text === "xác nhận" ||
          text === "xóa" ||
          text === "đồng ý" ||
          text === "confirm" ||
          text === "ok" ||
          text === "yes" ||
          text.includes("xác nhận") ||
          text.includes("đồng ý");
      });

      if (confirmBtn) {
        const actualConfirmBtn = confirmBtn.closest("button") || confirmBtn;
        console.log("[ShopeeCopier] Clicking Confirm button on deletion dialog:", actualConfirmBtn);
        triggerMouseEventSequence(actualConfirmBtn);
        try { actualConfirmBtn.click(); } catch (e) { }
        confirmClicked = true;
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Wait for the card to be removed from the DOM (max 3 seconds)
    const startRemove = Date.now();
    while (Date.now() - startRemove < 3000) {
      if (!document.body.contains(card)) {
        console.log("[ShopeeCopier] Variation group card has been successfully removed from DOM.");
        return true;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log("[ShopeeCopier] Warning: Variation group card was not removed from DOM within timeout.");
    return false;
  }

  // Set up variation groups, option values, and upload variation option images
  async function setupVariations(currentProduct) {
    console.log("[ShopeeCopier] Starting setup of variations...");
    await closePopovers();
    const tierVariations = currentProduct.tier_variations || [];
    if (tierVariations.length === 0) return;

    // If the copied product only has 1 variation group, but the page has 2 groups enabled, delete the second group first
    if (tierVariations.length === 1) {
      const card2 = findVariationGroup2Card();
      if (card2) {
        console.log("[ShopeeCopier] Copied product only has 1 group, but page has 2. Deleting Variation Group 2 first...");
        await deleteVariationGroup(card2);
        // Wait another 600ms for Vue's variations table state to stabilize
        await new Promise(resolve => setTimeout(resolve, 600));
      }
    }

    // Check if Group 1 is already enabled
    let card1 = document.querySelector("[data-product-edit-field-unique-id='tierVariation_0']") ||
      document.querySelector(".variation-edit-item");

    if (!card1) {
      // Find the add variation group button to enable variations
      let addGroupBtn = document.querySelector(".variation-add-button button, [class*='variation-add'] button, .primary-dash-button");
      if (!addGroupBtn) {
        addGroupBtn = Array.from(document.querySelectorAll("button, div, span")).find(el => {
          const text = el.textContent.trim().toLowerCase();
          // Exclude any text related to Group 2 to prevent accidental activation
          if (text.includes("2") || text.includes("thứ 2") || text.includes("thứ hai") || text.includes("second") || text.includes("another") || text.includes("phân loại 2")) return false;

          return text === "thêm nhóm phân loại" ||
            text === "thêm phân loại" ||
            text === "bật phân loại" ||
            text === "nhóm phân loại" ||
            (text.includes("nhóm phân loại") && !text.includes("2"));
        });
      }

      if (addGroupBtn) {
        const btnParent = addGroupBtn.closest("button");
        const targetClick = btnParent || addGroupBtn;
        console.log("[ShopeeCopier] Clicking Add Variation Group button to enable:", targetClick);
        triggerMouseEventSequence(targetClick);
        try { targetClick.click(); } catch (e) { }
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Re-query card 1 after enabling
      card1 = document.querySelector("[data-product-edit-field-unique-id='tierVariation_0']") ||
        document.querySelector(".variation-edit-item");
    }

    // Helper to find option inputs and name input inside a specific card
    function getCardInputs(card) {
      if (!card) return { nameInput: null, optionInputs: [] };

      const nameInput = card.querySelector(".variation-name-edit-item input, .variation-name-panel input, input[placeholder*='Color'], input[placeholder*='màu']");

      const optionInputs = Array.from(card.querySelectorAll(".variation-option-panel input, [class*='option'] input")).filter(input => {
        const type = input.getAttribute("type") || "text";
        if (type.toLowerCase() !== "text") return false;

        const placeholder = (input.getAttribute("placeholder") || "").toLowerCase();
        // Skip description inputs
        if (placeholder.includes("mô tả") || placeholder.includes("desc") || placeholder.includes("description")) return false;

        return true;
      });

      return {
        nameInput: nameInput || card.querySelector("input"),
        optionInputs: optionInputs
      };
    }

    // Process Group 1
    const group1 = tierVariations[0];

    if (card1) {
      document.querySelector("[data-product-edit-field-unique-id=tierVariation_1] .variation-delete-btn")?.click();
      const { nameInput } = getCardInputs(card1);
      if (nameInput) {
        console.log("[ShopeeCopier] Filling Group 1 name:", group1.name);
        setReactInputValue(nameInput, group1.name);
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Set options for Group 1
      for (let i = 0; i < group1.options.length; i++) {
        const optionValue = group1.options[i];

        let { optionInputs } = getCardInputs(card1);
        let inputToFill = optionInputs[i];

        if (!inputToFill) {
          // Find Add Option button inside card1
          const addBtn = Array.from(card1.querySelectorAll("button, div, span")).find(el => {
            const text = el.textContent.trim().toLowerCase();
            return text === "thêm" || text === "add" || text.includes("tùy chọn") || text.includes("option") || text.includes("+") || text.includes("thêm");
          });

          if (addBtn) {
            const actualBtn = addBtn.closest("button") || addBtn;
            console.log("[ShopeeCopier] Clicking Add Option button inside Group 1:", actualBtn);
            triggerMouseEventSequence(actualBtn);
            try { actualBtn.click(); } catch (e) { }
            await new Promise(resolve => setTimeout(resolve, 600));

            const refreshed = getCardInputs(card1);
            inputToFill = refreshed.optionInputs[i];
          }
        }

        if (inputToFill) {
          console.log(`[ShopeeCopier] Filling Group 1 Option ${i}:`, optionValue);
          setReactInputValue(inputToFill, optionValue);
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }

      // Check if Group 1 has images
      if (group1.images && group1.images.length > 0) {
        console.log("[ShopeeCopier] Found images for Group 1 options, enabling images toggle...");
        const imageToggleContainer = Array.from(card1.querySelectorAll("label, div, span, p")).find(el => {
          const text = el.textContent.trim().toLowerCase();
          return text.includes("hình ảnh") || text.includes("image");
        });

        if (imageToggleContainer) {
          const cbInput = imageToggleContainer.querySelector("input[type='checkbox'], button[role='switch'], [role='checkbox']");
          let isChecked = false;
          if (cbInput) {
            isChecked = cbInput.checked ||
              cbInput.getAttribute("aria-checked") === "true" ||
              cbInput.getAttribute("aria-selected") === "true" ||
              (cbInput.className || "").toLowerCase().includes("checked") ||
              (cbInput.className || "").toLowerCase().includes("active");
          } else {
            const classText = (imageToggleContainer.className || "").toLowerCase() + " " +
              (imageToggleContainer.closest("label") ? (imageToggleContainer.closest("label").className || "").toLowerCase() : "");
            isChecked = classText.includes("is-checked") || classText.includes("checked") || classText.includes("active");
          }

          if (!isChecked) {
            const clickTarget = cbInput || imageToggleContainer;
            console.log("[ShopeeCopier] Enabling image toggle, clicking:", clickTarget);
            triggerMouseEventSequence(clickTarget);
            try { clickTarget.click(); } catch (e) { }
            await new Promise(resolve => setTimeout(resolve, 1000)); // wait for file inputs to render
          }
        }

        // Fetch variation images via background worker
        const imageUrls = group1.images.map(imgId => imgId.startsWith("http") ? imgId : `https://down-tx-vn.img.susercontent.com/file/${imgId}`);
        console.log("[ShopeeCopier] Fetching variation images:", imageUrls);
        const downloadResponse = await chrome.runtime.sendMessage({
          action: "downloadImages",
          urls: imageUrls
        });

        if (downloadResponse && downloadResponse.success && downloadResponse.images.length > 0) {
          // Wait for variations table or inputs to render
          console.log("[ShopeeCopier] Waiting for variation file inputs to render...");
          await new Promise(resolve => setTimeout(resolve, 1500));

          const fileInputs = findVariationFileInputs();
          console.log(`[ShopeeCopier] Found ${fileInputs.length} file inputs for variation images.`);

          for (let i = 0; i < Math.min(fileInputs.length, downloadResponse.images.length); i++) {
            const imgObj = downloadResponse.images[i];
            if (!imgObj || !imgObj.base64) {
              console.log(`[ShopeeCopier] Skipping image upload for index ${i} because it is empty/failed.`);
              continue;
            }

            try {
              const processedBase64 = await convertToJpeg(imgObj.base64);
              const file = await base64ToFile(processedBase64, `var_img_${i}.jpg`, "image/jpeg");
              const dt = new DataTransfer();
              dt.items.add(file);
              fileInputs[i].files = dt.files;
              fileInputs[i].dispatchEvent(new Event("change", { bubbles: true }));
              console.log(`[ShopeeCopier] Successfully uploaded variation image ${i}`);
              await new Promise(resolve => setTimeout(resolve, 300));
            } catch (err) {
              console.error(`[ShopeeCopier] Error uploading variation image ${i}:`, err);
            }
          }
        }
      }
    }

    // Process Group 2 if present
    if (tierVariations.length > 1) {
      console.log("[ShopeeCopier] Setting up Group 2 variations (Note: addGroup2Btn click disabled per user request)...");
      // Programmatic clicking of addGroup2Btn is disabled per user request:
      // "tuyệt đối ko nhấn button 'Thêm nhóm phân loại 2'"
      /*
      let addGroup2Btn = Array.from(document.querySelectorAll("button, div, span")).find(el => {
        const text = el.textContent.trim().toLowerCase();
        return text.includes("nhóm phân loại 2") || text.includes("nhóm phân loại thứ 2") || text.includes("thêm nhóm phân loại") || text.includes("add group") || text.includes("add another");
      });
      
      if (addGroup2Btn) {
        const actualBtn = addGroup2Btn.closest("button") || addGroup2Btn;
        triggerMouseEventSequence(actualBtn);
        try { actualBtn.click(); } catch(e) {}
        await new Promise(resolve => setTimeout(resolve, 800));
      }
      */

      const card2 = document.querySelector("[data-product-edit-field-unique-id='tierVariation_1']") ||
        document.querySelectorAll(".variation-edit-item")[1];

      if (card2) {
        const group2 = tierVariations[1];
        const { nameInput } = getCardInputs(card2);
        if (nameInput) {
          console.log("[ShopeeCopier] Filling Group 2 name:", group2.name);
          setReactInputValue(nameInput, group2.name);
          await new Promise(resolve => setTimeout(resolve, 500));
        }

        // Set options for Group 2
        for (let i = 0; i < group2.options.length; i++) {
          const optionValue = group2.options[i];

          let { optionInputs } = getCardInputs(card2);
          let inputToFill = optionInputs[i];

          if (!inputToFill) {
            const addBtn = Array.from(card2.querySelectorAll("button, div, span")).find(el => {
              const text = el.textContent.trim().toLowerCase();
              return text === "thêm" || text === "add" || text.includes("tùy chọn") || text.includes("option") || text.includes("+") || text.includes("thêm");
            });

            if (addBtn) {
              const actualBtn = addBtn.closest("button") || addBtn;
              triggerMouseEventSequence(actualBtn);
              try { actualBtn.click(); } catch (e) { }
              await new Promise(resolve => setTimeout(resolve, 600));

              const refreshed = getCardInputs(card2);
              inputToFill = refreshed.optionInputs[i];
            }
          }

          if (inputToFill) {
            console.log(`[ShopeeCopier] Filling Group 2 Option ${i}:`, optionValue);
            setReactInputValue(inputToFill, optionValue);
            await new Promise(resolve => setTimeout(resolve, 300));
          }
        }
      }
    }

    // Wait for the variations table to generate in the DOM (approx 1500ms)
    console.log("[ShopeeCopier] Waiting for variations table to render...");
    await new Promise(resolve => setTimeout(resolve, 1500));
  }

  // Helper to find the variations table header row by matching keywords
  function findHeaderRow() {
    const containers = Array.from(document.querySelectorAll(".product-sales-info, .product-tier-variation, .variation-container, [data-product-edit-field-unique-id='variation'], [class*='sales-info'], [class*='variation']"));
    const searchScope = containers.length > 0 ? containers : [document.body];

    let bestRow = null;
    let maxMatches = 0;

    const blacklistTerms = ["mua nhiều giảm giá", "wholesale", "giá sỉ", "đồng giá", "áp dụng cho tất cả", "áp dụng cho tất", "apply to all"];

    searchScope.forEach(scope => {
      const elements = Array.from(scope.querySelectorAll("tr, [role='row'], .eds-table__header, .shopee-table__header, [class*='header'], [class*='row'], div"));
      elements.forEach(el => {
        // Skip elements that are too large (e.g. the entire card)
        if (el.textContent.length > 2500) return;

        const text = el.textContent.toLowerCase();

        // Skip if it contains blacklisted terms for wholesale/batch-edit
        const hasBlacklistedTerm = blacklistTerms.some(term => text.includes(term));
        if (hasBlacklistedTerm) return;

        let matches = 0;
        if (text.includes("giá") || text.includes("price")) matches++;
        if (text.includes("kho") || text.includes("stock") || text.includes("số lượng") || text.includes("quantity")) matches++;
        if (text.includes("mẫu") || text.includes("phân loại") || text.includes("variation") || text.includes("model")) matches++;
        if (text.includes("cân nặng") || text.includes("weight")) matches++;

        if (matches >= 2 && (matches > maxMatches || (matches === maxMatches && bestRow && el.textContent.length < bestRow.textContent.length))) {
          if (el.children.length >= 2) {
            maxMatches = matches;
            bestRow = el;
          }
        }
      });
    });

    return bestRow;
  }

  // Helper to find variations table body rows (excluding header row)
  function findBodyRows(headerRow, container) {
    const allRows = Array.from(container.querySelectorAll("tr, [role='row'], .eds-table__row, .shopee-table__row, [class*='table-row'], [class*='table__row'], [class*='grid-row'], [class*='grid__row']"));

    let bodyRows = allRows.filter(row => {
      if (row === headerRow || row.contains(headerRow) || headerRow.contains(row)) return false;

      const className = (row.className || "").toLowerCase();
      const role = (row.getAttribute("role") || "").toLowerCase();
      if (role === "columnheader" || className.includes("header")) return false;

      const inputs = row.querySelectorAll("input");
      if (inputs.length === 0) return false;

      const text = row.textContent;
      if (text.includes("Cân nặng (Sau khi") || text.includes("Kích thước đóng gói")) return false;

      return true;
    });

    // Robust fallback: group inputs by their closest row parent if no rows are matched
    if (bodyRows.length === 0) {
      console.log("[ShopeeCopier] findBodyRows: 0 rows matched. Using direct inputs grouping fallback...");
      const inputs = Array.from(container.querySelectorAll("input"));
      const parentRows = new Set();
      inputs.forEach(input => {
        const parentRow = input.closest("tr, [role='row'], .eds-table__row, .shopee-table__row") ||
          input.closest("div[class*='row']") ||
          input.parentElement.closest("div");

        if (parentRow && parentRow !== container && !parentRow.contains(headerRow) && !headerRow.contains(parentRow)) {
          const text = parentRow.textContent;
          if (!text.includes("Cân nặng (Sau khi") && !text.includes("Kích thước đóng gói")) {
            parentRows.add(parentRow);
          }
        }
      });
      bodyRows = Array.from(parentRows);
    }

    return bodyRows;
  }

  // Helper to find the main product image file input (excluding variation inputs and video inputs)
  function findMainImageFileInput() {
    // 1. Try finding inside the specific images container first, filtering out any matching elements inside variation sections
    const mainImagesContainer = Array.from(
      document.querySelectorAll("[data-product-edit-field-unique-id='images'], [class*='image-manager-wrapper'], [class*='image-upload'], .product-image, [class*='media']")
    ).find(el => {
      // Must not be inside variation containers
      const inVariation = el.closest(
        "[data-product-edit-field-unique-id='variation'], [data-product-edit-field-unique-id^='tierVariation'], .variation-edit-item, .variation-edit-item-content, .variation-model-table-fixed-left, .variation-model-table-main, .variation-container"
      );
      return !inVariation;
    });

    if (mainImagesContainer) {
      const inputs = Array.from(mainImagesContainer.querySelectorAll("input[type='file']"));
      const imageInput = inputs.find(input => {
        const accept = input.getAttribute("accept") || "";
        return accept.includes("image") && input.multiple;
      }) || inputs.find(input => {
        const accept = input.getAttribute("accept") || "";
        return accept.includes("image");
      }) || inputs.find(input => input.multiple) || inputs[0];
      if (imageInput) return imageInput;
    }

    // 2. Fallback: Search globally, but exclude any inputs inside variation containers to avoid Vue uploadImage crash
    const allInputs = Array.from(document.querySelectorAll("input[type='file']"));
    const mainInputs = allInputs.filter(input => {
      // Exclude inputs inside variation containers
      const inVariation = input.closest(
        "[data-product-edit-field-unique-id='variation'], [data-product-edit-field-unique-id^='tierVariation'], .variation-edit-item, .variation-edit-item-content, .variation-model-table-fixed-left, .variation-model-table-main, .variation-container"
      );
      return !inVariation;
    });

    // Find the best fit among non-variation inputs (prefer multiple and image accept)
    const bestFit = mainInputs.find(input => {
      const accept = input.getAttribute("accept") || "";
      return accept.includes("image") && input.multiple;
    }) || mainInputs.find(input => {
      const accept = input.getAttribute("accept") || "";
      return accept.includes("image");
    }) || mainInputs.find(input => input.multiple) || mainInputs[0];

    return bestFit;
  }

  // Helper to find all input[type='file'] inside the variations option cells or rows
  function findVariationFileInputs() {
    // 1. We want the file inputs that belong to the variation options of Group 1
    // These inputs are inside the first variation group card (Group 1)
    const card1 = document.querySelector("[data-product-edit-field-unique-id='tierVariation_0']") ||
      document.querySelector(".variation-edit-item");

    if (card1) {
      const inputs = Array.from(card1.querySelectorAll("input[type='file']"));
      if (inputs.length > 0) {
        console.log(`[ShopeeCopier] Found ${inputs.length} variation file inputs inside Group 1 card.`);
        return inputs;
      }
    }

    // 2. Fallback: search in the fixed-left column of the table (for split table layouts)
    const fixedLeft = document.querySelector(".variation-model-table-fixed-left");
    if (fixedLeft) {
      const inputs = Array.from(fixedLeft.querySelectorAll("input[type='file']"));
      if (inputs.length > 0) {
        console.log(`[ShopeeCopier] Found ${inputs.length} variation file inputs inside fixed-left table column.`);
        return inputs;
      }
    }

    // 3. Generic fallback: find all file inputs that are NOT the main image input or video input
    const allInputs = Array.from(document.querySelectorAll("input[type='file']"));
    const mainInput = findMainImageFileInput();
    const variationInputs = allInputs.filter(input => {
      if (input === mainInput) return false;
      if (input.multiple) return false;
      const accept = (input.getAttribute("accept") || "").toLowerCase();
      if (accept.includes("video")) return false;
      return true;
    });
    console.log(`[ShopeeCopier] Found ${variationInputs.length} variation file inputs via global exclusion.`);
    return variationInputs;
  }

  // Helper to wait dynamically for the variations table to render
  async function waitForVariationsTable(timeoutMs = 6000) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      if (document.querySelector(".variation-model-table-main")) {
        return true;
      }
      const headerRow = findHeaderRow();
      if (headerRow) {
        const cells = Array.from(headerRow.children);
        if (cells.length >= 2) {
          return true;
        }
      }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    return false;
  }

  // Helper to normalize and match variation options names with database records
  function findMatchedVariation(variations, rowVariationNames) {
    function cleanName(str) {
      if (!str) return "";
      return str.toLowerCase()
        .normalize("NFC")
        .replace(/[\s\-_,|]+/g, " ")
        .trim();
    }

    const cleanRowNames = rowVariationNames.map(n => cleanName(n)).filter(n => n !== "");
    if (cleanRowNames.length === 0) return null;

    return variations.find(v => {
      const cleanDbName = cleanName(v.name);

      // 1. If single option name (1 group), check for exact match
      if (cleanRowNames.length === 1) {
        const rowOpt = cleanRowNames[0];
        if (cleanDbName === rowOpt) return true;

        // Try comma-split options (if dbName has multiple groups like "Red, Large")
        const dbOpts = cleanDbName.split(",").map(o => cleanName(o)).filter(o => o !== "");
        if (dbOpts.includes(rowOpt)) return true;

        // Fallback: check if either contains the other (only if they are long enough)
        if (rowOpt.length > 3 && cleanDbName.length > 3) {
          if (cleanDbName.includes(rowOpt) || rowOpt.includes(cleanDbName)) return true;
        }
      }

      // 2. If multi-option names (multiple groups)
      const dbOpts = cleanDbName.split(",").map(o => cleanName(o)).filter(o => o !== "");
      if (dbOpts.length === cleanRowNames.length) {
        const allMatch = cleanRowNames.every((opt, idx) => dbOpts[idx] === opt);
        if (allMatch) return true;

        const setMatch = cleanRowNames.every(opt => dbOpts.includes(opt)) && dbOpts.every(opt => cleanRowNames.includes(opt));
        if (setMatch) return true;
      }

      // Inclusion match for multi-group as fallback
      const allIncluded = cleanRowNames.every(opt => dbOpts.some(dbOpt => dbOpt === opt || dbOpt.includes(opt) || opt.includes(dbOpt)));
      if (allIncluded && dbOpts.length >= cleanRowNames.length) return true;

      return cleanDbName === cleanRowNames.join(",") || cleanDbName.includes(cleanRowNames.join(","));
    });
  }

  // Fill variations table row-by-row with their respective price and stock
  // Fill variations table row-by-row with their respective price and stock
  function fillVariationsTable(currentProduct) {
    console.log("[ShopeeCopier] =========================================");
    console.log("[ShopeeCopier] Attempting to fill variations table...");
    console.log("[ShopeeCopier] Database variations records:", JSON.stringify(currentProduct.variations, null, 2));

    // Support for vertically-split table layout (e.g. pinned options left, scrollable inputs right)
    const fixedLeft = document.querySelector(".variation-model-table-fixed-left");
    if (fixedLeft) {
      console.log("[ShopeeCopier] Split table layout detected.");

      const leftRows = Array.from(fixedLeft.querySelectorAll(".variation-model-table-body .table-cell-wrapper, .table-cell-wrapper")).filter(el => !el.closest(".variation-model-table-header"));
      const rightContainer = document.querySelector(".variation-model-table-main > div:not(.variation-model-table-fixed-left)");
      const rightRows = rightContainer ? Array.from(rightContainer.querySelectorAll(".variation-model-table-body .table-cell-wrapper, .table-cell-wrapper")).filter(el => !el.closest(".variation-model-table-header")) : [];

      console.log(`[ShopeeCopier] Split table rows count - Left: ${leftRows.length}, Right: ${rightRows.length}`);

      if (leftRows.length > 0 && leftRows.length === rightRows.length) {
        let filledCount = 0;

        for (let i = 0; i < leftRows.length; i++) {
          const leftRow = leftRows[i];
          const rightRow = rightRows[i];

          const leftCells = Array.from(leftRow.querySelectorAll(".table-cell, [class*='cell']"));
          const rowVariationNames = leftCells.map(cell => {
            let text = "";
            for (const child of cell.childNodes) {
              if (child.nodeType === Node.TEXT_NODE) {
                text += child.textContent;
              } else if (child.nodeType === Node.ELEMENT_NODE && !child.className.includes("image-manager") && !child.className.includes("upload")) {
                text += child.textContent;
              }
            }
            return text.trim();
          }).filter(val => val !== "");

          console.log(`[ShopeeCopier] Row ${i} split-left variation names:`, rowVariationNames);

          const matchedVariation = findMatchedVariation(currentProduct.variations, rowVariationNames);

          if (matchedVariation) {
            console.log(`[ShopeeCopier] Row ${i} MATCHED variation:`, matchedVariation.name);

            const rightCells = Array.from(rightRow.querySelectorAll(".table-cell, [class*='cell']"));
            let priceCell = null;
            let stockCell = null;
            let skuCell = null;

            rightCells.forEach((cell) => {
              const inputs = Array.from(cell.querySelectorAll("input"));
              if (inputs.length === 0) return;
              if (inputs.length > 1) return;

              const input = inputs[0];
              const placeholder = (input.getAttribute("placeholder") || "").toLowerCase();
              const type = (input.getAttribute("type") || "text").toLowerCase();
              if (type !== "text" && type !== "number") return;

              const cellClass = (cell.className || "").toLowerCase();
              const inputClass = (input.className || "").toLowerCase();
              const innerDivClasses = Array.from(cell.querySelectorAll("div")).map(d => (d.className || "").toLowerCase()).join(" ");
              const allClassText = `${cellClass} ${inputClass} ${innerDivClasses}`;

              if (placeholder.includes("sku") || allClassText.includes("sku")) {
                skuCell = cell;
                return;
              }

              if (
                cell.textContent.toLowerCase().includes("đ") ||
                placeholder.includes("giá") ||
                placeholder.includes("price") ||
                allClassText.includes("price") ||
                allClassText.includes("giá") ||
                allClassText.includes("basic-price") ||
                allClassText.includes("model-edit-input")
              ) {
                if (!placeholder.includes("kho") && !placeholder.includes("stock") && !allClassText.includes("stock")) {
                  priceCell = cell;
                  return;
                }
              }

              if (
                placeholder.includes("kho") ||
                placeholder.includes("stock") ||
                placeholder.includes("số lượng") ||
                placeholder.includes("quantity") ||
                allClassText.includes("stock") ||
                allClassText.includes("kho") ||
                allClassText.includes("quantity") ||
                allClassText.includes("basic-stock")
              ) {
                stockCell = cell;
                return;
              }
            });

            if (!priceCell || !stockCell) {
              const inputCells = rightCells.filter(c => c.querySelector("input") && c.querySelectorAll("input").length === 1);
              if (inputCells.length >= 2) {
                if (!priceCell) priceCell = inputCells[0];
                if (!stockCell) stockCell = inputCells[1];
              }
            }

            console.log(`[ShopeeCopier] Row ${i} inputs found - Price: ${!!priceCell}, Stock: ${!!stockCell}`);

            const priceVal = matchedVariation.price || currentProduct.price;
            if (priceCell && priceVal) {
              const priceInput = priceCell.querySelector("input");
              if (priceInput) {
                console.log(`[ShopeeCopier] FILLING Row ${i} Price: ${priceVal}`);
                setReactInputValue(priceInput, String(Math.round(priceVal)));
                filledCount++;
              }
            }

            if (stockCell && matchedVariation.stock !== undefined) {
              const stockInput = stockCell.querySelector("input");
              if (stockInput) {
                console.log(`[ShopeeCopier] FILLING Row ${i} Stock: ${matchedVariation.stock}`);
                setReactInputValue(stockInput, String(matchedVariation.stock));
              }
            }

            if (skuCell && matchedVariation.sku) {
              const skuInput = skuCell.querySelector("input");
              if (skuInput) {
                setReactInputValue(skuInput, String(matchedVariation.sku));
              }
            }
          }
        }

        if (filledCount > 0) {
          console.log("[ShopeeCopier] fillVariationsTable completed via split-table logic. Total filled:", filledCount);
          return true;
        }
      }
    }

    const headerRow = findHeaderRow();
    if (!headerRow) {
      console.log("[ShopeeCopier] Variations table header row not found. Aborting variation fill.");
      return false;
    }

    const headerCells = Array.from(headerRow.children);
    const headers = headerCells.map(el => el.textContent.trim().toLowerCase());
    console.log("[ShopeeCopier] Found header cells elements HTML:", headerCells.map(h => h.outerHTML));
    console.log("[ShopeeCopier] Found table headers clean text:", headers);

    // Find indices
    let priceColIndex = -1;
    let stockColIndex = -1;
    let skuColIndex = -1;
    const nameColIndices = [];

    const blacklist = [
      "giá", "price",
      "kho", "stock", "số lượng", "quantity",
      "sku",
      "cân nặng", "weight",
      "kích thước", "dimension", "rộng", "dài", "cao", "width", "length", "height", "gói", "package",
      "hành động", "action",
      "chỉ số",
      "áp dụng"
    ];

    headers.forEach((h, index) => {
      if (h.includes("giá") || h.includes("price")) {
        priceColIndex = index;
      } else if (h.includes("kho") || h.includes("stock") || h.includes("số lượng") || h.includes("quantity")) {
        stockColIndex = index;
      } else if (h.includes("sku")) {
        skuColIndex = index;
      } else if (h !== "") {
        const isBlacklisted = blacklist.some(term => h.includes(term));
        if (!isBlacklisted) {
          nameColIndices.push(index);
        }
      }
    });

    console.log("[ShopeeCopier] Column mapping index results:", { priceColIndex, stockColIndex, skuColIndex, nameColIndices });

    const container = document.querySelector(".product-sales-info, .product-tier-variation, .variation-container, [data-product-edit-field-unique-id='variation']") || document;
    const rows = findBodyRows(headerRow, container);

    console.log("[ShopeeCopier] Candidate rows found on page (HTML snippet):", rows.map(r => r.outerHTML.substring(0, 300)));
    console.log("[ShopeeCopier] Found candidate rows count in table:", rows.length);

    if (rows.length === 0) {
      console.log("[ShopeeCopier] No body rows found. Aborting variation fill.");
      return false;
    }

    // Keep track of rowspan values for each column to handle merged cells
    const rowspanTracker = {};
    let filledCount = 0;

    for (let rIndex = 0; rIndex < rows.length; rIndex++) {
      const row = rows[rIndex];
      let cells = Array.from(row.querySelectorAll("td, th, [role='gridcell'], .eds-table__cell, .shopee-table__cell, [class*='cell'], [class*='col']"));
      if (cells.length === 0) {
        cells = Array.from(row.children);
      }
      if (cells.length === 0) continue;

      // Extract variation names for this row, accounting for rowspans
      const rowValues = [];
      const isColumnSpanned = [];
      let cellPointer = 0;

      for (let cIndex = 0; cIndex < headers.length; cIndex++) {
        // If there's an active rowspan for this column, use its tracked value
        if (rowspanTracker[cIndex] && rowspanTracker[cIndex].remaining > 0) {
          rowValues[cIndex] = rowspanTracker[cIndex].value;
          rowspanTracker[cIndex].remaining--;
          isColumnSpanned[cIndex] = true;
          continue;
        }

        isColumnSpanned[cIndex] = false;

        // Otherwise, read from the next available cell in the DOM
        const cell = cells[cellPointer];
        if (!cell) {
          rowValues[cIndex] = "";
          continue;
        }

        cellPointer++;

        const textVal = cell.textContent.trim();
        rowValues[cIndex] = textVal;

        // Check if this cell has a rowspan attribute
        const rowspanAttr = cell.getAttribute("rowspan");
        if (rowspanAttr) {
          const rowspanVal = parseInt(rowspanAttr, 10);
          if (rowspanVal > 1) {
            rowspanTracker[cIndex] = {
              value: textVal,
              remaining: rowspanVal - 1
            };
          }
        }
      }

      // Extract the variation names from the nameColIndices
      const rowVariationNames = nameColIndices
        .map(idx => rowValues[idx])
        .filter(val => val !== undefined && val !== null && val !== "");

      console.log(`[ShopeeCopier] Row ${rIndex} raw values:`, rowValues);
      console.log(`[ShopeeCopier] Row ${rIndex} extracted variation names:`, rowVariationNames);

      if (rowVariationNames.length === 0) {
        console.log(`[ShopeeCopier] Row ${rIndex} skipped because extracted variation names is empty.`);
        continue;
      }

      // Find the matching variation from currentProduct.variations
      const matchedVariation = findMatchedVariation(currentProduct.variations, rowVariationNames);

      if (matchedVariation) {
        console.log(`[ShopeeCopier] Row ${rIndex} MATCHED database variation record:`, JSON.stringify(matchedVariation, null, 2));

        // 1. Dynamic cell detection within the row (most robust)
        let priceCell = null;
        let stockCell = null;
        let skuCell = null;

        cells.forEach((cell, cellIdx) => {
          const inputs = Array.from(cell.querySelectorAll("input"));
          if (inputs.length === 0) return;
          if (inputs.length > 1) return; // Dimensions inputs

          const input = inputs[0];
          const placeholder = (input.getAttribute("placeholder") || "").toLowerCase();
          const type = (input.getAttribute("type") || "text").toLowerCase();
          if (type !== "text" && type !== "number") return;

          // Gather classes from cell, input, and child divs to detect column purpose
          const cellClass = (cell.className || "").toLowerCase();
          const inputClass = (input.className || "").toLowerCase();
          const innerDivClasses = Array.from(cell.querySelectorAll("div")).map(d => (d.className || "").toLowerCase()).join(" ");
          const allClassText = `${cellClass} ${inputClass} ${innerDivClasses}`;

          console.log(`[ShopeeCopier] Row ${rIndex} cell ${cellIdx} scan details:`, {
            cellHTML: cell.outerHTML.substring(0, 200),
            cellText: cell.textContent.trim().toLowerCase(),
            allClassText: allClassText,
            placeholder: placeholder
          });

          // Weight keywords check
          if (
            cell.textContent.toLowerCase().includes("gr") ||
            cell.textContent.toLowerCase().includes("kg") ||
            placeholder.includes("cân nặng") ||
            placeholder.includes("weight") ||
            allClassText.includes("weight") ||
            allClassText.includes("cân")
          ) {
            return;
          }

          // Dimensions keywords check
          if (
            cell.textContent.toLowerCase().includes("cm") ||
            placeholder.includes("rộng") ||
            placeholder.includes("dài") ||
            placeholder.includes("cao") ||
            allClassText.includes("dimension") ||
            allClassText.includes("package")
          ) {
            return;
          }

          // SKU detection
          if (
            placeholder.includes("sku") ||
            allClassText.includes("sku")
          ) {
            skuCell = cell;
            return;
          }

          // Price detection
          if (
            cell.textContent.toLowerCase().includes("đ") ||
            placeholder.includes("giá") ||
            placeholder.includes("price") ||
            allClassText.includes("price") ||
            allClassText.includes("giá") ||
            allClassText.includes("basic-price")
          ) {
            priceCell = cell;
            return;
          }

          // Stock detection
          if (
            placeholder.includes("kho") ||
            placeholder.includes("stock") ||
            placeholder.includes("số lượng") ||
            placeholder.includes("quantity") ||
            allClassText.includes("stock") ||
            allClassText.includes("kho") ||
            allClassText.includes("quantity") ||
            allClassText.includes("basic-stock")
          ) {
            stockCell = cell;
            return;
          }

          // Fallback guess inside loop based on position
          if (priceCell && !stockCell) {
            stockCell = cell;
          } else if (!priceCell && !stockCell) {
            priceCell = cell;
          }
        });

        // 2. Fallback to index-based detection if dynamic detection missed any cell
        if (!priceCell || !stockCell) {
          console.log(`[ShopeeCopier] Row ${rIndex} dynamic scan incomplete. Falling back to index-based mapping.`);
          let cellPointer2 = 0;
          for (let cIndex = 0; cIndex < headers.length; cIndex++) {
            if (isColumnSpanned[cIndex]) continue;

            const cell = cells[cellPointer2];
            if (cell) {
              if (cIndex === priceColIndex && !priceCell) {
                priceCell = cell;
              } else if (cIndex === stockColIndex && !stockCell) {
                stockCell = cell;
              } else if (cIndex === skuColIndex && !skuCell) {
                skuCell = cell;
              }
            }
            cellPointer2++;
          }
        }

        console.log(`[ShopeeCopier] Row "${rowVariationNames.join(' > ')}" final mapping results:`, {
          hasPriceCell: !!priceCell,
          hasStockCell: !!stockCell,
          hasSkuCell: !!skuCell,
          priceCellHTML: priceCell ? priceCell.outerHTML : "NULL",
          stockCellHTML: stockCell ? stockCell.outerHTML : "NULL"
        });

        // Fill price
        const priceVal = matchedVariation.price || currentProduct.price;
        if (priceCell && priceVal) {
          const priceInput = priceCell.querySelector("input");
          console.log(`[ShopeeCopier] Row "${rowVariationNames.join(' > ')}" price input element:`, priceInput ? priceInput.outerHTML : "NULL");
          if (priceInput) {
            console.log(`[ShopeeCopier] FILLING Row "${rowVariationNames.join(' > ')}" Price: ${priceVal}`);
            setReactInputValue(priceInput, String(Math.round(priceVal)));
            filledCount++;
          }
        } else {
          console.log(`[ShopeeCopier] SKIPPED Price fill for row "${rowVariationNames.join(' > ')}". priceCell: ${!!priceCell}, priceVal: ${priceVal}`);
        }

        // Fill stock
        if (stockCell && matchedVariation.stock !== undefined) {
          const stockInput = stockCell.querySelector("input");
          console.log(`[ShopeeCopier] Row "${rowVariationNames.join(' > ')}" stock input element:`, stockInput ? stockInput.outerHTML : "NULL");
          if (stockInput) {
            console.log(`[ShopeeCopier] FILLING Row "${rowVariationNames.join(' > ')}" Stock: ${matchedVariation.stock}`);
            setReactInputValue(stockInput, String(matchedVariation.stock));
          }
        } else {
          console.log(`[ShopeeCopier] SKIPPED Stock fill for row "${rowVariationNames.join(' > ')}". stockCell: ${!!stockCell}`);
        }

        // Fill SKU (optional, if available)
        if (skuCell && matchedVariation.sku) {
          const skuInput = skuCell.querySelector("input");
          if (skuInput) {
            setReactInputValue(skuInput, String(matchedVariation.sku));
          }
        }
      } else {
        console.log(`[ShopeeCopier] Row ${rIndex} ("${rowVariationNames.join(' > ')}") could not match any variation database record. Available records names:`, currentProduct.variations.map(v => v.name));
      }
    }

    console.log("[ShopeeCopier] fillVariationsTable completed. Total filledCount:", filledCount);
    console.log("[ShopeeCopier] =========================================");
    return filledCount > 0;
  }

  // Find inputs by scanning labels
  function findInputByLabel(labelText) {
    const elements = Array.from(document.querySelectorAll("label, div, span, p"));
    for (const el of elements) {
      const text = el.textContent.trim().toLowerCase();
      if (text === labelText.toLowerCase() || (text.includes(labelText.toLowerCase()) && text.length < 30)) {
        // Search for input/textarea in siblings or parent
        const parent = el.closest(".form-item, .shopee-form-item, .item-container, div");
        if (parent) {
          const input = parent.querySelector("input, textarea, [contenteditable='true']");
          if (input) return input;
        }
        // Try looking at next sibling
        let next = el.nextElementSibling;
        while (next) {
          const input = next.querySelector("input, textarea, [contenteditable='true']") ||
            (["input", "textarea"].includes(next.tagName.toLowerCase()) ? next : null);
          if (input) return input;
          next = next.nextElementSibling;
        }
      }
    }
    return null;
  }

  // Find input by placeholders
  function findInputByPlaceholder(phText) {
    const inputs = Array.from(document.querySelectorAll("input, textarea, [contenteditable='true']"));
    return inputs.find(input => {
      const ph = input.getAttribute("placeholder") || "";
      return ph.toLowerCase().includes(phText.toLowerCase());
    });
  }

  // Inject helper styling
  const style = document.createElement("style");
  style.textContent = `
    #shopee-seller-paste-btn {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      background: linear-gradient(135deg, #ff5722 0%, #ff2a00 100%);
      color: #ffffff;
      border: none;
      border-radius: 50px;
      padding: 14px 24px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 15px;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(255, 87, 34, 0.4);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      backdrop-filter: blur(4px);
    }
    
    #shopee-seller-paste-btn:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 14px 28px rgba(255, 87, 34, 0.5);
    }
    
    #shopee-seller-paste-btn:active {
      transform: translateY(-1px);
    }
    
    #shopee-seller-paste-btn:disabled {
      background: #3f3f46;
      box-shadow: none;
      cursor: not-allowed;
      transform: none;
      opacity: 0.6;
    }
    
    #shopee-seller-paste-btn svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .shopee-seller-status-card {
      position: fixed;
      bottom: 85px;
      right: 24px;
      width: 320px;
      z-index: 999999;
      background: rgba(28, 28, 30, 0.95);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      color: #ffffff;
      padding: 16px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 13px;
      display: none;
      animation: shopee-seller-slide-up 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    @keyframes shopee-seller-slide-up {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .status-card-header {
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 12px;
      color: #ff5722;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 8px;
    }

    .status-card-close {
      cursor: pointer;
      background: transparent;
      border: none;
      color: #a1a1aa;
      font-size: 18px;
      line-height: 1;
      font-weight: bold;
    }

    .status-card-close:hover {
      color: #ffffff;
    }

    .status-item {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 8px;
    }

    .status-item:last-child {
      margin-bottom: 0;
    }

    .status-bullet {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #71717a;
      flex-shrink: 0;
    }

    .status-bullet.active {
      background: #3b82f6;
      box-shadow: 0 0 8px #3b82f6;
    }

    .status-bullet.success {
      background: #10b981;
      box-shadow: 0 0 8px #10b981;
    }

    .status-bullet.error {
      background: #ef4444;
      box-shadow: 0 0 8px #ef4444;
    }
  `;
  document.head.appendChild(style);

  // Create UI Structure
  const pasteBtn = document.createElement("button");
  pasteBtn.id = "shopee-seller-paste-btn";
  pasteBtn.disabled = true;
  pasteBtn.innerHTML = `
    <svg viewBox="0 0 24 24"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/></svg>
    <span>Tự động điền & Tải ảnh</span>
  `;
  document.body.appendChild(pasteBtn);

  const statusCard = document.createElement("div");
  statusCard.id = "shopee-seller-status-card";
  statusCard.className = "shopee-seller-status-card";
  statusCard.innerHTML = `
    <div class="status-card-header">
      <span>Shopee Auto-Filler</span>
      <button class="status-card-close" id="status-card-close">&times;</button>
    </div>
    <div id="status-card-body"></div>
  `;
  document.body.appendChild(statusCard);

  const statusCardClose = document.getElementById("status-card-close");
  statusCardClose.addEventListener("click", () => {
    statusCard.style.display = "none";
  });

  let currentProduct = null;

  // Load state from local storage on load
  async function loadStorageData() {
    const data = await chrome.storage.local.get(["copiedProduct"]);
    if (data && data.copiedProduct) {
      currentProduct = data.copiedProduct;
      pasteBtn.removeAttribute("disabled");
    }
  }
  loadStorageData();

  // Listen for changes in storage
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.copiedProduct) {
      currentProduct = changes.copiedProduct.newValue;
      if (currentProduct) {
        pasteBtn.removeAttribute("disabled");
      } else {
        pasteBtn.setAttribute("disabled", "true");
      }
    }
  });

  // Base64 helper converter
  async function base64ToFile(base64Data, filename, mimeType) {
    const res = await fetch(base64Data);
    const blob = await res.blob();
    return new File([blob], filename, { type: mimeType });
  }

  // Helper to switch tabs by text content
  async function switchToTab(labels) {
    try {
      const tabs = Array.from(document.querySelectorAll(".eds-tabs__nav-tab, .shopee-tabs__nav-tab, .tab-label, .tab-title, [class*='nav-tab'], [class*='tab-item']"));
      const targetTab = tabs.find(t => {
        const text = t.textContent.trim().toLowerCase();
        return labels.some(label => text.includes(label.toLowerCase()));
      });
      if (targetTab) {
        targetTab.click();
        await new Promise(resolve => setTimeout(resolve, 800)); // Allow time for tab transition & rendering
        return true;
      }
      return false;
    } catch (e) {
      console.error("Tab switching failed:", e);
      return false;
    }
  }

  // Helper to click Next Step button at the bottom of the page
  async function clickNextStep() {
    try {
      const elements = Array.from(document.querySelectorAll("button, .eds-button, .shopee-button"));
      const nextBtn = elements.find(el => {
        const text = el.textContent.trim().toLowerCase();
        return text.includes("next step") || text.includes("tiếp theo") || text.includes("tiếp tục") || text.includes("tiếp");
      });
      if (nextBtn) {
        nextBtn.click();
        await new Promise(resolve => setTimeout(resolve, 1200)); // Wait 1.2s for transition animations
        return true;
      }
      return false;
    } catch (e) {
      console.error("Failed to click Next Step:", e);
      return false;
    }
  }

  // Helper to navigate to a tab by either switching tabs directly or clicking Next Step until found
  async function navigateToTab(tabLabels, inputFinderFunc) {
    // 1. Try switching tab directly first (if tabs are already unlocked/rendered)
    await switchToTab(tabLabels);
    let input = inputFinderFunc();
    if (input) return input;

    // 2. Click "Next Step" to advance through wizard steps and check again
    for (let attempt = 0; attempt < 3; attempt++) {
      const clicked = await clickNextStep();
      if (!clicked) break;

      await switchToTab(tabLabels);
      input = inputFinderFunc();
      if (input) return input;
    }
    return null;
  }

  // Main Autofill Routine
  pasteBtn.addEventListener("click", async () => {
    if (!currentProduct) return;

    pasteBtn.setAttribute("disabled", "true");
    statusCard.style.display = "block";
    const statusBody = document.getElementById("status-card-body");
    statusBody.innerHTML = "";

    function updateStatus(stepId, text, state) {
      // state: 'pending', 'active', 'success', 'error'
      let el = document.getElementById(`step-${stepId}`);
      if (!el) {
        el = document.createElement("div");
        el.id = `step-${stepId}`;
        el.className = "status-item";
        statusBody.appendChild(el);
      }

      let bulletClass = "status-bullet";
      if (state === "active") bulletClass += " active";
      if (state === "success") bulletClass += " success";
      if (state === "error") bulletClass += " error";

      el.innerHTML = `
        <div class="${bulletClass}"></div>
        <div>${text}</div>
      `;
    }

    try {
      // Step 0: Pre-download images to save time before transitioning tabs
      updateStatus("images", `Đang tải ${currentProduct.images.length} ảnh từ Shopee...`, "active");
      const downloadResponse = await chrome.runtime.sendMessage({
        action: "downloadImages",
        urls: currentProduct.images
      });

      // Switch to Basic Info tab first to fill Name and Images
      await switchToTab(["thông tin cơ bản", "basic info", "basic information"]);

      // Step 1: Fill Name
      updateStatus("name", "Điền tên sản phẩm...", "active");
      const nameInput = findInputByLabel("Tên sản phẩm") || findInputByPlaceholder("nhập tên sản phẩm") || findInputByPlaceholder("nhập tên");
      if (nameInput) {
        setReactInputValue(nameInput, currentProduct.title);
        updateStatus("name", "Đã điền tên sản phẩm", "success");
      } else {
        updateStatus("name", "Không tìm thấy ô tên sản phẩm", "error");
      }

      // Step 1.2: Select Brand "No brand"
      updateStatus("brand", "Chọn thương hiệu 'No brand'...", "active");
      const brandSelected = await selectNoBrand();
      if (brandSelected) {
        updateStatus("brand", "Đã chọn thương hiệu 'No brand'", "success");
      } else {
        updateStatus("brand", "Bỏ qua thương hiệu (có thể cần chọn Ngành hàng trước)", "success");
      }

      // Step 2: Upload Images
      if (downloadResponse && downloadResponse.success && downloadResponse.images.length > 0) {
        updateStatus("images", `Đang chuẩn bị upload ${downloadResponse.images.length} ảnh...`, "active");

        const imageFileInput = findMainImageFileInput();

        if (imageFileInput) {
          const files = [];
          for (let i = 0; i < downloadResponse.images.length; i++) {
            const imgObj = downloadResponse.images[i];
            if (!imgObj || !imgObj.base64) {
              console.log(`[ShopeeCopier] Skipping main image upload for index ${i} because it is empty/failed.`);
              continue;
            }

            try {
              const processedBase64 = await convertToJpeg(imgObj.base64);
              const file = await base64ToFile(processedBase64, `product_img_${i}.jpg`, "image/jpeg");
              files.push(file);
            } catch (err) {
              console.error(`[ShopeeCopier] Error converting or generating main image ${i}:`, err);
            }
          }

          // Inject files using DataTransfer API
          const dt = new DataTransfer();
          files.forEach(f => dt.items.add(f));

          imageFileInput.files = dt.files;
          imageFileInput.dispatchEvent(new Event("change", { bubbles: true }));

          updateStatus("images", `Đã upload ${files.length} ảnh lên Shopee!`, "success");
        } else {
          updateStatus("images", "Không tìm thấy nút tải ảnh lên", "error");
        }
      } else {
        updateStatus("images", "Không tải được ảnh từ Shopee API", "error");
      }

      // Step 3: Fill Description (Switch tabs or click Next Step until description field is loaded)
      updateStatus("desc", "Điền mô tả sản phẩm...", "active");

      const descInput = await navigateToTab(
        ["mô tả", "description"],
        () => findInputByLabel("Mô tả sản phẩm") || findInputByPlaceholder("nhập mô tả sản phẩm") || findInputByPlaceholder("nhập mô tả") || document.querySelector("[contenteditable='true']")
      );

      if (descInput) {
        const formattedDesc = cleanDescriptionSpacing(currentProduct.description);
        if (descInput.tagName.toLowerCase() === "textarea" || descInput.tagName.toLowerCase() === "input") {
          setReactInputValue(descInput, formattedDesc);
        } else {
          setReactContentEditable(descInput, formattedDesc);
        }
        updateStatus("desc", "Đã điền mô tả sản phẩm", "success");
      } else {
        updateStatus("desc", "Không tìm thấy ô mô tả sản phẩm", "error");
      }

      // Step 4: Fill Price & Stock (Switch tabs or click Next Step until pricing fields are loaded)
      updateStatus("pricing", "Điền giá & kho hàng...", "active");

      // Ensure we are on the Sales Info tab
      await navigateToTab(
        ["thông tin bán hàng", "sales info", "sales information"],
        () => document.querySelector("table, .shopee-table, [class*='table'], [class*='grid']") || findInputByLabel("Giá") || findInputByPlaceholder("nhập giá") || findInputByPlaceholder("tên phân loại")
      );

      // Setup variations first if they exist in copied data and there are multiple options (> 1)
      const hasMultipleVariations = currentProduct.tier_variations &&
        currentProduct.tier_variations.length > 0 &&
        currentProduct.variations &&
        currentProduct.variations.length > 1;

      if (hasMultipleVariations) {
        updateStatus("pricing", "Đang thiết lập các nhóm phân loại hàng...", "active");
        try {
          await setupVariations(currentProduct);
        } catch (e) {
          console.error("Error setting up variations:", e);
        }
      } else {
        // Copied product has <= 1 variation. If the page has variations enabled, delete Group 1 to disable variations.
        const card1 = document.querySelector("[data-product-edit-field-unique-id='tierVariation_0']") ||
          document.querySelector(".variation-edit-item");
        if (card1) {
          console.log("[ShopeeCopier] Copied product has <= 1 variation, but page has variations enabled. Disabling variations by deleting Group 1...");
          updateStatus("pricing", "Đang tắt chế độ phân loại hàng...", "active");
          await deleteVariationGroup(card1);
          await new Promise(resolve => setTimeout(resolve, 800));
        }
      }

      let filledVariations = false;
      if (hasMultipleVariations) {
        await closePopovers();
        updateStatus("pricing", "Đang chờ bảng phân loại hiển thị...", "active");
        console.log("[ShopeeCopier] Waiting dynamically for variations table to render...");
        const tableRendered = await waitForVariationsTable(6000);
        if (tableRendered) {
          console.log("[ShopeeCopier] Variations table detected, filling...");
          filledVariations = fillVariationsTable(currentProduct);
        } else {
          console.log("[ShopeeCopier] Variations table render timeout, trying immediate fill fallback...");
          filledVariations = fillVariationsTable(currentProduct);
        }
      }

      if (filledVariations) {
        updateStatus("pricing", "Đã điền giá & kho cho các phân loại", "success");
      } else {
        const priceInput = document.querySelector("[data-product-edit-field-unique-id='price'] input, [class*='price-input'] input") ||
          findInputByLabel("Giá") ||
          findInputByPlaceholder("nhập giá");

        const stockInput = document.querySelector("[data-product-edit-field-unique-id='stock'] input, [class*='stock'] input") ||
          findInputByLabel("Kho hàng") ||
          findInputByPlaceholder("nhập kho") ||
          findInputByPlaceholder("nhập số lượng");

        let filledPrice = false;
        let filledStock = false;

        const finalPrice = currentProduct.price || (currentProduct.variations && currentProduct.variations[0] ? currentProduct.variations[0].price : 0);
        if (priceInput && finalPrice) {
          setReactInputValue(priceInput, String(Math.round(finalPrice)));
          filledPrice = true;
        }

        if (stockInput) {
          // Find default stock or get stock of the first variation, default 100
          const defaultStock = (currentProduct.variations && currentProduct.variations[0]) ? currentProduct.variations[0].stock : (currentProduct.stock || 100);
          setReactInputValue(stockInput, String(defaultStock !== undefined ? defaultStock : 100));
          filledStock = true;
        }

        if (filledPrice || filledStock) {
          updateStatus("pricing", `Đã điền: ${filledPrice ? "Giá" : ""} ${filledStock ? "Kho hàng" : ""}`, "success");
        } else {
          updateStatus("pricing", "Bỏ qua Giá & Kho (có thể cần thiết lập phân loại trước)", "success");
        }
      }

      // Step 4.5: Fill Shipping Weight & Shipping Channels (Switch tabs or click Next Step until shipping fields are loaded)
      updateStatus("shipping", "Điền thông tin vận chuyển...", "active");

      const weightInput = await navigateToTab(
        ["vận chuyển", "shipping", "transportation"],
        () => findInputByLabel("Cân nặng (Sau khi đóng gói)") || findInputByLabel("Cân nặng") || findInputByPlaceholder("nhập cân nặng") || findInputByPlaceholder("cân nặng")
      );

      if (weightInput) {
        setReactInputValue(weightInput, "100");

        // Find dimension inputs
        const widthInput = findInputByLabel("Chiều rộng (Sau khi đóng gói)") || findInputByLabel("Chiều rộng") || findInputByPlaceholder("rộng");
        const lengthInput = findInputByLabel("Chiều dài (Sau khi đóng gói)") || findInputByLabel("Chiều dài") || findInputByPlaceholder("dài");
        const heightInput = findInputByLabel("Chiều cao (Sau khi đóng gói)") || findInputByLabel("Chiều cao") || findInputByPlaceholder("cao");

        if (widthInput) setReactInputValue(widthInput, "10");
        if (lengthInput) setReactInputValue(lengthInput, "10");
        if (heightInput) setReactInputValue(heightInput, "10");

        updateStatus("shipping", "Đã điền cân nặng: 100g (kích thước 10x10x10cm). Đang kích hoạt các kênh vận chuyển...", "active");

        // Wait a brief moment, then toggle all shipping channels on
        await new Promise(resolve => setTimeout(resolve, 500));
        await enableAllShippingChannels();

        updateStatus("shipping", "Đã điền cân nặng 100g & bật tất cả kênh vận chuyển", "success");
      } else {
        updateStatus("shipping", "Không tìm thấy thông tin vận chuyển", "error");
      }

      // Step 5: Switch back to Basic Info tab if tabs are unlocked
      await switchToTab(["thông tin cơ bản", "basic info", "basic information"]);

    } catch (err) {
      console.error("Autofill error:", err);
      updateStatus("error", `Lỗi: ${err.message}`, "error");
    } finally {
      pasteBtn.removeAttribute("disabled");
      // Auto-hide status card after 4 seconds if there are no errors
      const hasError = statusCard.querySelector(".status-bullet.error");
      if (!hasError) {
        setTimeout(() => {
          statusCard.style.display = "none";
        }, 4000);
      }
    }
  });

})();
