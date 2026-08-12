const weeks = [
  {
    id: 1,
    title: "الأسبوع ١",
    theme: "بداية بانضباط",
    dates: ["١٤٤٨/٠٣/١٠هـ", "١٤٤٨/٠٣/١٤هـ"],
    programs: [
      "برنامج التهيئة الإرشادية",
      "تفعيل إطار توثيق العلاقة بين الأسرة والمدرسة (مجالس أولياء الأمور)",
      "التوعية بقواعد السلوك والمواطنة"
    ],
    programIdeas: [
      "بوابة البداية: استقبال إرشادي وتعريف بخدمات التوجيه الطلابي.",
      "ميثاق مدرستي: صياغة قواعد السلوك والانضباط بمشاركة الطلاب.",
      "أسرتي شريك نجاحي: بطاقة أو رمز QR للأسرة يتضمن أهم الإرشادات وقناة للمشاركة.",
      "سلوك اليوم: رسالة صباحية قصيرة مرتبطة بالانضباط والمواطنة.",
      "قدوتي في الانضباط: تكريم نموذج طلابي متميز في الالتزام.",
      "موقف وقرار: بطاقات مواقف حول الحقوق والواجبات وقواعد السلوك."
    ],
    value: "الانضباط",
    valueIdeas: [
      "تحدي أسبوع بلا تأخر.",
      "بطاقة متابعة ذاتية للالتزام بالوقت والمهام.",
      "لوحة الفصل الأكثر انضباطًا.",
      "دقيقة تنظيم الوقت في بداية اليوم.",
      "مهمة يومية: حقيبتي ووقتي ومسؤوليتي.",
      "وسام قدوة الانضباط."
    ]
  },
  {
    id: 2,
    title: "الأسبوع ٢",
    theme: "إيجابي في واقعي ورقمي",
    dates: ["١٤٤٨/٠٣/١٧هـ", "١٤٤٨/٠٣/٢١هـ"],
    programs: [
      "برنامج تعزيز السلوك الإيجابي",
      "الاستخدام الآمن للإنترنت والألعاب الإلكترونية",
      "المجلس الطلابي"
    ],
    programIdeas: [
      "المحقق الرقمي: تحليل رسائل وروابط افتراضية وتمييز الآمن من الخطر.",
      "فكّر قبل أن تنقر: بطاقات قرارات رقمية سريعة.",
      "صيد السلوك الجميل: رصد سلوك إيجابي حقيقي وتكريم صاحبه.",
      "صوتك يصنع الفرق: استقبال فكرة تطويرية من كل فصل للمجلس الطلابي.",
      "ميثاق اللاعب الذكي: قواعد تنظيم الوقت والخصوصية داخل الألعاب.",
      "دقيقة مواطن رقمي: رسالة قصيرة عن أثر الكلمة والصورة في العالم الرقمي."
    ],
    value: "الانضباط + الإيجابية",
    valueIdeas: [
      "تحدي ٥ أيام بلا مخالفة سلوكية.",
      "كلمة إيجابية كل صباح.",
      "غيّر العبارة: تحويل جملة سلبية إلى صياغة إيجابية.",
      "رصيد السلوك الإيجابي داخل الفصل.",
      "امتنان اليوم: تسجيل موقف إيجابي واحد.",
      "وسام الإيجابية المنضبطة."
    ]
  },
  {
    id: 3,
    title: "الأسبوع ٣",
    theme: "نتسامح… فنرتقي",
    dates: ["١٤٤٨/٠٣/٢٤هـ", "١٤٤٨/٠٣/٢٨هـ"],
    programs: [
      "برنامج تعزيز السلوك الإيجابي",
      "الاستخدام الآمن للإنترنت والألعاب الإلكترونية",
      "المجلس الطلابي"
    ],
    programIdeas: [
      "نختلف ونبقى أصدقاء: مواقف حوارية حول تقبل الاختلاف.",
      "قبل أن ترسل: مواقف عن التنمر والإساءة في التواصل الرقمي.",
      "جسر التسامح: يكتب الطالب موقفًا يتجاوز فيه خلافًا بطريقة راقية.",
      "مجلس الحوار: جلسة طلابية قصيرة حول احترام الرأي الآخر.",
      "رسالة سلام: بطاقات مصالحة وشكر وتقدير.",
      "الكلمة التي تبني: جدارية لعبارات لطيفة يقترحها الطلاب."
    ],
    value: "التسامح + الإيجابية",
    valueIdeas: [
      "صندوق رسائل التسامح.",
      "موقف اليوم: كيف أرد باحترام؟",
      "تحدي الكلمة الطيبة لمدة أسبوع.",
      "أعتذر لأنني أقدّرك: تدريب على الاعتذار الإيجابي.",
      "اختلافنا لا يفسد صداقتنا: نشاط ثنائي.",
      "وسام صانع السلام."
    ]
  },
  {
    id: 4,
    title: "الأسبوع ٤",
    theme: "بادر برفق",
    dates: ["١٤٤٨/٠٤/٠٢هـ", "١٤٤٨/٠٤/٠٦هـ"],
    programs: [
      "برنامج تعزيز القيم والسلوك الإيجابي",
      "برنامج رفق لمناهضة العنف"
    ],
    programIdeas: [
      "فكرتي لها أثر: كل فصل يقترح مشكلة مدرسية وحلًا واقعيًا لها.",
      "يدي للبناء لا للإيذاء: تعهد سلوكي رمزي ضد العنف والتنمر.",
      "٣٠ دقيقة لصناعة فرق: تنفيذ مبادرة صغيرة داخل المدرسة.",
      "موقف ومبادرة: عرض موقف مدرسي وطلب حلول عملية من الطلاب.",
      "دقيقة رفق: رسالة صباحية يومية عن الرحمة وحسن التعامل.",
      "مبادر الأسبوع: تكريم فكرة طلابية تم تحويلها إلى عمل."
    ],
    value: "المبادرة + الانضباط",
    valueIdeas: [
      "مهمة بادر أولًا: سلوك إيجابي يبدأه الطالب دون طلب.",
      "بطاقة فكرة وحل.",
      "نقطة انطلاق: اختيار هدف أسبوعي بسيط والالتزام به.",
      "تحدي أنجزها اليوم.",
      "لوحة مبادرات الفصول.",
      "وسام المبادر المنضبط."
    ]
  },
  {
    id: 5,
    title: "الأسبوع ٥",
    theme: "مهنتي لوطني",
    dates: ["١٤٤٨/٠٤/٠٩هـ", "١٤٤٨/٠٤/١٣هـ"],
    programs: [
      "تفعيل إطار توثيق العلاقة بين الأسرة والمدرسة",
      "التوجيه المهني"
    ],
    programIdeas: [
      "مهنة في دقيقة: تعريف يومي بمهنة ودورها في خدمة المجتمع.",
      "أنا في المستقبل: بطاقة يصممها الطالب لمهنته المستقبلية.",
      "خبرة من أسرتي: ولي أمر يشارك بخبرة مهنية حضورياً أو بمقطع قصير.",
      "وظائف المستقبل: ركن مبسط لمجالات العمل المتنامية.",
      "مساري يبدأ بمهارة: ربط المهنة بمهارة يمكن البدء في تنميتها الآن.",
      "جدار مهن تبني الوطن: عرض مشاركات الطلاب والأسر."
    ],
    value: "حب الوطن",
    valueIdeas: [
      "وطني مسؤوليتي: ماذا أستطيع أن أقدم من مكاني؟",
      "مهنة تخدم الوطن: ربط المهنة المستقبلية بخدمة المجتمع.",
      "أحافظ على مدرستي لأنها جزء من وطني.",
      "رسالة فخر بإنجاز وطني.",
      "عمل تطوعي صغير داخل المدرسة.",
      "بطاقة: أنا جزء من مستقبل وطني."
    ]
  },
  {
    id: 6,
    title: "الأسبوع ٦",
    theme: "أنتمي… وأستطيع",
    dates: ["١٤٤٨/٠٤/١٦هـ", "١٤٤٨/٠٤/٢٠هـ"],
    programs: [
      "برنامج تعزيز المهارات النفسية والاجتماعية",
      "برنامج رفق لمناهضة العنف",
      "التهيئة الإرشادية للاختبارات"
    ],
    programIdeas: [
      "أنا أستطيع: رسائل وتمارين قصيرة لتعزيز الثقة بالنفس.",
      "حقيبتي للاختبار بثقة: النوم، تنظيم الوقت، المذاكرة والاستعداد.",
      "رفيق داعم: كيف أساند زميلي دون ضغط أو سخرية؟",
      "ماذا أفعل لو…؟ نشاط مواقف لتنمية مهارة حل المشكلات.",
      "لغة المشاعر: تدريب على تسمية المشاعر والتعبير عنها بأسلوب مناسب.",
      "دقيقة هدوء وتركيز قبل بداية اليوم أو الاختبار."
    ],
    value: "الانتماء الوطني",
    valueIdeas: [
      "أنا أنتمي: مواقف توضح الانتماء للمدرسة والوطن.",
      "أحافظ على الممتلكات العامة لأنها مسؤوليتي.",
      "قصة قصيرة عن شخص خدم مجتمعه بإتقان.",
      "مهمة تعاون لخدمة الفصل أو المدرسة.",
      "كلمة شكر لمن يخدم المجتمع المدرسي.",
      "وسام مواطن المدرسة المسؤول."
    ]
  },
  {
    id: 7,
    title: "الأسبوع ٧",
    theme: "أثرٌ يبقى",
    dates: ["١٤٤٨/٠٤/٢٣هـ", "١٤٤٨/٠٤/٢٧هـ"],
    programs: [
      "برنامج تعزيز السلوك الإيجابي",
      "الاستخدام الآمن للإنترنت والألعاب الإلكترونية",
      "المجلس الطلابي"
    ],
    programIdeas: [
      "أترك أثرًا طيبًا: يدوّن الطالب أفضل أثر إيجابي قدمه خلال الأسابيع.",
      "شكراً لأنك… بطاقات تقدير بين أفراد المجتمع المدرسي.",
      "مجلس الأثر: المجلس الطلابي يستعرض ما تحقق ويقترح تطويرًا للفترة القادمة.",
      "رقمي بأخلاقي: مراجعة ميثاق الاستخدام الأخلاقي للإنترنت.",
      "معرض أثري يبدأ مني: عرض أفضل المبادرات والمنتجات.",
      "صوت الطالب: استبانة قصيرة حول أكثر البرامج أثرًا وفائدة."
    ],
    value: "التسامح",
    valueIdeas: [
      "ختامها تسامح: مبادرة للمصالحة ونشر العلاقات الإيجابية.",
      "رسالة تقدير لشخص كان له أثر جميل.",
      "تحدي لا أحمل خلافًا معي للأسبوع القادم.",
      "موقف تعلمت منه معنى التسامح.",
      "شجرة الأثر: إضافة ورقة تحمل موقفًا طيبًا.",
      "وسام صانع الأثر."
    ]
  }
];

