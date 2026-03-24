const catalog = {
  bases: [
    {
      id: "gold-chain",
      name: "月弧包金链",
      description: "更像成品首饰，适合礼赠和节日穿搭。",
      price: 128,
      accent: "linear-gradient(135deg, #ffeab5 0%, #bf9447 100%)",
      tags: ["礼赠感", "微光泽"],
    },
    {
      id: "mist-cord",
      name: "晨雾丝绳",
      description: "轻软编织感，适合日常、叠戴和奶油色系。",
      price: 78,
      accent: "linear-gradient(135deg, #f7e4dc 0%, #c69181 100%)",
      tags: ["轻盈", "日常"],
    },
    {
      id: "crystal-line",
      name: "玻光弹力线",
      description: "通透感更强，适合突出珠材本身的颜色变化。",
      price: 88,
      accent: "linear-gradient(135deg, #e2ebff 0%, #92a1d6 100%)",
      tags: ["热门", "清透"],
    },
  ],
  sizes: [
    { id: "14", name: "14 cm", description: "纤细手围", price: 0 },
    { id: "15", name: "15 cm", description: "贴手佩戴", price: 10 },
    { id: "16", name: "16 cm", description: "常规推荐", price: 12 },
    { id: "17", name: "17 cm", description: "更松弛的垂感", price: 16 },
  ],
  beads: [
    {
      id: "shell",
      name: "白贝珠",
      description: "柔雾白光泽，是奶油风底色。",
      price: 18,
      swatch: "radial-gradient(circle at 30% 30%, #fffef9 0%, #d8ccb8 100%)",
      tag: "柔光",
    },
    {
      id: "rose-quartz",
      name: "粉晶",
      description: "淡粉色透明感，适合温柔系搭配。",
      price: 16,
      swatch: "radial-gradient(circle at 30% 30%, #ffe7eb 0%, #cf8d95 100%)",
      tag: "粉感",
    },
    {
      id: "tiger-eye",
      name: "虎眼石",
      description: "琥珀棕色带金线纹理，提升层次。",
      price: 22,
      swatch: "radial-gradient(circle at 32% 32%, #f3daa0 0%, #8e623a 100%)",
      tag: "暖调",
    },
    {
      id: "amazonite",
      name: "蓝纹石",
      description: "带雾感海盐蓝，是夏天很出片的颜色。",
      price: 20,
      swatch: "radial-gradient(circle at 32% 32%, #d6f1f0 0%, #6a9fa3 100%)",
      tag: "海盐",
    },
    {
      id: "moonstone",
      name: "月光灰",
      description: "微微透白的灰蓝色，适合平衡整体冷暖。",
      price: 19,
      swatch: "radial-gradient(circle at 32% 32%, #edf3ff 0%, #a4acc0 100%)",
      tag: "柔灰",
    },
    {
      id: "jade",
      name: "青玉",
      description: "低饱和玉绿色，让搭配更安静。",
      price: 20,
      swatch: "radial-gradient(circle at 32% 32%, #e4f7e8 0%, #78a17a 100%)",
      tag: "清新",
    },
    {
      id: "onyx",
      name: "黑曜石",
      description: "给浅色手链加一点落点和力量感。",
      price: 18,
      swatch: "radial-gradient(circle at 32% 32%, #75767a 0%, #1f232a 100%)",
      tag: "压轴",
    },
    {
      id: "spacer",
      name: "细金隔珠",
      description: "小小一点金色光泽，用来提亮节奏。",
      price: 8,
      swatch: "radial-gradient(circle at 32% 32%, #ffeab8 0%, #b98f43 100%)",
      tag: "点睛",
    },
  ],
  charms: [
    {
      id: "crescent",
      name: "弯月吊饰",
      description: "和奶白系、海盐系都很搭，适合作为主吊饰。",
      price: 36,
      accent: "linear-gradient(135deg, #fff0c6 0%, #c49c4f 100%)",
    },
    {
      id: "pearl-drop",
      name: "珍珠水滴",
      description: "偏礼物感，适合搭包金链或白贝珠。",
      price: 42,
      accent: "linear-gradient(135deg, #fffef9 0%, #d4c1ad 100%)",
    },
    {
      id: "letter",
      name: "字母牌",
      description: "和刻字一起做专属礼物感最强。",
      price: 28,
      accent: "linear-gradient(135deg, #ffe0d5 0%, #c77f63 100%)",
    },
    {
      id: "star",
      name: "小星芒",
      description: "适合做辅助吊饰，视觉会更轻。",
      price: 24,
      accent: "linear-gradient(135deg, #f8efbe 0%, #b78f4a 100%)",
    },
  ],
  packages: [
    {
      id: "signature-box",
      name: "新月礼盒",
      description: "抽屉式礼盒 + 烫金卡片，适合礼赠。",
      price: 30,
      tags: ["礼物感"],
    },
    {
      id: "linen-pouch",
      name: "亚麻收纳袋",
      description: "轻便日常，更适合自留和补货。",
      price: 12,
      tags: ["轻装"],
    },
    {
      id: "atelier-wrap",
      name: "工坊包裹",
      description: "手写小票、牛皮纸与棉纸封口，偏手作店气质。",
      price: 20,
      tags: ["手作感"],
    },
  ],
  recipes: {
    mist: {
      base: "gold-chain",
      size: "16",
      beads: [
        "shell",
        "rose-quartz",
        "spacer",
        "shell",
        "tiger-eye",
        "shell",
        "spacer",
        "rose-quartz",
      ],
      charms: ["crescent"],
      package: "signature-box",
      engraving: "LUNA",
      styleName: "晨雾奶白",
    },
    ocean: {
      base: "crystal-line",
      size: "16",
      beads: [
        "moonstone",
        "amazonite",
        "shell",
        "moonstone",
        "amazonite",
        "spacer",
        "shell",
        "moonstone",
      ],
      charms: ["star"],
      package: "atelier-wrap",
      engraving: "",
      styleName: "海盐蓝调",
    },
    amber: {
      base: "mist-cord",
      size: "17",
      beads: [
        "tiger-eye",
        "shell",
        "spacer",
        "onyx",
        "tiger-eye",
        "shell",
        "jade",
        "spacer",
      ],
      charms: ["pearl-drop"],
      package: "signature-box",
      engraving: "GLOW",
      styleName: "琥珀星轨",
    },
  },
};

