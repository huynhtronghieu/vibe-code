// Main World Content Script for Shopee Copier (Executes in page context to inherit security headers/signatures)

(function() {
  const host = window.location.hostname;
  if (host.includes("banhang.shopee.vn") || host.includes("seller.shopee.vn")) {
    return;
  }

  console.log("[ShopeeCopierMain] Main world script loaded successfully!");

  window.addEventListener("shopee-copier-fetch-request", async (e) => {
    const { shopId, itemId, domain } = e.detail || {};
    console.log("[ShopeeCopierMain] Received fetch request event for:", { shopId, itemId, domain });
    
    if (!shopId || !itemId || !domain) {
      window.dispatchEvent(new CustomEvent("shopee-copier-fetch-response", {
        detail: { success: false, error: "Thiếu thông tin shopId/itemId/domain trong sự kiện." }
      }));
      return;
    }
    
    const apiUrl = `https://${domain}/api/v4/item/get?itemid=${itemId}&shopid=${shopId}`;
    console.log("[ShopeeCopierMain] Fetching Shopee API from Main World context:", apiUrl);
    
    try {
      // Fetch using page's own fetch (which is signed by Shopee's anti-bot system)
      const response = await fetch(apiUrl, {
        headers: {
          "accept": "application/json",
          "x-requested-with": "XMLHttpRequest"
        }
      });
      
      console.log("[ShopeeCopierMain] API Response status:", response.status, response.statusText);
      
      let text = "";
      try {
        text = await response.text();
      } catch (readErr) {
        console.error("[ShopeeCopierMain] Failed to read response body:", readErr);
        text = `(Failed to read body: ${readErr.message})`;
      }
      
      console.log("[ShopeeCopierMain] Raw Response length:", text.length);
      console.log("[ShopeeCopierMain] Raw Response snippet (first 1000 chars):", text.substring(0, 1000));
      
      window.dispatchEvent(new CustomEvent("shopee-copier-fetch-response", {
        detail: {
          success: response.ok,
          status: response.status,
          statusText: response.statusText,
          text: text
        }
      }));
    } catch (err) {
      console.error("[ShopeeCopierMain] Fetch error in main world:", err);
      window.dispatchEvent(new CustomEvent("shopee-copier-fetch-response", {
        detail: {
          success: false,
          error: err.message || "Network error in main world context"
        }
      }));
    }
  });
})();
