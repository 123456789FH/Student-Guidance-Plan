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
const evidenceCache = {};
let deferredPrompt = null;
let dbPromise = null;

function blankState() {
  return {
    admin: "",
    school: "",
    checks: {},
    notes: {},
    custom: {},
    completed: {},
    indicators: {}
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? { ...blankState(), ...JSON.parse(raw) } : blankState();
  } catch {
    return blankState();
  }
}

function captureIdentity() {
  state.admin = document.querySelector("#educationAdmin")?.value || state.admin || "";
  state.school = document.querySelector("#schoolName")?.value || state.school || "";
}

function persistState(message = "") {
  captureIdentity();
  localStorage.setItem(storageKey, JSON.stringify(state));
  if (message) {
    setStatus(message);
    toast(message);
  }
}

function setStatus(text) {
  const el = document.querySelector("#saveStatus");
  if (!el) return;
  el.textContent = text;
  clearTimeout(setStatus.timer);
  setStatus.timer = setTimeout(() => {
    el.textContent = "محفوظ محليًا على هذا الجهاز";
  }, 1800);
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

function arNum(value) {
  return String(value).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function keyFor(weekId, type, index) {
  return `w${weekId}-${type}-${index}`;
}

function customKey(weekId, type) {
  return `w${weekId}-${type}`;
}

function noteKey(weekId, type) {
  return `w${weekId}-${type}`;
}

function completionKey(weekId) {
  return `w${weekId}`;
}

function getIndicator(weekId) {
  const key = completionKey(weekId);
  state.indicators[key] ||= { participation: "", achievement: "", satisfaction: "", impactNote: "" };
  return state.indicators[key];
}

function getAllIdeas(week, type) {
  const builtIn = type === "value" ? week.valueIdeas : week.programIdeas;
  const custom = state.custom[customKey(week.id, type)] || [];
  return [
    ...builtIn.map((text, index) => ({ text, id: keyFor(week.id, type, index), custom: false })),
    ...custom.map((text, index) => ({ text, id: keyFor(week.id, `${type}-custom`, index), custom: true, customIndex: index }))
  ];
}

function getWeekIdeaStats(week) {
  const all = [...getAllIdeas(week, "program"), ...getAllIdeas(week, "value")];
  const done = all.filter((idea) => Boolean(state.checks[idea.id])).length;
  return { done, total: all.length, percent: all.length ? Math.round((done / all.length) * 100) : 0 };
}

function createCell(classes, html = "") {
  const cell = document.createElement("div");
  cell.className = `table-cell ${classes}`;
  if (html) cell.innerHTML = html;
  return cell;
}

function renderIdeaDetails(week, type) {
  const isValue = type === "value";
  const wrapper = document.createElement("details");
  wrapper.className = `idea-details ${isValue ? "idea-details--value" : ""}`;
  wrapper.dataset.week = String(week.id);
  wrapper.dataset.type = type;

  const summary = document.createElement("summary");
  summary.textContent = isValue ? "💎 أفكار تفعيل القيمة" : "💡 أفكار تنفيذ البرامج";
  wrapper.appendChild(summary);

  const list = document.createElement("div");
  list.className = "idea-list";

  getAllIdeas(week, type).forEach((idea) => {
    const row = document.createElement("div");
    row.className = "idea-item";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = Boolean(state.checks[idea.id]);
    check.dataset.checkKey = idea.id;
    check.setAttribute("aria-label", `تحديد الفكرة: ${idea.text}`);
    check.addEventListener("change", () => {
      state.checks[idea.id] = check.checked;
      persistState();
      document.querySelectorAll(`[data-check-key="${CSS.escape(idea.id)}"]`).forEach((el) => {
        if (el !== check) el.checked = check.checked;
      });
      refreshDynamicUI();
    });

    const text = document.createElement("span");
    text.className = "idea-item__text";
    text.textContent = idea.text;
    row.append(check, text);

    if (idea.custom) {
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "idea-remove";
      remove.textContent = "×";
      remove.title = "حذف الفكرة المضافة";
      remove.addEventListener("click", () => {
        const arr = state.custom[customKey(week.id, type)] || [];
        arr.splice(idea.customIndex, 1);
        state.custom[customKey(week.id, type)] = arr;
        delete state.checks[idea.id];
        persistState("تم حذف الفكرة");
        renderAll();
      });
      row.appendChild(remove);
    }

    list.appendChild(row);
  });

  const custom = document.createElement("div");
  custom.className = "custom-idea";
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = isValue ? "أضيفي فكرة لتعزيز القيمة" : "أضيفي فكرة جديدة للتنفيذ";
  const add = document.createElement("button");
  add.type = "button";
  add.textContent = "إضافة";
  const addIdea = () => {
    const value = input.value.trim();
    if (!value) return;
    const key = customKey(week.id, type);
    state.custom[key] ||= [];
    state.custom[key].push(value);
    input.value = "";
    persistState("تمت إضافة الفكرة");
    renderAll();
  };
  add.addEventListener("click", addIdea);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addIdea();
    }
  });
  custom.append(input, add);
  list.appendChild(custom);

  const note = document.createElement("div");
  note.className = "note-area";
  const textarea = document.createElement("textarea");
  textarea.placeholder = "ملاحظات التنفيذ…";
  textarea.value = state.notes[noteKey(week.id, type)] || "";
  textarea.dataset.noteKey = noteKey(week.id, type);
  textarea.addEventListener("input", () => {
    state.notes[noteKey(week.id, type)] = textarea.value;
    persistState();
  });
  note.appendChild(textarea);
  list.appendChild(note);

  const progress = document.createElement("div");
  progress.className = "progress-row";
  progress.dataset.progressWeek = String(week.id);
  progress.dataset.progressType = type;
  progress.innerHTML = '<span class="progress-label"></span><div class="progress-track"><div class="progress-bar"></div></div>';
  list.appendChild(progress);

  wrapper.appendChild(list);
  updateProgress(wrapper, week.id, type);
  return wrapper;
}

