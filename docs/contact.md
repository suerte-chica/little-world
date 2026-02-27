---
title: Contact
hero_title: Say Hello 👋
hero_subtitle: Have something interesting to share? I'd love to hear from you.
template: main.html
hide:
  - toc
---

## Get in touch

Whether you've spotted something interesting, want to collaborate, or just want to say hi — fill in the form below and I'll get back to you as soon as possible.

<form id="contact-form" class="contact-form" aria-label="Contact form" novalidate>
  <div class="form-group">
    <label for="contact-name">Name <span aria-hidden="true">*</span></label>
    <input
      type="text"
      id="contact-name"
      name="name"
      autocomplete="name"
      required
      placeholder="Your name"
      aria-required="true"
    />
  </div>

  <div class="form-group">
    <label for="contact-email">Email address <span aria-hidden="true">*</span></label>
    <input
      type="email"
      id="contact-email"
      name="email"
      autocomplete="email"
      required
      placeholder="you@example.com"
      aria-required="true"
    />
  </div>

  <div class="form-group">
    <label for="contact-subject">Subject</label>
    <input
      type="text"
      id="contact-subject"
      name="subject"
      placeholder="What's on your mind?"
    />
  </div>

  <div class="form-group">
    <label for="contact-message">Message <span aria-hidden="true">*</span></label>
    <textarea
      id="contact-message"
      name="message"
      required
      placeholder="Tell me something interesting…"
      aria-required="true"
      rows="6"
    ></textarea>
  </div>

  <p class="form-note">
    Fields marked <span aria-hidden="true">*</span><span class="sr-only">with an asterisk</span> are required.
  </p>

  <button type="submit" class="form-submit" aria-label="Send message">
    <span aria-hidden="true">✉️</span> Send message
  </button>
</form>

---

## Other ways to connect

<div class="feature-grid" style="margin-top: 1rem;">
  <div class="feature-card">
    <span class="feature-card__icon" aria-hidden="true">📂</span>
    <div class="feature-card__title">GitHub</div>
    <p class="feature-card__desc">Find the source code for this site and other projects on <a href="https://github.com/suerte-chica" rel="noopener noreferrer" target="_blank">GitHub</a>.</p>
  </div>
  <div class="feature-card">
    <span class="feature-card__icon" aria-hidden="true">📰</span>
    <div class="feature-card__title">RSS Feed</div>
    <p class="feature-card__desc">Subscribe to the RSS feed (linked in the footer) and never miss a new post.</p>
  </div>
</div>
