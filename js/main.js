/* ============================================================
   ClerQ Intelligence: Global JS
   Navigation, language toggle, smooth anchor scroll, and boot
   ============================================================ */

(function () {
  'use strict';

  // ============================================================
  // Language Management (SW / EN)
  // ============================================================
  var LANG_KEY = 'clerq-lang';

  function getLang() {
    try {
      return localStorage.getItem(LANG_KEY) || 'en';
    } catch (e) {
      return 'en';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}

    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'sw' ? 'sw' : 'en');

    document.querySelectorAll('[data-en][data-sw]').forEach(function (el) {
      var text = lang === 'sw' ? el.getAttribute('data-sw') : el.getAttribute('data-en');
      if (text) el.textContent = text;
    });

    var langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      var label = langToggle.querySelector('.nav__lang-label') || langToggle;
      label.textContent = lang === 'en' ? 'SW' : 'EN';
    }
  }

  // ============================================================
  // Global Event Listeners & Navigation
  // ============================================================
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('#lang-toggle');
    if (!toggle) return;
    var current = getLang();
    setLang(current === 'en' ? 'sw' : 'en');
  });

  // Mobile navigation toggle & collapsible overlay
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  var navClose = document.getElementById('nav-close');
  var mainNav = document.getElementById('main-nav');
  if (navToggle && navLinks) {
    function toggleMobileMenu(forceOpen) {
      var willOpen = typeof forceOpen === 'boolean' ? forceOpen : !navLinks.classList.contains('nav__links--open');
      navLinks.classList.toggle('nav__links--open', willOpen);
      navToggle.classList.toggle('nav__toggle--open', willOpen);
      navToggle.setAttribute('aria-expanded', String(willOpen));
      if (mainNav) {
        mainNav.classList.toggle('nav--menu-open', willOpen);
      }
      document.body.style.overflow = willOpen ? 'hidden' : '';
    }

    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });

    if (navClose) {
      navClose.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMobileMenu(false);
      });
    }

    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('#nav-close') || e.target.closest('.nav__close')) {
        e.stopPropagation();
        toggleMobileMenu(false);
      }
    });

    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMobileMenu(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('nav__links--open')) {
        toggleMobileMenu(false);
      }
    });
  }

  // Navbar scroll background
  var nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }

  // ============================================================
  // Direct Smooth-Scroll Triggers (Account for Sticky Nav)
  // ============================================================
  function getNavOffset() {
    var navEl = document.getElementById('main-nav');
    return navEl ? navEl.getBoundingClientRect().height : 64;
  }

  function scrollToAnchorTarget(hash) {
    if (!hash || hash === '#') return false;
    var targetId = hash.charAt(0) === '#' ? hash.slice(1) : hash;
    var target = document.getElementById(targetId);
    if (!target) return false;

    var navH = getNavOffset();
    var rect = target.getBoundingClientRect();
    var targetY = rect.top + window.pageYOffset - navH - 12;

    window.scrollTo({
      top: Math.max(0, Math.round(targetY)),
      behavior: 'smooth'
    });

    return true;
  }

  function initScrollTriggers() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || href === '#') return;

      if (scrollToAnchorTarget(href)) {
        e.preventDefault();
        if (history && typeof history.replaceState === 'function') {
          try {
            history.replaceState(null, '', href);
          } catch (err) {}
        }
      }
    });
  }

  // Initialize on DOM ready
  function boot() {
    var initialLang = getLang();
    setLang(initialLang);
    initScrollTriggers();

    if (window.location.hash && window.location.hash.length > 1) {
      setTimeout(function () {
        scrollToAnchorTarget(window.location.hash);
      }, 60);
    } else {
      if ('scrollRestoration' in history) {
        try {
          history.scrollRestoration = 'manual';
        } catch (e) {}
      }
      window.scrollTo(0, 0);
      requestAnimationFrame(function () {
        if (!window.location.hash) {
          window.scrollTo(0, 0);
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
