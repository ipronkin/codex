(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile menu
  const burger = document.querySelector(".burger");
  const mobileNav = document.getElementById("mobileNav");

  function closeMobile() {
    if (!burger || !mobileNav) return;
    burger.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  }

  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });

    // Close menu on link click
    mobileNav.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A") closeMobile();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobile();
    });
  }

  // Copy to clipboard
  const copyButtons = document.querySelectorAll("[data-copy]");
  const status = document.getElementById("copyStatus");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy");
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        if (status) status.textContent = "Ссылка скопирована.";
        setTimeout(() => { if (status) status.textContent = ""; }, 2500);
      } catch {
        if (status) status.textContent = "Не удалось скопировать. Скопируйте вручную: " + text;
      }
    });
  });
})();