function updateProgress(wrapper, weekId, type) {
  const week = weeks.find((item) => item.id === Number(weekId));
  if (!week) return;
  const all = getAllIdeas(week, type);
  const done = all.filter((idea) => Boolean(state.checks[idea.id])).length;
  const percent = all.length ? Math.round((done / all.length) * 100) : 0;
  wrapper.querySelector(".progress-label")?.replaceChildren(document.createTextNode(`${arNum(done)} من ${arNum(all.length)}`));
  const bar = wrapper.querySelector(".progress-bar");
  if (bar) bar.style.width = `${percent}%`;
}

function renderFollowupPanel(week) {
  const panel = document.createElement("div");
  panel.className = "followup-panel";
  panel.dataset.followupWeek = String(week.id);

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "execution-toggle";
  toggle.dataset.completeWeek = String(week.id);
  toggle.addEventListener("click", () => {
    const key = completionKey(week.id);
    state.completed[key] = !state.completed[key];
    persistState(state.completed[key] ? "تم اعتماد تنفيذ الأسبوع" : "تم إلغاء علامة التنفيذ");
    refreshDynamicUI();
  });
  panel.appendChild(toggle);

  const indicatorsDetails = document.createElement("details");
  indicatorsDetails.className = "followup-details";
  const indicatorSummary = document.createElement("summary");
  indicatorSummary.textContent = "📊 مؤشرات قياس الأثر";
  indicatorsDetails.appendChild(indicatorSummary);
  const indicatorContent = document.createElement("div");
  indicatorContent.className = "followup-content indicator-grid";
  const indicator = getIndicator(week.id);
  [
    ["participation", "نسبة المشاركة %", "مثال: ٨٥"],
    ["achievement", "نسبة تحقق الهدف %", "مثال: ٩٠"],
    ["satisfaction", "رضا المستفيدين %", "مثال: ٩٢"]
  ].forEach(([field, label, placeholder]) => {
    const wrap = document.createElement("label");
    wrap.className = "indicator-field";
    wrap.innerHTML = `<span>${label}</span>`;
    const input = document.createElement("input");
    input.type = "text";
    input.inputMode = "numeric";
    input.placeholder = placeholder;
    input.value = indicator[field] === "" || indicator[field] == null ? "" : arNum(indicator[field]);
    input.dataset.indicatorWeek = String(week.id);
    input.dataset.indicatorField = field;
    input.addEventListener("input", () => {
      const cleaned = normalizePercent(input.value);
      getIndicator(week.id)[field] = cleaned;
      persistState();
      syncIndicatorInputs(week.id, field, cleaned, input);
      refreshDynamicUI();
    });
    wrap.appendChild(input);
    indicatorContent.appendChild(wrap);
  });

  const noteWrap = document.createElement("label");
  noteWrap.className = "indicator-field";
  noteWrap.innerHTML = "<span>أبرز أثر أو نتيجة لوحظت</span>";
  const impactNote = document.createElement("textarea");
  impactNote.placeholder = "اكتبي أثرًا مختصرًا يمكن إدراجه في التقرير…";
  impactNote.value = indicator.impactNote || "";
  impactNote.dataset.indicatorWeek = String(week.id);
  impactNote.dataset.indicatorField = "impactNote";
  impactNote.addEventListener("input", () => {
    getIndicator(week.id).impactNote = impactNote.value;
    persistState();
    syncIndicatorInputs(week.id, "impactNote", impactNote.value, impactNote);
  });
  noteWrap.appendChild(impactNote);
  indicatorContent.appendChild(noteWrap);
  indicatorsDetails.appendChild(indicatorContent);
  panel.appendChild(indicatorsDetails);

  const evidenceDetails = document.createElement("details");
  evidenceDetails.className = "followup-details";
  const evidenceSummary = document.createElement("summary");
  evidenceSummary.innerHTML = `📸 صور التوثيق <span data-evidence-count="${week.id}">٠</span>`;
  evidenceDetails.appendChild(evidenceSummary);
  const evidenceContent = document.createElement("div");
  evidenceContent.className = "followup-content";
  const upload = document.createElement("label");
  upload.className = "evidence-upload";
  upload.innerHTML = '<span>＋ إضافة صور التوثيق</span>';
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.multiple = true;
  fileInput.addEventListener("change", async () => {
    if (!fileInput.files?.length) return;
    await handleEvidenceUpload(week.id, [...fileInput.files]);
    fileInput.value = "";
  });
  upload.appendChild(fileInput);
  const note = document.createElement("p");
  note.className = "evidence-note";
  note.textContent = "تُحفظ الصور داخل هذا المتصفح على الجهاز نفسه، ولا تُرفع إلى أي خادم.";
  const grid = document.createElement("div");
  grid.className = "evidence-grid";
  grid.dataset.evidenceGrid = String(week.id);
  evidenceContent.append(upload, note, grid);
  evidenceDetails.appendChild(evidenceContent);
  panel.appendChild(evidenceDetails);

  const reportBtn = document.createElement("button");
  reportBtn.type = "button";
  reportBtn.className = "btn btn--soft report-btn";
  reportBtn.textContent = "🧾 تقرير الأسبوع";
  reportBtn.addEventListener("click", () => printWeekReport(week));
  panel.appendChild(reportBtn);

  updateCompleteButton(toggle, week.id);
  queueMicrotask(() => renderEvidenceGrids(week.id));
  return panel;
}

