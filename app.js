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
    `اسم مُعدّ/ة التقرير: ${state.report?.userName || "—"}`,
    `إدارة التعليم: ${state.admin || "—"}`,
    `المدرسة: ${state.school || "—"}`,
    `مدير/ة المدرسة: ${state.report?.principalName || "—"}`,
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
  safeNote.innerHTML = '<strong>تنبيه:</strong> هذه الحقول لتنظيم بيانات التوثيق فقط، ولا يوجد ربط مباشر أو إرسال تلقائي إلى نظام نور. لا تدخلي بيانات شخصية للطلاب أو الطالبات.';
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
  const procedure = addField("procedure", "إجراء التنفيذ / وصف ما تم تنفيذه", "textarea", "اكتبي وصفًا مختصرًا للإجراء المنفذ…");
  addField("evidenceText", "شواهد التنفيذ", "textarea", "مثال: صور عامة، بطاقة، استبانة، جدارية، سجل حضور…");
  addField("obstacles", "العوائق", "textarea", "إن وجدت، اكتبي العائق بصورة عامة دون بيانات شخصية…");
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
      toast("حددي فكرة تنفيذ واحدة على الأقل أولًا");
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
    toast(ok ? "تم نسخ ملخص التوثيق" : "تعذر النسخ التلقائي؛ استخدمي تقرير الأسبوع");
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
  impactNote.placeholder = "اكتبي أثرًا مختصرًا عامًا دون أسماء أو بيانات شخصية…";
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
  note.textContent = "صور التوثيق مؤقتة لهذه الجلسة فقط ولا تُحفظ بعد تحديث الصفحة أو إغلاقها. PNG/JPEG/WebP بحد أقصى ٥ م.ب للصورة، ولا ترفعي صورًا معرّفة بالأشخاص.";
  const grid = document.createElement("div");
  grid.className = "evidence-grid";
  grid.dataset.evidenceGrid = String(week.id);
  evidenceContent.append(upload, note, grid);
  evidenceDetails.appendChild(evidenceContent);
  panel.appendChild(evidenceDetails);

  const reportBtn = document.createElement("button");
  reportBtn.type = "button";
  reportBtn.className = "btn btn--soft report-btn";
  reportBtn.textContent = "🧾 تقرير الأسبوع المنظم";
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
    toast("اختاري PNG أو JPEG أو WebP بحجم لا يتجاوز ٥ م.ب للصورة");
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
    @page{size:A4;margin:12mm}*{box-sizing:border-box}body{font-family:Tahoma,Arial,sans-serif;direction:rtl;color:#173638;margin:0;background:#fff;line-height:1.75}.report-header{display:grid;grid-template-columns:88px 1fr;gap:16px;align-items:center;padding:20px;border-radius:18px;background:linear-gradient(120deg,#14958f,#056862);color:#fff;margin-bottom:16px}.report-header img{width:78px;height:78px;object-fit:contain;border-radius:16px;background:#fff;padding:6px}.report-header h1{margin:0 0 5px;font-size:22px}.report-header p{margin:2px 0}.meta{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin:13px 0}.meta div,.box{border:1px solid #d9e7e4;border-radius:12px;padding:11px;background:#fbfefd}.box{margin:11px 0;break-inside:avoid}.box h2{font-size:16px;color:#086b67;margin:0 0 9px}.data-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.data-item{padding:9px 10px;border-radius:9px;background:#f3f9f7;border:1px solid #e0ece9}.data-item.wide{grid-column:1/-1}ul{margin:0;padding-right:22px;line-height:1.9}.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.metric{text-align:center;padding:11px;border-radius:10px;background:#eff8f6}.metric b{display:block;font-size:19px;color:#065c58}.photos{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.photos img{width:100%;height:170px;object-fit:cover;border-radius:10px;border:1px solid #dde8e5}.week-summary{break-inside:avoid;border:1px solid #dbe6e3;border-radius:13px;padding:13px;margin:11px 0}.week-summary h2{margin:0 0 8px;color:#086b67}.status{display:inline-block;padding:5px 9px;border-radius:999px;background:#eaf7f4;color:#065c58;font-weight:bold}.disclaimer{padding:9px 11px;border-radius:10px;background:#fff8e8;border:1px solid #ead9ad;color:#6b5727;font-size:12px}.muted{color:#6a7d7d}footer{text-align:center;margin-top:20px;padding-top:11px;border-top:1px solid #dfe8e6;font-weight:bold;color:#086b67}@media(max-width:600px){.meta,.data-grid{grid-template-columns:1fr}.report-header{grid-template-columns:65px 1fr}.report-header img{width:58px;height:58px}}@media print{.no-print{display:none!important}}`;
}

function displayValue(value) {
  return value == null || String(value).trim() === "" ? "—" : escapeHtml(String(value));
}

