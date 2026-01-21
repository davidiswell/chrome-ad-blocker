# chrome-ad-blocker
A Chrome extension that blocks ads - built with Manifest V3.

## Project structure
- `manifest.json`: Extension manifest (MV3).
- `background.js`: Service worker for install lifecycle events.
- `content.js`: Hides common ad elements on the page.
- `rules.json`: Declarative Net Request rules to block common ad requests.

## Load in Chrome
1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select this folder.
