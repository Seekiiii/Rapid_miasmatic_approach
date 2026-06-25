// 🔧 Service Worker - آف لائن سپورٹ

const CACHE_NAME = "homeo-app-v1";
const FILES_TO_CACHE = [
  "/index.html",
  "/style.css",
  "/app.js",
  "/data.js",
  "/lang.js",
  "/manifest.json"
];

// 📦 انسٹال - فائلز کیش کریں
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 🔄 ایکٹیویٹ - پرانا کیش ڈیلیٹ کریں
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 🌐 فچ - کیش سے لوڈ کریں
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