function getReportLogoSrc() {
  return state.report?.logoDataUrl || new URL("icon-192.png", window.location.href).href;
}

function reportHeaderHtml(title, subtitle = "") {
  return `<header class="report-header"><img src="${escapeHtml(getReportLogoSrc())}" alt="شعار التقرير"><div><h1>${escapeHtml(title)}</h1>${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}<p>الخطة التفاعلية لبرامج التوجيه الطلابي والقيم</p></div></header>`;
}

function reportIdentityMeta(extra = "") {
  return `<div class="meta">
    <div><b>اسم مُعدّ/ة التقرير:</b> ${displayValue(state.report?.userName)}</div>
    <div><b>إدارة التعليم:</b> ${displayValue(state.admin)}</div>
    <div><b>اسم المدرسة:</b> ${displayValue(state.school)}</div>
    <div><b>مدير/ة المدرسة:</b> ${displayValue(state.report?.principalName)}</div>
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
    ${includePhotos ? `<section class="box"><h2>صور التوثيق المؤقتة</h2>${photos.length ? `<div class="photos">${photos.map((item) => `<img src="${item.dataUrl}" alt="صورة توثيق">`).join("")}</div>` : "<p>لا توجد صور توثيق مؤقتة.</p>"}</section>` : ""}`;
}

async function printWeekReport(week) {
  captureIdentity();
  persistState();
  const win = window.open("", "_blank");
  if (!win) {
    toast("اسمحي بالنوافذ المنبثقة لطباعة التقرير");
    return;
  }
  try { win.opener = null; } catch {}
  const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
  const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>تقرير ${escapeHtml(week.title)}</title><style>${reportCss()}</style></head><body>
    ${reportHeaderHtml(`بطاقة التوثيق الأسبوعية — ${week.title}`, week.theme)}
    <div class="disclaimer">مخرج مساعد لتنظيم البيانات قبل إدخالها يدويًا في النظام الرسمي. لا يوجد ربط مباشر أو إرسال تلقائي إلى نظام نور. صور التوثيق المستخدمة هنا مؤقتة في جلسة التطبيق.</div>
    ${reportIdentityMeta(`<div><b>الفترة:</b> ${escapeHtml(week.dates[0])} – ${escapeHtml(week.dates[1])}</div><div><b>الحالة:</b> <span class="status">${status}</span></div>`)}
    ${buildWeekSummaryHtml(week, { includePhotos: true, detailed: true })}
    <footer>أ/ فاطمة هزازي</footer>
    <script>window.onload=()=>setTimeout(()=>window.print(),350)<\/script>
  </body></html>`;
  win.document.open();
  win.document.write(html);
  win.document.close();
}

function buildFinalReportHtml({ autoPrint = false, includePhotos = false } = {}) {
  captureIdentity();
  const completedCount = weeks.filter((week) => Boolean(state.completed[completionKey(week.id)])).length;
  const totalEvidence = weeks.reduce((sum, week) => sum + (evidenceCache[week.id]?.length || 0), 0);
  const sections = weeks.map((week) => buildWeekSummaryHtml(week, { includePhotos, detailed: false })).join("");
  return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>التقرير الختامي للخطة</title><style>${reportCss()}</style></head><body>
    ${reportHeaderHtml("التقرير الختامي — «أثري يبدأ مني»", "تقرير منظم للتخطيط والتنفيذ وقياس الأثر")}
    <div class="disclaimer">هذا التقرير مساعد للتوثيق ولا يمثل تكاملًا تقنيًا أو اعتمادًا من نظام نور. البيانات الشخصية والحالات الفردية لا ينبغي إدخالها في التطبيق.</div>
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
    toast("اسمحي بالنوافذ المنبثقة لطباعة التقرير");
    return;
  }
  try { win.opener = null; } catch {}
  win.document.open();
  win.document.write(buildFinalReportHtml({ autoPrint: true, includePhotos: false }));
  win.document.close();
}

function buildPortableState() {
  captureIdentity();
  return {
    schema: exportSchema,
    version: exportVersion,
    exportedAt: new Date().toISOString(),
    privacy: {
      evidencePhotosIncluded: false,
      note: "صور التوثيق المؤقتة لا تُضمّن في ملف JSON."
    },
    data: JSON.parse(JSON.stringify(state))
  };
}

function exportJson() {
  persistState();
  const payload = JSON.stringify(buildPortableState(), null, 2);
  downloadBlob(`\uFEFF${payload}`, "application/json;charset=utf-8", `${safeFileBase(state.school || "مساعد-الموجه-الطلابي")}-بيانات.json`);
  toast("تم تصدير JSON بدون صور التوثيق المؤقتة");
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
    if (!confirm("سيتم استبدال بيانات الخطة الحالية بالبيانات المستوردة. هل تريدين المتابعة؟")) return;
    localStorage.setItem(storageKey, JSON.stringify(clean));
    clearEvidenceCache();
    toast("تم استيراد البيانات بنجاح");
    setTimeout(() => location.reload(), 350);
  } catch {
    toast("تعذر استيراد الملف؛ تأكدي أنه JSON صادر من التطبيق");
  }
}

function exportExcel() {
  captureIdentity();
  const headers = ["الأسبوع", "الفترة", "عنوان الأسبوع", "البرامج", "القيمة", "الفئة المستهدفة", "عدد المستفيدين", "المشاركون", "حالة التنفيذ", "إجراء التنفيذ", "شواهد التنفيذ", "العوائق", "ملاحظات عامة", "المشاركة %", "تحقق الهدف %", "الرضا %", "الأثر الملحوظ", "الأفكار المحددة"];
  const rows = weeks.map((week) => {
    const indicator = getIndicator(week.id);
    const record = getNoorRecord(week.id);
    const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
    const program = record.program || week.programs.join("، ");
    const procedure = record.procedure || selectedProgramIdeasForWeek(week).join(" • ");
    return [week.title, `${week.dates[0]} - ${week.dates[1]}`, week.theme, program, week.value, record.targetGroup, record.beneficiaries, record.participants, status, procedure, record.evidenceText, record.obstacles, record.notes, indicator.participation, indicator.achievement, indicator.satisfaction, indicator.impactNote, selectedIdeasForWeek(week).join(" • ")];
  });
  const excelSafe = (value) => {
    const text = String(value ?? "");
    return /^[=+\-@]/.test(text.trimStart()) ? `’${text}` : text;
  };
  const cell = (v, tag = "td") => `<${tag} style="border:1px solid #b9cbc8;padding:8px;vertical-align:top;white-space:normal">${escapeHtml(excelSafe(v))}</${tag}>`;
  const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"></head><body><table><tr><th colspan="18" style="font-size:18px;padding:12px;background:#087f79;color:#fff">التقرير الختامي — مساعد الموجه الطلابي</th></tr><tr><td colspan="3"><b>مُعدّ التقرير:</b> ${displayValue(state.report?.userName)}</td><td colspan="3"><b>إدارة التعليم:</b> ${displayValue(state.admin)}</td><td colspan="3"><b>المدرسة:</b> ${displayValue(state.school)}</td><td colspan="3"><b>مدير/ة المدرسة:</b> ${displayValue(state.report?.principalName)}</td><td colspan="3"><b>العام:</b> ${displayValue(state.report?.academicYear)}</td><td colspan="3"><b>ملاحظة:</b> لا يتضمن صور التوثيق المؤقتة</td></tr><tr>${headers.map((h) => cell(h, "th")).join("")}</tr>${rows.map((row) => `<tr>${row.map((v) => cell(v)).join("")}</tr>`).join("")}</table></body></html>`;
  downloadBlob(`\uFEFF${html}`, "application/vnd.ms-excel;charset=utf-8", `${safeFileBase(state.school || "تقرير-التوجيه")}.xls`);
  toast("تم تصدير التقرير بصيغة Excel");
}

