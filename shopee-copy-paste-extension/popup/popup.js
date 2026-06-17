// Simplified Popup Script for Shopee Copier

document.addEventListener("DOMContentLoaded", async () => {
  // DOM Elements
  const badge = document.getElementById("status-badge");
  const emptyPreview = document.getElementById("empty-preview");
  const previewContent = document.getElementById("preview-content");
  const previewImage = document.getElementById("preview-image");
  const previewTitle = document.getElementById("preview-title");
  const previewImagesCount = document.getElementById("preview-images-count");
  const previewPrice = document.getElementById("preview-price");
  const previewDesc = document.getElementById("preview-desc");

  // Load initial product from storage
  await loadCopiedProduct();

  // Monitor storage changes to sync UI immediately
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.copiedProduct) {
      updatePreview(changes.copiedProduct.newValue);
    }
  });

  // Load product from storage
  async function loadCopiedProduct() {
    const data = await chrome.storage.local.get(["copiedProduct"]);
    if (data && data.copiedProduct) {
      updatePreview(data.copiedProduct);
    } else {
      updatePreview(null);
    }
  }

  // Update Preview UI with product details
  function updatePreview(product) {
    if (!product) {
      emptyPreview.style.display = "flex";
      previewContent.style.display = "none";
      badge.textContent = "Trống";
      badge.className = "badge error";
      return;
    }

    emptyPreview.style.display = "none";
    previewContent.style.display = "flex";

    previewTitle.textContent = product.title;
    previewTitle.title = product.title;
    previewImagesCount.textContent = `${product.images ? product.images.length : 0} ảnh`;
    
    if (product.price) {
      previewPrice.textContent = `${product.price.toLocaleString("vi-VN")} đ`;
      previewPrice.style.display = "inline-block";
    } else {
      previewPrice.style.display = "none";
    }

    previewDesc.textContent = product.description || "Không có mô tả sản phẩm.";

    if (product.images && product.images.length > 0) {
      previewImage.src = product.images[0];
    } else {
      previewImage.src = ""; // Clear image
    }
    
    badge.textContent = "Đã có dữ liệu";
    badge.className = "badge";
  }
});
