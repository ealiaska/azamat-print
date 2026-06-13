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
const publicSectionIds = ["home", "services", "contacts-quick", "reviews", "contacts"];
const pageScreenIds = ["prices", "login", "dashboard"];

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    const saved = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...saved,
      contacts: { ...defaultState.contacts, ...(saved.contacts || {}) }
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

function getCategories() {
  return [...new Set(visibleServices().map((service) => service.category))];
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
}

function renderPrices() {
  const root = document.querySelector("#priceGrid");
  const query = document.querySelector("#searchInput").value.trim().toLowerCase();
  const category = document.querySelector("#categoryFilter").value;
  const sort = document.querySelector("#sortSelect").value;

  let items = visibleServices().filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(query) || service.description.toLowerCase().includes(query);
    const matchesCategory = category === "all" || !category || service.category === category;
    return matchesSearch && matchesCategory;
  });

  if (sort === "priceAsc") items.sort((a, b) => a.price - b.price);
  if (sort === "priceDesc") items.sort((a, b) => b.price - a.price);
  if (sort === "popular") items = items.filter((service) => service.popular);

  root.innerHTML = items.length ? items.map((service) => `
    <article class="price-card">
      <div class="badges">${badges(service)}</div>
      <h3>${esc(service.name)}</h3>
      <p class="muted">${esc(service.description)}</p>
      <div class="price-meta">
        <span class="badge">${esc(service.category)}</span>
        <span class="badge">${esc(service.time)}</span>
      </div>
      <div class="price-value">${money(service.price)}</div>
      <a class="btn primary" href="${whatsappUrl()}" target="_blank" rel="noreferrer">Байланысу</a>
    </article>
  `).join("") : `<div class="empty-state">Бұл сүзгі бойынша қызмет табылмады.</div>`;
}

function badges(service) {
  const list = [];
  if (service.popular) list.push("Танымал");
  if (service.discount) list.push("Жеңілдік бар");
  if (service.isNew) list.push("Жаңа қызмет");
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
  document.querySelector("#quickContactButtons").innerHTML = buttons;
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
      <h3>Жаңа қызмет қосу</h3>
      <div class="admin-grid">
        <label><span>Атауы</span><input name="name" required></label>
        <label><span>Санаты</span><input name="category" required></label>
        <label><span>Бағасы</span><input name="price" type="number" min="0" required></label>
        <label><span>Мерзімі</span><input name="time" required></label>
      </div>
      <label><span>Қысқаша сипаттамасы</span><textarea name="description" rows="3" required></textarea></label>
      <button class="btn primary small" type="submit">Қосу</button>
    </form>
  `;

  root.innerHTML = addForm + state.services.map((service) => `
    <form class="admin-row" data-service-id="${service.id}">
      <h3>${esc(service.name)}</h3>
      <div class="admin-grid">
        <label><span>Атауы</span><input name="name" value="${esc(service.name)}"></label>
        <label><span>Санаты</span><input name="category" value="${esc(service.category)}"></label>
        <label><span>Бағасы</span><input name="price" type="number" min="0" value="${service.price}"></label>
        <label><span>Орындалу мерзімі</span><input name="time" value="${esc(service.time)}"></label>
      </div>
      <label><span>Қысқаша сипаттамасы</span><textarea name="description" rows="3">${esc(service.description)}</textarea></label>
      <div class="inline-checks">
        <label><input name="popular" type="checkbox" ${service.popular ? "checked" : ""}> Танымал</label>
        <label><input name="discount" type="checkbox" ${service.discount ? "checked" : ""}> Жеңілдік бар</label>
        <label><input name="isNew" type="checkbox" ${service.isNew ? "checked" : ""}> Жаңа қызмет</label>
        <label><input name="hidden" type="checkbox" ${service.hidden ? "checked" : ""}> Уақытша жасыру</label>
      </div>
      <div class="card-actions">
        <button class="btn primary small" type="submit">Сақтау</button>
        ${isAdmin() ? `<button class="btn danger small" type="button" data-delete-service="${service.id}">Жою</button>` : ""}
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

["searchInput", "categoryFilter", "sortSelect"].forEach((id) => {
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
    state.services.push({
      id: `service-${Date.now()}`,
      name: data.get("name").trim(),
      category: data.get("category").trim(),
      description: data.get("description").trim(),
      price: Number(data.get("price")),
      time: data.get("time").trim(),
      popular: false,
      discount: false,
      isNew: true,
      hidden: false
    });
  }

  if (form.matches("[data-service-id]")) {
    const service = state.services.find((item) => item.id === form.dataset.serviceId);
    const data = new FormData(form);
    service.name = data.get("name").trim();
    service.category = data.get("category").trim();
    service.price = Number(data.get("price"));
    service.time = data.get("time").trim();
    service.description = data.get("description").trim();
    service.popular = data.has("popular");
    service.discount = data.has("discount");
    service.isNew = data.has("isNew");
    service.hidden = data.has("hidden");
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
  const reviewId = event.target.dataset.deleteReview;
  const staffId = event.target.dataset.deleteStaff;

  if (serviceId && isAdmin()) {
    state.services = state.services.filter((service) => service.id !== serviceId);
  }
  if (reviewId && isAdmin()) {
    state.reviews = state.reviews.filter((review) => review.id !== reviewId);
  }
  if (staffId && isAdmin()) {
    state.staff = state.staff.filter((person) => person.id !== staffId);
  }

  if (serviceId || reviewId || staffId) {
    saveState();
    renderAll();
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
