const STORAGE_KEY = "azamat-print-state-v1";

const defaultState = {
  currentUser: null,
  services: [
    {
      id: "print",
      name: "Баспа қызметтері",
      category: "Баспа қызметтері",
      description: "Қағаздарды А6 форматынан А0 форматына дейін түрлі тығыздықтағы қағаздарға басып шығару. Қағаз тығыздығы: 80 г/м²-ден 230 г/м²-ге дейін. Түрлері: түрлі-түсті және ақ-қара баспа.",
      price: 50,
      time: "10 минуттан бастап",
      popular: true,
      discount: false,
      isNew: false,
      hidden: false
    },
    {
      id: "laser",
      name: "Лазерлік гравировка",
      category: "Гравировка",
      description: "Фанераға, ағашқа, пластикке және органикалық шыныға лазер арқылы кескін түсіру, ою-өрнек салу, жазу жазу, кесу және басып шығару.",
      price: 1200,
      time: "1 жұмыс күні",
      popular: true,
      discount: false,
      isNew: false,
      hidden: false
    },
    {
      id: "uv",
      name: "Ультракүлгін /УК/ басып шығару",
      category: "УК баспа",
      description: "Кез келген қатты әрі тегіс материал бетіне УК технологиясы арқылы сурет салу, жазу жазу және кескін түсіру.",
      price: 2500,
      time: "1-2 жұмыс күні",
      popular: false,
      discount: false,
      isNew: true,
      hidden: false
    },
    {
      id: "sublimation",
      name: "Сублимациялық басып шығару",
      category: "Сыйлықтық өнім",
      description: "Футболкаға, бейсболкаға, саптыаяққа және басқа да бұйымдарға сурет, жазу немесе логотип басу.",
      price: 1800,
      time: "1 жұмыс күні",
      popular: true,
      discount: true,
      isNew: false,
      hidden: false
    },
    {
      id: "souvenirs",
      name: "Кәдесыйлар әзірлеу",
      category: "Кәдесыйлар",
      description: "Фанерадан, ағаштан, пластиктен және органикалық шыныдан түрлі кәдесый бұйымдарын дайындау: «Жеті ата», қоржын, қобдиша, ақшасалғыш, естелік бұйымдар, тойтабақтар, табличкалар, бейдждер, түрлі формадағы мүсіндер, медаль ілгіштер және басқа да бұйымдар.",
      price: 3500,
      time: "2-4 жұмыс күні",
      popular: false,
      discount: false,
      isNew: false,
      hidden: false
    },
    {
      id: "personal",
      name: "Атаулы бұйымдар әзірлеу",
      category: "Сыйлықтық өнім",
      description: "Атаулы және жеке тапсырыспен жасалатын бұйымдарды дайындау: блокноттар, қаламсаптар, салпыншақтар, саптыаяқтар, топперлер және басқа да сыйлықтық өнімдер.",
      price: 1500,
      time: "1-3 жұмыс күні",
      popular: false,
      discount: true,
      isNew: false,
      hidden: false
    },
    {
      id: "photo",
      name: "Фотографиялық қызметтер",
      category: "Фото",
      description: "Суретке түсіру, дайын суреттерді өңдеу, 3×4, A3, A4, A5, A6 форматтарында фотосурет шығару, фотоальбомдар мен коллаждар әзірлеу, слайд-көрсетілім дайындау.",
      price: 500,
      time: "15 минуттан бастап",
      popular: true,
      discount: false,
      isNew: false,
      hidden: false
    },
    {
      id: "video",
      name: "Видеографиялық қызметтер",
      category: "Видео",
      description: "Видеоматериалдарды өңдеу және монтаждау, қысқаша бейнероликтер, видеоашақырулар, видеоқұттықтаулар және еске алу роликтерін дайындау.",
      price: 5000,
      time: "2-5 жұмыс күні",
      popular: false,
      discount: false,
      isNew: false,
      hidden: false
    },
    {
      id: "polygraphy",
      name: "Полиграфиялық қызметтер",
      category: "Полиграфия",
      description: "Құжаттарды жазу, теру, өңдеу және басып шығару. Плакаттар, марапат қағаздары, брошюралар, үнпарақтар, афишалар, буклеттер, ашықхаттар, күнтізбелер, дәмхана мәзірлері, ақпараттық тақталар, табличкалар, бейдждер, визиткалар, каталогтар, портфолиолар және басқа да полиграфиялық өнімдерді әзірлеу. Қосымша қызметтер: ламинаттау және түптеу.",
      price: 700,
      time: "30 минуттан бастап",
      popular: true,
      discount: false,
      isNew: false,
      hidden: false
    },
    {
      id: "egov",
      name: "Электрондық қызметтер",
      category: "Электрондық қызмет",
      description: "EGOV.KZ порталы арқылы мемлекеттік қызметтер алу, арнайы органдарға құжат тапсыру, салық декларацияларын тапсыру, үй және жер кезегіне қою, жеке кәсіпкерлерге арналған құжаттарды әзірлеу және кезеңдік есептерді тапсыру.",
      price: 1000,
      time: "20 минуттан бастап",
      popular: false,
      discount: false,
      isNew: false,
      hidden: false
    },
    {
      id: "computer",
      name: "Компьютерлік қызметтер",
      category: "Компьютер",
      description: "Компьютерге операциялық жүйе орнату, қосымша бағдарламалар орнату, вирустардан тазалау және шағын жөндеу жұмыстарын жүргізу.",
      price: 3000,
      time: "1-2 жұмыс күні",
      popular: false,
      discount: false,
      isNew: true,
      hidden: false
    }
  ],
  priceItems: [
    { id: "p-a4-80-bw", category: "Баспа", service: "Құжат басып шығару", variant: "A4 ақ-қара", format: "A4", material: "Қағаз", density: "80 г/м²", color: "Ақ-қара", price: 50, time: "10 минут", badge: "Танымал", description: "Күнделікті құжаттар мен мәтіндерді стандартты кеңсе қағазына басып шығару.", hidden: false },
    { id: "p-a4-80-color", category: "Баспа", service: "Құжат басып шығару", variant: "A4 түрлі-түсті", format: "A4", material: "Қағаз", density: "80 г/м²", color: "Түрлі-түсті", price: 150, time: "10 минут", badge: "Танымал", description: "Суреті немесе түрлі-түсті элементтері бар құжаттарды басып шығару.", hidden: false },
    { id: "p-a4-160-color", category: "Баспа", service: "Қалың қағазға басу", variant: "A4 түрлі-түсті", format: "A4", material: "Қағаз", density: "160 г/м²", color: "Түрлі-түсті", price: 250, time: "15 минут", badge: "", description: "Сертификат, шақыру қағазы және жарқын парақшалар үшін қалың қағаз.", hidden: false },
    { id: "p-a4-230-color", category: "Баспа", service: "Қалың қағазға басу", variant: "A4 түрлі-түсті", format: "A4", material: "Қағаз", density: "230 г/м²", color: "Түрлі-түсті", price: 350, time: "20 минут", badge: "", description: "Тығыз қағазға сапалы түрлі-түсті баспа.", hidden: false },
    { id: "p-a5-80-bw", category: "Баспа", service: "Құжат басып шығару", variant: "A5 ақ-қара", format: "A5", material: "Қағаз", density: "80 г/м²", color: "Ақ-қара", price: 35, time: "10 минут", badge: "", description: "A5 форматындағы шағын құжаттар мен бланктер.", hidden: false },
    { id: "p-a5-160-color", category: "Баспа", service: "Қалың қағазға басу", variant: "A5 түрлі-түсті", format: "A5", material: "Қағаз", density: "160 г/м²", color: "Түрлі-түсті", price: 180, time: "15 минут", badge: "", description: "Шақыру қағаздары мен шағын жарнамалық материалдарға арналған.", hidden: false },
    { id: "p-a3-160-color", category: "Баспа", service: "Плакат басып шығару", variant: "A3 түрлі-түсті", format: "A3", material: "Қағаз", density: "160 г/м²", color: "Түрлі-түсті", price: 700, time: "30 минут", badge: "Жаңа қызмет", description: "A3 форматындағы жарнама, постер және ақпараттық материал.", hidden: false },
    { id: "p-a3-230-color", category: "Баспа", service: "Плакат басып шығару", variant: "A3 түрлі-түсті", format: "A3", material: "Қағаз", density: "230 г/м²", color: "Түрлі-түсті", price: 950, time: "30 минут", badge: "", description: "Қалың қағаздағы премиум A3 баспа.", hidden: false },
    { id: "p-photo-3x4", category: "Фото", service: "Фото шығару", variant: "3×4 фото", format: "3×4", material: "Фотоқағаз", density: "Жылтыр", color: "Түрлі-түсті", price: 500, time: "15 минут", badge: "Танымал", description: "Құжаттарға арналған 3×4 фотосурет.", hidden: false },
    { id: "p-photo-a4", category: "Фото", service: "Фото шығару", variant: "A4 фото", format: "A4", material: "Фотоқағаз", density: "Жылтыр", color: "Түрлі-түсті", price: 1200, time: "20 минут", badge: "", description: "Жоғары сапалы A4 форматындағы фотосурет.", hidden: false },
    { id: "p-lamination-a4", category: "Полиграфия", service: "Ламинаттау", variant: "A4", format: "A4", material: "Пленка", density: "125 мкм", color: "Мөлдір", price: 350, time: "10 минут", badge: "", description: "Құжатты қорғауға арналған ламинаттау.", hidden: false },
    { id: "p-binding", category: "Полиграфия", service: "Түптеу", variant: "Пластик серіппе", format: "A4", material: "Серіппе", density: "20 бетке дейін", color: "Қара", price: 700, time: "20 минут", badge: "", description: "Құжаттарды жинақы етіп түптеу.", hidden: false },
    { id: "p-business-card", category: "Полиграфия", service: "Визитка", variant: "100 дана", format: "90×50 мм", material: "Картон", density: "300 г/м²", color: "Түрлі-түсті", price: 4500, time: "1 жұмыс күні", badge: "Танымал", description: "Жеке немесе компания визиткаларын дайындау.", hidden: false },
    { id: "p-mug", category: "Сублимация", service: "Саптыаяққа басу", variant: "Ақ саптыаяқ", format: "Стандарт", material: "Керамика", density: "330 мл", color: "Түрлі-түсті", price: 2500, time: "1 жұмыс күні", badge: "Жеңілдік бар", description: "Логотип, сурет немесе жазу басылған саптыаяқ.", hidden: false },
    { id: "p-tshirt", category: "Сублимация", service: "Футболкаға басу", variant: "Бір жақ беті", format: "S-XXL", material: "Мата", density: "Ақ мата", color: "Түрлі-түсті", price: 4500, time: "1-2 жұмыс күні", badge: "", description: "Футболкаға сурет, жазу немесе логотип басу.", hidden: false },
    { id: "p-laser-plywood", category: "Гравировка", service: "Лазерлік гравировка", variant: "Фанера", format: "10×10 см", material: "Фанера", density: "3 мм", color: "Күйдіру", price: 1200, time: "1 жұмыс күні", badge: "", description: "Фанера бетіне жазу, өрнек немесе белгі түсіру.", hidden: false },
    { id: "p-uv-plastic", category: "УК баспа", service: "УК басып шығару", variant: "Пластик беті", format: "A5 дейін", material: "Пластик", density: "Тегіс бет", color: "Түрлі-түсті", price: 3000, time: "1-2 жұмыс күні", badge: "Жаңа қызмет", description: "Қатты әрі тегіс материалға УК технологиясымен басу.", hidden: false },
    { id: "p-egov", category: "Электрондық қызмет", service: "EGOV қызметтері", variant: "Құжат алу", format: "Онлайн", material: "Электронды", density: "Стандарт", color: "Жоқ", price: 1000, time: "20 минут", badge: "", description: "EGOV.KZ порталы арқылы анықтама және мемлекеттік қызметтер алу.", hidden: false }
  ],
  priceItemsEdited: false,
  priceSource: "Ішкі резервтік база",
  reviews: [
    {
      id: "r1",
      name: "Айдана С.",
      rating: 5,
      text: "Визиткалар өте ұқыпты шықты. Түстері анық, қызмет көрсетуі жылы.",
      date: "2026-06-02",
      hidden: false
    },
    {
      id: "r2",
      name: "Ерлан Т.",
      rating: 5,
      text: "Лазерлік гравировка уақытында дайын болды. Сапасына ризамыз.",
      date: "2026-06-07",
      hidden: false
    },
    {
      id: "r3",
      name: "Мадина Қ.",
      rating: 4,
      text: "Фото шығару жылдам, бағасы түсінікті. Қайта келемін.",
      date: "2026-06-11",
      hidden: false
    }
  ],
  contacts: {
    instagram: "https://www.instagram.com/azamat_print?igsh=MWRsajAweTRxYTV0Zw==",
    whatsapp: "+7 771 478 2675",
    telegram: "@azamatprint",
    phone: "+7 771 478 2675",
    gis: "https://2gis.kz/kyzylorda/geo/70000001079913668"
  },
  staff: [
    { id: "admin", username: "admin", password: "admin123", role: "admin" },
    { id: "staff", username: "qyzmetker", password: "print123", role: "staff" }
  ]
};

