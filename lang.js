// 🌐 3 زبانوں کا نظام

const translations = {
  ur: {
    appTitle: "🏥 ہومیوپیتھک میڈیسن فائنڈر",
    appSubtitle: "علامات لکھیں، دوا تلاش کریں",
    searchPlaceholder: "علامات لکھیں...",
    searchBtn: "🔎 تلاش",
    allMedicines: "📋 تمام ادویات",
    categories: "❤️ زمرے",
    about: "ℹ️ ایپ کے بارے میں",
    aboutTitle: "ایپ کے بارے میں",
    aboutText: "یہ ایپ ہومیوپیتھک علاج کے لیے ہے۔ ڈاکٹر علی محمد کے لیکچرز پر مبنی ہے۔",
    warningText: "یہ ایپ معلومات کے لیے ہے۔ دوائی استعمال کرنے سے پہلے ڈاکٹر سے ضرور مشورہ کریں۔",
    doctorWarn: "دوائی استعمال کرنے سے پہلے ڈاکٹر سے مشورہ کریں",
    noResult: "❌ کوئی نتیجہ نہیں ملا",
    resultsFound: "نتیجہ ملے",
    conditions: "حالتیں",
    back: "⬅️ واپس",
    medicines: "ادویات",
    enterSymptoms: "⚠️ علامات لکھیں"
  },
  en: {
    appTitle: "🏥 Homeopathic Medicine Finder",
    appSubtitle: "Write symptoms, find medicine",
    searchPlaceholder: "Write symptoms...",
    searchBtn: "🔎 Search",
    allMedicines: "📋 All Medicines",
    categories: "❤️ Categories",
    about: "ℹ️ About App",
    aboutTitle: "About App",
    aboutText: "This app is for homeopathic treatment. Based on Dr. Ali Muhammad's lectures.",
    warningText: "This app is for information only. Consult a doctor before using any medicine.",
    doctorWarn: "Consult a doctor before using any medicine",
    noResult: "❌ No results found",
    resultsFound: "results found",
    conditions: "conditions",
    back: "⬅️ Back",
    medicines: "Medicines",
    enterSymptoms: "⚠️ Enter symptoms"
  },
  roman: {
    appTitle: "🏥 Homeopathic Medicine Finder",
    appSubtitle: "Alamat Likhein, Dawa Talash Karein",
    searchPlaceholder: "Alamat Likhein...",
    searchBtn: "🔎 Talash",
    allMedicines: "📋 Tamam Adwiya",
    categories: "❤️ Zamray",
    about: "ℹ️ App ke Baare mein",
    aboutTitle: "App ke Baare mein",
    aboutText: "Yeh app homeopathic ilaaj ke liye hai. Dr. Ali Muhammad ke lectures par mabni hai.",
    warningText: "Yeh app maloomat ke liye hai. Dawai istemal karne se pehle doctor se zaroor mashwara karein.",
    doctorWarn: "Dawai istemal karne se pehle doctor se mashwara karein",
    noResult: "❌ Koi nateeja nahi mila",
    resultsFound: "nateeja mile",
    conditions: "halatein",
    back: "⬅️ Wapas",
    medicines: "Adwiya",
    enterSymptoms: "⚠️ Alamat likhein"
  }
};

// 🌐 زبان اپڈیٹ کریں
function updateLanguage(lang) {
  const t = translations[lang];
  
  // ہیڈر
  document.getElementById("app-title").innerText = t.appTitle;
  document.getElementById("app-subtitle").innerText = t.appSubtitle;
  
  // سرچ باکس
  document.getElementById("search-input").placeholder = t.searchPlaceholder;
  document.getElementById("search-btn").innerText = t.searchBtn;
  
  // بٹن
  const buttons = document.querySelectorAll(".main-btn");
  if (buttons.length >= 3) {
    buttons[0].innerText = t.allMedicines;
    buttons[1].innerText = t.categories;
    buttons[2].innerText = t.about;
  }
  
  // ایپ کے بارے میں
  document.getElementById("about-title").innerText = t.aboutTitle;
  document.getElementById("about-text").innerText = t.aboutText;
  document.getElementById("warning-text").innerText = t.warningText;
  document.getElementById("doctor-warn").innerText = t.doctorWarn;
}
