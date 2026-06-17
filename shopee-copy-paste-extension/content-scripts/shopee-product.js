// Content Script for Shopee Product Details page (API Copy Only with Debug logs)

(function() {
  const host = window.location.hostname;
  if (host.includes("banhang.shopee.vn") || host.includes("seller.shopee.vn")) {
    return;
  }

  if (document.getElementById("shopee-copier-btn")) return;

  console.log("[ShopeeCopier] Content script shopee-product.js loaded successfully!");

  // CSS injection for floating button and toast
  const style = document.createElement("style");
  style.textContent = `
    #shopee-copier-btn {
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
    
    #shopee-copier-btn:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 14px 28px rgba(255, 87, 34, 0.5);
    }
    
    #shopee-copier-btn:active {
      transform: translateY(-1px);
    }
    
    #shopee-copier-btn svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
    
    .shopee-copier-toast {
      position: fixed;
      top: 30px;
      right: 30px;
      z-index: 9999999;
      background: rgba(20, 20, 20, 0.85);
      backdrop-filter: blur(12px) saturate(180%);
      -webkit-backdrop-filter: blur(12px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #ffffff;
      padding: 16px 24px;
      border-radius: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .shopee-copier-toast.show {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    
    .shopee-copier-toast-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #4caf50;
      color: white;
    }
    
    .shopee-copier-toast-icon.error {
      background: #f44336;
    }
    
    .shopee-copier-toast-icon svg {
      width: 14px;
      height: 14px;
      fill: currentColor;
    }
    
    .shopee-copier-loading-spinner {
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top: 2px solid #ffffff;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      animation: shopee-copier-spin 0.8s linear infinite;
    }
    
    @keyframes shopee-copier-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // Create toast notification helper
  function showToast(message, isError = false) {
    const existing = document.querySelector(".shopee-copier-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "shopee-copier-toast";
    
    const icon = document.createElement("div");
    icon.className = `shopee-copier-toast-icon ${isError ? "error" : ""}`;
    
    if (isError) {
      icon.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
    } else {
      icon.innerHTML = `<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
    }
    
    const text = document.createElement("div");
    text.textContent = message;
    
    toast.appendChild(icon);
    toast.appendChild(text);
    document.body.appendChild(toast);
    
    toast.offsetHeight; // Reflow
    toast.classList.add("show");
    
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 4000); // 4 seconds so user has time to read errors
  }

  // Create floating button
  const copyBtn = document.createElement("button");
  copyBtn.id = "shopee-copier-btn";
  copyBtn.innerHTML = `
    <svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <span>Copy thông tin</span>
  `;
  document.body.appendChild(copyBtn);

  let isCopying = false;

  // Helper to parse Shopee URL for shopId, itemId, and domain
  function parseShopeeUrl(urlStr) {
    try {
      const url = new URL(urlStr);
      const host = url.hostname;
      
      const productMatch = url.pathname.match(/\/product\/(\d+)\/(\d+)/);
      if (productMatch) {
        return { shopId: productMatch[1], itemId: productMatch[2], domain: host };
      }
      
      const dotMatch = url.pathname.match(/-i\.(\d+)\.(\d+)/);
      if (dotMatch) {
        return { shopId: dotMatch[1], itemId: dotMatch[2], domain: host };
      }
      
      return null;
    } catch (e) {
      console.error("[ShopeeCopier] Regex parsing failed for URL:", urlStr, e);
      return null;
    }
  }

  // Fetch details via Main World event communication (to inherit anti-bot headers/signatures)
  function fetchProductDetailsViaMainWorld() {
    return new Promise((resolve, reject) => {
      console.log("[ShopeeCopier] Starting API fetch request via Main World event communication...");
      const parsed = parseShopeeUrl(window.location.href);
      console.log("[ShopeeCopier] Parsed URL properties:", parsed);
      
      if (!parsed) {
        return reject(new Error("Đường dẫn sản phẩm không hợp lệ (không phân tích được shopid/itemid)."));
      }
      
      // Set up a one-time response listener
      const responseHandler = (e) => {
        window.removeEventListener("shopee-copier-fetch-response", responseHandler);
        clearTimeout(timeoutId);
        
        const res = e.detail || {};
        console.log("[ShopeeCopier] Received fetch response event from Main World:", res);
        
        if (!res.success) {
          return reject(new Error(res.error || `Shopee API trả về mã lỗi HTTP ${res.status} (${res.statusText}). Body: ${res.text ? res.text.substring(0, 200) : ""}`));
        }
        
        try {
          const json = JSON.parse(res.text);
          console.log("[ShopeeCopier] Parsed JSON from Main World response:", json);
          
          if (!json || !json.data) {
            return reject(new Error((json && json.message) || "Không nhận được data payload từ API Shopee."));
          }
          
          if (json.error) {
            return reject(new Error(json.message || `Lỗi từ Shopee API (Mã lỗi: ${json.error})`));
          }
          
          const item = json.data;
          
          // Map properties
          const productData = {
            title: item.name,
            description: item.description,
            price: (item.price_before_discount > 0 ? item.price_before_discount : item.price) / 100000,
            discountPrice: item.price / 100000,
            images: (item.images || []).map(imgId => `https://down-tx-vn.img.susercontent.com/file/${imgId}`),
            attributes: (item.attributes || []).map(attr => ({
              name: attr.name,
              value: attr.value
            })),
            variations: (item.models || []).map(model => ({
              name: model.name,
              price: (model.price_before_discount > 0 ? model.price_before_discount : model.price) / 100000,
              discountPrice: model.price / 100000,
              stock: model.normal_stock,
              sku: model.sku
            })),
            tier_variations: item.tier_variations || [],
            originalUrl: window.location.href,
            source: "xhr-fetch-main-world"
          };
          
          console.log("[ShopeeCopier] Formatted product data structure:", productData);
          resolve(productData);
        } catch (err) {
          console.error("[ShopeeCopier] Error parsing/mapping response:", err);
          reject(new Error(`Không thể phân tích hoặc xử lý dữ liệu API: ${err.message}`));
        }
      };
      
      window.addEventListener("shopee-copier-fetch-response", responseHandler);
      
      // Timeout fallback (15 seconds to allow for network delays and security validations)
      const timeoutId = setTimeout(() => {
        window.removeEventListener("shopee-copier-fetch-response", responseHandler);
        reject(new Error("Yêu cầu lấy dữ liệu bị quá thời gian (15 giây) mà không nhận được phản hồi từ trang."));
      }, 15000);
      
      // Dispatch the request to the main world script
      window.dispatchEvent(new CustomEvent("shopee-copier-fetch-request", {
        detail: {
          shopId: parsed.shopId,
          itemId: parsed.itemId,
          domain: parsed.domain
        }
      }));
    });
  }

  // Handle Copy Event
  copyBtn.addEventListener("click", async () => {
    if (isCopying) return;
    isCopying = true;
    
    console.log("[ShopeeCopier] Copy button event triggered.");
    const originalContent = copyBtn.innerHTML;
    copyBtn.innerHTML = `<div class="shopee-copier-loading-spinner"></div> <span>Đang copy...</span>`;
    copyBtn.style.opacity = "0.9";
    
    try {
      // API fetch via Main World
      const productData = await fetchProductDetailsViaMainWorld();
      
      console.log("[ShopeeCopier] Writing product details to chrome.storage.local...");
      await chrome.storage.local.set({
        copiedProduct: productData,
        copiedTime: Date.now()
      });
      console.log("[ShopeeCopier] Storage write complete!");
      
      showToast(`Đã copy thành công: ${productData.title.substring(0, 30)}...`);
    } catch (err) {
      console.error("[ShopeeCopier] Copy handler encountered a failure:", err);
      showToast(`Lỗi copy API: ${err.message}`, true);
    } finally {
      copyBtn.innerHTML = originalContent;
      copyBtn.style.opacity = "1";
      isCopying = false;
      console.log("[ShopeeCopier] Copy operation sequence finished.");
    }
  });

})();