let state = loadState();
const publicSectionIds = ["home", "services", "reviews", "contacts"];
const pageScreenIds = ["prices", "login", "dashboard"];

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    const saved = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...saved,
      contacts: { ...defaultState.contacts, ...(saved.contacts || {}) },
      priceItems: Array.isArray(saved.priceItems) ? saved.priceItems : structuredClone(defaultState.priceItems)
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function money(value) {
  return `${Number(value || 0).toLocaleString("kk-KZ")} ₸`;
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (quoted && char === '"' && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

function rowsToPriceItems(rows) {
  const [headers, ...dataRows] = rows;
  if (!headers) return [];
  const cleanHeaders = headers.map((header) => header.trim());
  return dataRows.map((row, index) => {
    const entry = Object.fromEntries(cleanHeaders.map((header, column) => [header, row[column] ?? ""]));
    return normalizePriceItem(entry, index);
  }).filter((item) => item.service && item.category);
}

function normalizePriceItem(entry, index = 0) {
  return {
    id: entry.id || `price-${Date.now()}-${index}`,
    category: entry.category || "",
    service: entry.service || "",
    variant: entry.variant || "",
    format: entry.format || "",
    material: entry.material || "",
    density: entry.density || "",
    color: entry.color || "",
    price: Number(entry.price || 0),
    time: entry.time || "",
    badge: entry.badge || "",
    description: entry.description || "",
    hidden: String(entry.hidden || "").toLowerCase() === "true"
  };
}

function priceItemsToCsv(items) {
  const headers = ["id", "category", "service", "variant", "format", "material", "density", "color", "price", "time", "badge", "description", "hidden"];
  const lines = [headers.join(",")];
  items.forEach((item) => {
    lines.push(headers.map((header) => csvEscape(item[header])).join(","));
  });
  return lines.join("\n");
}

async function loadExternalPriceTable() {
  if (state.priceItemsEdited) {
    state.priceSource = "Кабинетте өзгертілген жергілікті база";
    renderPriceSource();
    return;
  }

  try {
    const response = await fetch("data/pricelist.csv", { cache: "no-store" });
    if (!response.ok) throw new Error("CSV not found");
    const rows = parseCsv(await response.text());
    const items = rowsToPriceItems(rows);
    if (!items.length) throw new Error("CSV is empty");
    state.priceItems = items;
    state.priceSource = "Сыртқы CSV кестесі: data/pricelist.csv";
    saveState();
    renderAll();
  } catch {
    state.priceSource = "Сыртқы CSV оқылмады, ішкі резервтік база көрсетілді";
    renderPriceSource();
  }
}

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeHttpUrl(value) {
  try {
    const url = new URL(String(value));
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function normalizePhone(phone) {
  return String(phone).replace(/\D/g, "");
}

function whatsappUrl() {
  return `https://wa.me/${normalizePhone(state.contacts.whatsapp)}?text=${encodeURIComponent("Сәлеметсіз бе! Azamat Print қызметтері туралы ақпарат алғым келеді.")}`;
}

function contactLinks() {
  const telegramName = state.contacts.telegram.replace(/^@/, "");
  return [
    ["Инстаграм", safeHttpUrl(state.contacts.instagram)],
    ["Уатсап", whatsappUrl()],
    ["Телеграм", safeHttpUrl(`https://t.me/${telegramName}`)],
    ["Телефон", `tel:${normalizePhone(state.contacts.phone)}`],
    ["2GIS", safeHttpUrl(state.contacts.gis)]
  ];
}

function visibleServices() {
  return state.services.filter((service) => !service.hidden);
}

function visiblePriceItems() {
  return state.priceItems.filter((item) => !item.hidden);
}

function getCategories() {
  return [...new Set(visiblePriceItems().map((item) => item.category).filter(Boolean))];
}

function getMaterials() {
  return [...new Set(visiblePriceItems().map((item) => item.material).filter(Boolean))];
}

function renderAll() {
  renderServices();
  renderCategories();
  renderPrices();
  renderReviews();
  renderContacts();
  renderDashboard();
  updateAuthUi();
  showRoute(false);
}

function showRoute(shouldScroll = true) {
  const hash = window.location.hash || "#home";
  const targetId = hash.slice(1);
  const isPublicRoute = publicSectionIds.includes(targetId);
  const isPageRoute = pageScreenIds.includes(targetId);

  if (targetId === "dashboard" && !state.currentUser) {
    window.location.hash = "login";
    return;
  }

  document.querySelectorAll(".public-section").forEach((section) => {
    section.classList.toggle("hidden", isPageRoute);
  });

  document.querySelectorAll(".page-screen").forEach((section) => {
    const shouldShow = section.id === targetId;
    section.classList.toggle("hidden", !shouldShow);
    if (shouldShow) section.classList.add("visible");
  });

  if (!isPublicRoute && !isPageRoute) {
    window.location.hash = "home";
    return;
  }

  const target = document.querySelector(hash);
  if (target && shouldScroll) {
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function renderServices() {
  const root = document.querySelector("#serviceAccordion");
  root.innerHTML = visibleServices().map((service, index) => `
    <article class="accordion-item ${index === 0 ? "open" : ""}">
      <button class="accordion-trigger" type="button" aria-expanded="${index === 0}">
        <span>${esc(service.name)}</span>
        <span>${index === 0 ? "−" : "+"}</span>
      </button>
      <div class="accordion-panel">
        <div class="accordion-content">
          <p>${esc(service.description)}</p>
          <div class="card-actions">
            <a class="btn small primary" href="${whatsappUrl()}" target="_blank" rel="noreferrer">Байланысу</a>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  root.querySelectorAll(".accordion-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.querySelector("span:last-child").textContent = isOpen ? "−" : "+";
    });
  });
}

function renderCategories() {
  const select = document.querySelector("#categoryFilter");
  const current = select.value;
  select.innerHTML = `<option value="all">Барлық санаттар</option>${getCategories().map((category) => `<option value="${esc(category)}">${esc(category)}</option>`).join("")}`;
  select.value = [...getCategories(), "all"].includes(current) ? current : "all";

  const materialSelect = document.querySelector("#materialFilter");
  const currentMaterial = materialSelect.value;
  materialSelect.innerHTML = `<option value="all">Барлық материалдар</option>${getMaterials().map((material) => `<option value="${esc(material)}">${esc(material)}</option>`).join("")}`;
  materialSelect.value = [...getMaterials(), "all"].includes(currentMaterial) ? currentMaterial : "all";
}

function renderPrices() {
  const root = document.querySelector("#priceGrid");
  const query = document.querySelector("#searchInput").value.trim().toLowerCase();
  const category = document.querySelector("#categoryFilter").value;
  const material = document.querySelector("#materialFilter").value;
  const sort = document.querySelector("#sortSelect").value;

  let items = visiblePriceItems().filter((item) => {
    const haystack = [item.category, item.service, item.variant, item.format, item.material, item.density, item.color, item.description].join(" ").toLowerCase();
    const matchesSearch = haystack.includes(query);
    const matchesCategory = category === "all" || !category || item.category === category;
    const matchesMaterial = material === "all" || !material || item.material === material;
    return matchesSearch && matchesCategory && matchesMaterial;
  });

  if (sort === "priceAsc") items.sort((a, b) => a.price - b.price);
  if (sort === "priceDesc") items.sort((a, b) => b.price - a.price);
  if (sort === "popular") items = items.filter((item) => item.badge === "Танымал");

  root.innerHTML = items.length ? items.map((item) => `
    <article class="price-card">
      <div class="badges">${priceBadges(item)}</div>
      <h3>${esc(item.service)}</h3>
      <p class="price-variant">${esc(item.variant)}</p>
      <dl class="price-specs">
        <div><dt>Формат</dt><dd>${esc(item.format || "Көрсетілмеген")}</dd></div>
        <div><dt>Материал</dt><dd>${esc(item.material || "Көрсетілмеген")}</dd></div>
        <div><dt>Тығыздық</dt><dd>${esc(item.density || "Көрсетілмеген")}</dd></div>
        <div><dt>Түс</dt><dd>${esc(item.color || "Көрсетілмеген")}</dd></div>
      </dl>
      <p class="muted">${esc(item.description)}</p>
      <div class="price-meta">
        <span class="badge">${esc(item.category)}</span>
        <span class="badge">${esc(item.time)}</span>
      </div>
      <div class="price-value">${money(item.price)}</div>
      <a class="btn primary" href="${whatsappUrl()}" target="_blank" rel="noreferrer">Байланысу</a>
    </article>
  `).join("") : `<div class="empty-state">Бұл сүзгі бойынша қызмет табылмады.</div>`;

  renderPriceSource();
}

function renderPriceSource() {
  const note = document.querySelector("#priceSourceNote");
  if (note) note.textContent = `Дерек көзі: ${state.priceSource}. ${visiblePriceItems().length} позиция көрсетілуде.`;
}

function priceBadges(item) {
  const list = [];
  if (item.badge) list.push(item.badge);
  return list.map((badge) => `<span class="badge">${esc(badge)}</span>`).join("");
}

function renderReviews() {
  const root = document.querySelector("#reviewsGrid");
  const reviews = state.reviews.filter((review) => !review.hidden);
  root.innerHTML = reviews.length ? reviews.map((review) => `
    <article class="review-card">
      <div>
        <h3>${esc(review.name)}</h3>
        <p class="stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
      </div>
      <p class="muted">${esc(review.text)}</p>
      <span class="badge">${esc(review.date)}</span>
    </article>
  `).join("") : `<div class="empty-state">Әзірге көрсетілетін пікір жоқ.</div>`;
}

function renderContacts() {
  const buttons = contactLinks().map(([label, href]) => `<a class="btn primary" href="${esc(href)}" target="_blank" rel="noreferrer">${esc(label)}</a>`).join("");
  document.querySelector("#contactButtons").innerHTML = buttons;
  document.querySelector("#contactDetails").innerHTML = `
    <div class="contact-line"><strong>Инстаграм:</strong><br>${esc(state.contacts.instagram)}</div>
    <div class="contact-line"><strong>Уатсап:</strong><br>${esc(state.contacts.whatsapp)}</div>
    <div class="contact-line"><strong>Телеграм:</strong><br>${esc(state.contacts.telegram)}</div>
    <div class="contact-line"><strong>Телефон:</strong><br>${esc(state.contacts.phone)}</div>
    <div class="contact-line"><strong>2GIS:</strong><br>${esc(state.contacts.gis)}</div>
  `;
}

function renderDashboard() {
  if (!state.currentUser) return;
  renderManageServices();
  renderManageReviews();
  renderManageContacts();
  renderManageStaff();
}

function isAdmin() {
  return state.currentUser?.role === "admin";
}

function updateAuthUi() {
  const dashboard = document.querySelector("#dashboard");
  const role = document.querySelector("#dashboardRole");
  if (!state.currentUser) dashboard.classList.add("hidden");
  role.textContent = isAdmin() ? "Әкімші панелі" : "Қызметкер панелі";
  document.querySelectorAll(".admin-only").forEach((node) => {
    node.classList.toggle("hidden", !isAdmin());
  });
  document.querySelectorAll("#manageContacts, #manageStaff").forEach((node) => {
    node.classList.toggle("hidden", !isAdmin());
  });
  const activeAdminPanel = ["manageContacts", "manageStaff"].includes(document.querySelector(".tab-panel.active")?.id);
  if (!isAdmin() && activeAdminPanel) {
    document.querySelectorAll(".tab").forEach((button) => button.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    document.querySelector('[data-tab="manageServices"]').classList.add("active");
    document.querySelector("#manageServices").classList.add("active");
  }
}

function renderManageServices() {
  const root = document.querySelector("#manageServices");
  const addForm = `
    <form class="admin-row" data-add-service>
      <h3>Прайс жолын қосу</h3>
      <div class="admin-grid">
        <label><span>Санат</span><input name="category" required placeholder="Баспа"></label>
        <label><span>Қызмет атауы</span><input name="service" required placeholder="Құжат басып шығару"></label>
        <label><span>Нұсқа</span><input name="variant" placeholder="A4 түрлі-түсті"></label>
        <label><span>Формат</span><input name="format" placeholder="A4"></label>
        <label><span>Материал</span><input name="material" placeholder="Қағаз"></label>
        <label><span>Тығыздық</span><input name="density" placeholder="160 г/м²"></label>
        <label><span>Түс</span><input name="color" placeholder="Түрлі-түсті"></label>
        <label><span>Бағасы</span><input name="price" type="number" min="0" required></label>
        <label><span>Мерзімі</span><input name="time" required></label>
        <label><span>Белгі</span><input name="badge" placeholder="Танымал"></label>
      </div>
      <label><span>Қысқаша сипаттамасы</span><textarea name="description" rows="3" required></textarea></label>
      <button class="btn primary small" type="submit">Қосу</button>
    </form>
  `;

  const tools = `
    <div class="admin-row csv-tools">
      <h3>Сыртқы CSV кестесі</h3>
      <p class="muted">Бағалар негізгі түрде <strong>data/pricelist.csv</strong> кестесінен алынады. Бағандар: id, category, service, variant, format, material, density, color, price, time, badge, description, hidden.</p>
      <div class="card-actions">
        <label class="file-button">
          <span>CSV импорттау</span>
          <input type="file" id="csvImport" accept=".csv,text/csv">
        </label>
        <button class="btn small" type="button" id="downloadCsv">CSV жүктеу</button>
        <button class="btn small" type="button" id="resetCsv">Сыртқы кестені қайта оқу</button>
      </div>
      <p class="form-note" id="csvNote">${esc(state.priceSource)}</p>
    </div>
  `;

  root.innerHTML = tools + addForm + state.priceItems.map((item) => `
    <form class="admin-row price-admin-row" data-price-id="${item.id}">
      <h3>${esc(item.service)} <span>${esc(item.variant)}</span></h3>
      <div class="admin-grid">
        <label><span>Санат</span><input name="category" value="${esc(item.category)}"></label>
        <label><span>Қызмет атауы</span><input name="service" value="${esc(item.service)}"></label>
        <label><span>Нұсқа</span><input name="variant" value="${esc(item.variant)}"></label>
        <label><span>Формат</span><input name="format" value="${esc(item.format)}"></label>
        <label><span>Материал</span><input name="material" value="${esc(item.material)}"></label>
        <label><span>Тығыздық</span><input name="density" value="${esc(item.density)}"></label>
        <label><span>Түс</span><input name="color" value="${esc(item.color)}"></label>
        <label><span>Бағасы</span><input name="price" type="number" min="0" value="${item.price}"></label>
        <label><span>Орындалу мерзімі</span><input name="time" value="${esc(item.time)}"></label>
        <label><span>Белгі</span><input name="badge" value="${esc(item.badge)}"></label>
      </div>
      <label><span>Қысқаша сипаттамасы</span><textarea name="description" rows="3">${esc(item.description)}</textarea></label>
      <div class="inline-checks">
        <label><input name="hidden" type="checkbox" ${item.hidden ? "checked" : ""}> Прайстан жасыру</label>
      </div>
      <div class="card-actions">
        <button class="btn primary small" type="submit">Сақтау</button>
        ${isAdmin() ? `<button class="btn danger small" type="button" data-delete-price="${item.id}">Жою</button>` : ""}
      </div>
    </form>
  `).join("");
}

function renderManageReviews() {
  const root = document.querySelector("#manageReviews");
  root.innerHTML = state.reviews.map((review) => `
    <form class="admin-row" data-review-id="${review.id}">
      <div class="admin-grid">
        <label><span>Аты-жөні</span><input name="name" value="${esc(review.name)}" ${isAdmin() ? "" : "readonly"}></label>
        <label><span>Бағалау</span><input name="rating" type="number" min="1" max="5" value="${review.rating}" ${isAdmin() ? "" : "readonly"}></label>
        <label><span>Күні</span><input name="date" value="${esc(review.date)}" ${isAdmin() ? "" : "readonly"}></label>
      </div>
      <label><span>Пікір мәтіні</span><textarea name="text" rows="3" ${isAdmin() ? "" : "readonly"}>${esc(review.text)}</textarea></label>
      <div class="inline-checks">
        <label><input name="hidden" type="checkbox" ${review.hidden ? "checked" : ""} ${isAdmin() ? "" : "disabled"}> Жасыру</label>
      </div>
      <div class="card-actions">
        ${isAdmin() ? `<button class="btn primary small" type="submit">Сақтау</button><button class="btn danger small" type="button" data-delete-review="${review.id}">Жою</button>` : `<span class="muted">Пікірлерді тек әкімші өңдей алады.</span>`}
      </div>
    </form>
  `).join("");
}

function renderManageContacts() {
  const root = document.querySelector("#manageContacts");
  root.innerHTML = `
    <form class="admin-row" data-contacts>
      <h3>Байланыс деректері</h3>
      <div class="admin-grid">
        <label><span>Инстаграм</span><input name="instagram" value="${esc(state.contacts.instagram)}"></label>
        <label><span>Уатсап</span><input name="whatsapp" value="${esc(state.contacts.whatsapp)}"></label>
        <label><span>Телеграм</span><input name="telegram" value="${esc(state.contacts.telegram)}"></label>
        <label><span>Телефон</span><input name="phone" value="${esc(state.contacts.phone)}"></label>
        <label><span>2GIS</span><input name="gis" value="${esc(state.contacts.gis)}"></label>
      </div>
      <button class="btn primary small" type="submit">Сақтау</button>
    </form>
  `;
}

function renderManageStaff() {
  const root = document.querySelector("#manageStaff");
  root.innerHTML = `
    <form class="admin-row" data-add-staff>
      <h3>Қызметкер қосу</h3>
      <div class="admin-grid">
        <label><span>Логин</span><input name="username" required></label>
        <label><span>Құпиясөз</span><input name="password" required></label>
        <label><span>Рөлі</span><select name="role"><option value="staff">Қызметкер</option><option value="admin">Әкімші</option></select></label>
      </div>
      <button class="btn primary small" type="submit">Қосу</button>
    </form>
    ${state.staff.map((person) => `
      <form class="staff-row" data-staff-id="${person.id}">
        <h3>${esc(person.username)}</h3>
        <div class="admin-grid">
          <label><span>Логин</span><input name="username" value="${esc(person.username)}" ${person.id === "admin" ? "readonly" : ""}></label>
          <label><span>Құпиясөз</span><input name="password" value="${esc(person.password)}"></label>
          <label><span>Рөлі</span><select name="role" ${person.id === "admin" ? "disabled" : ""}><option value="staff" ${person.role === "staff" ? "selected" : ""}>Қызметкер</option><option value="admin" ${person.role === "admin" ? "selected" : ""}>Әкімші</option></select></label>
        </div>
        <div class="card-actions">
          <button class="btn primary small" type="submit">Сақтау</button>
          ${person.id === "admin" ? `<span class="badge">Негізгі әкімші</span>` : `<button class="btn danger small" type="button" data-delete-staff="${person.id}">Жою</button>`}
        </div>
      </form>
    `).join("")}
  `;
}

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const open = document.body.classList.toggle("nav-open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  });
});

["searchInput", "categoryFilter", "materialFilter", "sortSelect"].forEach((id) => {
  document.querySelector(`#${id}`).addEventListener("input", renderPrices);
});

document.querySelector("#reviewForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  state.reviews.unshift({
    id: `review-${Date.now()}`,
    name: data.get("name").trim(),
    rating: Number(data.get("rating")),
    text: data.get("text").trim(),
    date: new Date().toISOString().slice(0, 10),
    hidden: false
  });
  saveState();
  form.reset();
  const note = document.querySelector("#reviewNote");
  note.textContent = "Пікіріңіз жіберілді. Рақмет!";
  note.className = "form-note success";
  renderReviews();
});

document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const user = state.staff.find((person) => person.username === data.get("username") && person.password === data.get("password"));
  if (!user) {
    document.querySelector("#loginError").textContent = "Логин немесе құпиясөз дұрыс емес.";
    return;
  }
  state.currentUser = { username: user.username, role: user.role };
  saveState();
  document.querySelector("#loginError").textContent = "";
  renderAll();
  window.location.hash = "dashboard";
});

document.querySelector("#logoutButton").addEventListener("click", () => {
  state.currentUser = null;
  saveState();
  renderAll();
  window.location.hash = "login";
});

document.querySelector(".tabs").addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  if (!tab) return;
  document.querySelectorAll(".tab").forEach((button) => button.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
  tab.classList.add("active");
  document.querySelector(`#${tab.dataset.tab}`).classList.add("active");
});

