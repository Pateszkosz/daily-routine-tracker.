# Napi Rutin Tracker

Ez a projekt egy napi rutin követő webalkalmazás, amely lehetővé teszi a felhasználók számára, hogy napi teendőiket és jegyzeteiket nyomon kövessék. A webalkalmazás reszponzív, és Progressive Web App (PWA) formában telepíthető mobil eszközökre.

## Fájlstruktúra
daily-routine-tracker/
│
├── index.html
├── styles.css
├── scripts.js
├── routines.json
├── add_routine.py
├── manifest.json
├── service-worker.js
├── icons/
│ ├── icon-192x192.png
│ └── icon-512x512.png
└── README.md
## Használat

1. Helyezd a fájlokat egy webszerverre vagy használd a GitHub Pages-t a webalkalmazás hosztolásához.
2. A `routines.json` fájlban adhatod meg a napi rutinokat.
3. Az `add_routine.py` scriptet használhatod a napi rutinok automatikus hozzáadásához.
4. A manifest fájl (`manifest.json`) és a service worker (`service-worker.js`) konfigurálásával a webalkalmazás PWA formában telepíthető és offline is használható.

## Telepítés PWA-ként

1. Nyisd meg a weboldalt a mobil böngésződben.
2. A böngésző felkínálja az alkalmazás telepítését.
3. Az alkalmazás ezután úgy viselkedik, mint egy natív alkalmazás, és offline is használható.

## Hozzájárulás

Ha hozzá szeretnél járulni a projekthez, nyugodtan nyiss egy pull requestet vagy nyiss egy issue-t a GitHub repository-ban.
