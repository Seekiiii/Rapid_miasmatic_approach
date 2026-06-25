// 🌐 موجودہ زبان
let currentLang = "ur";

// 🔍 سرچ فنکشن
function searchMedicine() {
  const input = document.getElementById("search-input").value.trim().toLowerCase();
  const resultsDiv = document.getElementById("search-results");
  
  if (input === "") {
    resultsDiv.innerHTML = "<p style='color:#fff;text-align:center;'>⚠️ علامات لکھیں</p>";
    return;
  }
  
  // زمرے اور حالتیں چھپائیں
  document.getElementById("categories-section").innerHTML = "";
  document.getElementById("medicines-section").innerHTML = "";
  document.getElementById("about-section").style.display = "none";
  
  let results = [];
  let matchCount = 0;
  
  // ہر زمرے میں تلاش کریں
  medicineDB.categories.forEach(category => {
    category.conditions.forEach(condition => {
      // علامات کے الفاظ میں تلاش
      const nameUr = condition.name.ur.toLowerCase();
      const nameEn = condition.name.en.toLowerCase();
      const nameRoman = condition.name.roman.toLowerCase();
      
      // سرچ کے الفاظ
      const searchWords = input.split(" ");
      let found = false;
      
      searchWords.forEach(word => {
        if (nameUr.includes(word) || nameEn.includes(word) || nameRoman.includes(word)) {
          found = true;
        }
      });
      
      // ادویات کے نام میں بھی تلاش
      condition.medicines.forEach(med => {
        if (med.toLowerCase().includes(input)) {
          found = true;
        }
      });
      
      if (found) {
        matchCount++;
        results.push({
          category: category.name[currentLang],
          condition: condition.name[currentLang],
          medicines: condition.medicines
        });
      }
    });
  });
  
  // نتائج دکھائیں
  if (results.length === 0) {
    resultsDiv.innerHTML = "<p style='color:#fff;text-align:center;'>❌ کوئی نتیجہ نہیں ملا</p>";
  } else {
    let html = "";
    
    // اگر 1-3 نتائج ہوں
    if (results.length <= 3) {
      html += "<p style='color:#fff;text-align:center;margin-bottom:10px;'>✅ " + results.length + " نتیجہ ملے</p>";
    } else if (results.length <= 10) {
      html += "<p style='color:#fff;text-align:center;margin-bottom:10px;'>📋 " + results.length + " نتیجہ ملے</p>";
    } else {
      html += "<p style='color:#fff;text-align:center;margin-bottom:10px;'>📋 " + results.length + " نتیجہ ملے (پہلے 10 دکھائے جا رہے ہیں)</p>";
      results = results.slice(0, 10);
    }
    
    results.forEach(r => {
      let medTags = "";
      r.medicines.forEach(m => {
        medTags += "<span class='medicine-tag'>" + m + "</span>";
      });
      
      html += `
        <div class="result-card">
          <h3>🏥 ${r.category}</h3>
          <p><strong>${r.condition}</strong></p>
          <div class="medicines-list">${medTags}</div>
        </div>
      `;
    });
    
    // ڈاکٹر وارننگ
    html += `
      <div class="doctor-warning">
        <p>⚠️ ڈاکٹر سے مشورہ کیے بغیر دوا استعمال نہ کریں</p>
      </div>
    `;
    
    resultsDiv.innerHTML = html;
  }
}

// 📋 تمام ادویات دکھائیں
function showAllMedicines() {
  document.getElementById("search-results").innerHTML = "";
  document.getElementById("categories-section").innerHTML = "";
  document.getElementById("about-section").style.display = "none";
  
  let html = "";
  let allMeds = new Set();
  
  medicineDB.categories.forEach(category => {
    category.conditions.forEach(condition => {
      condition.medicines.forEach(med => {
        allMeds.add(med);
      });
    });
  });
  
  // ترتیب دیں
  let sortedMeds = Array.from(allMeds).sort();
  
  html += `<p style='color:#fff;text-align:center;margin-bottom:10px;'>💊 ${sortedMeds.length} ادویات</p>`;
  
  let medTags = "";
  sortedMeds.forEach(m => {
    medTags += "<span class='medicine-tag'>" + m + "</span>";
  });
  
  html += `<div class="result-card"><div class="medicines-list">${medTags}</div></div>`;
  
  document.getElementById("medicines-section").innerHTML = html;
}