function syncIndicatorInputs(weekId, field, value, source) {
  document.querySelectorAll(`[data-indicator-week="${weekId}"][data-indicator-field="${field}"]`).forEach((el) => {
    if (el !== source) el.value = field === "impactNote" || value === "" ? value : arNum(value);
  });
}

function normalizePercent(value) {
  if (String(value).trim() === "") return "";
  const latin = String(value)
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)))
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[^0-9.]/g, "");
  if (!latin) return "";
  const number = Number(latin);
  if (!Number.isFinite(number)) return "";
  return Math.max(0, Math.min(100, number));
}

function updateCompleteButton(button, weekId) {
  const complete = Boolean(state.completed[completionKey(weekId)]);
  button.classList.toggle("is-complete", complete);
  button.textContent = complete ? "✓ تم التنفيذ" : "○ تحديد: تم التنفيذ";
}

function renderPlanTable() {
  const table = document.querySelector("#planTable");
  table.innerHTML = "";

  table.appendChild(createCell("table-head row-label", "الأسبوع"));
  weeks.forEach((week) => {
    table.appendChild(createCell("table-head", `<div><strong>${week.title}</strong><br><span class="week-theme">${week.theme}</span></div>`));
  });

  table.appendChild(createCell("row-label", '<span class="icon">📅</span><span>التاريخ</span>'));
  weeks.forEach((week) => {
    table.appendChild(createCell("date-cell", `<div>${week.dates[0]}<br>${week.dates[1]}</div>`));
  });

  table.appendChild(createCell("row-label", '<span class="icon">🎯</span><span>برامج التوجيه الطلابي<br>(الفعاليات)</span>'));
  weeks.forEach((week) => {
    const cell = createCell("program-cell");
    const list = document.createElement("ul");
    list.className = "program-list";
    week.programs.forEach((program) => {
      const li = document.createElement("li");
      li.textContent = program;
      list.appendChild(li);
    });
    cell.append(list, renderIdeaDetails(week, "program"));
    table.appendChild(cell);
  });

  table.appendChild(createCell("row-label", '<span class="icon">💎</span><span>القيم</span>'));
  weeks.forEach((week) => {
    const cell = createCell("value-cell");
    const title = document.createElement("p");
    title.className = "value-title";
    title.textContent = week.value;
    cell.append(title, renderIdeaDetails(week, "value"));
    table.appendChild(cell);
  });

  table.appendChild(createCell("row-label followup-label", '<span class="icon">📊</span><span>متابعة الأسبوع</span>'));
  weeks.forEach((week) => {
    const cell = createCell("followup-cell");
    cell.appendChild(renderFollowupPanel(week));
    table.appendChild(cell);
  });
}

