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
const exportSchema = "student-counselor-assistant";
const exportVersion = 4;
const evidenceCache = {};
const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_EVIDENCE_FILE_SIZE = 5 * 1024 * 1024;
const MAX_LOGO_FILE_SIZE = 2 * 1024 * 1024;
let deferredPrompt = null;

function blankState() {
  return {
    admin: "",
    school: "",
    checks: {},
    notes: {},
    custom: {},
    completed: {},
    indicators: {},
    noor: {},
    report: {
      userName: "",
      principalName: "",
      academicYear: "",
      logoDataUrl: "",
      logoName: ""
    },
    privacyAcknowledged: false
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return blankState();
    const parsed = JSON.parse(raw);
    const base = blankState();
    return {
      ...base,
      ...parsed,
      report: { ...base.report, ...(parsed?.report || {}) },
      checks: parsed?.checks && typeof parsed.checks === "object" ? parsed.checks : {},
      notes: parsed?.notes && typeof parsed.notes === "object" ? parsed.notes : {},
      custom: parsed?.custom && typeof parsed.custom === "object" ? parsed.custom : {},
      completed: parsed?.completed && typeof parsed.completed === "object" ? parsed.completed : {},
      indicators: parsed?.indicators && typeof parsed.indicators === "object" ? parsed.indicators : {},
      noor: parsed?.noor && typeof parsed.noor === "object" ? parsed.noor : {}
    };
  } catch {
    return blankState();
  }
}

const state = loadState();

function captureIdentity() {
  state.admin = state.admin || "";
  state.school = state.school || "";
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

function safeString(value, maxLength = 2000) {
  return String(value ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").slice(0, maxLength);
}

function safeFileBase(value = "تقرير") {
  const cleaned = safeString(value, 80).replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").trim();
  return cleaned || "تقرير";
}

function downloadBlob(content, mime, filename) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
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

function getNoorRecord(weekId) {
  const key = completionKey(weekId);
  state.noor ||= {};
  state.noor[key] ||= {
    program: "",
    targetGroup: "",
    beneficiaries: "",
    participants: "",
    procedure: "",
    evidenceText: "",
    obstacles: "",
    notes: ""
  };
  return state.noor[key];
}

function selectedProgramIdeasForWeek(week) {
  return getAllIdeas(week, "program")
    .filter((idea) => Boolean(state.checks[idea.id]))
    .map((idea) => idea.text);
}

function syncNoorInputs(weekId, field, value, source) {
  document.querySelectorAll(`[data-noor-week="${weekId}"][data-noor-field="${field}"]`).forEach((el) => {
    if (el !== source) el.value = value;
  });
}

function setNoorField(weekId, field, value, source) {
  getNoorRecord(weekId)[field] = value;
  persistState();
  syncNoorInputs(weekId, field, value, source);
}

function buildNoorSummaryText(week) {
  captureIdentity();
  const record = getNoorRecord(week.id);
  const indicator = getIndicator(week.id);
  const chosenProgram = record.program || week.programs.join("، ");
  const selectedIdeas = selectedProgramIdeasForWeek(week);
  const procedure = record.procedure || selectedIdeas.join(" • ") || "—";
  const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
  const pct = (value) => value === "" || value == null ? "—" : `${arNum(value)}٪`;
  return [
    `اسم مُعدّ التقرير: ${state.report?.userName || "—"}`,
    `إدارة التعليم: ${state.admin || "—"}`,
    `المدرسة: ${state.school || "—"}`,
    `مدير المدرسة: ${state.report?.principalName || "—"}`,
    `الأسبوع: ${week.title} — ${week.theme}`,
    `الفترة: ${week.dates[0]} إلى ${week.dates[1]}`,
    `البرنامج: ${chosenProgram}`,
    `القيمة المستهدفة: ${week.value}`,
    `الفئة المستهدفة: ${record.targetGroup || "—"}`,
    `عدد المستفيدين: ${record.beneficiaries || "—"}`,
    `المشاركون في التنفيذ: ${record.participants || "—"}`,
    `حالة التنفيذ: ${status}`,
    `إجراء التنفيذ: ${procedure}`,
    `شواهد التنفيذ: ${record.evidenceText || "—"}`,
    `نسبة المشاركة: ${pct(indicator.participation)}`,
    `مؤشر تحقق الهدف: ${pct(indicator.achievement)}`,
    `رضا المستفيدين: ${pct(indicator.satisfaction)}`,
    `الأثر الملحوظ: ${indicator.impactNote || "—"}`,
    `العوائق: ${record.obstacles || "—"}`,
    `ملاحظات عامة: ${record.notes || "—"}`
  ].join("\n");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

function renderNoorAssistantPanel(week) {
  const details = document.createElement("details");
  details.className = "followup-details noor-assistant";

  const summary = document.createElement("summary");
  summary.innerHTML = '🧾 مساعد التوثيق <span class="noor-chip">للنسخ اليدوي</span>';
  details.appendChild(summary);

  const content = document.createElement("div");
  content.className = "followup-content noor-content";

  const safeNote = document.createElement("div");
  safeNote.className = "noor-safe-note";
  safeNote.innerHTML = '<strong>تنبيه:</strong> هذه الحقول لتنظيم بيانات التوثيق فقط، ولا يوجد ربط مباشر أو إرسال تلقائي إلى نظام نور. لا تدخل بيانات شخصية للطلاب.';
  content.appendChild(safeNote);

  const record = getNoorRecord(week.id);
  const grid = document.createElement("div");
  grid.className = "noor-fields";

  const addField = (field, label, kind = "input", placeholder = "") => {
    const wrap = document.createElement("label");
    wrap.className = `indicator-field ${kind === "textarea" ? "noor-field--wide" : ""}`;
    const title = document.createElement("span");
    title.textContent = label;
    wrap.appendChild(title);
    let control;
    if (kind === "select") {
      control = document.createElement("select");
      const all = document.createElement("option");
      all.value = "";
      all.textContent = "جميع برامج الأسبوع";
      control.appendChild(all);
      week.programs.forEach((program) => {
        const option = document.createElement("option");
        option.value = program;
        option.textContent = program;
        control.appendChild(option);
      });
    } else if (kind === "textarea") {
      control = document.createElement("textarea");
      control.rows = 3;
    } else {
      control = document.createElement("input");
      control.type = "text";
      if (field === "beneficiaries") control.inputMode = "numeric";
    }
    control.placeholder = placeholder;
    control.maxLength = kind === "textarea" ? 1500 : (field === "beneficiaries" ? 40 : 240);
    control.value = record[field] || "";
    control.dataset.noorWeek = String(week.id);
    control.dataset.noorField = field;
    control.addEventListener("input", () => setNoorField(week.id, field, control.value, control));
    control.addEventListener("change", () => setNoorField(week.id, field, control.value, control));
    wrap.appendChild(control);
    grid.appendChild(wrap);
    return control;
  };

  addField("program", "البرنامج المراد تجهيز بياناته", "select");
  addField("targetGroup", "الفئة المستهدفة", "input", "مثال: جميع الطلاب / طلاب الصف…");
  addField("beneficiaries", "عدد المستفيدين", "input", "مثال: ١٢٠");
  addField("participants", "المشاركون في التنفيذ", "input", "مثال: الموجه الطلابي، المعلمون، الأسرة");
  const procedure = addField("procedure", "إجراء التنفيذ / وصف ما تم تنفيذه", "textarea", "اكتب وصفًا مختصرًا للإجراء المنفذ…");
  addField("evidenceText", "شواهد التنفيذ", "textarea", "مثال: صور عامة، بطاقة، استبانة، جدارية، سجل حضور…");
  addField("obstacles", "العوائق", "textarea", "إن وجدت، اكتب العائق بصورة عامة دون بيانات شخصية…");
  addField("notes", "ملاحظات عامة", "textarea", "ملاحظات عامة فقط دون أسماء أو حالات فردية…");
  content.appendChild(grid);

  const actions = document.createElement("div");
  actions.className = "noor-actions";

  const useIdeas = document.createElement("button");
  useIdeas.type = "button";
  useIdeas.className = "btn btn--soft";
  useIdeas.textContent = "✨ استخدام الأفكار المحددة كإجراء تنفيذ";
  useIdeas.addEventListener("click", () => {
    const ideas = selectedProgramIdeasForWeek(week);
    if (!ideas.length) {
      toast("حدد فكرة تنفيذ واحدة على الأقل أولًا");
      return;
    }
    const value = ideas.join(" • ");
    procedure.value = value;
    setNoorField(week.id, "procedure", value, procedure);
    toast("تم تجهيز وصف التنفيذ من الأفكار المحددة");
  });

  const copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.className = "btn btn--noor";
  copyBtn.textContent = "📋 نسخ ملخص التوثيق";
  copyBtn.addEventListener("click", async () => {
    const ok = await copyText(buildNoorSummaryText(week));
    toast(ok ? "تم نسخ ملخص التوثيق" : "تعذر النسخ التلقائي؛ استخدم تقرير الأسبوع");
  });

  actions.append(useIdeas, copyBtn);
  content.appendChild(actions);
  details.appendChild(content);
  return details;
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
  input.maxLength = 300;
  input.placeholder = isValue ? "أضف فكرة لتعزيز القيمة" : "أضف فكرة جديدة للتنفيذ";
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
  textarea.maxLength = 1500;
  textarea.placeholder = "ملاحظات عامة عن التنفيذ — دون أسماء أو بيانات شخصية…";
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
  panel.appendChild(renderNoorAssistantPanel(week));

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
  impactNote.maxLength = 1000;
  impactNote.placeholder = "اكتب أثرًا مختصرًا عامًا دون أسماء أو بيانات شخصية…";
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
  fileInput.accept = "image/png,image/jpeg,image/webp";
  fileInput.multiple = true;
  fileInput.addEventListener("change", async () => {
    if (!fileInput.files?.length) return;
    await handleEvidenceUpload(week.id, [...fileInput.files]);
    fileInput.value = "";
  });
  upload.appendChild(fileInput);
  const note = document.createElement("p");
  note.className = "evidence-note";
  note.textContent = "صور التوثيق مؤقتة لهذه الجلسة فقط ولا تُحفظ بعد تحديث الصفحة أو إغلاقها. PNG/JPEG/WebP بحد أقصى ٥ م.ب للصورة، ولا ترفع صورًا معرّفة بالأشخاص.";
  const grid = document.createElement("div");
  grid.className = "evidence-grid";
  grid.dataset.evidenceGrid = String(week.id);
  evidenceContent.append(upload, note, grid);
  evidenceDetails.appendChild(evidenceContent);
  panel.appendChild(evidenceDetails);

  const reportActions = document.createElement("div");
  reportActions.className = "report-export-actions";

  const reportMenu = document.createElement("details");
  reportMenu.className = "export-menu week-report-menu";

  const reportSummary = document.createElement("summary");
  reportSummary.className = "btn btn--soft report-btn";
  reportSummary.textContent = "🧾 تقرير الأسبوع المنظم";
  reportMenu.appendChild(reportSummary);

  const reportPanel = document.createElement("div");
  reportPanel.className = "export-menu__panel";

  const pdfBtn = document.createElement("button");
  pdfBtn.type = "button";
  pdfBtn.textContent = "🖨️ التقرير PDF";
  pdfBtn.addEventListener("click", () => {
    reportMenu.open = false;
    printWeekReport(week);
  });

  const excelBtn = document.createElement("button");
  excelBtn.type = "button";
  excelBtn.textContent = "📊 التقرير Excel";
  excelBtn.addEventListener("click", () => {
    reportMenu.open = false;
    exportExcel([week]);
  });

  const wordBtn = document.createElement("button");
  wordBtn.type = "button";
  wordBtn.textContent = "📝 التقرير Word";
  wordBtn.addEventListener("click", () => {
    reportMenu.open = false;
    exportWord([week]);
  });

  const jsonBtn = document.createElement("button");
  jsonBtn.type = "button";
  jsonBtn.textContent = "🗂️ التقرير JSON";
  jsonBtn.addEventListener("click", () => {
    reportMenu.open = false;
    exportJson([week]);
  });

  const hint = document.createElement("small");
  hint.textContent = "PDF وWord وExcel يضمّنون صور الشواهد الحالية. JSON يصدّر بيانات الأسبوع فقط ولا يتضمن الصور المؤقتة.";

  reportPanel.append(pdfBtn, excelBtn, wordBtn, jsonBtn, hint);
  reportMenu.appendChild(reportPanel);
  reportActions.appendChild(reportMenu);
  panel.appendChild(reportActions);

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
    <div class="metric-card"><span class="metric-card__icon">📸</span><span class="metric-card__value">${arNum(evidenceCount)}</span><span class="metric-card__label">صور توثيق مؤقتة</span></div>
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

function clearEvidenceCache() {
  weeks.forEach((week) => { evidenceCache[week.id] = []; });
}

async function purgeLegacyEvidenceDB() {
  if (!("indexedDB" in window)) return;
  await new Promise((resolve) => {
    try {
      const request = indexedDB.deleteDatabase("guidance-plan-evidence-db");
      request.onsuccess = request.onerror = request.onblocked = () => resolve();
    } catch {
      resolve();
    }
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("تعذر قراءة الملف"));
    reader.readAsDataURL(file);
  });
}

async function processImage(file, { maxDimension = 1600, quality = 0.82, outputType = "image/jpeg" } = {}) {
  if (!allowedImageTypes.has(file.type)) throw new Error("نوع الصورة غير مدعوم");
  const original = await fileToDataUrl(file);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      try {
        if (!img.width || !img.height) throw new Error("أبعاد الصورة غير صالحة");
        const ratio = Math.min(1, maxDimension / Math.max(img.width, img.height));
        const width = Math.max(1, Math.round(img.width * ratio));
        const height = Math.max(1, Math.round(img.height * ratio));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) throw new Error("تعذر معالجة الصورة");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL(outputType, quality);
        if (!dataUrl.startsWith(`data:${outputType}`)) throw new Error("تعذر إعادة ترميز الصورة");
        resolve(dataUrl);
      } catch (error) {
        reject(error);
      }
    };
    img.onerror = () => reject(new Error("الصورة تالفة أو غير قابلة للمعالجة"));
    img.src = original;
  });
}