document.querySelector("#dashboard").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;

  if (form.matches("[data-add-service]") && state.currentUser) {
    const data = new FormData(form);
    state.priceItems.unshift({
      id: `price-${Date.now()}`,
      category: data.get("category").trim(),
      service: data.get("service").trim(),
      variant: data.get("variant").trim(),
      format: data.get("format").trim(),
      material: data.get("material").trim(),
      density: data.get("density").trim(),
      color: data.get("color").trim(),
      price: Number(data.get("price")),
      time: data.get("time").trim(),
      badge: data.get("badge").trim(),
      description: data.get("description").trim(),
      hidden: false
    });
    state.priceItemsEdited = true;
    state.priceSource = "Кабинетте өзгертілген жергілікті база";
  }

  if (form.matches("[data-price-id]")) {
    const item = state.priceItems.find((entry) => entry.id === form.dataset.priceId);
    const data = new FormData(form);
    item.category = data.get("category").trim();
    item.service = data.get("service").trim();
    item.variant = data.get("variant").trim();
    item.format = data.get("format").trim();
    item.material = data.get("material").trim();
    item.density = data.get("density").trim();
    item.color = data.get("color").trim();
    item.price = Number(data.get("price"));
    item.time = data.get("time").trim();
    item.badge = data.get("badge").trim();
    item.description = data.get("description").trim();
    item.hidden = data.has("hidden");
    state.priceItemsEdited = true;
    state.priceSource = "Кабинетте өзгертілген жергілікті база";
  }

  if (form.matches("[data-review-id]") && isAdmin()) {
    const review = state.reviews.find((item) => item.id === form.dataset.reviewId);
    const data = new FormData(form);
    review.name = data.get("name").trim();
    review.rating = Number(data.get("rating"));
    review.date = data.get("date").trim();
    review.text = data.get("text").trim();
    review.hidden = data.has("hidden");
  }

  if (form.matches("[data-contacts]") && isAdmin()) {
    state.contacts = Object.fromEntries(new FormData(form));
  }

  if (form.matches("[data-add-staff]") && isAdmin()) {
    const data = new FormData(form);
    state.staff.push({
      id: `staff-${Date.now()}`,
      username: data.get("username").trim(),
      password: data.get("password").trim(),
      role: data.get("role")
    });
  }

  if (form.matches("[data-staff-id]") && isAdmin()) {
    const person = state.staff.find((item) => item.id === form.dataset.staffId);
    const data = new FormData(form);
    if (person.id !== "admin") {
      person.username = data.get("username").trim();
      person.role = data.get("role");
    }
    person.password = data.get("password").trim();
  }

  saveState();
  renderAll();
});

