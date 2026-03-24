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

const state = {
  step: 0,
  recipe: "mist",
  base: catalog.recipes.mist.base,
  size: catalog.recipes.mist.size,
  beads: [...catalog.recipes.mist.beads],
  charms: [...catalog.recipes.mist.charms],
  package: catalog.recipes.mist.package,
  engraving: catalog.recipes.mist.engraving,
  styleName: catalog.recipes.mist.styleName,
  delivery: "express",
  drawerExpanded: false,
  mobileCheckoutOpen: false,
};

const baseOptions = document.querySelector("#base-options");
const sizeOptions = document.querySelector("#size-options");
const beadOptions = document.querySelector("#bead-options");
const charmOptions = document.querySelector("#charm-options");
const packageOptions = document.querySelector("#package-options");
const designStrip = document.querySelector("#design-strip");
const braceletOrbit = document.querySelector("#bracelet-orbit");
const engravingInput = document.querySelector("#engraving-input");
const stepChips = [...document.querySelectorAll(".step-chip")];
const panels = [...document.querySelectorAll(".step-panel")];
const recipePills = [...document.querySelectorAll(".recipe-pill")];
const flowPanel = document.querySelector(".flow-panel");
const customizerSection = document.querySelector("#customizer");
const modal = document.querySelector("#checkout-modal");
const modalBody = document.querySelector("#modal-body");
const successPanel = document.querySelector("#success-panel");
const checkoutForm = document.querySelector("#checkout-form");
const drawerToggle = document.querySelector("#toggle-drawer");
const drawerToggleState = document.querySelector("#drawer-toggle-state");
const mobileStepCounter = document.querySelector("#mobile-step-counter");
const mobileStepTitle = document.querySelector("#mobile-step-title");
const drawerProgressFill = document.querySelector("#drawer-progress-fill");
const mobileActionPrice = document.querySelector("#mobile-action-price");
const mobileActionCaption = document.querySelector("#mobile-action-caption");
const mobilePrevStep = document.querySelector("#mobile-prev-step");
const mobileNextStep = document.querySelector("#mobile-next-step");
const mobilePreviewPrice = document.querySelector("#mobile-preview-price");
const mobilePreviewCount = document.querySelector("#mobile-preview-count");

const currency = (value) => `¥ ${value}`;
const stepMeta = [
  { title: "选主链", next: "选尺寸" },
  { title: "选尺寸", next: "排珠材" },
  { title: "排珠材", next: "加吊饰" },
  { title: "加吊饰", next: "礼盒刻字" },
  { title: "礼盒刻字", next: "确认下单" },
  { title: "确认下单", next: "生成订单单" },
];

function isMobileViewport() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function getBase() {
  return catalog.bases.find((item) => item.id === state.base);
}

function getSize() {
  return catalog.sizes.find((item) => item.id === state.size);
}

function getCharmNames() {
  if (!state.charms.length) return "无吊饰";
  return state.charms
    .map((id) => catalog.charms.find((item) => item.id === id)?.name)
    .filter(Boolean)
    .join("、");
}

function beadDetails(id) {
  return catalog.beads.find((item) => item.id === id);
}

function packageDetails() {
  return catalog.packages.find((item) => item.id === state.package);
}

function totalPrice() {
  const beadsTotal = state.beads.reduce((sum, beadId) => sum + beadDetails(beadId).price, 0);
  const charmsTotal = state.charms.reduce((sum, charmId) => {
    const charm = catalog.charms.find((item) => item.id === charmId);
    return sum + (charm ? charm.price : 0);
  }, 0);
  const engravingFee = state.engraving.trim() ? 28 : 0;
  return getBase().price + getSize().price + beadsTotal + charmsTotal + packageDetails().price + engravingFee;
}

function deliveryFee() {
  if (state.delivery === "pickup") return 0;
  if (state.delivery === "gift") return 18;
  return 12;
}

