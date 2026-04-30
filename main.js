/* ============================================================
   PROF. DR. ABEBE GELETU — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ---------- NAV TOGGLE (Mobile) ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
      const spans = navToggle.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });

    // Mobile submenu toggle
    document.querySelectorAll('.has-sub > a').forEach(link => {
      link.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          link.parentElement.classList.toggle('open');
        }
      });
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('open');
          const spans = navToggle.querySelectorAll('span');
          spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        }
      });
    });

    // Close nav on outside click
    document.addEventListener('click', e => {
      if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  /* ---------- SCROLL ANIMATIONS ---------- */
  const fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window && fadeEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => obs.observe(el));
  } else {
    // Fallback: show all
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- ACTIVE NAV LINK (on scroll) ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navAnchorLinks.length) {
    const markActive = () => {
      const scrollY = window.scrollY + 120;
      sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          navAnchorLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + section.id);
          });
        }
      });
    };
    window.addEventListener('scroll', markActive, { passive: true });
  }

  /* ---------- SMOOTH SCROLL OFFSET (for fixed nav) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- CONTACT FORM CAPTCHA ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm && contactForm.action && contactForm.action.includes('formspree')) {
    contactForm.addEventListener('submit', function (e) {
      const captchaInput = this.querySelector('[name="captcha"]');
      if (captchaInput) {
        const val = parseInt(captchaInput.value.trim(), 10);
        if (val !== 8) {
          e.preventDefault();
          captchaInput.style.borderColor = '#c62828';
          captchaInput.placeholder = '❌ Incorrect! 5 + 3 = ?';
          captchaInput.value = '';
          captchaInput.focus();
          return false;
        }
      }
    });
  }

  /* ---------- NAV SHRINK ON SCROLL ---------- */
  const mainNav = document.querySelector('.main-nav');
  if (mainNav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        mainNav.style.borderBottomColor = 'rgba(255,255,255,0.1)';
      } else {
        mainNav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
      }
    }, { passive: true });
  }

})();