document.querySelector("#dashboard").addEventListener("click", (event) => {
  const serviceId = event.target.dataset.deleteService;
  const priceId = event.target.dataset.deletePrice;
  const reviewId = event.target.dataset.deleteReview;
  const staffId = event.target.dataset.deleteStaff;

  if (serviceId && isAdmin()) {
    state.services = state.services.filter((service) => service.id !== serviceId);
  }
  if (priceId && isAdmin()) {
    state.priceItems = state.priceItems.filter((item) => item.id !== priceId);
    state.priceItemsEdited = true;
    state.priceSource = "Кабинетте өзгертілген жергілікті база";
  }
  if (reviewId && isAdmin()) {
    state.reviews = state.reviews.filter((review) => review.id !== reviewId);
  }
  if (staffId && isAdmin()) {
    state.staff = state.staff.filter((person) => person.id !== staffId);
  }

  if (serviceId || priceId || reviewId || staffId) {
    saveState();
    renderAll();
  }
});

document.querySelector("#dashboard").addEventListener("change", async (event) => {
  if (event.target.id !== "csvImport") return;
  const file = event.target.files?.[0];
  if (!file) return;
  const text = await file.text();
  const items = rowsToPriceItems(parseCsv(text));
  const note = document.querySelector("#csvNote");
  if (!items.length) {
    if (note) note.textContent = "CSV оқылмады: баған атауларын тексеріңіз.";
    return;
  }
  state.priceItems = items;
  state.priceItemsEdited = true;
  state.priceSource = `Импортталған CSV: ${file.name}`;
  saveState();
  renderAll();
});

document.querySelector("#dashboard").addEventListener("click", async (event) => {
  if (event.target.id === "downloadCsv") {
    const blob = new Blob([priceItemsToCsv(state.priceItems)], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "azamat-pricelist.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  if (event.target.id === "resetCsv") {
    state.priceItemsEdited = false;
    await loadExternalPriceTable();
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

renderAll();
window.addEventListener("hashchange", () => showRoute(true));
loadExternalPriceTable();