function renderWeekCards() {
  const container = document.querySelector("#weekCards");
  container.innerHTML = "";

  weeks.forEach((week) => {
    const card = document.createElement("article");
    card.className = "week-card";
    card.id = `week-card-${week.id}`;

    const head = document.createElement("div");
    head.className = "week-card__head";
    const stats = getWeekIdeaStats(week);
    head.innerHTML = `
      <h3>${week.title} — ${week.theme}</h3>
      <p>${week.dates[0]} إلى ${week.dates[1]}</p>
      <div class="week-card__status"><span>الأفكار المحددة: <b data-week-done="${week.id}">${arNum(stats.done)} / ${arNum(stats.total)}</b></span><span data-week-status="${week.id}">${state.completed[completionKey(week.id)] ? "✓ تم التنفيذ" : "قيد التنفيذ"}</span></div>
    `;

    const body = document.createElement("div");
    body.className = "week-card__body";

    const programs = document.createElement("section");
    programs.className = "week-card__section";
    programs.innerHTML = `<h4>🎯 برامج التوجيه الطلابي</h4><ul class="program-list">${week.programs.map((program) => `<li>${escapeHtml(program)}</li>`).join("")}</ul>`;
    programs.appendChild(renderIdeaDetails(week, "program"));

    const values = document.createElement("section");
    values.className = "week-card__section";
    values.innerHTML = `<h4>💎 القيمة المستهدفة</h4><p class="value-title">${escapeHtml(week.value)}</p>`;
    values.appendChild(renderIdeaDetails(week, "value"));

    const followup = document.createElement("section");
    followup.className = "week-card__section";
    followup.innerHTML = "<h4>📊 متابعة التنفيذ والتوثيق</h4>";
    followup.appendChild(renderFollowupPanel(week));

    body.append(programs, values, followup);
    card.append(head, body);
    container.appendChild(card);
  });
}