const STORAGE_KEYS = {
  saved: "savedDesigns",
  cart: "cartItems",
};

const BEAD_META = {
  shell: { mobileGroup: "cream", sizeLabel: "12mm" },
  "rose-quartz": { mobileGroup: "pink", sizeLabel: "12mm" },
  "tiger-eye": { mobileGroup: "brown", sizeLabel: "10mm" },
  amazonite: { mobileGroup: "blue", sizeLabel: "12mm" },
  moonstone: { mobileGroup: "blue", sizeLabel: "10mm" },
  jade: { mobileGroup: "accent", sizeLabel: "10mm" },
  onyx: { mobileGroup: "dark", sizeLabel: "10mm" },
  spacer: { mobileGroup: "accent", sizeLabel: "6mm" },
};

const BEAD_GROUP_LABELS = {
  all: "正在使用",
  cream: "奶白系",
  pink: "粉雾系",
  blue: "海蓝系",
  brown: "发晶系",
  dark: "深色系",
  accent: "点缀系",
};

catalog.beads = catalog.beads.map((item) => {
  const meta = BEAD_META[item.id] || { mobileGroup: "all", sizeLabel: "10mm" };
  return {
    ...item,
    mobileTab: "beads",
    mobileGroup: meta.mobileGroup,
    sizeLabel: meta.sizeLabel,
    cardPriceLabel: `${meta.sizeLabel} · ${item.price} 元`,
  };
});

const recipeKey = "mist";
const recipe = catalog.recipes[recipeKey];

const state = {
  step: 0,
  recipe: recipeKey,
  base: recipe.base,
  size: recipe.size,
  beads: [...recipe.beads],
  charms: [...recipe.charms],
  package: recipe.package,
  engraving: recipe.engraving,
  styleName: recipe.styleName,
  delivery: "express",
  mobileTab: "atelier",
  mobileMaterialTab: "beads",
  mobileBeadGroup: "all",
  materialSearch: "",
  cartItems: readStoredList(STORAGE_KEYS.cart),
  savedDesigns: readStoredList(STORAGE_KEYS.saved),
  historyStack: [],
  mobileStageZoom: false,
  mobileOrderCode: "",
};

const q = (selector) => document.querySelector(selector);
const qa = (selector) => [...document.querySelectorAll(selector)];

const baseOptions = q("#base-options");
const sizeOptions = q("#size-options");
const beadOptions = q("#bead-options");
const charmOptions = q("#charm-options");
const packageOptions = q("#package-options");
const designStrip = q("#design-strip");
const engravingInput = q("#engraving-input");
const recipePills = qa(".recipe-pill");
const stepChips = qa(".step-chip");
const panels = qa(".step-panel");
const modal = q("#checkout-modal");
const modalBody = q("#modal-body");
const successPanel = q("#success-panel");
const checkoutForm = q("#checkout-form");
const mobileEditorViews = qa(".mobile-editor-view");
const mobileTabs = qa(".mobile-tab");
const mobileMaterialTabs = qa(".mobile-material-tab");
const mobileBeadGroups = q("#mobile-bead-groups");
const mobileMaterialBody = q("#mobile-material-body");
const mobileMaterialMain = q("#mobile-material-main");
const mobileIdeasList = q("#mobile-ideas-list");
const mobileSavedList = q("#mobile-saved-list");
const mobileCartItems = q("#mobile-cart-items");
const mobileCartForm = q("#mobile-cart-form");
const mobileCartSuccess = q("#mobile-cart-success");
const mobileCartBadge = q("#mobile-cart-badge");
const mobileMaterialSearch = q("#mobile-material-search");

const currency = (value) => `¥ ${value}`;

function readStoredList(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  } catch (error) {
    return [];
  }
}

