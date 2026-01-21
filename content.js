const adSelectors = [
  "[id*='ad']",
  "[class*='ad']",
  "iframe[src*='ads']",
  "iframe[src*='doubleclick']"
];

const hideAds = () => {
  document.querySelectorAll(adSelectors.join(",")).forEach((element) => {
    element.style.setProperty("display", "none", "important");
  });
};

hideAds();

const observer = new MutationObserver(() => hideAds());
observer.observe(document.documentElement, { childList: true, subtree: true });