const storageKey = "interactive-guidance-plan-v1";
const state = loadState();
let deferredPrompt = null;

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return { admin: "", school: "", checks: {}, notes: {}, custom: {} };
    return { admin: "", school: "", checks: {}, notes: {}, custom: {}, ...JSON.parse(raw) };
  } catch {
    return { admin: "", school: "", checks: {}, notes: {}, custom: {} };
  }
}

function saveState(message = "تم الحفظ") {
  state.admin = document.querySelector("#educationAdmin")?.value || "";
  state.school = document.querySelector("#schoolName")?.value || "";
  localStorage.setItem(storageKey, JSON.stringify(state));
  setStatus(message);
  toast(message);
}

function setStatus(text) {
  const el = document.querySelector("#saveStatus");
  if (!el) return;
  el.textContent = text;
  clearTimeout(setStatus.timer);
  setStatus.timer = setTimeout(() => { el.textContent = "محفوظ محليًا على هذا الجهاز"; }, 1800);
}

function toast(text) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = text;
  requestAnimationFrame(() => el.classList.add("show"));
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 1900);
}

function keyFor(weekId, type, index) {
  return `w${weekId}-${type}-${index}`;
}

function renderIdeaDetails(week, type) {
  const isValue = type === "value";
  const ideas = isValue ? week.valueIdeas : week.programIdeas;
  const wrapper = document.createElement("details");
  wrapper.className = `idea-details ${isValue ? "idea-details--value" : ""}`;
  wrapper.dataset.week = week.id;
  wrapper.dataset.type = type;

  const summary = document.createElement("summary");
  summary.textContent = isValue ? "💎 أفكار تفعيل القيمة" : "💡 أفكار تنفيذ البرامج";
  wrapper.appendChild(summary);

  const list = document.createElement("div");
  list.className = "idea-list";

  const allIdeas = [
    ...ideas.map((text, index) => ({ text, id: keyFor(week.id, type, index) })),
    ...((state.custom[`w${week.id}-${type}`] || []).map((text, index) => ({
      text,
      id: keyFor(week.id, `${type}-custom`, index)
    })))
  ];

  allIdeas.forEach((idea) => {
    const label = document.createElement("label");
    label.className = "idea-item";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = Boolean(state.checks[idea.id]);
    check.dataset.checkKey = idea.id;
    check.addEventListener("change", () => {
      state.checks[idea.id] = check.checked;
      localStorage.setItem(storageKey, JSON.stringify(state));
      updateProgress(wrapper, week.id, type);
      updateProgressForMatchingViews(week.id, type);
    });
    const span = document.createElement("span");
    span.className = "idea-item__text";
    span.textContent = idea.text;
    label.append(check, span);
    list.appendChild(label);
  });

  const custom = document.createElement("div");
  custom.className = "custom-idea";
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = isValue ? "أضيفي فكرة جديدة للقيمة…" : "أضيفي فكرة جديدة للتنفيذ…";
  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.textContent = "+ إضافة";
  addButton.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;
    const customKey = `w${week.id}-${type}`;
    state.custom[customKey] = [...(state.custom[customKey] || []), text];
    localStorage.setItem(storageKey, JSON.stringify(state));
    renderAll();
    toast("تمت إضافة الفكرة");
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addButton.click();
  });
  custom.append(input, addButton);
  list.appendChild(custom);

  const progress = document.createElement("div");
  progress.className = "progress-row";
  progress.innerHTML = `<span class="progress-label">تم تنفيذ ٠٪</span><div class="progress-track"><div class="progress-bar"></div></div>`;
  list.appendChild(progress);

  wrapper.appendChild(list);
  queueMicrotask(() => updateProgress(wrapper, week.id, type));
  return wrapper;
}

