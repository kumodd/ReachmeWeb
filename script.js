const config = {
  appLink: '',
  whatsappNumber: '',
  contactEmail: '',
  whatsappDefaultMessage: 'Hi MyReach, I would like to know more.',
  contactName: 'MyReach team',
  contactAvailability: 'Usually replies within a few hours',
  ...(window.MYREACH_CONFIG || {})
};

const normalizedWhatsAppNumber = String(config.whatsappNumber || '').replace(/\D/g, '');

function getWhatsAppUrl(message) {
  if (!normalizedWhatsAppNumber) return '';
  return `https://wa.me/${normalizedWhatsAppNumber}?text=${encodeURIComponent(message)}`;
}

function getMailtoUrl(subject, message) {
  if (!config.contactEmail) return '';
  return `mailto:${config.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}

function setExternalLink(link, url) {
  if (url) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.classList.remove('is-disabled');
    link.removeAttribute('aria-disabled');
    return;
  }

  link.removeAttribute('href');
  link.classList.add('is-disabled');
  link.setAttribute('aria-disabled', 'true');
}

document.querySelectorAll('[data-app-link]').forEach((link) => {
  if (config.appLink) {
    link.href = config.appLink;
    link.download = config.appFileName || 'myreach-tv.apk';
    link.removeAttribute('target');
    link.removeAttribute('rel');
  }
});

document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
  setExternalLink(link, getWhatsAppUrl(config.whatsappDefaultMessage));
});

document.querySelectorAll('[data-email-link]').forEach((link) => {
  if (config.contactEmail) link.href = `mailto:${config.contactEmail}`;
});

document.querySelectorAll('[data-config-text]').forEach((element) => {
  const value = config[element.dataset.configText];
  if (value) element.textContent = value;
});

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    mobileNav.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      mobileNav.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

document.querySelectorAll('[data-contact-interest]').forEach((link) => {
  link.addEventListener('click', () => {
    const interestField = document.querySelector('#interest');
    if (interestField) interestField.value = link.dataset.contactInterest;
  });
});

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const phone = formData.get('phone').trim();
    const email = formData.get('email').trim();
    const interest = formData.get('interest');
    const message = formData.get('message').trim();
    const contactMessage = [
      `Hi ${config.contactName || 'MyReach'},`,
      '',
      'I would like to connect through the MyReach website.',
      '',
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      `Email: ${email || 'Not provided'}`,
      `I am a: ${interest}`,
      `Message: ${message || 'Not provided'}`
    ].join('\n');

    const whatsappUrl = getWhatsAppUrl(contactMessage);
    const mailtoUrl = getMailtoUrl('MyReach website enquiry', contactMessage);

    if (whatsappUrl) {
      const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!whatsappWindow) window.location.href = whatsappUrl;
      formStatus.textContent = 'WhatsApp is ready with your details. Review the message and tap send.';
      formStatus.className = 'form-status success';
      return;
    }

    if (mailtoUrl) {
      window.location.href = mailtoUrl;
      formStatus.textContent = 'Your email app is opening with the enquiry details.';
      formStatus.className = 'form-status success';
      return;
    }

    formStatus.textContent = 'Add a WhatsApp number or contact email in config.js before submitting.';
    formStatus.className = 'form-status error';
  });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries, revealObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));