function saveStoredList(key, list) {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch (error) {
    // Ignore storage failures in the static prototype.
  }
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function getBase(id = state.base) {
  return catalog.bases.find((item) => item.id === id);
}

function getSize(id = state.size) {
  return catalog.sizes.find((item) => item.id === id);
}

function getPackage(id = state.package) {
  return catalog.packages.find((item) => item.id === id);
}

function getCharm(id) {
  return catalog.charms.find((item) => item.id === id);
}

function getBead(id) {
  return catalog.beads.find((item) => item.id === id);
}

function getCharmNames(ids = state.charms) {
  if (!ids.length) return "无吊饰";
  return ids.map((item) => getCharm(item)?.name).filter(Boolean).join("、");
}

function totalPrice(snapshot = state) {
  const beadsTotal = snapshot.beads.reduce((sum, beadId) => sum + getBead(beadId).price, 0);
  const charmsTotal = snapshot.charms.reduce((sum, charmId) => sum + (getCharm(charmId)?.price || 0), 0);
  const engravingFee = snapshot.engraving.trim() ? 28 : 0;
  return getBase(snapshot.base).price + getSize(snapshot.size).price + beadsTotal + charmsTotal + getPackage(snapshot.package).price + engravingFee;
}

function deliveryFee(delivery = state.delivery) {
  if (delivery === "pickup") return 0;
  if (delivery === "gift") return 18;
  return 12;
}

function wristRange(sizeId = state.size) {
  const raw = Number(sizeId);
  return `${(raw + 0.3).toFixed(1)} - ${(raw + 1).toFixed(1)} cm`;
}

function sanitizeSnapshot(snapshot = {}) {
  const source = typeof snapshot === "object" && snapshot ? snapshot : {};
  const recipeName = Object.prototype.hasOwnProperty.call(catalog.recipes, source.recipe) ? source.recipe : recipeKey;
  const safeBeads = Array.isArray(source.beads)
    ? source.beads.filter((item) => catalog.beads.some((bead) => bead.id === item)).slice(0, 12)
    : [];
  const safeCharms = Array.isArray(source.charms)
    ? source.charms.filter((item) => catalog.charms.some((charm) => charm.id === item)).slice(0, 2)
    : [];

  return {
    recipe: recipeName,
    base: catalog.bases.some((item) => item.id === source.base) ? source.base : recipe.base,
    size: catalog.sizes.some((item) => item.id === source.size) ? source.size : recipe.size,
    beads: safeBeads.length ? safeBeads : [...recipe.beads],
    charms: safeCharms,
    package: catalog.packages.some((item) => item.id === source.package) ? source.package : recipe.package,
    engraving: typeof source.engraving === "string" ? source.engraving.toUpperCase().trim().slice(0, 8) : "",
    styleName: typeof source.styleName === "string" && source.styleName.trim() ? source.styleName.trim() : recipe.styleName,
  };
}

function sanitizeSavedEntries(entries) {
  if (!Array.isArray(entries)) return [];
  return entries
    .map((item, index) => {
      const snapshot = sanitizeSnapshot(item?.snapshot || item);
      return {
        id: typeof item?.id === "string" && item.id ? item.id : `saved-legacy-${index}`,
        name: typeof item?.name === "string" && item.name ? item.name : makeSnapshotName(snapshot),
        summary:
          typeof item?.summary === "string" && item.summary
            ? item.summary
            : `${snapshot.beads.length} 颗 · ${getCharmNames(snapshot.charms)} · ${currency(totalPrice(snapshot))}`,
        snapshot,
      };
    })
    .slice(0, 8);
}

function sanitizeCartEntries(entries) {
  if (!Array.isArray(entries)) return [];
  return entries
    .map((item, index) => {
      const snapshot = sanitizeSnapshot(item?.snapshot || item);
      return {
        id: typeof item?.id === "string" && item.id ? item.id : `cart-legacy-${index}`,
        name: typeof item?.name === "string" && item.name ? item.name : makeSnapshotName(snapshot),
        summary:
          typeof item?.summary === "string" && item.summary
            ? item.summary
            : `${snapshot.beads.length} 颗 · ${getPackage(snapshot.package).name}`,
        snapshot,
        price: Number.isFinite(item?.price) ? item.price : totalPrice(snapshot),
      };
    })
    .slice(0, 12);
}

state.savedDesigns = sanitizeSavedEntries(state.savedDesigns);
state.cartItems = sanitizeCartEntries(state.cartItems);
saveStoredList(STORAGE_KEYS.saved, state.savedDesigns);
saveStoredList(STORAGE_KEYS.cart, state.cartItems);

function snapshotDesign() {
  return {
    recipe: state.recipe,
    base: state.base,
    size: state.size,
    beads: [...state.beads],
    charms: [...state.charms],
    package: state.package,
    engraving: state.engraving,
    styleName: state.styleName,
  };
}

function makeSnapshotName(snapshot) {
  return `${getBase(snapshot.base).name} · ${snapshot.styleName}`;
}

function pushHistory() {
  state.historyStack.push(snapshotDesign());
  if (state.historyStack.length > 24) {
    state.historyStack.shift();
  }
}

function applySnapshot(snapshot) {
  state.recipe = snapshot.recipe || state.recipe;
  state.base = snapshot.base;
  state.size = snapshot.size;
  state.beads = [...snapshot.beads];
  state.charms = [...snapshot.charms];
  state.package = snapshot.package;
  state.engraving = snapshot.engraving;
  state.styleName = snapshot.styleName;
  state.mobileOrderCode = "";
}

function updateStyleName() {
  const counts = state.beads.reduce((accumulator, beadId) => {
    accumulator[beadId] = (accumulator[beadId] || 0) + 1;
    return accumulator;
  }, {});
  const topBead = Object.entries(counts).sort((left, right) => right[1] - left[1])[0]?.[0];
  const charmLead = state.charms[0];

  if (topBead === "amazonite") {
    state.styleName = "海盐蓝调";
  } else if (topBead === "tiger-eye" || charmLead === "pearl-drop") {
    state.styleName = "琥珀星轨";
  } else if (topBead === "shell" || topBead === "rose-quartz") {
    state.styleName = "晨雾奶白";
  } else {
    state.styleName = "今日定制";
  }
}

function drawOrbit(orbit) {
  if (!orbit) return;
  const width = orbit.clientWidth;
  const height = orbit.clientHeight;
  if (!width || !height) return;

  const previewBeads = [...state.beads];
  while (previewBeads.length < 10) {
    previewBeads.push("shell");
  }

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.max(64, Math.min(width, height) * 0.34);
  orbit.innerHTML = "";

  previewBeads.forEach((beadId, index) => {
    const bead = getBead(beadId);
    const dot = document.createElement("span");
    const angle = ((Math.PI * 2) / previewBeads.length) * index - Math.PI / 2;
    dot.className = `preview-bead ${index >= state.beads.length ? "is-placeholder" : ""}`;
    dot.style.left = `${centerX + Math.cos(angle) * radius - 17}px`;
    dot.style.top = `${centerY + Math.sin(angle) * radius - 17}px`;
    dot.style.background = bead.swatch;
    orbit.appendChild(dot);
  });

  if (state.charms.length) {
    const charmLabel = document.createElement("div");
    charmLabel.className = "preview-charm";
    charmLabel.textContent = getCharmNames();
    orbit.appendChild(charmLabel);
  }
}

function renderDesktopPreview() {
  drawOrbit(q("#bracelet-orbit"));
  q("#preview-title").textContent = getBase().name;
  q("#preview-style").textContent = state.styleName;
}

function renderMobilePreview() {
  const orbit = q("#mobile-bracelet-orbit");
  if (orbit) {
    orbit.classList.toggle("is-zoomed", state.mobileStageZoom);
  }
  drawOrbit(orbit);
}

function renderDesktopBaseCards() {
  baseOptions.innerHTML = catalog.bases
    .map(
      (item) => `
        <article class="option-card ${item.id === state.base ? "is-selected" : ""}" data-base-id="${item.id}">
          <div class="option-card-head">
            <div>
              <h4>${item.name}</h4>
              <p>${item.description}</p>
            </div>
            <span class="option-swatch" style="background:${item.accent}"></span>
          </div>
          <div class="option-meta">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="option-card-foot">
            <strong class="option-price">${currency(item.price)}</strong>
            <button class="select-button" type="button">选这个</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDesktopSizes() {
  sizeOptions.innerHTML = catalog.sizes
    .map(
      (item) => `
        <article class="size-card ${item.id === state.size ? "is-selected" : ""}" data-size-id="${item.id}">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <strong class="option-price">${item.price ? `+ ${currency(item.price)}` : "基础价"}</strong>
        </article>
      `
    )
    .join("");
}

function renderDesktopBeads() {
  beadOptions.innerHTML = catalog.beads
    .map(
      (item) => `
        <article class="option-card" data-bead-id="${item.id}">
          <div class="option-card-head">
            <div>
              <h4>${item.name}</h4>
              <p>${item.description}</p>
            </div>
            <span class="option-swatch" style="background:${item.swatch}"></span>
          </div>
          <div class="option-meta">
            <span>${item.tag}</span>
            <span>${currency(item.price)}</span>
          </div>
          <div class="option-card-foot">
            <strong class="option-price">${currency(item.price)}</strong>
            <button class="add-button" type="button">加入序列</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDesktopCharms() {
  charmOptions.innerHTML = catalog.charms
    .map(
      (item) => `
        <article class="option-card ${state.charms.includes(item.id) ? "is-selected" : ""}" data-charm-id="${item.id}">
          <div class="option-card-head">
            <div>
              <h4>${item.name}</h4>
              <p>${item.description}</p>
            </div>
            <span class="option-swatch" style="background:${item.accent}"></span>
          </div>
          <div class="option-card-foot">
            <strong class="option-price">${currency(item.price)}</strong>
            <button class="select-button" type="button">${state.charms.includes(item.id) ? "已选中" : "加入点缀"}</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDesktopPackages() {
  packageOptions.innerHTML = catalog.packages
    .map(
      (item) => `
        <article class="option-card ${item.id === state.package ? "is-selected" : ""}" data-package-id="${item.id}">
          <div class="option-card-head">
            <div>
              <h4>${item.name}</h4>
              <p>${item.description}</p>
            </div>
            <span class="option-price">${item.price ? `+ ${currency(item.price)}` : "含在价格中"}</span>
          </div>
          <div class="option-meta">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="option-card-foot">
            <strong class="option-price">${currency(item.price)}</strong>
            <button class="select-button" type="button">选这个</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDesktopStrip() {
  if (!state.beads.length) {
    designStrip.innerHTML = `<div class="empty-strip">还没有加入珠材，先从上方素材库选几颗吧。</div>`;
    return;
  }

  designStrip.innerHTML = state.beads
    .map((beadId, index) => {
      const bead = getBead(beadId);
      return `
        <div class="strip-item" data-index="${index}">
          <span class="strip-bead-swatch" style="background:${bead.swatch}"></span>
          <div>
            <h5>${bead.name}</h5>
            <span>${currency(bead.price)} · ${bead.tag}</span>
          </div>
          <div class="strip-actions">
            <button data-action="left" type="button" aria-label="前移">前移</button>
            <button data-action="right" type="button" aria-label="后移">后移</button>
            <button data-action="remove" type="button" aria-label="移除">移除</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderDesktopSummary() {
  const beadsSummary = state.beads.map((beadId) => getBead(beadId).name);
  const shortBeads = beadsSummary.slice(0, 4).join("、");

  q("#summary-base").textContent = `${getBase().name} · ${getSize().name}`;
  q("#mobile-preview-price").textContent = currency(totalPrice());
  q("#mobile-preview-count").textContent = `${state.beads.length} 颗`;
  q("#summary-beads-count").textContent = `${state.beads.length} 颗`;
  q("#summary-charms").textContent = `${getCharmNames()} · ${getPackage().name}`;
  q("#summary-price").textContent = currency(totalPrice());
  q("#review-name").textContent = makeSnapshotName(snapshotDesign());
  q("#review-beads").textContent = shortBeads ? `${shortBeads}${state.beads.length > 4 ? " 等" : ""}` : "待选择";
  q("#review-gift").textContent = `${getPackage().name}${state.engraving.trim() ? ` · 刻字「${state.engraving.trim()}」` : ""}`;
  q("#review-price").textContent = currency(totalPrice());
}

function renderDesktopRecipes() {
  recipePills.forEach((pill) => {
    pill.classList.toggle("is-active", pill.dataset.recipe === state.recipe);
  });
}

function renderDesktopSteps() {
  stepChips.forEach((chip) => {
    chip.classList.toggle("is-active", Number(chip.dataset.step) === state.step);
  });
  panels.forEach((panel) => {
    panel.classList.toggle("is-active", Number(panel.dataset.panel) === state.step);
  });
  q("#prev-step").disabled = state.step === 0;
  q("#next-step").textContent = state.step === panels.length - 1 ? "完成这套配置" : "下一步";
}

function renderCheckoutSummary() {
  const lines = [
    ["作品名称", makeSnapshotName(snapshotDesign())],
    ["尺寸", getSize().name],
    ["珠材序列", state.beads.map((beadId) => getBead(beadId).name).join("、") || "待补充"],
    ["吊饰", getCharmNames()],
    ["礼盒", getPackage().name],
    ["刻字", state.engraving.trim() || "无"],
  ];

  q("#checkout-lines").innerHTML = lines
    .map(
      ([label, value]) => `
        <div class="checkout-line">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");

  q("#checkout-total").textContent = currency(totalPrice() + deliveryFee());
}

function renderMobileStatus() {
  q("#mobile-status-price").textContent = currency(totalPrice());
  q("#mobile-status-count").textContent = `/ ${state.beads.length} 颗`;
  q("#mobile-status-size").textContent = wristRange();
  q("#mobile-add-cart").textContent = state.cartItems.length ? `加入购物车 · ${state.cartItems.length}` : "加入购物车";
}

function renderMobileViews() {
  mobileEditorViews.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.mobileView === state.mobileTab);
  });
  mobileTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.mobileTab === state.mobileTab);
  });
  mobileCartBadge.textContent = String(state.cartItems.length);
  mobileCartBadge.hidden = state.cartItems.length === 0;
}

function renderMobileMaterialTabs() {
  mobileMaterialTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.materialTab === state.mobileMaterialTab);
  });
  mobileMaterialBody.classList.toggle("is-beads", state.mobileMaterialTab === "beads");
}

