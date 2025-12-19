// Make sure the correct data-theme is set as soon as possible to prevent FOUC
setTheme(isDarkTheme());

document.addEventListener("astro:after-swap", () => setTheme(isDarkTheme()));
document.addEventListener("change", ({ target }) => {
  if (
    target instanceof HTMLInputElement &&
    target.classList.contains("theme-input")
  ) {
    setTheme(target.checked);
  }
});

/**
 * @param isDark {boolean}
 */
function setTheme(isDark) {
  document.documentElement.dataset.theme = isDark ? "black" : "light";
  localStorage.setItem("dark-theme", isDark.toString());

  for (const input of document.getElementsByClassName("theme-input")) {
    if (input instanceof HTMLInputElement) {
      input.checked = isDark;
    }
  }
}

function isDarkTheme() {
  const saved = localStorage.getItem("dark-theme");
  return saved == null
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : saved === "true";
}

/**
 * @param {Event} event
 */
function removeSkeletonClass({ target }) {
  if (target instanceof HTMLElement) {
    target.classList.remove("skeleton");
  }
}

document.addEventListener("load", removeSkeletonClass, { capture: true });
document.addEventListener("error", removeSkeletonClass, { capture: true });
