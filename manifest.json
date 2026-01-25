self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("dare-app").then(cache => {
      return cache.addAll([
        "/dare-game/",
        "/dare-game/index.html",
        "/dare-game/style.css",
        "/dare-game/dare-app.js",
        "/dare-game/roll-sound.mp3",
        "/dare-game/Sound Effect - Mouse Click.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