function updateProgress(detailsEl, weekId, type) {
  const checks = [...detailsEl.querySelectorAll('input[type="checkbox"]')];
  const done = checks.filter((c) => c.checked).length;
  const pct = checks.length ? Math.round((done / checks.length) * 100) : 0;
  const label = detailsEl.querySelector(".progress-label");
  const bar = detailsEl.querySelector(".progress-bar");
  if (label) label.textContent = `تم تنفيذ ${toArabicDigits(pct)}٪`;
  if (bar) bar.style.width = `${pct}%`;
}

function updateProgressForMatchingViews(weekId, type) {
  document.querySelectorAll(`.idea-details[data-week="${weekId}"][data-type="${type}"]`).forEach((el) => {
    el.querySelectorAll('input[type="checkbox"]').forEach((box) => {
      box.checked = Boolean(state.checks[box.dataset.checkKey]);
    });
    updateProgress(el, weekId, type);
  });
}

function noteArea(weekId, type) {
  const wrap = document.createElement("div");
  wrap.className = "note-area";
  const ta = document.createElement("textarea");
  const noteKey = `w${weekId}-${type}`;
  ta.placeholder = type === "program" ? "ملاحظات أو توثيق تنفيذ البرامج…" : "ملاحظات حول تفعيل القيمة…";
  ta.value = state.notes[noteKey] || "";
  ta.addEventListener("input", () => {
    state.notes[noteKey] = ta.value;
    localStorage.setItem(storageKey, JSON.stringify(state));
  });
  wrap.appendChild(ta);
  return wrap;
}