function renderDashboard() {
  const dashboard = document.querySelector("#dashboard");
  const completedCount = weeks.filter((week) => Boolean(state.completed[completionKey(week.id)])).length;
  const selectedIdeas = weeks.reduce((sum, week) => sum + selectedIdeasForWeek(week).length, 0);
  const validAchievements = weeks
    .map((week) => getIndicator(week.id).achievement)
    .filter((value) => value !== "" && Number.isFinite(Number(value)))
    .map(Number);
  const avgAchievement = validAchievements.length
    ? Math.round(validAchievements.reduce((sum, value) => sum + value, 0) / validAchievements.length)
    : 0;
  const evidenceCount = weeks.reduce((sum, week) => sum + (evidenceCache[week.id]?.length || 0), 0);

  dashboard.innerHTML = `
    <div class="metric-card"><span class="metric-card__icon">✅</span><span class="metric-card__value">${arNum(completedCount)} / ٧</span><span class="metric-card__label">أسابيع تم تنفيذها</span></div>
    <div class="metric-card"><span class="metric-card__icon">💡</span><span class="metric-card__value">${arNum(selectedIdeas)}</span><span class="metric-card__label">أفكار تم اختيارها وتنفيذها</span></div>
    <div class="metric-card"><span class="metric-card__icon">📈</span><span class="metric-card__value">${arNum(avgAchievement)}٪</span><span class="metric-card__label">متوسط تحقق الهدف المدخل</span></div>
    <div class="metric-card"><span class="metric-card__icon">📸</span><span class="metric-card__value">${arNum(evidenceCount)}</span><span class="metric-card__label">صور توثيق محفوظة</span></div>
  `;

  const passport = document.querySelector("#impactPassport");
  passport.innerHTML = "";
  weeks.forEach((week) => {
    const complete = Boolean(state.completed[completionKey(week.id)]);
    const stamp = document.createElement("div");
    stamp.className = `passport-stamp ${complete ? "is-complete" : ""}`;
    stamp.innerHTML = `<div><span class="passport-stamp__seal">${complete ? "🏅" : "○"}</span><strong>${week.title}</strong><small>${escapeHtml(week.value)}</small></div>`;
    passport.appendChild(stamp);
  });
  const status = document.querySelector("#passportStatus");
  if (status) status.textContent = `${arNum(completedCount)} من ٧`;
}

function refreshDynamicUI() {
  document.querySelectorAll(".idea-details").forEach((details) => {
    updateProgress(details, Number(details.dataset.week), details.dataset.type);
  });

  weeks.forEach((week) => {
    document.querySelectorAll(`[data-complete-week="${week.id}"]`).forEach((button) => updateCompleteButton(button, week.id));
    const stats = getWeekIdeaStats(week);
    document.querySelectorAll(`[data-week-done="${week.id}"]`).forEach((el) => {
      el.textContent = `${arNum(stats.done)} / ${arNum(stats.total)}`;
    });
    document.querySelectorAll(`[data-week-status="${week.id}"]`).forEach((el) => {
      el.textContent = state.completed[completionKey(week.id)] ? "✓ تم التنفيذ" : "قيد التنفيذ";
    });
    updateEvidenceCounts(week.id);
  });
  renderDashboard();
}

function renderAll() {
  renderPlanTable();
  renderWeekCards();
  refreshDynamicUI();
  weeks.forEach((week) => renderEvidenceGrids(week.id));
}

function openEvidenceDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open("guidance-plan-evidence-db", 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("images")) {
        const store = db.createObjectStore("images", { keyPath: "id" });
        store.createIndex("weekId", "weekId", { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return dbPromise;
}

async function getEvidenceForWeek(weekId) {
  const db = await openEvidenceDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("images", "readonly");
    const index = tx.objectStore("images").index("weekId");
    const request = index.getAll(Number(weekId));
    request.onsuccess = () => resolve((request.result || []).sort((a, b) => a.createdAt - b.createdAt));
    request.onerror = () => reject(request.error);
  });
}

async function putEvidence(record) {
  const db = await openEvidenceDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("images", "readwrite");
    tx.objectStore("images").put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function removeEvidence(id) {
  const db = await openEvidenceDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("images", "readwrite");
    tx.objectStore("images").delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function clearEvidenceDB() {
  if (dbPromise) {
    const db = await dbPromise.catch(() => null);
    db?.close();
    dbPromise = null;
  }
  await new Promise((resolve) => {
    const request = indexedDB.deleteDatabase("guidance-plan-evidence-db");
    request.onsuccess = request.onerror = request.onblocked = () => resolve();
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function compressImage(file) {
  const original = await fileToDataUrl(file);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const maxDimension = 1280;
        const ratio = Math.min(1, maxDimension / Math.max(img.width, img.height));
        const width = Math.max(1, Math.round(img.width * ratio));
        const height = Math.max(1, Math.round(img.height * ratio));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.78));
      } catch {
        resolve(original);
      }
    };
    img.onerror = () => resolve(original);
    img.src = original;
  });
}