async function handleEvidenceUpload(weekId, files) {
  const current = evidenceCache[weekId] || [];
  const remaining = Math.max(0, 6 - current.length);
  if (!remaining) {
    toast("الحد الأقصى ٦ صور مؤقتة لكل أسبوع");
    return;
  }

  const accepted = [];
  let rejected = 0;
  for (const file of files.slice(0, remaining)) {
    if (!allowedImageTypes.has(file.type) || file.size > MAX_EVIDENCE_FILE_SIZE) {
      rejected += 1;
      continue;
    }
    accepted.push(file);
  }
  if (!accepted.length) {
    toast("اختر PNG أو JPEG أو WebP بحجم لا يتجاوز ٥ م.ب للصورة");
    return;
  }

  setStatus("جارٍ تجهيز صور التوثيق المؤقتة…");
  for (const [index, file] of accepted.entries()) {
    try {
      const dataUrl = await processImage(file, { maxDimension: 1600, quality: 0.8, outputType: "image/jpeg" });
      current.push({
        id: `w${weekId}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
        weekId: Number(weekId),
        name: safeString(file.name, 160),
        dataUrl,
        createdAt: Date.now() + index
      });
    } catch {
      rejected += 1;
    }
  }
  evidenceCache[weekId] = current;
  renderEvidenceGrids(weekId);
  refreshDynamicUI();
  toast(rejected ? "تمت إضافة الصور المقبولة فقط؛ الصور غير الآمنة/الكبيرة رُفضت" : "تمت إضافة صور التوثيق مؤقتًا");
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
      empty.textContent = "لم تُضف صور توثيق مؤقتة بعد";
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
      remove.title = "حذف الصورة المؤقتة";
      remove.addEventListener("click", () => {
        if (!confirm("حذف صورة التوثيق المؤقتة؟")) return;
        evidenceCache[weekId] = (evidenceCache[weekId] || []).filter((entry) => entry.id !== item.id);
        renderEvidenceGrids(weekId);
        refreshDynamicUI();
        toast("تم حذف الصورة المؤقتة");
      });
      wrap.append(img, remove);
      grid.appendChild(wrap);
    });
  });
  updateEvidenceCounts(weekId);
}

function loadEvidence() {
  clearEvidenceCache();
  weeks.forEach((week) => renderEvidenceGrids(week.id));
  renderDashboard();
}

function selectedIdeasForWeek(week) {
  return [...getAllIdeas(week, "program"), ...getAllIdeas(week, "value")]
    .filter((idea) => Boolean(state.checks[idea.id]))
    .map((idea) => idea.text);
}

function reportCss() {
  return `
    @page{size:A4;margin:12mm}*{box-sizing:border-box}body{font-family:Tahoma,Arial,sans-serif;direction:rtl;color:#173638;margin:0;background:#fff;line-height:1.75}.report-header{display:grid;grid-template-columns:88px 1fr;gap:16px;align-items:center;padding:20px;border-radius:18px;background:linear-gradient(120deg,#14958f,#056862);color:#fff;margin-bottom:16px}.report-header img{width:78px;height:78px;object-fit:contain;border-radius:16px;background:#fff;padding:6px}.report-header h1{margin:0 0 5px;font-size:22px}.report-header p{margin:2px 0}.meta{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin:13px 0}.meta div,.box{border:1px solid #d9e7e4;border-radius:12px;padding:11px;background:#fbfefd}.box{margin:11px 0;break-inside:avoid}.box h2{font-size:16px;color:#086b67;margin:0 0 9px}.data-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.data-item{padding:9px 10px;border-radius:9px;background:#f3f9f7;border:1px solid #e0ece9}.data-item.wide{grid-column:1/-1}ul{margin:0;padding-right:22px;line-height:1.9}.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.metric{text-align:center;padding:11px;border-radius:10px;background:#eff8f6}.metric b{display:block;font-size:19px;color:#065c58}.photo-box{break-inside:auto}.photo-edit-hint{margin:0 0 10px;color:#607675;font-size:12px}.photos{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;align-items:start}.photos[data-photo-count="1"]{grid-template-columns:1fr}.report-photo{--photo-height:260px;margin:0;position:relative;min-width:0;padding:8px;border:1px solid #d9e8e5;border-radius:12px;background:#f8fbfa;break-inside:avoid;page-break-inside:avoid}.report-photo.is-wide{grid-column:1/-1}.report-photo img{display:block;width:100%;height:var(--photo-height);max-height:360px;object-fit:contain;object-position:center;border-radius:9px;background:#fff;border:1px solid #e0eae8}.report-photo figcaption{text-align:center;color:#667b79;font-size:11px;padding-top:5px}.report-photo.is-selected{outline:3px solid #15958e;outline-offset:2px}.report-photo.is-cover img{object-fit:cover}.pdf-toolbar{position:sticky;top:0;z-index:999;display:flex;flex-wrap:wrap;align-items:center;gap:7px;margin:0 0 14px;padding:10px;border:1px solid #cee2df;border-radius:14px;background:rgba(255,255,255,.97);box-shadow:0 10px 30px rgba(4,79,75,.14)}.pdf-toolbar button{border:1px solid #cfe1de;border-radius:10px;padding:8px 10px;background:#fff;color:#075f5b;font-weight:700;cursor:pointer}.pdf-toolbar button.primary{background:#0b8f88;color:#fff;border-color:#0b8f88}.pdf-toolbar .pdf-tip{flex:1 1 100%;font-size:11px;color:#607675}.pdf-toolbar button:disabled{opacity:.45;cursor:not-allowed}.pdf-preview-note{padding:8px 10px;border-radius:10px;background:#edf8f6;color:#386462;font-size:12px;margin-bottom:10px}.week-summary{break-inside:avoid;border:1px solid #dbe6e3;border-radius:13px;padding:13px;margin:11px 0}.week-summary h2{margin:0 0 8px;color:#086b67}.status{display:inline-block;padding:5px 9px;border-radius:999px;background:#eaf7f4;color:#065c58;font-weight:bold}.disclaimer{padding:9px 11px;border-radius:10px;background:#fff8e8;border:1px solid #ead9ad;color:#6b5727;font-size:12px}.muted{color:#6a7d7d}footer{text-align:center;margin-top:20px;padding-top:11px;border-top:1px solid #dfe8e6;font-weight:bold;color:#086b67}@media(max-width:600px){.meta,.data-grid{grid-template-columns:1fr}.report-header{grid-template-columns:65px 1fr}.report-header img{width:58px;height:58px}}@media print{.no-print,.pdf-toolbar,.pdf-preview-note{display:none!important}.photo-box{break-inside:auto}.report-photo{break-inside:avoid;page-break-inside:avoid}.report-photo img{background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}`;
}

function displayValue(value) {
  return value == null || String(value).trim() === "" ? "—" : escapeHtml(String(value));
}

function getReportLogoSrc() {
  return state.report?.logoDataUrl || new URL("forum-logo.png", window.location.href).href;
}

function reportHeaderHtml(title, subtitle = "") {
  return `<header class="report-header"><img src="${escapeHtml(getReportLogoSrc())}" alt="شعار التقرير"><div><h1>${escapeHtml(title)}</h1>${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}<p>الخطة التفاعلية لبرامج التوجيه الطلابي والقيم</p></div></header>`;
}

function reportIdentityMeta(extra = "") {
  return `<div class="meta">
    <div><b>اسم مُعدّ التقرير:</b> ${displayValue(state.report?.userName)}</div>
    <div><b>إدارة التعليم:</b> ${displayValue(state.admin)}</div>
    <div><b>اسم المدرسة:</b> ${displayValue(state.school)}</div>
    <div><b>مدير المدرسة:</b> ${displayValue(state.report?.principalName)}</div>
    ${state.report?.academicYear ? `<div><b>العام الدراسي:</b> ${displayValue(state.report.academicYear)}</div>` : ""}
    ${extra}
  </div>`;
}

function buildWeekSummaryHtml(week, { includePhotos = false, detailed = false } = {}) {
  const indicator = getIndicator(week.id);
  const record = getNoorRecord(week.id);
  const ideas = selectedIdeasForWeek(week);
  const selectedProgramIdeas = selectedProgramIdeasForWeek(week);
  const procedure = record.procedure || selectedProgramIdeas.join(" • ") || "—";
  const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
  const chosenProgram = record.program || week.programs.join("، ");
  const programNote = state.notes[noteKey(week.id, "program")] || "";
  const valueNote = state.notes[noteKey(week.id, "value")] || "";
  const photos = evidenceCache[week.id] || [];

  if (!detailed) {
    return `<section class="week-summary"><h2>${escapeHtml(week.title)} — ${escapeHtml(week.theme)}</h2><p><span class="status">${status}</span> | <b>القيمة:</b> ${escapeHtml(week.value)}</p><div class="data-grid"><div class="data-item wide"><b>البرنامج:</b> ${displayValue(chosenProgram)}</div><div class="data-item"><b>الفئة:</b> ${displayValue(record.targetGroup)}</div><div class="data-item"><b>عدد المستفيدين:</b> ${displayValue(record.beneficiaries)}</div><div class="data-item wide"><b>الإجراء:</b> ${displayValue(procedure)}</div><div class="data-item wide"><b>الشواهد:</b> ${displayValue(record.evidenceText)}</div><div class="data-item wide"><b>العوائق:</b> ${displayValue(record.obstacles)}</div></div><p><b>الأفكار المحددة:</b> ${arNum(ideas.length)} | <b>صور التوثيق المؤقتة:</b> ${arNum(photos.length)}</p><div class="metrics"><div class="metric"><b>${indicator.participation === "" ? "—" : `${arNum(indicator.participation)}٪`}</b>المشاركة</div><div class="metric"><b>${indicator.achievement === "" ? "—" : `${arNum(indicator.achievement)}٪`}</b>تحقق الهدف</div><div class="metric"><b>${indicator.satisfaction === "" ? "—" : `${arNum(indicator.satisfaction)}٪`}</b>الرضا</div></div>${indicator.impactNote ? `<p><b>أبرز أثر:</b> ${escapeHtml(indicator.impactNote)}</p>` : ""}${record.notes ? `<p><b>ملاحظات عامة:</b> ${escapeHtml(record.notes)}</p>` : ""}</section>`;
  }

  return `<section class="box"><h2>بيانات البرنامج والتفعيل</h2><div class="data-grid">
      <div class="data-item wide"><b>البرنامج:</b> ${displayValue(chosenProgram)}</div>
      <div class="data-item"><b>القيمة المستهدفة:</b> ${escapeHtml(week.value)}</div>
      <div class="data-item"><b>الفئة المستهدفة:</b> ${displayValue(record.targetGroup)}</div>
      <div class="data-item"><b>عدد المستفيدين:</b> ${displayValue(record.beneficiaries)}</div>
      <div class="data-item"><b>المشاركون في التنفيذ:</b> ${displayValue(record.participants)}</div>
      <div class="data-item wide"><b>إجراء التنفيذ:</b> ${displayValue(procedure)}</div>
    </div></section>
    <section class="box"><h2>الأفكار المختارة</h2>${ideas.length ? `<ul>${ideas.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "<p>لم يتم تحديد أفكار بعد.</p>"}</section>
    <section class="box"><h2>مؤشرات تحقيق الأهداف والأثر</h2><div class="metrics"><div class="metric"><b>${indicator.participation === "" ? "—" : `${arNum(indicator.participation)}٪`}</b>المشاركة</div><div class="metric"><b>${indicator.achievement === "" ? "—" : `${arNum(indicator.achievement)}٪`}</b>تحقق الهدف</div><div class="metric"><b>${indicator.satisfaction === "" ? "—" : `${arNum(indicator.satisfaction)}٪`}</b>رضا المستفيدين</div></div><p><b>الأثر الملحوظ:</b> ${displayValue(indicator.impactNote)}</p></section>
    <section class="box"><h2>الشواهد والعوائق والملاحظات</h2><div class="data-grid">
      <div class="data-item wide"><b>شواهد التنفيذ:</b> ${displayValue(record.evidenceText)}</div>
      <div class="data-item wide"><b>العوائق:</b> ${displayValue(record.obstacles)}</div>
      <div class="data-item wide"><b>ملاحظات عامة:</b> ${displayValue(record.notes)}</div>
      ${(programNote || valueNote) ? `<div class="data-item wide"><b>ملاحظات الخطة:</b> ${programNote ? escapeHtml(programNote) : ""}${programNote && valueNote ? " — " : ""}${valueNote ? escapeHtml(valueNote) : ""}</div>` : ""}
    </div></section>
    ${includePhotos ? `<section class="box photo-box"><h2>صور التوثيق المؤقتة</h2>${photos.length ? `<p class="photo-edit-hint no-print">اضغط على أي صورة لتحديدها، ثم عدّل ترتيبها أو حجمها من شريط أدوات المعاينة قبل حفظ PDF.</p><div class="photos photos--count-${Math.min(photos.length, 6)}" data-photo-count="${photos.length}">${photos.map((item, index) => `<figure class="report-photo${photos.length === 1 ? " is-wide" : ""}" data-report-photo="${index}" data-photo-height="260"><img src="${item.dataUrl}" alt="صورة توثيق ${index + 1}"><figcaption class="no-print">صورة ${arNum(index + 1)}</figcaption></figure>`).join("")}</div>` : "<p>لا توجد صور توثيق مؤقتة.</p>"}</section>` : ""}`;
}

async function printWeekReport(week) {
  captureIdentity();
  persistState();
  const win = window.open("", "_blank");
  if (!win) {
    toast("اسمح بالنوافذ المنبثقة لفتح معاينة التقرير");
    return;
  }
  try { win.opener = null; } catch {}
  const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
  const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>تقرير ${escapeHtml(week.title)}</title><style>${reportCss()}</style></head><body>
    <div class="pdf-toolbar no-print" role="toolbar" aria-label="أدوات ضبط صور التقرير">
      <button class="primary" type="button" id="printPdfBtn">🖨️ حفظ / طباعة PDF</button>
      <button type="button" id="oneColBtn">▣ صورة واحدة بالصف</button>
      <button type="button" id="twoColBtn">▦ صورتان بالصف</button>
      <button type="button" id="widePhotoBtn">↔ عرض كامل</button>
      <button type="button" id="fitPhotoBtn">⬚ احتواء</button>
      <button type="button" id="fillPhotoBtn">▣ ملء الإطار</button>
      <button type="button" id="smallerPhotoBtn">− تصغير</button>
      <button type="button" id="largerPhotoBtn">＋ تكبير</button>
      <button type="button" id="rotatePhotoBtn">↻ تدوير</button>
      <button type="button" id="prevPhotoBtn">← تقديم</button>
      <button type="button" id="nextPhotoBtn">تأخير →</button>
      <span class="pdf-tip">اضغط على الصورة أولًا لتحديدها. التعديلات هنا خاصة بمعاينة PDF الحالية ولا تغيّر الصورة الأصلية داخل التطبيق.</span>
    </div>
    <div class="pdf-preview-note no-print">تم تحسين التخطيط تلقائيًا: إذا كانت هناك صورة واحدة تظهر بعرض كامل، والصور لا تُقص افتراضيًا. عدّل الحجم والترتيب كما تريد ثم اختر «حفظ / طباعة PDF».</div>
    ${reportHeaderHtml(`بطاقة التوثيق الأسبوعية — ${week.title}`, week.theme)}
    ${reportIdentityMeta(`<div><b>الفترة:</b> ${escapeHtml(week.dates[0])} – ${escapeHtml(week.dates[1])}</div><div><b>الحالة:</b> <span class="status">${status}</span></div>`)}
    ${buildWeekSummaryHtml(week, { includePhotos: true, detailed: true })}
    <footer>أ/ فاطمة هزازي</footer>
    <script>
      (() => {
        const grid = document.querySelector('.photos');
        const figures = () => Array.from(document.querySelectorAll('.report-photo'));
        let selected = null;

        function choose(figure) {
          figures().forEach((item) => item.classList.remove('is-selected'));
          selected = figure || null;
          if (selected) selected.classList.add('is-selected');
          syncButtons();
        }

        function syncButtons() {
          ['widePhotoBtn','fitPhotoBtn','fillPhotoBtn','smallerPhotoBtn','largerPhotoBtn','rotatePhotoBtn','prevPhotoBtn','nextPhotoBtn'].forEach((id) => {
            const button = document.getElementById(id);
            if (button) button.disabled = !selected;
          });
        }

        figures().forEach((figure) => figure.addEventListener('click', () => choose(figure)));
        if (figures().length) choose(figures()[0]);
        else syncButtons();

        document.getElementById('printPdfBtn')?.addEventListener('click', () => {
          figures().forEach((item) => item.classList.remove('is-selected'));
          window.print();
        });
        document.getElementById('oneColBtn')?.addEventListener('click', () => {
          if (!grid) return;
          grid.style.gridTemplateColumns = '1fr';
          figures().forEach((item) => item.classList.add('is-wide'));
        });
        document.getElementById('twoColBtn')?.addEventListener('click', () => {
          if (!grid) return;
          grid.style.gridTemplateColumns = 'repeat(2,minmax(0,1fr))';
          figures().forEach((item) => item.classList.remove('is-wide'));
          if (figures().length === 1) figures()[0].classList.add('is-wide');
        });
        document.getElementById('widePhotoBtn')?.addEventListener('click', () => {
          if (!selected) return;
          selected.classList.toggle('is-wide');
        });
        document.getElementById('fitPhotoBtn')?.addEventListener('click', () => {
          if (!selected) return;
          selected.classList.remove('is-cover');
        });
        document.getElementById('fillPhotoBtn')?.addEventListener('click', () => {
          if (!selected) return;
          selected.classList.add('is-cover');
        });
        function resize(delta) {
          if (!selected) return;
          const current = Number(selected.dataset.photoHeight || 260);
          const next = Math.max(140, Math.min(420, current + delta));
          selected.dataset.photoHeight = String(next);
          selected.style.setProperty('--photo-height', next + 'px');
        }
        document.getElementById('smallerPhotoBtn')?.addEventListener('click', () => resize(-40));
        document.getElementById('largerPhotoBtn')?.addEventListener('click', () => resize(40));
        document.getElementById('rotatePhotoBtn')?.addEventListener('click', () => {
          if (!selected) return;
          const img = selected.querySelector('img');
          if (!img || !img.complete) return;
          try {
            const canvas = document.createElement('canvas');
            const width = img.naturalWidth || img.width;
            const height = img.naturalHeight || img.height;
            canvas.width = height;
            canvas.height = width;
            const ctx = canvas.getContext('2d');
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(Math.PI / 2);
            ctx.drawImage(img, -width / 2, -height / 2, width, height);
            img.src = canvas.toDataURL('image/jpeg', .92);
          } catch {}
        });
        document.getElementById('prevPhotoBtn')?.addEventListener('click', () => {
          if (!selected || !selected.parentElement) return;
          const previous = selected.previousElementSibling;
          if (previous) selected.parentElement.insertBefore(selected, previous);
        });
        document.getElementById('nextPhotoBtn')?.addEventListener('click', () => {
          if (!selected || !selected.parentElement) return;
          const next = selected.nextElementSibling;
          if (next) selected.parentElement.insertBefore(next, selected);
        });
      })();
    <\/script>
  </body></html>`;
  win.document.open();
  win.document.write(html);
  win.document.close();
  toast("فتحت معاينة PDF؛ اضبط الصور ثم احفظ التقرير");
}

function buildFinalReportHtml({ autoPrint = false, includePhotos = false } = {}) {
  captureIdentity();
  const completedCount = weeks.filter((week) => Boolean(state.completed[completionKey(week.id)])).length;
  const totalEvidence = weeks.reduce((sum, week) => sum + (evidenceCache[week.id]?.length || 0), 0);
  const sections = weeks.map((week) => buildWeekSummaryHtml(week, { includePhotos, detailed: false })).join("");
  return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>التقرير الختامي للخطة</title><style>${reportCss()}</style></head><body>
    ${reportHeaderHtml("التقرير الختامي — «أثري يبدأ مني»", "تقرير منظم للتخطيط والتنفيذ وقياس الأثر")}
    ${reportIdentityMeta(`<div><b>الأسابيع المنفذة:</b> ${arNum(completedCount)} من ٧</div><div><b>صور التوثيق المؤقتة الحالية:</b> ${arNum(totalEvidence)}</div>`)}
    ${sections}
    <footer>أ/ فاطمة هزازي</footer>
    ${autoPrint ? '<script>window.onload=()=>setTimeout(()=>window.print(),250)<\\/script>' : ""}
  </body></html>`;
}

function printFinalReport() {
  captureIdentity();
  persistState();
  const win = window.open("", "_blank");
  if (!win) {
    toast("اسمح بالنوافذ المنبثقة لطباعة التقرير");
    return;
  }
  try { win.opener = null; } catch {}
  win.document.open();
  win.document.write(buildFinalReportHtml({ autoPrint: true, includePhotos: false }));
  win.document.close();
}

function cloneStateForWeeks(selection) {
  const selectedWeeks = Array.isArray(selection) && selection.length ? selection : weeks;
  const selectedIds = selectedWeeks.map((week) => Number(week.id));
  const clean = blankState();
  clean.admin = safeString(state.admin, 120);
  clean.school = safeString(state.school, 120);
  clean.privacyAcknowledged = Boolean(state.privacyAcknowledged);
  clean.report = {
    userName: safeString(state.report?.userName, 120),
    principalName: safeString(state.report?.principalName, 120),
    academicYear: safeString(state.report?.academicYear, 60),
    logoDataUrl: safeString(state.report?.logoDataUrl, 5000000),
    logoName: safeString(state.report?.logoName, 200)
  };

  const belongsToSelection = (key) => selectedIds.some((id) => String(key).startsWith(`w${id}`));

  Object.entries(state.checks || {}).forEach(([key, value]) => {
    if (belongsToSelection(key)) clean.checks[key] = Boolean(value);
  });
  Object.entries(state.notes || {}).forEach(([key, value]) => {
    if (belongsToSelection(key)) clean.notes[key] = safeString(value, 1500);
  });
  Object.entries(state.custom || {}).forEach(([key, value]) => {
    if (belongsToSelection(key) && Array.isArray(value)) clean.custom[key] = value.slice(0, 30).map((item) => safeString(item, 300)).filter(Boolean);
  });

  selectedWeeks.forEach((week) => {
    const key = completionKey(week.id);
    clean.completed[key] = Boolean(state.completed?.[key]);
    const indicator = state.indicators?.[key] || {};
    clean.indicators[key] = {
      participation: normalizePercent(indicator.participation),
      achievement: normalizePercent(indicator.achievement),
      satisfaction: normalizePercent(indicator.satisfaction),
      impactNote: safeString(indicator.impactNote, 1000)
    };
    const record = state.noor?.[key] || {};
    clean.noor[key] = {
      program: safeString(record.program, 600),
      targetGroup: safeString(record.targetGroup, 200),
      beneficiaries: safeString(record.beneficiaries, 120),
      participants: safeString(record.participants, 300),
      procedure: safeString(record.procedure, 1500),
      evidenceText: safeString(record.evidenceText, 1500),
      obstacles: safeString(record.obstacles, 1000),
      notes: safeString(record.notes, 1000)
    };
  });

  return clean;
}

function buildPortableState(selection = null) {
  captureIdentity();
  const selectedWeeks = Array.isArray(selection) && selection.length ? selection : null;
  return {
    schema: exportSchema,
    version: exportVersion,
    exportedAt: new Date().toISOString(),
    scope: selectedWeeks && selectedWeeks.length === 1 ? {
      type: "single-week",
      weekId: selectedWeeks[0].id,
      weekTitle: selectedWeeks[0].title,
      weekTheme: selectedWeeks[0].theme
    } : {
      type: selectedWeeks && selectedWeeks.length ? "selected-weeks" : "all-weeks"
    },
    privacy: {
      evidencePhotosIncluded: false,
      note: "صور التوثيق المؤقتة لا تُضمّن في ملف JSON."
    },
    data: JSON.parse(JSON.stringify(selectedWeeks ? cloneStateForWeeks(selectedWeeks) : state))
  };
}

function exportJson(selection = null) {
  persistState();
  const selectedWeeks = Array.isArray(selection) && selection.length ? selection : null;
  const payload = JSON.stringify(buildPortableState(selection), null, 2);
  const fileName = selectedWeeks && selectedWeeks.length
    ? `${exportFileStem(selectedWeeks)}.json`
    : `${safeFileBase(state.school || "مساعد-الموجه-الطلابي")}-بيانات.json`;
  downloadBlob(`﻿${payload}`, "application/json;charset=utf-8", fileName);
  toast(selectedWeeks && selectedWeeks.length === 1
    ? "تم تصدير JSON لبيانات الأسبوع المحدد دون صور التوثيق"
    : "تم تصدير JSON بدون صور التوثيق المؤقتة");
}

function sanitizedImportedState(raw) {
  const source = raw?.schema === exportSchema ? raw.data : (raw?.data && typeof raw.data === "object" ? raw.data : raw);
  if (!source || typeof source !== "object" || Array.isArray(source)) throw new Error("صيغة JSON غير مدعومة");
  const clean = blankState();
  clean.admin = safeString(source.admin, 120);
  clean.school = safeString(source.school, 120);
  clean.privacyAcknowledged = Boolean(source.privacyAcknowledged);

  if (source.checks && typeof source.checks === "object") {
    Object.entries(source.checks).slice(0, 500).forEach(([key, value]) => { clean.checks[safeString(key, 120)] = Boolean(value); });
  }
  if (source.notes && typeof source.notes === "object") {
    Object.entries(source.notes).slice(0, 100).forEach(([key, value]) => { clean.notes[safeString(key, 120)] = safeString(value, 1500); });
  }
  if (source.custom && typeof source.custom === "object") {
    Object.entries(source.custom).slice(0, 100).forEach(([key, value]) => {
      if (Array.isArray(value)) clean.custom[safeString(key, 120)] = value.slice(0, 30).map((item) => safeString(item, 300)).filter(Boolean);
    });
  }
  if (source.completed && typeof source.completed === "object") {
    weeks.forEach((week) => { clean.completed[completionKey(week.id)] = Boolean(source.completed[completionKey(week.id)]); });
  }
  if (source.indicators && typeof source.indicators === "object") {
    weeks.forEach((week) => {
      const key = completionKey(week.id);
      const item = source.indicators[key] || {};
      clean.indicators[key] = {
        participation: normalizePercent(item.participation),
        achievement: normalizePercent(item.achievement),
        satisfaction: normalizePercent(item.satisfaction),
        impactNote: safeString(item.impactNote, 1000)
      };
    });
  }
  if (source.noor && typeof source.noor === "object") {
    weeks.forEach((week) => {
      const key = completionKey(week.id);
      const item = source.noor[key] || {};
      clean.noor[key] = {
        program: safeString(item.program, 300),
        targetGroup: safeString(item.targetGroup, 240),
        beneficiaries: safeString(item.beneficiaries, 40),
        participants: safeString(item.participants, 300),
        procedure: safeString(item.procedure, 1500),
        evidenceText: safeString(item.evidenceText, 1500),
        obstacles: safeString(item.obstacles, 1500),
        notes: safeString(item.notes, 1500)
      };
    });
  }
  const report = source.report && typeof source.report === "object" ? source.report : {};
  clean.report.userName = safeString(report.userName, 120);
  clean.report.principalName = safeString(report.principalName, 120);
  clean.report.academicYear = safeString(report.academicYear, 60);
  clean.report.logoName = safeString(report.logoName, 160);
  const logo = typeof report.logoDataUrl === "string" ? report.logoDataUrl : "";
  if (/^data:image\/(?:jpeg|png|webp);base64,/i.test(logo) && logo.length <= 900000) clean.report.logoDataUrl = logo;
  return clean;
}

async function importJsonFile(file) {
  if (!file || file.size > 2.5 * 1024 * 1024) {
    toast("ملف JSON كبير جدًا أو غير صالح");
    return;
  }
  try {
    const text = await file.text();
    const parsed = JSON.parse(text.replace(/^\uFEFF/, ""));
    const clean = sanitizedImportedState(parsed);
    if (!confirm("سيتم استبدال بيانات الخطة الحالية بالبيانات المستوردة. هل تريد المتابعة؟")) return;
    localStorage.setItem(storageKey, JSON.stringify(clean));
    clearEvidenceCache();
    toast("تم استيراد البيانات بنجاح");
    setTimeout(() => location.reload(), 350);
  } catch {
    toast("تعذر استيراد الملف؛ تأكد أنه JSON صادر من التطبيق");
  }
}


function xmlEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function utf8Bytes(value) {
  return new TextEncoder().encode(String(value ?? ""));
}

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < bytes.length; i += 1) crc = crcTable[(crc ^ bytes[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function zipDateTime(date = new Date()) {
  const year = Math.max(1980, date.getFullYear());
  const time = ((date.getHours() & 31) << 11) | ((date.getMinutes() & 63) << 5) | ((Math.floor(date.getSeconds() / 2)) & 31);
  const day = ((year - 1980) << 9) | (((date.getMonth() + 1) & 15) << 5) | (date.getDate() & 31);
  return { time, day };
}

function writeU16(view, offset, value) { view.setUint16(offset, value, true); }
function writeU32(view, offset, value) { view.setUint32(offset, value >>> 0, true); }

function makeZip(entries, mime = "application/zip") {
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const { time, day } = zipDateTime();

  entries.forEach((entry) => {
    const nameBytes = utf8Bytes(entry.name);
    const dataBytes = entry.data instanceof Uint8Array ? entry.data : utf8Bytes(entry.data);
    const crc = crc32(dataBytes);

    const local = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(local.buffer);
    writeU32(lv, 0, 0x04034B50);
    writeU16(lv, 4, 20);
    writeU16(lv, 6, 0x0800);
    writeU16(lv, 8, 0);
    writeU16(lv, 10, time);
    writeU16(lv, 12, day);
    writeU32(lv, 14, crc);
    writeU32(lv, 18, dataBytes.length);
    writeU32(lv, 22, dataBytes.length);
    writeU16(lv, 26, nameBytes.length);
    writeU16(lv, 28, 0);
    local.set(nameBytes, 30);
    localParts.push(local, dataBytes);

    const central = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(central.buffer);
    writeU32(cv, 0, 0x02014B50);
    writeU16(cv, 4, 20);
    writeU16(cv, 6, 20);
    writeU16(cv, 8, 0x0800);
    writeU16(cv, 10, 0);
    writeU16(cv, 12, time);
    writeU16(cv, 14, day);
    writeU32(cv, 16, crc);
    writeU32(cv, 20, dataBytes.length);
    writeU32(cv, 24, dataBytes.length);
    writeU16(cv, 28, nameBytes.length);
    writeU16(cv, 30, 0);
    writeU16(cv, 32, 0);
    writeU16(cv, 34, 0);
    writeU16(cv, 36, 0);
    writeU32(cv, 38, 0);
    writeU32(cv, 42, offset);
    central.set(nameBytes, 46);
    centralParts.push(central);

    offset += local.length + dataBytes.length;
  });

  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const end = new Uint8Array(22);
  const ev = new DataView(end.buffer);
  writeU32(ev, 0, 0x06054B50);
  writeU16(ev, 4, 0);
  writeU16(ev, 6, 0);
  writeU16(ev, 8, entries.length);
  writeU16(ev, 10, entries.length);
  writeU32(ev, 12, centralSize);
  writeU32(ev, 16, offset);
  writeU16(ev, 20, 0);

  return new Blob([...localParts, ...centralParts, end], { type: mime });
}

function officeRows() {
  const headers = ["الأسبوع", "الفترة", "عنوان الأسبوع", "البرامج", "القيمة", "الفئة المستهدفة", "عدد المستفيدين", "المشاركون", "حالة التنفيذ", "إجراء التنفيذ", "شواهد التنفيذ", "العوائق", "ملاحظات عامة", "المشاركة %", "تحقق الهدف %", "الرضا %", "الأثر الملحوظ", "الأفكار المحددة"];
  const rows = weeks.map((week) => {
    const indicator = getIndicator(week.id);
    const record = getNoorRecord(week.id);
    const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
    const program = record.program || week.programs.join("، ");
    const procedure = record.procedure || selectedProgramIdeasForWeek(week).join(" • ");
    return [week.title, `${week.dates[0]} - ${week.dates[1]}`, week.theme, program, week.value, record.targetGroup, record.beneficiaries, record.participants, status, procedure, record.evidenceText, record.obstacles, record.notes, indicator.participation, indicator.achievement, indicator.satisfaction, indicator.impactNote, selectedIdeasForWeek(week).join(" • ")];
  });
  return { headers, rows };
}

function excelColumnName(index) {
  let n = index + 1;
  let name = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    name = String.fromCharCode(65 + rem) + name;
    n = Math.floor((n - 1) / 26);
  }
  return name;
}

function xlsxCell(value, rowIndex, colIndex, style = 0) {
  const ref = `${excelColumnName(colIndex)}${rowIndex}`;
  return `<c r="${ref}" t="inlineStr"${style ? ` s="${style}"` : ""}><is><t xml:space="preserve">${xmlEscape(value)}</t></is></c>`;
}

function exportExcel() {
  captureIdentity();
  persistState();
  const { headers, rows } = officeRows();
  const meta = [
    ["مُعدّ التقرير", state.report?.userName || "—"],
    ["إدارة التعليم", state.admin || "—"],
    ["اسم المدرسة", state.school || "—"],
    ["مدير المدرسة", state.report?.principalName || "—"],
    ["العام الدراسي", state.report?.academicYear || "—"],
    ["الصور", "لا يتضمن صور التوثيق المؤقتة"]
  ];

  const sheetRows = [];
  let r = 1;
  sheetRows.push(`<row r="${r}">${xlsxCell("التقرير الختامي — مساعد الموجه الطلابي", r, 0, 2)}</row>`);
  r += 1;
  meta.forEach(([label, value]) => {
    sheetRows.push(`<row r="${r}">${xlsxCell(label, r, 0, 1)}${xlsxCell(value, r, 1, 0)}</row>`);
    r += 1;
  });
  sheetRows.push(`<row r="${r}">${headers.map((h, i) => xlsxCell(h, r, i, 1)).join("")}</row>`);
  r += 1;
  rows.forEach((row) => {
    sheetRows.push(`<row r="${r}">${row.map((v, i) => xlsxCell(v, r, i, 0)).join("")}</row>`);
    r += 1;
  });

  const columns = Array.from({ length: headers.length }, (_, i) => `<col min="${i + 1}" max="${i + 1}" width="${i < 2 ? 18 : i < 9 ? 23 : 32}" customWidth="1"/>`).join("");
  const sheetXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0" rightToLeft="1"/></sheetViews>
  <cols>${columns}</cols>
  <sheetData>${sheetRows.join("")}</sheetData>
</worksheet>`;

  const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="3">
    <font><sz val="11"/><name val="Arial"/></font>
    <font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Arial"/></font>
    <font><b/><color rgb="FFFFFFFF"/><sz val="16"/><name val="Arial"/></font>
  </fonts>
  <fills count="4">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF087F79"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF0F9B93"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="FFD6E5E2"/></left><right style="thin"><color rgb="FFD6E5E2"/></right><top style="thin"><color rgb="FFD6E5E2"/></top><bottom style="thin"><color rgb="FFD6E5E2"/></bottom><diagonal/></border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="3">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="top" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="center" wrapText="1"/></xf>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;

  const workbookXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView/></bookViews>
  <sheets><sheet name="التقرير الختامي" sheetId="1" r:id="rId1"/></sheets>
</workbook>`;

  const entries = [
    { name: "[Content_Types].xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>` },
    { name: "_rels/.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>` },
    { name: "xl/workbook.xml", data: workbookXml },
    { name: "xl/_rels/workbook.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>` },
    { name: "xl/worksheets/sheet1.xml", data: sheetXml },
    { name: "xl/styles.xml", data: stylesXml }
  ];

  const blob = makeZip(entries, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  downloadBlob(blob, blob.type, `${safeFileBase(state.school || "تقرير-التوجيه")}.xlsx`);
  toast("تم تصدير ملف Excel حقيقي بصيغة XLSX");
}

function dataUrlToBytes(dataUrl) {
  const match = /^data:([^;,]+);base64,(.+)$/i.exec(dataUrl || "");
  if (!match) return null;
  const binary = atob(match[2]);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return { mime: match[1].toLowerCase(), bytes };
}

function defaultLogoJpegDataUrl() {
  try {
    const image = document.querySelector("#headerLogo");
    if (!image || !image.complete || !image.naturalWidth) return "";
    const canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.88);
  } catch {
    return "";
  }
}

function docxRun(text, { bold = false, size = 22 } = {}) {
  return `<w:r><w:rPr><w:rtl/><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>${bold ? "<w:b/>" : ""}<w:sz w:val="${size}"/><w:szCs w:val="${size}"/></w:rPr><w:t xml:space="preserve">${xmlEscape(text)}</w:t></w:r>`;
}

function docxParagraph(text, options = {}) {
  const { bold = false, size = 22, center = false, spacingAfter = 100 } = options;
  return `<w:p><w:pPr><w:bidi/><w:jc w:val="${center ? "center" : "right"}"/><w:spacing w:after="${spacingAfter}"/></w:pPr>${docxRun(text, { bold, size })}</w:p>`;
}

function docxInfoTable(rows) {
  const body = rows.map(([label, value]) => `<w:tr>
    <w:tc><w:tcPr><w:tcW w:w="2600" w:type="dxa"/><w:shd w:fill="EAF7F4"/></w:tcPr>${docxParagraph(label, { bold: true, spacingAfter: 0 })}</w:tc>
    <w:tc><w:tcPr><w:tcW w:w="6600" w:type="dxa"/></w:tcPr>${docxParagraph(value || "—", { spacingAfter: 0 })}</w:tc>
  </w:tr>`).join("");
  return `<w:tbl><w:tblPr><w:tblW w:w="9200" w:type="dxa"/><w:tblBorders><w:top w:val="single" w:sz="4" w:color="D6E5E2"/><w:left w:val="single" w:sz="4" w:color="D6E5E2"/><w:bottom w:val="single" w:sz="4" w:color="D6E5E2"/><w:right w:val="single" w:sz="4" w:color="D6E5E2"/><w:insideH w:val="single" w:sz="4" w:color="D6E5E2"/><w:insideV w:val="single" w:sz="4" w:color="D6E5E2"/></w:tblBorders></w:tblPr><w:tblGrid><w:gridCol w:w="2600"/><w:gridCol w:w="6600"/></w:tblGrid>${body}</w:tbl>`;
}

function docxLogoParagraph() {
  return `<w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:drawing><wp:inline xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" distT="0" distB="0" distL="0" distR="0"><wp:extent cx="914400" cy="914400"/><wp:docPr id="1" name="شعار التقرير"/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="0" name="logo.jpg"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId1"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="914400" cy="914400"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`;
}

function exportWord() {
  captureIdentity();
  persistState();
  const logoData = dataUrlToBytes(state.report?.logoDataUrl || defaultLogoJpegDataUrl());
  const metaRows = [
    ["اسم مُعدّ التقرير", state.report?.userName || "—"],
    ["إدارة التعليم", state.admin || "—"],
    ["اسم المدرسة", state.school || "—"],
    ["مدير المدرسة", state.report?.principalName || "—"],
    ["العام الدراسي", state.report?.academicYear || "—"]
  ];

  const weekSections = weeks.map((week) => {
    const indicator = getIndicator(week.id);
    const record = getNoorRecord(week.id);
    const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
    const program = record.program || week.programs.join("، ");
    const procedure = record.procedure || selectedProgramIdeasForWeek(week).join(" • ");
    const info = [
      ["الفترة", `${week.dates[0]} - ${week.dates[1]}`],
      ["البرنامج", program],
      ["القيمة", week.value],
      ["الفئة المستهدفة", record.targetGroup],
      ["عدد المستفيدين", record.beneficiaries],
      ["المشاركون", record.participants],
      ["حالة التنفيذ", status],
      ["إجراء التنفيذ", procedure],
      ["شواهد التنفيذ", record.evidenceText],
      ["العوائق", record.obstacles],
      ["ملاحظات عامة", record.notes],
      ["المشاركة", `${indicator.participation || 0}%`],
      ["تحقق الهدف", `${indicator.achievement || 0}%`],
      ["الرضا", `${indicator.satisfaction || 0}%`],
      ["الأثر الملحوظ", indicator.impactNote],
      ["الأفكار المحددة", selectedIdeasForWeek(week).join(" • ")]
    ];
    return `${docxParagraph(`${week.title} — ${week.theme}`, { bold: true, size: 28, spacingAfter: 120 })}${docxInfoTable(info)}${docxParagraph("", { spacingAfter: 160 })}`;
  }).join("");

  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">
<w:body>
${logoData ? docxLogoParagraph() : ""}
${docxParagraph("التقرير الختامي — «أثري يبدأ مني»", { bold: true, size: 34, center: true, spacingAfter: 80 })}
${docxParagraph("الخطة التفاعلية لبرامج التوجيه الطلابي والقيم", { size: 24, center: true, spacingAfter: 180 })}
${docxInfoTable(metaRows)}
${docxParagraph("", { spacingAfter: 180 })}
${weekSections}
${docxParagraph("أ/ فاطمة هزازي", { bold: true, size: 24, center: true, spacingAfter: 0 })}
<w:sectPr><w:bidi/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="900" w:right="900" w:bottom="900" w:left="900" w:header="500" w:footer="500" w:gutter="0"/></w:sectPr>
</w:body></w:document>`;

  const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
${logoData ? '<Default Extension="jpg" ContentType="image/jpeg"/>' : ""}
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`;

  const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:rtl/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:bidi/><w:jc w:val="right"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style></w:styles>`;

  const rels = [`<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>`];
  if (logoData) rels.unshift(`<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/logo.jpg"/>`);

  const entries = [
    { name: "[Content_Types].xml", data: contentTypes },
    { name: "_rels/.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>` },
    { name: "word/document.xml", data: documentXml },
    { name: "word/styles.xml", data: stylesXml },
    { name: "word/_rels/document.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${rels.join("")}</Relationships>` }
  ];
  if (logoData) entries.push({ name: "word/media/logo.jpg", data: logoData.bytes });

  const blob = makeZip(entries, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  downloadBlob(blob, blob.type, `${safeFileBase(state.school || "تقرير-التوجيه")}.docx`);
  toast("تم تصدير ملف Word حقيقي بصيغة DOCX");
}


async function processReportLogo(file) {
  if (!file || !allowedImageTypes.has(file.type) || file.size > MAX_LOGO_FILE_SIZE) throw new Error("ملف شعار غير صالح");
  return processImage(file, { maxDimension: 420, quality: 0.88, outputType: "image/jpeg" });
}

function refreshReportSettingsUI() {
  const user = document.querySelector("#reportUserName");
  const admin = document.querySelector("#reportEducationAdmin");
  const school = document.querySelector("#reportSchoolName");
  const principal = document.querySelector("#reportPrincipalName");
  const year = document.querySelector("#reportAcademicYear");
  if (user) user.value = state.report?.userName || "";
  if (admin) admin.value = state.admin || "";
  if (school) school.value = state.school || "";
  if (principal) principal.value = state.report?.principalName || "";
  if (year) year.value = state.report?.academicYear || "";
  const logo = state.report?.logoDataUrl || "forum-logo.png";
  const preview = document.querySelector("#reportLogoPreview");
  if (preview) preview.src = logo;
}

function wireReportSettings() {
  const dialog = document.querySelector("#reportSettingsDialog");
  document.querySelector("#reportSettingsBtn")?.addEventListener("click", () => {
    captureIdentity();
    refreshReportSettingsUI();
    dialog?.showModal();
  });
  ["#closeReportSettingsBtn", "#cancelReportSettingsBtn"].forEach((selector) => document.querySelector(selector)?.addEventListener("click", () => dialog?.close()));

  document.querySelector("#reportLogoInput")?.addEventListener("change", async (event) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await processReportLogo(file);
      state.report.logoDataUrl = dataUrl;
      state.report.logoName = safeString(file.name, 160);
      refreshReportSettingsUI();
      toast("تم تجهيز الشعار بأمان");
    } catch {
      toast("الشعار يجب أن يكون PNG/JPEG/WebP وبحجم لا يتجاوز ٢ م.ب");
    }
    event.currentTarget.value = "";
  });

  document.querySelector("#resetReportLogoBtn")?.addEventListener("click", () => {
    state.report.logoDataUrl = "";
    state.report.logoName = "";
    refreshReportSettingsUI();
    toast("تمت استعادة شعار الملتقى الافتراضي");
  });

  document.querySelector("#saveReportSettingsBtn")?.addEventListener("click", () => {
    state.report.userName = safeString(document.querySelector("#reportUserName")?.value, 120);
    state.admin = safeString(document.querySelector("#reportEducationAdmin")?.value, 120);
    state.school = safeString(document.querySelector("#reportSchoolName")?.value, 120);
    state.report.principalName = safeString(document.querySelector("#reportPrincipalName")?.value, 120);
    state.report.academicYear = safeString(document.querySelector("#reportAcademicYear")?.value, 60);
    persistState("تم حفظ إعدادات التقرير");
    refreshReportSettingsUI();
    dialog?.close();
  });
  refreshReportSettingsUI();
}

function wirePrivacyGate() {
  const gate = document.querySelector("#privacyGate");
  if (!state.privacyAcknowledged) gate?.showModal();
  document.querySelector("#acceptPrivacyBtn")?.addEventListener("click", () => {
    state.privacyAcknowledged = true;
    persistState("تم اعتماد الاستخدام الآمن");
    gate?.close();
  });
}

function wireToolbar() {
  document.querySelector("#saveBtn")?.addEventListener("click", () => persistState("تم حفظ البيانات"));
  document.querySelector("#printBtn")?.addEventListener("click", () => {
    captureIdentity();
    persistState();
    window.print();
  });
  document.querySelector("#printFinalReportBtn")?.addEventListener("click", printFinalReport);
  document.querySelector("#exportJsonBtn")?.addEventListener("click", exportJson);
  document.querySelector("#exportExcelBtn")?.addEventListener("click", exportExcel);
  document.querySelector("#exportWordBtn")?.addEventListener("click", exportWord);
  document.querySelector("#importJsonBtn")?.addEventListener("click", () => document.querySelector("#jsonImportInput")?.click());
  document.querySelector("#jsonImportInput")?.addEventListener("change", async (event) => {
    const file = event.currentTarget.files?.[0];
    if (file) await importJsonFile(file);
    event.currentTarget.value = "";
  });

  let allOpen = false;
  document.querySelector("#expandAllBtn")?.addEventListener("click", (event) => {
    allOpen = !allOpen;
    document.querySelectorAll(".idea-details").forEach((details) => { details.open = allOpen; });
    event.currentTarget.textContent = allOpen ? "⌃ إغلاق جميع الأفكار" : "⌄ فتح جميع الأفكار";
  });

  document.addEventListener("click", (event) => {
    const menu = document.querySelector("#exportMenu");
    if (menu?.open && !menu.contains(event.target)) menu.removeAttribute("open");
  });

  document.querySelector("#resetBtn")?.addEventListener("click", async () => {
    if (!confirm("سيتم حذف جميع بيانات الخطة وإعدادات التقرير من هذا الجهاز، كما ستُمسح صور التوثيق المؤقتة. هل تريد المتابعة؟")) return;
    localStorage.removeItem(storageKey);
    clearEvidenceCache();
    await purgeLegacyEvidenceDB();
    location.reload();
  });
}

function wireIdentity() {
  // بيانات الإدارة والمدرسة تُدار من نافذة إعدادات التقرير فقط.
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
  void purgeLegacyEvidenceDB();
  wireIdentity();
  wireToolbar();
  wireReportSettings();
  renderAll();
  loadEvidence();
  wirePrivacyGate();
  wirePWA();
}

document.addEventListener("DOMContentLoaded", init);


/* ============================================================
   v7 — قائمة تصدير داخل تقرير الأسبوع + JSON أسبوعي
   ============================================================ */

function weekHasReportData(week) {
  const indicator = getIndicator(week.id);
  const record = getNoorRecord(week.id);
  const hasIndicators = [indicator.participation, indicator.achievement, indicator.satisfaction]
    .some((value) => value !== "" && value != null) || Boolean(String(indicator.impactNote || "").trim());
  const hasRecord = [record.program, record.targetGroup, record.beneficiaries, record.participants, record.procedure, record.evidenceText, record.obstacles, record.notes]
    .some((value) => Boolean(String(value || "").trim()));
  const hasNotes = [state.notes[noteKey(week.id, "program")], state.notes[noteKey(week.id, "value")]]
    .some((value) => Boolean(String(value || "").trim()));
  return Boolean(
    state.completed[completionKey(week.id)] ||
    hasIndicators ||
    hasRecord ||
    hasNotes ||
    selectedIdeasForWeek(week).length ||
    (evidenceCache[week.id] || []).length
  );
}

function exportableWeeks(selection) {
  if (Array.isArray(selection) && selection.length) return selection;
  const prepared = weeks.filter(weekHasReportData);
  if (prepared.length) return prepared;
  toast("لم يتم تعبئة أي تقرير أسبوعي بعد");
  return [];
}

function exportFileStem(selectedWeeks) {
  const school = safeFileBase(state.school || "تقرير-التوجيه");
  if (selectedWeeks.length === 1) return `${school}-${safeFileBase(selectedWeeks[0].title)}`;
  return `${school}-الأسابيع-المعبأة`;
}

function weekExportTitle(selectedWeeks) {
  if (selectedWeeks.length === 1) return `تقرير ${selectedWeeks[0].title} — ${selectedWeeks[0].theme}`;
  return "تقرير التوثيق — الأسابيع المعبأة";
}

function weekInfoRows(week) {
  const indicator = getIndicator(week.id);
  const record = getNoorRecord(week.id);
  const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
  const program = record.program || week.programs.join("، ");
  const procedure = record.procedure || selectedProgramIdeasForWeek(week).join(" • ");
  return [
    ["الفترة", `${week.dates[0]} - ${week.dates[1]}`],
    ["البرنامج", program],
    ["القيمة", week.value],
    ["الفئة المستهدفة", record.targetGroup],
    ["عدد المستفيدين", record.beneficiaries],
    ["المشاركون", record.participants],
    ["حالة التنفيذ", status],
    ["إجراء التنفيذ", procedure],
    ["شواهد التنفيذ", record.evidenceText],
    ["العوائق", record.obstacles],
    ["ملاحظات عامة", record.notes],
    ["المشاركة", indicator.participation === "" ? "—" : `${indicator.participation}%`],
    ["تحقق الهدف", indicator.achievement === "" ? "—" : `${indicator.achievement}%`],
    ["الرضا", indicator.satisfaction === "" ? "—" : `${indicator.satisfaction}%`],
    ["الأثر الملحوظ", indicator.impactNote],
    ["الأفكار المحددة", selectedIdeasForWeek(week).join(" • ")],
    ["عدد صور الشواهد والتوثيق", String((evidenceCache[week.id] || []).length)]
  ];
}

function imageSizeFromDataUrl(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth || img.width || 1200, height: img.naturalHeight || img.height || 800 });
    img.onerror = () => resolve({ width: 1200, height: 800 });
    img.src = dataUrl;
  });
}

function fitImageEmu(width, height, maxWidthIn = 5.8, maxHeightIn = 3.8) {
  const safeW = Math.max(1, Number(width) || 1);
  const safeH = Math.max(1, Number(height) || 1);
  const scale = Math.min((maxWidthIn * 914400) / safeW, (maxHeightIn * 914400) / safeH);
  return {
    cx: Math.max(914400, Math.round(safeW * scale)),
    cy: Math.max(685800, Math.round(safeH * scale))
  };
}

function docxImageParagraphV6(relId, docPrId, name, cx, cy) {
  const safeName = xmlEscape(name || `صورة ${docPrId}`);
  return `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:after="120"/></w:pPr><w:r><w:drawing><wp:inline xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${docPrId}" name="${safeName}"/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${docPrId}" name="${safeName}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="${relId}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`;
}

async function exportWord(selection = null) {
  captureIdentity();
  persistState();
  const selectedWeeks = exportableWeeks(selection);
  if (!selectedWeeks.length) return;

  setStatus("جارٍ تجهيز ملف Word مع صور الشواهد…");
  const metaRows = [
    ["اسم مُعدّ التقرير", state.report?.userName || "—"],
    ["إدارة التعليم", state.admin || "—"],
    ["اسم المدرسة", state.school || "—"],
    ["مدير المدرسة", state.report?.principalName || "—"],
    ["العام الدراسي", state.report?.academicYear || "—"]
  ];

  const relationships = [
    `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>`
  ];
  const mediaEntries = [];
  let relCounter = 2;
  let docPrCounter = 1;

  let logoParagraph = "";
  const logoDataUrl = state.report?.logoDataUrl || defaultLogoJpegDataUrl();
  const logoData = dataUrlToBytes(logoDataUrl);
  if (logoData) {
    const relId = `rId${relCounter++}`;
    relationships.push(`<Relationship Id="${relId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/report-logo.jpeg"/>`);
    mediaEntries.push({ name: "word/media/report-logo.jpeg", data: logoData.bytes });
    const dims = await imageSizeFromDataUrl(logoDataUrl);
    const fit = fitImageEmu(dims.width, dims.height, 1.1, 1.1);
    logoParagraph = docxImageParagraphV6(relId, docPrCounter++, "شعار التقرير", fit.cx, fit.cy);
  }

  const weekSections = [];
  for (const week of selectedWeeks) {
    let section = `${docxParagraph(`${week.title} — ${week.theme}`, { bold: true, size: 30, spacingAfter: 120 })}${docxInfoTable(weekInfoRows(week))}`;
    const photos = evidenceCache[week.id] || [];
    section += docxParagraph("صور الشواهد والتوثيق", { bold: true, size: 26, spacingAfter: 100 });
    if (!photos.length) {
      section += docxParagraph("لا توجد صور توثيق مضافة في الجلسة الحالية.", { size: 22, spacingAfter: 160 });
    } else {
      for (let index = 0; index < photos.length; index += 1) {
        const photo = photos[index];
        const imageData = dataUrlToBytes(photo.dataUrl);
        if (!imageData) continue;
        const relId = `rId${relCounter++}`;
        const fileName = `evidence-w${week.id}-${index + 1}.jpeg`;
        relationships.push(`<Relationship Id="${relId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${fileName}"/>`);
        mediaEntries.push({ name: `word/media/${fileName}`, data: imageData.bytes });
        const dims = await imageSizeFromDataUrl(photo.dataUrl);
        const fit = fitImageEmu(dims.width, dims.height, 5.7, 3.8);
        section += docxImageParagraphV6(relId, docPrCounter++, photo.name || `شاهد ${index + 1}`, fit.cx, fit.cy);
      }
    }
    section += docxParagraph("", { spacingAfter: 180 });
    weekSections.push(section);
  }

  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><w:body>
${logoParagraph}
${docxParagraph(weekExportTitle(selectedWeeks), { bold: true, size: 34, center: true, spacingAfter: 80 })}
${docxParagraph("الخطة التفاعلية لبرامج التوجيه الطلابي والقيم", { size: 24, center: true, spacingAfter: 180 })}
${docxInfoTable(metaRows)}
${docxParagraph("", { spacingAfter: 180 })}
${weekSections.join("")}
${docxParagraph("أ/ فاطمة هزازي", { bold: true, size: 24, center: true, spacingAfter: 0 })}
<w:sectPr><w:bidi/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="900" w:right="900" w:bottom="900" w:left="900" w:header="500" w:footer="500" w:gutter="0"/></w:sectPr>
</w:body></w:document>`;

  const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${mediaEntries.length ? '<Default Extension="jpeg" ContentType="image/jpeg"/>' : ""}<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>`;

  const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:rtl/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:bidi/><w:jc w:val="right"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style></w:styles>`;

  const entries = [
    { name: "[Content_Types].xml", data: contentTypes },
    { name: "_rels/.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>` },
    { name: "word/document.xml", data: documentXml },
    { name: "word/styles.xml", data: stylesXml },
    { name: "word/_rels/document.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${relationships.join("")}</Relationships>` },
    ...mediaEntries
  ];

  const blob = makeZip(entries, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  downloadBlob(blob, blob.type, `${exportFileStem(selectedWeeks)}.docx`);
  toast(selectedWeeks.length === 1 ? "تم تصدير Word للأسبوع المحدد مع الشواهد والصور" : "تم تصدير Word للأسابيع المعبأة فقط مع الشواهد والصور");
}

function xlsxSafeSheetName(value, fallback) {
  const name = String(value || fallback || "تقرير").replace(/[\\\/?*\[\]:]/g, " ").trim().slice(0, 31);
  return name || fallback || "تقرير";
}

function xlsxDrawingPicture({ relId, id, name, col = 0, row = 0, cx, cy }) {
  return `<oneCellAnchor><from><col>${col}</col><colOff>0</colOff><row>${row}</row><rowOff>0</rowOff></from><ext cx="${cx}" cy="${cy}"/><pic><nvPicPr><cNvPr id="${id}" name="${xmlEscape(name)}" descr="${xmlEscape(name)}"/><cNvPicPr/></nvPicPr><blipFill><a:blip xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" cstate="print" r:embed="${relId}"/><a:stretch xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:fillRect/></a:stretch></blipFill><spPr><a:prstGeom xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" prst="rect"/></spPr></pic><clientData/></oneCellAnchor>`;
}

async function exportExcel(selection = null) {
  captureIdentity();
  persistState();
  const selectedWeeks = exportableWeeks(selection);
  if (!selectedWeeks.length) return;
  setStatus("جارٍ تجهيز ملف Excel مع صور الشواهد…");

  const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="3"><font><sz val="11"/><name val="Arial"/></font><font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Arial"/></font><font><b/><color rgb="FFFFFFFF"/><sz val="16"/><name val="Arial"/></font></fonts><fills count="4"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF087F79"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF0F9B93"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border><border><left style="thin"><color rgb="FFD6E5E2"/></left><right style="thin"><color rgb="FFD6E5E2"/></right><top style="thin"><color rgb="FFD6E5E2"/></top><bottom style="thin"><color rgb="FFD6E5E2"/></bottom><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="top" wrapText="1"/></xf><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="center" wrapText="1"/></xf><xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="center" wrapText="1"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`;

  const workbookSheets = [];
  const workbookRels = [];
  const entries = [];
  const contentOverrides = [];
  const mediaMap = new Map();
  let globalMediaCounter = 1;

  const logoDataUrl = state.report?.logoDataUrl || defaultLogoJpegDataUrl();
  const logoData = dataUrlToBytes(logoDataUrl);
  let logoMediaName = "";
  let logoFit = null;
  if (logoData) {
    logoMediaName = `image${globalMediaCounter++}.jpeg`;
    mediaMap.set(logoMediaName, logoData.bytes);
    const dims = await imageSizeFromDataUrl(logoDataUrl);
    logoFit = fitImageEmu(dims.width, dims.height, 1.15, 1.15);
  }

  for (let sheetIndex = 0; sheetIndex < selectedWeeks.length; sheetIndex += 1) {
    const week = selectedWeeks[sheetIndex];
    const sheetNumber = sheetIndex + 1;
    const rows = [];
    let r = 1;
    rows.push(`<row r="${r}" ht="26" customHeight="1">${xlsxCell(`${week.title} — ${week.theme}`, r, 0, 2)}</row>`);
    r += 2;
    const meta = [
      ["اسم مُعدّ التقرير", state.report?.userName || "—"],
      ["إدارة التعليم", state.admin || "—"],
      ["اسم المدرسة", state.school || "—"],
      ["مدير المدرسة", state.report?.principalName || "—"],
      ["العام الدراسي", state.report?.academicYear || "—"]
    ];
    for (const [label, value] of meta) {
      rows.push(`<row r="${r}">${xlsxCell(label, r, 0, 1)}${xlsxCell(value, r, 1, 0)}</row>`);
      r += 1;
    }
    r += 1;
    for (const [label, value] of weekInfoRows(week)) {
      rows.push(`<row r="${r}" ht="32" customHeight="1">${xlsxCell(label, r, 0, 1)}${xlsxCell(value || "—", r, 1, 0)}</row>`);
      r += 1;
    }
    r += 1;
    rows.push(`<row r="${r}">${xlsxCell("صور الشواهد والتوثيق", r, 0, 2)}${xlsxCell((evidenceCache[week.id] || []).length ? "مدرجة أدناه" : "لا توجد صور في الجلسة الحالية", r, 1, 0)}</row>`);
    const imageStartRow = r + 2;

    const drawingPictures = [];
    const drawingRels = [];
    let picId = 1;
    let relIdCounter = 1;
    if (logoData && logoMediaName && logoFit) {
      const relId = `rId${relIdCounter++}`;
      drawingRels.push(`<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="/xl/media/${logoMediaName}" Id="${relId}"/>`);
      drawingPictures.push(xlsxDrawingPicture({ relId, id: picId++, name: "شعار التقرير", col: 2, row: 0, cx: logoFit.cx, cy: logoFit.cy }));
    }

    let currentRow = imageStartRow - 1;
    const photos = evidenceCache[week.id] || [];
    for (let index = 0; index < photos.length; index += 1) {
      const photo = photos[index];
      const data = dataUrlToBytes(photo.dataUrl);
      if (!data) continue;
      const mediaName = `image${globalMediaCounter++}.jpeg`;
      mediaMap.set(mediaName, data.bytes);
      const dims = await imageSizeFromDataUrl(photo.dataUrl);
      const fit = fitImageEmu(dims.width, dims.height, 5.7, 3.6);
      const relId = `rId${relIdCounter++}`;
      drawingRels.push(`<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="/xl/media/${mediaName}" Id="${relId}"/>`);
      drawingPictures.push(xlsxDrawingPicture({ relId, id: picId++, name: photo.name || `شاهد ${index + 1}`, col: 0, row: currentRow, cx: fit.cx, cy: fit.cy }));
      currentRow += Math.max(12, Math.ceil((fit.cy / 914400) * 7));
    }

    const hasDrawing = drawingPictures.length > 0;
    const sheetXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheetViews><sheetView workbookViewId="0" rightToLeft="1"/></sheetViews><cols><col min="1" max="1" width="26" customWidth="1"/><col min="2" max="2" width="78" customWidth="1"/><col min="3" max="3" width="16" customWidth="1"/></cols><sheetData>${rows.join("")}</sheetData>${hasDrawing ? '<drawing r:id="rId1"/>' : ""}</worksheet>`;
    entries.push({ name: `xl/worksheets/sheet${sheetNumber}.xml`, data: sheetXml });
    contentOverrides.push(`<Override PartName="/xl/worksheets/sheet${sheetNumber}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`);

    if (hasDrawing) {
      const drawingXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><wsDr xmlns="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing">${drawingPictures.join("")}</wsDr>`;
      const drawingRelXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${drawingRels.join("")}</Relationships>`;
      entries.push({ name: `xl/drawings/drawing${sheetNumber}.xml`, data: drawingXml });
      entries.push({ name: `xl/drawings/_rels/drawing${sheetNumber}.xml.rels`, data: drawingRelXml });
      entries.push({ name: `xl/worksheets/_rels/sheet${sheetNumber}.xml.rels`, data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" Target="/xl/drawings/drawing${sheetNumber}.xml" Id="rId1"/></Relationships>` });
      contentOverrides.push(`<Override PartName="/xl/drawings/drawing${sheetNumber}.xml" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml"/>`);
    }

    const sheetName = xlsxSafeSheetName(week.title, `الأسبوع ${sheetNumber}`);
    workbookSheets.push(`<sheet name="${xmlEscape(sheetName)}" sheetId="${sheetNumber}" r:id="rId${sheetNumber}"/>`);
    workbookRels.push(`<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${sheetNumber}.xml" Id="rId${sheetNumber}"/>`);
  }

  const stylesRelId = selectedWeeks.length + 1;
  workbookRels.push(`<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" Id="rId${stylesRelId}"/>`);
  const workbookXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><bookViews><workbookView/></bookViews><sheets>${workbookSheets.join("")}</sheets></workbook>`;

  entries.unshift(
    { name: "xl/styles.xml", data: stylesXml },
    { name: "xl/_rels/workbook.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${workbookRels.join("")}</Relationships>` },
    { name: "xl/workbook.xml", data: workbookXml },
    { name: "_rels/.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>` }
  );

  for (const [name, bytes] of mediaMap.entries()) entries.push({ name: `xl/media/${name}`, data: bytes });
  entries.unshift({ name: "[Content_Types].xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${mediaMap.size ? '<Default Extension="jpeg" ContentType="image/jpeg"/>' : ""}<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${contentOverrides.join("")}</Types>` });

  const blob = makeZip(entries, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  downloadBlob(blob, blob.type, `${exportFileStem(selectedWeeks)}.xlsx`);
  toast(selectedWeeks.length === 1 ? "تم تصدير Excel للأسبوع المحدد مع الشواهد والصور" : "تم تصدير Excel للأسابيع المعبأة فقط مع الشواهد والصور");
}