function cell(classNames = "") {
  const div = document.createElement("div");
  div.className = `table-cell ${classNames}`.trim();
  return div;
}

function renderTable() {
  const table = document.querySelector("#planTable");
  table.innerHTML = "";

  const headLabel = cell("table-head");
  headLabel.textContent = "الأسبوع";
  table.appendChild(headLabel);
  weeks.forEach((week) => {
    const head = cell("table-head");
    head.innerHTML = `<div><div>${week.title}</div><span class="week-theme">${week.theme}</span></div>`;
    table.appendChild(head);
  });

  const dateLabel = cell("row-label");
  dateLabel.innerHTML = `<span class="icon">📅</span><span>التاريخ</span>`;
  table.appendChild(dateLabel);
  weeks.forEach((week) => {
    const date = cell("date-cell");
    date.innerHTML = `<div>${week.dates[0]}<br>إلى<br>${week.dates[1]}</div>`;
    table.appendChild(date);
  });

  const programLabel = cell("row-label");
  programLabel.innerHTML = `<span class="icon">🎯</span><span>برامج التوجيه الطلابي<br>(الفعاليات)</span>`;
  table.appendChild(programLabel);
  weeks.forEach((week) => {
    const program = cell("program-cell");
    const list = document.createElement("ul");
    list.className = "program-list";
    week.programs.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    program.append(list, renderIdeaDetails(week, "program"), noteArea(week.id, "program"));
    table.appendChild(program);
  });

  const valueLabel = cell("row-label");
  valueLabel.innerHTML = `<span class="icon">💎</span><span>القيم</span>`;
  table.appendChild(valueLabel);
  weeks.forEach((week) => {
    const value = cell("value-cell");
    const title = document.createElement("p");
    title.className = "value-title";
    title.textContent = week.value;
    value.append(title, renderIdeaDetails(week, "value"), noteArea(week.id, "value"));
    table.appendChild(value);
  });
}