function renderBases() {
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

function renderSizes() {
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

function renderBeads() {
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

function renderCharms() {
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

function renderPackages() {
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

function renderDesignStrip() {
  if (!state.beads.length) {
    designStrip.innerHTML = `<div class="empty-strip">还没有加入珠材，先从上方素材库选几颗吧。</div>`;
    return;
  }

  designStrip.innerHTML = state.beads
    .map((beadId, index) => {
      const bead = beadDetails(beadId);
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

function renderPreview() {
  const base = getBase();
  const fallbackCount = Math.max(10, state.beads.length || 10);
  const previewBeads = [...state.beads];
  const orbitWidth = braceletOrbit.clientWidth;
  const orbitHeight = braceletOrbit.clientHeight;
  const centerX = orbitWidth / 2;
  const centerY = orbitHeight / 2;
  const radius = Math.max(68, Math.min(orbitWidth, orbitHeight) * 0.34);
  while (previewBeads.length < fallbackCount) {
    previewBeads.push("shell");
  }

  braceletOrbit.innerHTML = "";

  previewBeads.forEach((beadId, index) => {
    const bead = beadDetails(beadId);
    const dot = document.createElement("span");
    const total = previewBeads.length;
    const angle = ((Math.PI * 2) / total) * index - Math.PI / 2;
    const x = centerX + Math.cos(angle) * radius - 17;
    const y = centerY + Math.sin(angle) * radius - 17;

    dot.className = `preview-bead ${index >= state.beads.length ? "is-placeholder" : ""}`;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.background = bead.swatch;
    braceletOrbit.appendChild(dot);
  });

  if (state.charms.length) {
    const charm = catalog.charms.find((item) => item.id === state.charms[0]);
    const charmTag = document.createElement("div");
    charmTag.className = "preview-charm";
    charmTag.textContent = `${charm.name}${state.charms.length > 1 ? ` + ${state.charms.length - 1}` : ""}`;
    braceletOrbit.appendChild(charmTag);
  }

  document.querySelector("#preview-title").textContent = base.name;
  document.querySelector("#preview-style").textContent = state.styleName;
}

function renderSummary() {
  const beadsSummary = state.beads.map((beadId) => beadDetails(beadId).name);
  const shortBeads = beadsSummary.slice(0, 4).join("、");
  const packageName = packageDetails().name;

  document.querySelector("#summary-base").textContent = `${getBase().name} · ${getSize().name}`;
  document.querySelector("#summary-beads-count").textContent = `${state.beads.length} 颗`;
  document.querySelector("#summary-charms").textContent = `${getCharmNames()} · ${packageName}`;
  document.querySelector("#summary-price").textContent = currency(totalPrice());

  document.querySelector("#review-name").textContent = `${getBase().name} · ${state.styleName}`;
  document.querySelector("#review-beads").textContent = shortBeads
    ? `${shortBeads}${state.beads.length > 4 ? " 等" : ""}`
    : "待选择";
  document.querySelector("#review-gift").textContent = `${packageName}${state.engraving.trim() ? ` · 刻字「${state.engraving.trim()}」` : ""}`;
  document.querySelector("#review-price").textContent = currency(totalPrice());
  mobilePreviewPrice.textContent = currency(totalPrice());
  mobilePreviewCount.textContent = `${state.beads.length} 颗`;
}

function renderCheckoutSummary() {
  const lines = [
    ["作品名称", `${getBase().name} · ${state.styleName}`],
    ["尺寸", getSize().name],
    ["珠材序列", state.beads.map((beadId) => beadDetails(beadId).name).join("、") || "待补充"],
    ["吊饰", getCharmNames()],
    ["礼盒", packageDetails().name],
    ["刻字", state.engraving.trim() || "无"],
  ];

  document.querySelector("#checkout-lines").innerHTML = lines
    .map(
      ([label, value]) => `
        <div class="checkout-line">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");

  document.querySelector("#checkout-total").textContent = currency(totalPrice() + deliveryFee());
}

function renderRecipes() {
  recipePills.forEach((pill) => {
    pill.classList.toggle("is-active", pill.dataset.recipe === state.recipe);
  });
}

function setDrawerState(expanded = state.drawerExpanded) {
  state.drawerExpanded = expanded;
  flowPanel.classList.toggle("is-expanded", expanded);
  drawerToggle.setAttribute("aria-expanded", String(expanded));
  drawerToggleState.textContent = expanded ? "收起" : "展开";
}

function renderSteps() {
  stepChips.forEach((chip) => {
    chip.classList.toggle("is-active", Number(chip.dataset.step) === state.step);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", Number(panel.dataset.panel) === state.step);
  });

  document.querySelector("#prev-step").disabled = state.step === 0;
  document.querySelector("#next-step").textContent = state.step === panels.length - 1 ? "完成这套配置" : "下一步";
  mobilePrevStep.disabled = state.step === 0;
  mobileNextStep.textContent = state.step === panels.length - 1 ? "去确认" : "下一步";
  mobileStepCounter.textContent = `${String(state.step + 1).padStart(2, "0")} / ${String(stepMeta.length).padStart(2, "0")}`;
  mobileStepTitle.textContent = stepMeta[state.step].title;
  drawerProgressFill.style.width = `${((state.step + 1) / stepMeta.length) * 100}%`;
  mobileActionPrice.textContent = currency(totalPrice() + deliveryFee());
  mobileActionCaption.textContent =
    state.step === panels.length - 1 ? "确认后生成订单单" : `下一步：${stepMeta[state.step].next}`;
}

function renderAll() {
  renderBases();
  renderSizes();
  renderBeads();
  renderCharms();
  renderPackages();
  renderDesignStrip();
  renderPreview();
  renderSummary();
  renderCheckoutSummary();
  renderRecipes();
  renderSteps();
  setDrawerState(state.drawerExpanded);
  engravingInput.value = state.engraving;
}

function focusMobileComposer() {
  if (!isMobileViewport()) return;
  customizerSection.scrollIntoView({ behavior: "smooth", block: "start" });
  flowPanel.scrollTo({ top: 0, behavior: "smooth" });
}

function setStep(nextStep, shouldFocus = true) {
  state.step = Math.max(0, Math.min(panels.length - 1, nextStep));
  if (isMobileViewport()) {
    setDrawerState(true);
  }
  renderSteps();
  if (shouldFocus) {
    focusMobileComposer();
  }
}

function applyRecipe(recipeKey) {
  const recipe = catalog.recipes[recipeKey];
  state.recipe = recipeKey;
  state.base = recipe.base;
  state.size = recipe.size;
  state.beads = [...recipe.beads];
  state.charms = [...recipe.charms];
  state.package = recipe.package;
  state.engraving = recipe.engraving;
  state.styleName = recipe.styleName;
  renderAll();
}

function rebalancePattern() {
  if (!state.beads.length) return;
  const pivot = [...state.beads];
  const left = [];
  const right = [];

  pivot.forEach((beadId, index) => {
    if (index % 2 === 0) {
      left.push(beadId);
    } else {
      right.unshift(beadId);
    }
  });

  state.beads = [...left, ...right];
  renderAll();
}

function updateStyleName() {
  const counts = state.beads.reduce((acc, beadId) => {
    acc[beadId] = (acc[beadId] || 0) + 1;
    return acc;
  }, {});

  const topBead = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
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

function openModal() {
  renderCheckoutSummary();
  state.mobileCheckoutOpen = true;
  modal.hidden = false;
  modalBody.hidden = false;
  successPanel.hidden = true;
  checkoutForm.elements.delivery.value = state.delivery;
  document.body.style.overflow = "hidden";
  if (isMobileViewport()) {
    modalBody.scrollTo({ top: 0, behavior: "auto" });
  }
}

function closeModal() {
  state.mobileCheckoutOpen = false;
  modal.hidden = true;
  document.body.style.overflow = "";
}

baseOptions.addEventListener("click", (event) => {
  const card = event.target.closest("[data-base-id]");
  if (!card) return;
  state.base = card.dataset.baseId;
  updateStyleName();
  renderAll();
});

sizeOptions.addEventListener("click", (event) => {
  const card = event.target.closest("[data-size-id]");
  if (!card) return;
  state.size = card.dataset.sizeId;
  renderAll();
});

beadOptions.addEventListener("click", (event) => {
  const card = event.target.closest("[data-bead-id]");
  if (!card) return;
  if (state.beads.length >= 12) return;
  state.beads.push(card.dataset.beadId);
  updateStyleName();
  renderAll();
});

designStrip.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  const item = event.target.closest(".strip-item");
  if (!button || !item) return;

  const index = Number(item.dataset.index);
  const action = button.dataset.action;
  const next = [...state.beads];

  if (action === "remove") {
    next.splice(index, 1);
  }

  if (action === "left" && index > 0) {
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
  }

  if (action === "right" && index < next.length - 1) {
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
  }

  state.beads = next;
  updateStyleName();
  renderAll();
});

charmOptions.addEventListener("click", (event) => {
  const card = event.target.closest("[data-charm-id]");
  if (!card) return;
  const charmId = card.dataset.charmId;

  if (state.charms.includes(charmId)) {
    state.charms = state.charms.filter((item) => item !== charmId);
  } else if (state.charms.length < 2) {
    state.charms = [...state.charms, charmId];
  } else {
    state.charms = [state.charms[0], charmId];
  }

  updateStyleName();
  renderAll();
});

packageOptions.addEventListener("click", (event) => {
  const card = event.target.closest("[data-package-id]");
  if (!card) return;
  state.package = card.dataset.packageId;
  renderAll();
});

engravingInput.addEventListener("input", (event) => {
  state.engraving = event.target.value.toUpperCase().trimStart();
  renderAll();
});

recipePills.forEach((pill) => {
  pill.addEventListener("click", () => {
    applyRecipe(pill.dataset.recipe);
  });
});

document.querySelector("#balance-pattern").addEventListener("click", rebalancePattern);
document.querySelector("#reset-pattern").addEventListener("click", () => applyRecipe(state.recipe));

stepChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    setStep(Number(chip.dataset.step));
  });
});

document.querySelector("#prev-step").addEventListener("click", () => {
  setStep(state.step - 1);
});

document.querySelector("#next-step").addEventListener("click", () => {
  if (state.step < panels.length - 1) {
    setStep(state.step + 1);
    return;
  }

  openModal();
});

document.querySelector("#jump-review").addEventListener("click", () => {
  setStep(panels.length - 1);
});

document.querySelector("#open-checkout").addEventListener("click", openModal);
document.querySelector("#open-checkout-final").addEventListener("click", openModal);
document.querySelector("#close-modal").addEventListener("click", closeModal);
document.querySelector("#close-success").addEventListener("click", closeModal);
drawerToggle.addEventListener("click", () => {
  setDrawerState(!state.drawerExpanded);
});
mobilePrevStep.addEventListener("click", () => {
  setStep(state.step - 1);
});
mobileNextStep.addEventListener("click", () => {
  if (state.step < panels.length - 1) {
    setStep(state.step + 1);
    return;
  }

  openModal();
});

modal.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeModal === "true") {
    closeModal();
  }
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const orderCode = `BR-${Math.floor(100000 + Math.random() * 900000)}`;
  state.delivery = checkoutForm.elements.delivery.value;

  modalBody.hidden = true;
  successPanel.hidden = false;
  document.querySelector("#order-code").textContent = `订单编号：${orderCode}`;
  checkoutForm.reset();
});

checkoutForm.elements.delivery.addEventListener("change", (event) => {
  state.delivery = event.target.value;
  renderCheckoutSummary();
  renderSteps();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

window.addEventListener("resize", () => {
  renderPreview();
  renderSteps();
  setDrawerState(state.drawerExpanded);
});

renderAll();
