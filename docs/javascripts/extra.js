/**
 * extra.js – progressive enhancements for Little World
 */

/* Insert skip-to-content link for keyboard / screen-reader users */
(function () {
  "use strict";

  function addSkipLink() {
    const existing = document.getElementById("skip-to-main");
    if (existing) return;

    const link = document.createElement("a");
    link.id = "skip-to-main";
    link.href = "#main-content";
    link.className = "skip-link";
    link.textContent = "Skip to main content";
    document.body.insertBefore(link, document.body.firstChild);

    /* Also add the target id to the main content area */
    const main =
      document.querySelector(".md-content__inner") ||
      document.querySelector("main") ||
      document.querySelector("article");
    if (main && !main.id) {
      main.id = "main-content";
    }
  }

  /* Contact form: show inline success message instead of navigating */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const btn = form.querySelector(".form-submit");
      const originalText = btn ? btn.textContent : "";

      if (btn) {
        btn.textContent = "Sending…";
        btn.disabled = true;
      }

      /* Simulate async send (replace with real endpoint in production) */
      setTimeout(function () {
        form.innerHTML =
          '<div role="status" aria-live="polite" style="text-align:center;padding:2rem 0;">' +
          '<span style="font-size:3rem;">🎉</span>' +
          '<h3 style="margin-top:1rem;">Message received!</h3>' +
          "<p>Thanks for reaching out. I'll get back to you soon.</p>" +
          "</div>";
      }, 800);
    });
  }

  /* Smooth scroll for anchor links */
  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.focus({ preventScroll: true });
      }
    });
  }

  /* Run everything once DOM is ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      addSkipLink();
      initContactForm();
      initSmoothScroll();
    });
  } else {
    addSkipLink();
    initContactForm();
    initSmoothScroll();
  }
})();