async function handleEvidenceUpload(weekId, files) {
  const current = evidenceCache[weekId] || [];
  const remaining = Math.max(0, 6 - current.length);
  if (!remaining) {
    toast("الحد المقترح ٦ صور لكل أسبوع");
    return;
  }
  const images = files.filter((file) => file.type.startsWith("image/")).slice(0, remaining);
  if (!images.length) {
    toast("اختاري ملفات صور فقط");
    return;
  }
  setStatus("جارٍ تجهيز صور التوثيق…");
  for (const [index, file] of images.entries()) {
    const dataUrl = await compressImage(file);
    await putEvidence({
      id: `w${weekId}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
      weekId: Number(weekId),
      name: file.name,
      dataUrl,
      createdAt: Date.now() + index
    });
  }
  evidenceCache[weekId] = await getEvidenceForWeek(weekId);
  renderEvidenceGrids(weekId);
  refreshDynamicUI();
  toast("تم حفظ صور التوثيق");
}

function updateEvidenceCounts(weekId) {
  const count = evidenceCache[weekId]?.length || 0;
  document.querySelectorAll(`[data-evidence-count="${weekId}"]`).forEach((el) => {
    el.textContent = arNum(count);
  });
}

function renderEvidenceGrids(weekId) {
  const items = evidenceCache[weekId] || [];
  document.querySelectorAll(`[data-evidence-grid="${weekId}"]`).forEach((grid) => {
    grid.innerHTML = "";
    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "empty-evidence";
      empty.textContent = "لم تُضف صور توثيق بعد";
      grid.appendChild(empty);
      return;
    }
    items.forEach((item) => {
      const wrap = document.createElement("div");
      wrap.className = "evidence-item";
      const img = document.createElement("img");
      img.src = item.dataUrl;
      img.alt = item.name || "صورة توثيق";
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "×";
      remove.title = "حذف الصورة";
      remove.addEventListener("click", async () => {
        if (!confirm("حذف صورة التوثيق؟")) return;
        await removeEvidence(item.id);
        evidenceCache[weekId] = await getEvidenceForWeek(weekId);
        renderEvidenceGrids(weekId);
        refreshDynamicUI();
        toast("تم حذف الصورة");
      });
      wrap.append(img, remove);
      grid.appendChild(wrap);
    });
  });
  updateEvidenceCounts(weekId);
}

async function loadEvidence() {
  if (!("indexedDB" in window)) return;
  try {
    await Promise.all(weeks.map(async (week) => {
      evidenceCache[week.id] = await getEvidenceForWeek(week.id);
    }));
    weeks.forEach((week) => renderEvidenceGrids(week.id));
    renderDashboard();
  } catch {
    toast("تعذر قراءة صور التوثيق على هذا المتصفح");
  }
}

function selectedIdeasForWeek(week) {
  return [...getAllIdeas(week, "program"), ...getAllIdeas(week, "value")]
    .filter((idea) => Boolean(state.checks[idea.id]))
    .map((idea) => idea.text);
}

function reportCss() {
  return `
    @page{size:A4;margin:14mm}*{box-sizing:border-box}body{font-family:Tahoma,Arial,sans-serif;direction:rtl;color:#173638;margin:0;background:#fff}header{padding:24px;border-radius:18px;background:linear-gradient(120deg,#14958f,#056862);color:#fff;margin-bottom:18px}h1{margin:0 0 8px;font-size:24px}header p{margin:4px 0}.meta{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0}.meta div,.box{border:1px solid #d9e7e4;border-radius:12px;padding:12px;background:#fbfefd}.box{margin:12px 0}.box h2{font-size:17px;color:#086b67;margin:0 0 10px}ul{margin:0;padding-right:22px;line-height:1.9}.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.metric{text-align:center;padding:12px;border-radius:10px;background:#eff8f6}.metric b{display:block;font-size:20px;color:#065c58}.photos{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.photos img{width:100%;height:180px;object-fit:cover;border-radius:10px;border:1px solid #dde8e5}.week-summary{break-inside:avoid;border:1px solid #dbe6e3;border-radius:13px;padding:14px;margin:12px 0}.week-summary h2{margin:0 0 8px;color:#086b67}.status{display:inline-block;padding:5px 9px;border-radius:999px;background:#eaf7f4;color:#065c58;font-weight:bold}footer{text-align:center;margin-top:22px;padding-top:12px;border-top:1px solid #dfe8e6;font-weight:bold;color:#086b67}@media print{.no-print{display:none!important}}`;
}

async function printWeekReport(week) {
  captureIdentity();
  const win = window.open("", "_blank");
  if (!win) {
    toast("اسمحي بالنوافذ المنبثقة لطباعة التقرير");
    return;
  }
  win.document.write('<p dir="rtl" style="font-family:Tahoma;padding:20px">جارٍ تجهيز تقرير الأسبوع…</p>');
  const indicator = getIndicator(week.id);
  const ideas = selectedIdeasForWeek(week);
  const photos = evidenceCache[week.id] || await getEvidenceForWeek(week.id).catch(() => []);
  const programNote = state.notes[noteKey(week.id, "program")] || "";
  const valueNote = state.notes[noteKey(week.id, "value")] || "";
  const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";

  const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>تقرير ${escapeHtml(week.title)}</title><style>${reportCss()}</style></head><body>
    <header><h1>تقرير ${escapeHtml(week.title)} — ${escapeHtml(week.theme)}</h1><p>الخطة التفاعلية لبرامج التوجيه الطلابي والقيم</p><p>قيمة أعيشها • سلوك أمارسه • أثر أتركه</p></header>
    <div class="meta"><div><b>إدارة التعليم:</b> ${escapeHtml(state.admin || "—")}</div><div><b>المدرسة:</b> ${escapeHtml(state.school || "—")}</div><div><b>الفترة:</b> ${escapeHtml(week.dates[0])} – ${escapeHtml(week.dates[1])}</div><div><b>الحالة:</b> <span class="status">${status}</span></div></div>
    <section class="box"><h2>برامج التوجيه الطلابي</h2><ul>${week.programs.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
    <section class="box"><h2>القيمة المستهدفة</h2><p>${escapeHtml(week.value)}</p></section>
    <section class="box"><h2>الأفكار التي تم اختيارها</h2>${ideas.length ? `<ul>${ideas.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "<p>لم يتم تحديد أفكار بعد.</p>"}</section>
    <section class="box"><h2>مؤشرات قياس الأثر</h2><div class="metrics"><div class="metric"><b>${indicator.participation === "" ? "—" : `${arNum(indicator.participation)}٪`}</b>المشاركة</div><div class="metric"><b>${indicator.achievement === "" ? "—" : `${arNum(indicator.achievement)}٪`}</b>تحقق الهدف</div><div class="metric"><b>${indicator.satisfaction === "" ? "—" : `${arNum(indicator.satisfaction)}٪`}</b>رضا المستفيدين</div></div><p><b>الأثر الملحوظ:</b> ${escapeHtml(indicator.impactNote || "—")}</p></section>
    ${(programNote || valueNote) ? `<section class="box"><h2>ملاحظات التنفيذ</h2>${programNote ? `<p><b>البرامج:</b> ${escapeHtml(programNote)}</p>` : ""}${valueNote ? `<p><b>القيم:</b> ${escapeHtml(valueNote)}</p>` : ""}</section>` : ""}
    <section class="box"><h2>صور التوثيق</h2>${photos.length ? `<div class="photos">${photos.map((item) => `<img src="${item.dataUrl}" alt="صورة توثيق">`).join("")}</div>` : "<p>لا توجد صور توثيق مضافة.</p>"}</section>
    <footer>أ/ فاطمة هزازي</footer>
    <script>window.onload=()=>setTimeout(()=>window.print(),350)<\/script>
  </body></html>`;
  win.document.open();
  win.document.write(html);
  win.document.close();
}

function printFinalReport() {
  captureIdentity();
  const win = window.open("", "_blank");
  if (!win) {
    toast("اسمحي بالنوافذ المنبثقة لطباعة التقرير");
    return;
  }
  const completedCount = weeks.filter((week) => Boolean(state.completed[completionKey(week.id)])).length;
  const totalEvidence = weeks.reduce((sum, week) => sum + (evidenceCache[week.id]?.length || 0), 0);
  const sections = weeks.map((week) => {
    const indicator = getIndicator(week.id);
    const ideas = selectedIdeasForWeek(week);
    const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
    return `<section class="week-summary"><h2>${escapeHtml(week.title)} — ${escapeHtml(week.theme)}</h2><p><span class="status">${status}</span> | <b>القيمة:</b> ${escapeHtml(week.value)}</p><p><b>الأفكار المنفذة:</b> ${arNum(ideas.length)} | <b>صور التوثيق:</b> ${arNum(evidenceCache[week.id]?.length || 0)}</p><div class="metrics"><div class="metric"><b>${indicator.participation === "" ? "—" : `${arNum(indicator.participation)}٪`}</b>المشاركة</div><div class="metric"><b>${indicator.achievement === "" ? "—" : `${arNum(indicator.achievement)}٪`}</b>تحقق الهدف</div><div class="metric"><b>${indicator.satisfaction === "" ? "—" : `${arNum(indicator.satisfaction)}٪`}</b>الرضا</div></div>${indicator.impactNote ? `<p><b>أبرز أثر:</b> ${escapeHtml(indicator.impactNote)}</p>` : ""}</section>`;
  }).join("");

  const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>التقرير الختامي للخطة</title><style>${reportCss()}</style></head><body>
    <header><h1>التقرير الختامي — «أثري يبدأ مني»</h1><p>الخطة التفاعلية لبرامج التوجيه الطلابي والقيم</p><p>قيمة أعيشها • سلوك أمارسه • أثر أتركه</p></header>
    <div class="meta"><div><b>إدارة التعليم:</b> ${escapeHtml(state.admin || "—")}</div><div><b>المدرسة:</b> ${escapeHtml(state.school || "—")}</div><div><b>الأسابيع المنفذة:</b> ${arNum(completedCount)} من ٧</div><div><b>إجمالي صور التوثيق:</b> ${arNum(totalEvidence)}</div></div>
    ${sections}
    <footer>أ/ فاطمة هزازي</footer>
    <script>window.onload=()=>setTimeout(()=>window.print(),250)<\/script>
  </body></html>`;
  win.document.write(html);
  win.document.close();
}

function wireToolbar() {
  document.querySelector("#saveBtn")?.addEventListener("click", () => persistState("تم حفظ البيانات"));
  document.querySelector("#printBtn")?.addEventListener("click", () => {
    captureIdentity();
    persistState();
    window.print();
  });
  document.querySelector("#printFinalReportBtn")?.addEventListener("click", printFinalReport);

  let allOpen = false;
  document.querySelector("#expandAllBtn")?.addEventListener("click", (event) => {
    allOpen = !allOpen;
    document.querySelectorAll(".idea-details").forEach((details) => { details.open = allOpen; });
    event.currentTarget.textContent = allOpen ? "⌃ إغلاق جميع الأفكار" : "⌄ فتح جميع الأفكار";
  });

  document.querySelector("#resetBtn")?.addEventListener("click", async () => {
    if (!confirm("سيتم حذف البيانات المحفوظة وصور التوثيق من هذا الجهاز. هل تريدين المتابعة؟")) return;
    localStorage.removeItem(storageKey);
    await clearEvidenceDB();
    location.reload();
  });
}

function wireIdentity() {
  const admin = document.querySelector("#educationAdmin");
  const school = document.querySelector("#schoolName");
  admin.value = state.admin || "";
  school.value = state.school || "";
  let timer;
  [admin, school].forEach((input) => input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      persistState();
      setStatus("تم الحفظ تلقائيًا");
    }, 450);
  }));
}

function wirePWA() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    const button = document.querySelector("#installBtn");
    if (button) button.hidden = false;
  });

  document.querySelector("#installBtn")?.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    document.querySelector("#installBtn").hidden = true;
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
  }
}

function init() {
  wireIdentity();
  wireToolbar();
  renderAll();
  loadEvidence();
  wirePWA();
}

document.addEventListener("DOMContentLoaded", init);