function beadMatchesSearch(bead) {
  const term = state.materialSearch.trim().toLowerCase();
  if (!term) return true;
  return `${bead.name}${bead.description}${bead.tag}`.toLowerCase().includes(term);
}

function filteredBeads() {
  return catalog.beads.filter((item) => {
    const groupMatches = state.mobileBeadGroup === "all" || item.mobileGroup === state.mobileBeadGroup;
    return groupMatches && beadMatchesSearch(item);
  });
}

function renderMobileBeadGroups() {
  if (state.mobileMaterialTab !== "beads") {
    mobileBeadGroups.innerHTML = "";
    return;
  }

  mobileBeadGroups.innerHTML = Object.entries(BEAD_GROUP_LABELS)
    .map(
      ([group, label]) => `
        <button class="mobile-group-pill ${group === state.mobileBeadGroup ? "is-active" : ""}" data-bead-group="${group}" type="button">
          ${label}
        </button>
      `
    )
    .join("");
}

function mobileCardMarkup(item, config) {
  return `
    <article class="mobile-material-card ${config.selected ? "is-selected" : ""}" data-mobile-action="${config.action}" data-id="${item.id}">
      <div class="mobile-card-top">
        <div class="mobile-card-copy">
          <strong>${item.name}</strong>
          <span>${config.meta}</span>
        </div>
        <span class="mobile-card-swatch" style="background:${config.swatch}"></span>
      </div>
      <span class="mobile-card-copy">${item.description}</span>
      <button class="mobile-card-action" type="button">${config.buttonLabel}</button>
    </article>
  `;
}

