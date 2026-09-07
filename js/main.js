// Lógica geral do site: preenche dados de contato, monta cards de produto,
// filtro da galeria, lightbox e menu mobile.

document.addEventListener("DOMContentLoaded", () => {
  fillConfigPlaceholders();
  setupMobileNav();
  setupLightbox();

  if (document.getElementById("category-grid")) {
    renderCategoryGrid();
  }
  if (document.getElementById("featured-grid")) {
    renderProductGrid("featured-grid", PRODUCTS.slice(0, 8));
  }
  if (document.getElementById("gallery-grid")) {
    setupGalleryPage();
  }
});

function fillConfigPlaceholders() {
  document.querySelectorAll('[data-config="store-name"]').forEach((el) => (el.textContent = SITE_CONFIG.storeName));
  document.querySelectorAll('[data-config="short-name"]').forEach((el) => (el.textContent = SITE_CONFIG.shortName));
  document.querySelectorAll('[data-config="tagline"]').forEach((el) => (el.textContent = SITE_CONFIG.tagline));
  document.querySelectorAll('[data-config="phone-display"]').forEach((el) => (el.textContent = SITE_CONFIG.phoneDisplay));
  document.querySelectorAll('[data-config="phone-href"]').forEach((el) => (el.href = `tel:+${SITE_CONFIG.phoneWhatsApp}`));
  document.querySelectorAll('[data-config="whatsapp-href"]').forEach((el) => (el.href = whatsappLink()));
  document.querySelectorAll('[data-config="email"]').forEach((el) => (el.textContent = SITE_CONFIG.email));
  document.querySelectorAll('[data-config="email-href"]').forEach((el) => (el.href = `mailto:${SITE_CONFIG.email}`));
  document.querySelectorAll('[data-config="instagram-handle"]').forEach((el) => (el.textContent = SITE_CONFIG.instagramHandle));
  document.querySelectorAll('[data-config="instagram-href"]').forEach((el) => (el.href = SITE_CONFIG.instagramUrl));
  document.querySelectorAll('[data-config="hours"]').forEach((el) => (el.textContent = SITE_CONFIG.hours));
  document.querySelectorAll('[data-config="address"]').forEach((el) => (el.textContent = SITE_CONFIG.address));
  document.querySelectorAll('[data-config="year"]').forEach((el) => (el.textContent = new Date().getFullYear()));
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

function categoryName(slug) {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  return cat ? cat.name : slug;
}

function categoryEmoji(slug) {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  return cat ? cat.emoji : "🎀";
}

function renderCategoryGrid() {
  const grid = document.getElementById("category-grid");
  grid.innerHTML = CATEGORIES.map((cat) => {
    const count = PRODUCTS.filter((p) => p.category === cat.slug).length;
    return `
      <a class="category-card cat-${cat.slug}" href="galeria.html?cat=${cat.slug}">
        <span class="category-emoji">${cat.emoji}</span>
        <span class="category-name">${cat.name}</span>
        <span class="category-count">${count} itens</span>
      </a>`;
  }).join("");
}

function productPhotoHTML(product) {
  if (product.image) {
    return `<img src="${product.image}" alt="${product.name}" loading="lazy" />`;
  }
  return `
    <div class="product-photo cat-${product.category}">
      <span class="product-emoji">${categoryEmoji(product.category)}</span>
      <span class="product-photo-label">Sob encomenda</span>
    </div>`;
}

function productCardHTML(product, index) {
  return `
    <figure class="product-card" data-category="${product.category}" data-index="${index}" tabindex="0">
      ${productPhotoHTML(product)}
      <figcaption>
        <span class="product-category">${categoryName(product.category)}</span>
        <h3 class="product-name">${product.name}</h3>
        <span class="product-price">${product.price}</span>
      </figcaption>
    </figure>`;
}

function renderProductGrid(containerId, products) {
  const grid = document.getElementById(containerId);
  grid.innerHTML = products.map((p, i) => productCardHTML(p, i)).join("");
}

function setupGalleryPage() {
  renderProductGrid("gallery-grid", PRODUCTS);

  const filterBar = document.getElementById("filter-bar");
  filterBar.innerHTML =
    `<button class="filter-btn is-active" data-filter="todos">Todos</button>` +
    CATEGORIES.map((c) => `<button class="filter-btn" data-filter="${c.slug}">${c.emoji} ${c.name}</button>`).join("");

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    applyFilter(btn.dataset.filter);
  });

  const params = new URLSearchParams(window.location.search);
  const initialFilter = params.get("cat");
  if (initialFilter && CATEGORIES.some((c) => c.slug === initialFilter)) {
    const btn = filterBar.querySelector(`[data-filter="${initialFilter}"]`);
    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    if (btn) btn.classList.add("is-active");
    applyFilter(initialFilter);
  }
}

function applyFilter(filter) {
  document.querySelectorAll("#gallery-grid .product-card").forEach((card) => {
    const show = filter === "todos" || card.dataset.category === filter;
    card.style.display = show ? "" : "none";
  });
}

function setupLightbox() {
  const overlay = document.getElementById("lightbox");
  if (!overlay) return;
  const photoEl = overlay.querySelector(".lightbox-photo");
  const nameEl = overlay.querySelector(".lightbox-name");
  const catEl = overlay.querySelector(".lightbox-category");
  const priceEl = overlay.querySelector(".lightbox-price");
  const askLink = overlay.querySelector(".lightbox-ask");
  const closeBtn = overlay.querySelector(".lightbox-close");

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;
    const product = PRODUCTS[Number(card.dataset.index)];
    if (!product) return;

    photoEl.className = "lightbox-photo";
    photoEl.innerHTML = product.image
      ? `<img src="${product.image}" alt="${product.name}" />`
      : `<div class="lightbox-photo-placeholder cat-${product.category}"><span class="product-emoji">${categoryEmoji(product.category)}</span><span class="product-photo-label">Sob encomenda</span></div>`;
    nameEl.textContent = product.name;
    catEl.textContent = categoryName(product.category);
    priceEl.textContent = product.price;
    askLink.href = whatsappLink(`Olá! Tenho interesse no produto "${product.name}". Poderia me passar mais detalhes?`);

    overlay.classList.add("is-open");
    document.body.classList.add("no-scroll");
  });

  const close = () => {
    overlay.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  };

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
