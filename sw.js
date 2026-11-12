// Little Playhouse service worker: keeps the whole app on the phone for offline play.
// tools/build.mjs replaces the BUILD line with the real version and file list.
// A new deployment installs in the background and waits; the grown-ups Restart button
// (or closing and reopening the app) switches to it. Play is never interrupted by an update.

const BUILD = {"version":"1.3.0-37bb9b894f","files":["./","./CHANGELOG.md","./THIRD-PARTY.txt","./audio/abc.mp3","./audio/animals.mp3","./audio/bubbles.mp3","./audio/buddy.mp3","./audio/care.mp3","./audio/cleanup.mp3","./audio/coloring.mp3","./audio/colors.mp3","./audio/common.mp3","./audio/feelings.mp3","./audio/hideseek.mp3","./audio/letters.mp3","./audio/manifest.json","./audio/match.mp3","./audio/music-home.mp3","./audio/music.mp3","./audio/numbers.mp3","./audio/potty.mp3","./audio/sfx.mp3","./audio/shadows.mp3","./audio/shapes.mp3","./audio/tracing.mp3","./audio/words.mp3","./css/app-VTFDO3LF.css","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/icon.svg","./index.html","./js/chunks/abc-NVLAJIED.js","./js/chunks/animals-YJJVOVVN.js","./js/chunks/bubbles-JZNOK5F5.js","./js/chunks/care-AHT6CTZS.js","./js/chunks/chunk-2GK2JDEG.js","./js/chunks/chunk-6UW75IXT.js","./js/chunks/chunk-G4XNQYPS.js","./js/chunks/chunk-IJZOQVZL.js","./js/chunks/chunk-OIQVXECV.js","./js/chunks/chunk-P24UNCW6.js","./js/chunks/chunk-RPOD2FPY.js","./js/chunks/chunk-RYARSBBU.js","./js/chunks/chunk-WW3CWIUE.js","./js/chunks/chunk-YEF5A54A.js","./js/chunks/cleanup-TNRZMV2D.js","./js/chunks/cleanup-art-IMDNXJWF.js","./js/chunks/coloring-YLQKRXTI.js","./js/chunks/coloring-art-VLUVE3BU.js","./js/chunks/colors-NXTAKJHG.js","./js/chunks/feelings-QV3KI4B4.js","./js/chunks/games-YPE3YQPL.js","./js/chunks/hideseek-24WK6AA6.js","./js/chunks/hideseek-art-565PUKZL.js","./js/chunks/match-AHA7XFTL.js","./js/chunks/music-HUAJE2L3.js","./js/chunks/numbers-Y752EUJL.js","./js/chunks/potty-RZNLKRVM.js","./js/chunks/potty-art-CKFM4T66.js","./js/chunks/shadows-3TVFBOUY.js","./js/chunks/shapes-JBGC2YWF.js","./js/chunks/tracing-MBR62ANH.js","./js/chunks/tracing-art-QVCWFLLV.js","./js/main-U76ZPZLE.js","./manifest.webmanifest"]};
const CACHE = `little-playhouse-${BUILD.version}`;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Cache files one by one so a single failure is reported but does not abort the rest.
    await Promise.all(BUILD.files.map(async (url) => {
      try {
        const res = await fetch(url, { cache: 'reload' });
        if (res.ok) await cache.put(url, res);
      } catch (err) { /* will be fetched on demand */ }
    }));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((n) => n.startsWith('little-playhouse-') && n !== CACHE).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match('./index.html') || await cache.match('./');
      if (cached) return cached;
      try { return await fetch(req); } catch { return new Response('Offline', { status: 503 }); }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res.ok && res.type === 'basic') cache.put(req, res.clone());
      return res;
    } catch {
      return new Response('', { status: 504 });
    }
  })());
});