function renderMobileSelectedStrip() {
  if (!state.beads.length) {
    return `<div class="mobile-empty">还没有加入珠材，先从下方素材里挑几颗吧。</div>`;
  }

  return `
    <div class="mobile-selected-strip">
      ${state.beads
        .map((beadId, index) => {
          const bead = getBead(beadId);
          return `
            <article class="mobile-selected-card" data-index="${index}">
              <div class="mobile-selected-head">
                <span class="mobile-card-swatch" style="background:${bead.swatch}"></span>
                <div class="mobile-selected-meta">
                  <strong>${bead.name}</strong>
                  <span>${bead.cardPriceLabel}</span>
                </div>
              </div>
              <div class="mobile-selected-actions">
                <button data-mobile-action="bead-left" data-index="${index}" type="button">前移</button>
                <button data-mobile-action="bead-right" data-index="${index}" type="button">后移</button>
                <button data-mobile-action="bead-remove" data-index="${index}" type="button">移除</button>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderMobileMaterialMain() {
  if (state.mobileMaterialTab === "beads") {
    const beads = filteredBeads();
    mobileMaterialMain.innerHTML = `
      ${renderMobileSelectedStrip()}
      <div class="mobile-material-grid">
        ${beads
          .map((item) =>
            mobileCardMarkup(item, {
              action: "add-bead",
              meta: item.cardPriceLabel,
              swatch: item.swatch,
              buttonLabel: "加入这颗",
              selected: false,
            })
          )
          .join("")}
      </div>
    `;
    return;
  }

  if (state.mobileMaterialTab === "charms") {
    mobileMaterialMain.innerHTML = `
      <div class="mobile-material-grid">
        ${catalog.charms
          .map((item) =>
            mobileCardMarkup(item, {
              action: "toggle-charm",
              meta: currency(item.price),
              swatch: item.accent,
              buttonLabel: state.charms.includes(item.id) ? "已点缀" : "点缀它",
              selected: state.charms.includes(item.id),
            })
          )
          .join("")}
      </div>
    `;
    return;
  }

  if (state.mobileMaterialTab === "bases") {
    mobileMaterialMain.innerHTML = `
      <section class="mobile-material-section">
        <h4 class="mobile-section-title">主链风格</h4>
        <div class="mobile-material-grid">
          ${catalog.bases
            .map((item) =>
              mobileCardMarkup(item, {
                action: "select-base",
                meta: currency(item.price),
                swatch: item.accent,
                buttonLabel: state.base === item.id ? "正在使用" : "换这条",
                selected: state.base === item.id,
              })
            )
            .join("")}
        </div>
      </section>
      <section class="mobile-material-section">
        <h4 class="mobile-section-title">手围尺寸</h4>
        <div class="mobile-material-grid">
          ${catalog.sizes
            .map(
              (item) => `
                <article class="mobile-material-card ${state.size === item.id ? "is-selected" : ""}" data-mobile-action="select-size" data-id="${item.id}">
                  <div class="mobile-card-copy">
                    <strong>${item.name}</strong>
                    <span>${item.description}</span>
                  </div>
                  <button class="mobile-card-action" type="button">${state.size === item.id ? "当前手围" : "用这个"}</button>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
    return;
  }

  mobileMaterialMain.innerHTML = `
    <section class="mobile-material-section">
      <h4 class="mobile-section-title">礼盒包装</h4>
      <div class="mobile-material-grid">
        ${catalog.packages
          .map((item) =>
            mobileCardMarkup(item, {
              action: "select-package",
              meta: currency(item.price),
              swatch: "linear-gradient(135deg, #f6e7d9 0%, #c9a37f 100%)",
              buttonLabel: state.package === item.id ? "已选中" : "选这个",
              selected: state.package === item.id,
            })
          )
          .join("")}
      </div>
    </section>
    <section class="mobile-material-section">
      <h4 class="mobile-section-title">刻字内容</h4>
      <label>
        <input id="mobile-engraving-input" type="text" maxlength="8" placeholder="例如 LUNA / 0314" value="${state.engraving}" />
      </label>
    </section>
  `;
}

function renderMobileIdeas() {
  mobileIdeasList.innerHTML = Object.entries(catalog.recipes)
    .map(([key, item]) => {
      const beads = item.beads.slice(0, 3).map((beadId) => getBead(beadId).name).join("、");
      return `
        <article class="mobile-idea-card ${state.recipe === key ? "is-active" : ""}">
          <strong>${item.styleName}</strong>
          <span>${beads}</span>
          <button data-mobile-action="apply-recipe" data-recipe="${key}" type="button">一键套用</button>
        </article>
      `;
    })
    .join("");
}

function renderMobileSaved() {
  if (!state.savedDesigns.length) {
    mobileSavedList.innerHTML = `<div class="mobile-empty">还没有保存任何设计，先把喜欢的配色存下来吧。</div>`;
    return;
  }

  mobileSavedList.innerHTML = state.savedDesigns
    .map(
      (item) => `
        <article class="mobile-saved-card">
          <strong>${item.name}</strong>
          <span>${item.summary}</span>
          <button data-mobile-action="apply-saved" data-id="${item.id}" type="button">重新套用</button>
        </article>
      `
    )
    .join("");
}

function renderMobileCart() {
  if (!state.cartItems.length) {
    mobileCartItems.innerHTML = `<div class="mobile-empty">购物车还是空的，把当前设计加入进来就会出现在这里。</div>`;
    mobileCartForm.hidden = true;
  } else {
    mobileCartItems.innerHTML = state.cartItems
      .map(
        (item) => `
          <article class="mobile-cart-item">
            <div class="mobile-cart-item-head">
              <div>
                <strong>${item.name}</strong>
                <span>${item.summary}</span>
              </div>
              <strong>${currency(item.price + deliveryFee(state.delivery))}</strong>
            </div>
            <button data-mobile-action="remove-cart" data-id="${item.id}" type="button">移出购物车</button>
          </article>
        `
      )
      .join("");
    mobileCartForm.hidden = false;
  }

  mobileCartSuccess.hidden = !state.mobileOrderCode;
  q("#mobile-order-code").textContent = state.mobileOrderCode || "订单编号：BR-240318";
}

function renderAll() {
  renderDesktopBaseCards();
  renderDesktopSizes();
  renderDesktopBeads();
  renderDesktopCharms();
  renderDesktopPackages();
  renderDesktopStrip();
  renderDesktopPreview();
  renderDesktopSummary();
  renderDesktopRecipes();
  renderDesktopSteps();
  renderCheckoutSummary();

  renderMobileStatus();
  renderMobilePreview();
  renderMobileViews();
  renderMobileMaterialTabs();
  renderMobileBeadGroups();
  renderMobileMaterialMain();
  renderMobileIdeas();
  renderMobileSaved();
  renderMobileCart();

  if (engravingInput) {
    engravingInput.value = state.engraving;
  }

  if (mobileMaterialSearch && mobileMaterialSearch.value !== state.materialSearch) {
    mobileMaterialSearch.value = state.materialSearch;
  }

  if (mobileCartForm) {
    mobileCartForm.elements.delivery.value = state.delivery;
  }
}

function setStep(nextStep) {
  state.step = Math.max(0, Math.min(panels.length - 1, nextStep));
  renderDesktopSteps();
}

function applyRecipe(recipeName) {
  const current = catalog.recipes[recipeName];
  applySnapshot({
    recipe: recipeName,
    base: current.base,
    size: current.size,
    beads: [...current.beads],
    charms: [...current.charms],
    package: current.package,
    engraving: current.engraving,
    styleName: current.styleName,
  });
  state.materialSearch = "";
  state.mobileBeadGroup = "all";
  state.mobileOrderCode = "";
  renderAll();
}

function resetCurrentRecipe() {
  applyRecipe(state.recipe);
}

function setMobileTab(tabName) {
  state.mobileTab = tabName;
  renderMobileViews();
  if (tabName === "home") {
    q("#hero").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (isMobileViewport()) {
    q("#customizer").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function saveCurrentDesign() {
  const snapshot = snapshotDesign();
  const entry = {
    id: `saved-${Date.now()}`,
    name: makeSnapshotName(snapshot),
    summary: `${snapshot.beads.length} 颗 · ${getCharmNames(snapshot.charms)} · ${currency(totalPrice(snapshot))}`,
    snapshot,
  };
  state.savedDesigns = [entry, ...state.savedDesigns].slice(0, 8);
  saveStoredList(STORAGE_KEYS.saved, state.savedDesigns);
  setMobileTab("saved");
  renderAll();
}

function addCurrentDesignToCart() {
  const snapshot = snapshotDesign();
  const entry = {
    id: `cart-${Date.now()}`,
    name: makeSnapshotName(snapshot),
    summary: `${snapshot.beads.length} 颗 · ${getPackage(snapshot.package).name}`,
    snapshot,
    price: totalPrice(snapshot),
  };
  state.cartItems = [entry, ...state.cartItems];
  state.mobileOrderCode = "";
  saveStoredList(STORAGE_KEYS.cart, state.cartItems);
  renderAll();
}

function undoLastChange() {
  const previous = state.historyStack.pop();
  if (!previous) return;
  applySnapshot(previous);
  renderAll();
}

function mutateDesign(mutation) {
  pushHistory();
  mutation();
  updateStyleName();
  state.mobileOrderCode = "";
  renderAll();
}

function toggleCharm(charmId) {
  mutateDesign(() => {
    if (state.charms.includes(charmId)) {
      state.charms = state.charms.filter((item) => item !== charmId);
    } else if (state.charms.length < 2) {
      state.charms = [...state.charms, charmId];
    } else {
      state.charms = [state.charms[0], charmId];
    }
  });
}

function moveBead(index, direction) {
  mutateDesign(() => {
    const next = [...state.beads];
    if (direction === "remove") {
      next.splice(index, 1);
    }
    if (direction === "left" && index > 0) {
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
    }
    if (direction === "right" && index < next.length - 1) {
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
    }
    state.beads = next;
  });
}

function rebalancePattern() {
  mutateDesign(() => {
    const left = [];
    const right = [];
    state.beads.forEach((beadId, index) => {
      if (index % 2 === 0) {
        left.push(beadId);
      } else {
        right.unshift(beadId);
      }
    });
    state.beads = [...left, ...right];
  });
}

function openModal() {
  if (isMobileViewport()) {
    setMobileTab("cart");
    return;
  }
  renderCheckoutSummary();
  modal.hidden = false;
  modalBody.hidden = false;
  successPanel.hidden = true;
  checkoutForm.elements.delivery.value = state.delivery;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

function handleMaterialAction(action, id) {
  if (action === "add-bead" && state.beads.length < 12) {
    mutateDesign(() => {
      state.beads = [...state.beads, id];
    });
  }

  if (action === "toggle-charm") {
    toggleCharm(id);
  }

  if (action === "select-base") {
    mutateDesign(() => {
      state.base = id;
    });
  }

  if (action === "select-size") {
    mutateDesign(() => {
      state.size = id;
    });
  }

  if (action === "select-package") {
    mutateDesign(() => {
      state.package = id;
    });
  }
}

baseOptions.addEventListener("click", (event) => {
  const card = event.target.closest("[data-base-id]");
  if (!card) return;
  mutateDesign(() => {
    state.base = card.dataset.baseId;
  });
});

sizeOptions.addEventListener("click", (event) => {
  const card = event.target.closest("[data-size-id]");
  if (!card) return;
  mutateDesign(() => {
    state.size = card.dataset.sizeId;
  });
});

beadOptions.addEventListener("click", (event) => {
  const card = event.target.closest("[data-bead-id]");
  if (!card || state.beads.length >= 12) return;
  mutateDesign(() => {
    state.beads = [...state.beads, card.dataset.beadId];
  });
});

designStrip.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  const item = event.target.closest(".strip-item");
  if (!button || !item) return;
  moveBead(Number(item.dataset.index), button.dataset.action);
});

charmOptions.addEventListener("click", (event) => {
  const card = event.target.closest("[data-charm-id]");
  if (!card) return;
  toggleCharm(card.dataset.charmId);
});

packageOptions.addEventListener("click", (event) => {
  const card = event.target.closest("[data-package-id]");
  if (!card) return;
  mutateDesign(() => {
    state.package = card.dataset.packageId;
  });
});

engravingInput.addEventListener("input", (event) => {
  mutateDesign(() => {
    state.engraving = event.target.value.toUpperCase().trimStart();
  });
});

recipePills.forEach((pill) => {
  pill.addEventListener("click", () => applyRecipe(pill.dataset.recipe));
});

q("#balance-pattern").addEventListener("click", rebalancePattern);
q("#reset-pattern").addEventListener("click", resetCurrentRecipe);
q("#prev-step").addEventListener("click", () => setStep(state.step - 1));
q("#next-step").addEventListener("click", () => {
  if (state.step < panels.length - 1) {
    setStep(state.step + 1);
    return;
  }
  openModal();
});
q("#jump-review").addEventListener("click", () => setStep(panels.length - 1));
q("#open-checkout").addEventListener("click", openModal);
q("#open-checkout-final").addEventListener("click", openModal);

stepChips.forEach((chip) => {
  chip.addEventListener("click", () => setStep(Number(chip.dataset.step)));
});

q("#mobile-status-help").addEventListener("click", () => setMobileTab("home"));
q("#mobile-zoom-toggle").addEventListener("click", () => {
  state.mobileStageZoom = !state.mobileStageZoom;
  renderMobilePreview();
});
q("#mobile-undo").addEventListener("click", undoLastChange);
q("#mobile-tool-size").addEventListener("click", () => {
  state.mobileMaterialTab = "bases";
  renderAll();
});
q("#mobile-tool-toggle").addEventListener("click", () => {
  state.mobileMaterialTab = state.mobileMaterialTab === "charms" ? "bases" : "charms";
  renderAll();
});
q("#mobile-tool-reset").addEventListener("click", resetCurrentRecipe);
q("#mobile-tool-save").addEventListener("click", saveCurrentDesign);
q("#mobile-add-cart").addEventListener("click", addCurrentDesignToCart);

qa(".mobile-home-link").forEach((button) => {
  button.addEventListener("click", () => {
    const target = q(button.dataset.homeTarget);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

qa(".mobile-tab").forEach((button) => {
  button.addEventListener("click", () => setMobileTab(button.dataset.mobileTab));
});

qa(".mobile-material-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.mobileMaterialTab = button.dataset.materialTab;
    state.mobileBeadGroup = "all";
    renderAll();
  });
});

mobileBeadGroups.addEventListener("click", (event) => {
  const button = event.target.closest("[data-bead-group]");
  if (!button) return;
  state.mobileBeadGroup = button.dataset.beadGroup;
  renderAll();
});

mobileMaterialMain.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mobile-action]");
  if (!button) return;
  const { mobileAction, id, index, recipe: recipeId } = button.dataset;

  if (mobileAction === "apply-recipe") {
    applyRecipe(recipeId);
    state.mobileTab = "atelier";
    renderAll();
    return;
  }

  if (mobileAction === "apply-saved") {
    const saved = state.savedDesigns.find((item) => item.id === id);
    if (!saved) return;
    applySnapshot(saved.snapshot);
    state.mobileTab = "atelier";
    renderAll();
    return;
  }

  if (mobileAction === "remove-cart") {
    state.cartItems = state.cartItems.filter((item) => item.id !== id);
    saveStoredList(STORAGE_KEYS.cart, state.cartItems);
    state.mobileOrderCode = "";
    renderAll();
    return;
  }

  if (mobileAction === "bead-left") {
    moveBead(Number(index), "left");
    return;
  }

  if (mobileAction === "bead-right") {
    moveBead(Number(index), "right");
    return;
  }

  if (mobileAction === "bead-remove") {
    moveBead(Number(index), "remove");
    return;
  }

  handleMaterialAction(mobileAction, id);
});

mobileIdeasList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mobile-action='apply-recipe']");
  if (!button) return;
  applyRecipe(button.dataset.recipe);
  state.mobileTab = "atelier";
  renderAll();
});