function exportWord() {
  captureIdentity();
  const html = buildFinalReportHtml({ autoPrint: false, includePhotos: true });
  downloadBlob(`\uFEFF${html}`, "application/msword;charset=utf-8", `${safeFileBase(state.school || "تقرير-التوجيه")}.doc`);
  toast("تم تصدير التقرير بصيغة Word");
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
  const logo = state.report?.logoDataUrl || "icon-192.png";
  const preview = document.querySelector("#reportLogoPreview");
  const header = document.querySelector("#headerLogo");
  if (preview) preview.src = logo;
  if (header) header.src = logo;
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
    toast("تمت استعادة شعار التطبيق الافتراضي");
  });

  document.querySelector("#saveReportSettingsBtn")?.addEventListener("click", () => {
    state.report.userName = safeString(document.querySelector("#reportUserName")?.value, 120);
    state.admin = safeString(document.querySelector("#reportEducationAdmin")?.value, 120);
    state.school = safeString(document.querySelector("#reportSchoolName")?.value, 120);
    state.report.principalName = safeString(document.querySelector("#reportPrincipalName")?.value, 120);
    state.report.academicYear = safeString(document.querySelector("#reportAcademicYear")?.value, 60);
    const adminInput = document.querySelector("#educationAdmin");
    const schoolInput = document.querySelector("#schoolName");
    if (adminInput) adminInput.value = state.admin;
    if (schoolInput) schoolInput.value = state.school;
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
    if (!confirm("سيتم حذف جميع بيانات الخطة وإعدادات التقرير من هذا الجهاز، كما ستُمسح صور التوثيق المؤقتة. هل تريدين المتابعة؟")) return;
    localStorage.removeItem(storageKey);
    clearEvidenceCache();
    await purgeLegacyEvidenceDB();
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