function renderCards() {
  const host = document.querySelector("#weekCards");
  host.innerHTML = "";
  weeks.forEach((week) => {
    const card = document.createElement("article");
    card.className = "week-card";

    const head = document.createElement("div");
    head.className = "week-card__head";
    head.innerHTML = `<h3>${week.title} — ${week.theme}</h3><p>📅 ${week.dates[0]} إلى ${week.dates[1]}</p>`;

    const body = document.createElement("div");
    body.className = "week-card__body";

    const psec = document.createElement("section");
    psec.className = "week-card__section";
    const ph = document.createElement("h4");
    ph.textContent = "🎯 البرامج والفعاليات";
    const list = document.createElement("ul");
    list.className = "program-list";
    week.programs.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    psec.append(ph, list, renderIdeaDetails(week, "program"), noteArea(week.id, "program"));

    const vsec = document.createElement("section");
    vsec.className = "week-card__section";
    const vh = document.createElement("h4");
    vh.textContent = `💎 القيمة: ${week.value}`;
    vsec.append(vh, renderIdeaDetails(week, "value"), noteArea(week.id, "value"));

    body.append(psec, vsec);
    card.append(head, body);
    host.appendChild(card);
  });
}

function renderAll() {
  renderTable();
  renderCards();
}

function toArabicDigits(value) {
  return String(value).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

function bindEvents() {
  const admin = document.querySelector("#educationAdmin");
  const school = document.querySelector("#schoolName");
  admin.value = state.admin || "";
  school.value = state.school || "";

  [admin, school].forEach((input) => {
    input.addEventListener("input", () => {
      state.admin = admin.value;
      state.school = school.value;
      localStorage.setItem(storageKey, JSON.stringify(state));
      setStatus("تم الحفظ تلقائيًا");
    });
  });

  document.querySelector("#saveBtn").addEventListener("click", () => saveState("تم حفظ الخطة"));
  document.querySelector("#printBtn").addEventListener("click", () => window.print());

  document.querySelector("#resetBtn").addEventListener("click", () => {
    const ok = confirm("هل تريدين مسح البيانات المحفوظة والملاحظات والأفكار المضافة؟");
    if (!ok) return;
    localStorage.removeItem(storageKey);
    location.reload();
  });

  document.querySelector("#expandAllBtn").addEventListener("click", (event) => {
    const all = [...document.querySelectorAll(".idea-details")];
    const shouldOpen = all.some((d) => !d.open);
    all.forEach((d) => { d.open = shouldOpen; });
    event.currentTarget.textContent = shouldOpen ? "⌃ إغلاق جميع الأفكار" : "⌄ فتح جميع الأفكار";
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    document.querySelector("#installBtn").hidden = false;
  });

  document.querySelector("#installBtn").addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    document.querySelector("#installBtn").hidden = true;
  });

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }
}

renderAll();
bindEvents();
setStatus("محفوظ محليًا على هذا الجهاز");