mobileSavedList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mobile-action='apply-saved']");
  if (!button) return;
  const saved = state.savedDesigns.find((item) => item.id === button.dataset.id);
  if (!saved) return;
  applySnapshot(saved.snapshot);
  state.mobileTab = "atelier";
  renderAll();
});

mobileCartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mobile-action='remove-cart']");
  if (!button) return;
  state.cartItems = state.cartItems.filter((item) => item.id !== button.dataset.id);
  saveStoredList(STORAGE_KEYS.cart, state.cartItems);
  state.mobileOrderCode = "";
  renderAll();
});

mobileMaterialSearch.addEventListener("input", (event) => {
  state.materialSearch = event.target.value.trim();
  renderAll();
});

mobileMaterialMain.addEventListener("input", (event) => {
  if (event.target.id === "mobile-engraving-input") {
    mutateDesign(() => {
      state.engraving = event.target.value.toUpperCase().trimStart();
    });
  }
});

mobileCartForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.delivery = mobileCartForm.elements.delivery.value;
  state.mobileOrderCode = `订单编号：BR-${Math.floor(100000 + Math.random() * 900000)}`;
  renderAll();
});

mobileCartForm.elements.delivery.addEventListener("change", (event) => {
  state.delivery = event.target.value;
  renderCheckoutSummary();
  renderMobileCart();
  renderMobileStatus();
});

q("#close-modal").addEventListener("click", closeModal);
q("#close-success").addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeModal === "true") {
    closeModal();
  }
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.delivery = checkoutForm.elements.delivery.value;
  modalBody.hidden = true;
  successPanel.hidden = false;
  q("#order-code").textContent = `订单编号：BR-${Math.floor(100000 + Math.random() * 900000)}`;
  checkoutForm.reset();
});

checkoutForm.elements.delivery.addEventListener("change", (event) => {
  state.delivery = event.target.value;
  renderCheckoutSummary();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

window.addEventListener("resize", () => {
  renderDesktopPreview();
  renderMobilePreview();
});

renderAll();