// ❤️ زمرے دکھائیں
function showCategories() {
  document.getElementById("search-results").innerHTML = "";
  document.getElementById("medicines-section").innerHTML = "";
  document.getElementById("about-section").style.display = "none";
  
  let html = "";
  
  medicineDB.categories.forEach(category => {
    let count = category.conditions.length;
    html += `
      <div class="category-card" onclick="showCategoryConditions(${category.id})">
        <h3>${category.icon} ${category.name[currentLang]}</h3>
        <p>${count} حالتیں</p>
      </div>
    `;
  });
  
  document.getElementById("categories-section").innerHTML = html;
}

// 📋 زمرے کی حالتیں دکھائیں
function showCategoryConditions(catId) {
  document.getElementById("categories-section").innerHTML = "";
  
  let category = medicineDB.categories.find(c => c.id === catId);
  if (!category) return;
  
  let html = `<p style='color:#fff;text-align:center;margin-bottom:10px;'>${category.icon} ${category.name[currentLang]}</p>`;
  
  category.conditions.forEach(condition => {
    let medTags = "";
    condition.medicines.forEach(m => {
      medTags += "<span class='medicine-tag'>" + m + "</span>";
    });
    
    html += `
      <div class="condition-card">
        <h4>${condition.name[currentLang]}</h4>
        <div class="medicines-list">${medTags}</div>
      </div>
    `;
  });
  
  // واپس بٹن
  html += `
    <button class="main-btn" onclick="showCategories()" style="margin-top:10px;">⬅️ واپس</button>
  `;
  
  document.getElementById("medicines-section").innerHTML = html;
}

// ℹ️ ایپ کے بارے میں
function showAbout() {
  document.getElementById("search-results").innerHTML = "";
  document.getElementById("categories-section").innerHTML = "";
  document.getElementById("medicines-section").innerHTML = "";
 document.getElementById("about-section").style.display = "block";
}

// 🌐 زبان سیٹ کریں
function setLang(lang) {
  currentLang = lang;
  
  // بٹن ایکٹو کریں
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
  
  if (lang === "ur") {
    document.querySelector('.lang-btn:nth-child(1)').classList.add("active");
    document.documentElement.lang = "ur";
    document.documentElement.dir = "rtl";
  } else if (lang === "en") {
    document.querySelector('.lang-btn:nth-child(2)').classList.add("active");
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  } else {
    document.querySelector('.lang-btn:nth-child(3)').classList.add("active");
    document.documentElement.lang = "ur";
    document.documentElement.dir = "rtl";
  }
  
  // زبان تبدیل کریں
  if (typeof updateLanguage === "function") {
    updateLanguage(lang);
  }
  
  // موجودہ صفحہ ریفریش کریں
  refreshCurrentView();
}

// 🔄 موجودہ صفحہ ریفریش کریں
function refreshCurrentView() {
  const categories = document.getElementById("categories-section").innerHTML;
  const medicines = document.getElementById("medicines-section").innerHTML;
  const about = document.getElementById("about-section").style.display;
  
  if (categories !== "") {
    showCategories();
  } else if (medicines !== "") {
    // اگر زمرے کی حالتیں دکھائی جا رہی ہوں
    // TODO: ریفرش کرنا ہوگا
  } else if (about === "block") {
    showAbout();
  }
}

// 🚀 ایپ شروع کریں
window.onload = function() {
  setLang("ur");
};function showAbout() {
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('aboutPage').style.display = 'block';
}
function showAbout() {
  // سب کچھ چھپائیں
  var all = document.querySelectorAll('div');
  all.forEach(function(div) {
    div.style.display = 'none';
  });
  // صرف About دکھائیں
  document.getElementById('aboutPage').style.display = 'block';
}

function showHome() {
  var all = document.querySelectorAll('div');
  all.forEach(function(div) {
    div.style.display = 'block';
  });
  document.getElementById('aboutPage').style.display = 'none';
}
function showHome() {
  document.getElementById('aboutPage').style.display = 'none';
  document.getElementById('homePage').style.display = 'block';
}
function showAbout() {
  document.getElementById('aboutPage').style.display = 'block';
  document.getElementById('homePage').style.display = 'none';
}

function showHome() {
  document.getElementById('aboutPage').style.display = 'none';
  document.getElementById('homePage').style.display = 'block';
}
