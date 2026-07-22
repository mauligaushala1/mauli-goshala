/* ═══════════════════════════════════════════════
   Mauli Go-Vardhan Goshala — script.js
═══════════════════════════════════════════════ */

// ──────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────
// ──────────────────────────────────────────────
// 📞 CONTACT NUMBERS — CHANGE THEM ONLY HERE
// Every WhatsApp button and Call button across the ENTIRE
// site (index.html + products.html) reads from these two
// lines. Change a number below, save, refresh the site —
// every button updates automatically. No need to touch
// index.html or products.html at all.
//
// Format: countrycode + number, no +, no spaces, no dashes.
// Example: 91 (India) + 9870832979 = '919870832979'
// ──────────────────────────────────────────────
const CONTACT = {
  main: '919768859999',       // Pradip Bhoir — main WhatsApp & Call number
  secondary: '918097524181'   // Secondary Call number (About & Contact sections)
};
const WA_NUMBER = CONTACT.main; // used by waLink() below — do not edit

// Turns '919870832979' into '+91 98708 32979' for display
function formatIndianNumber(num) {
  const cc = num.slice(0, 2);
  const local = num.slice(2);
  return `+${cc} ${local.slice(0, 5)} ${local.slice(5)}`;
}

// Applies CONTACT numbers to every phone/WhatsApp link on the page
function applyContactNumbers() {
  // 1) WhatsApp "Order"/"Buy"/"Book"/"Chat" links — each keeps its
  //    own pre-filled product message, only the number gets synced.
  document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
    a.href = a.href.replace(/wa\.me\/[0-9 ]+/, `wa.me/${CONTACT.main}`);
  });

  // 2) Call links — mark these in HTML with data-tel="main" or
  //    data-tel="secondary". The visible number (if wrapped in
  //    <span data-tel-text>) is updated too.
  document.querySelectorAll('[data-tel]').forEach(a => {
    const num = CONTACT[a.dataset.tel];
    if (!num) return;
    a.href = `tel:+${num}`;
    const textEl = a.querySelector('[data-tel-text]');
    if (textEl) textEl.textContent = formatIndianNumber(num);
  });
}

document.addEventListener('DOMContentLoaded', applyContactNumbers);

// ──────────────────────────────────────────────
// 💬 WHATSAPP MESSAGE TEMPLATES — CHANGE THE WORDING HERE
// Edit any message below and EVERY matching WhatsApp button
// across the whole site updates automatically.
//
// Placeholders get filled in automatically per button:
//   {product} → the product's name
//   {price}   → the product's price
//   {title}   → the seva/puja name (booking popup only)
// Leave the placeholders exactly as they are — just change
// the surrounding wording/tone as you like.
// ──────────────────────────────────────────────
const MESSAGES = {
  // Every product's "Buy / Order" button + the "Order on
  // WhatsApp" button inside the "Know More" popup
  productOrder:
`Namaste Pradip ji 🙏

I am interested in ordering:
*{product}*
Price: {price}

Please confirm availability and delivery details. Thank you!`,

  // Nav bar "Order on WhatsApp" button (no specific product)
  general:
`Namaste, I would like to know more about Mauli Go-Vardhan Goshala products.`,

  // Products page nav bar "Order on WhatsApp" button
  navCta:
`Namaste, I would like to order from Mauli Go-Vardhan Goshala.`,

  // Contact section's large "Order on WhatsApp" button
  contactCta:
`Namaste Pradip ji, I am interested in ordering Mauli Go-Vardhan Goshala products. Please share the product list and details.`,

  // Bottom-of-page "Bulk Order" button
  bulkOrder:
`Namaste Pradip ji, I would like to place a bulk order for Mauli Goshala products.`,

  // Floating "Enquire" button
  enquiry:
`Namaste Pradip ji 🙏
I would like to enquire about your products and services.`,

  // Seva / Puja booking popup
  booking:
`Namaste Pradip ji 🙏

I would like to book:
*{title}*
Price: {price}

Please confirm the date, time and details. Thank you!`
};

// Fills {placeholders} in a message template with real values
function fillMessage(templateKey, data = {}) {
  const tpl = MESSAGES[templateKey];
  if (!tpl) return '';
  return tpl.replace(/\{(\w+)\}/g, (_, key) => data[key] ?? '');
}

// Rebuilds every tagged WhatsApp link's href from CONTACT + MESSAGES
function applyContactMessages() {
  document.querySelectorAll('a[data-wa-msg]').forEach(a => {
    const type = a.dataset.waMsg;
    const data = {
      product: a.dataset.product || '',
      price: a.dataset.price || '',
      title: a.dataset.title || ''
    };
    const msg = fillMessage(type, data);
    a.href = `https://wa.me/${CONTACT.main}?text=${encodeURIComponent(msg)}`;
  });
}

document.addEventListener('DOMContentLoaded', applyContactMessages);

const PRODUCTS = [
  {
    id: 1, featured: true,
    name: "Mauli Zero Chemical Milk",
    icon: "🥛",
    tag: "Dairy",
    price: "₹110 / litre",
    desc: "Freshest pure Desi cow milk — an intellectual booster for babies and comparable to mother's milk in nutrition.",
    benefits: ["100% chemical-free & natural", "Rich in A2 protein", "Boosts infant brain development", "Suitable for all age groups"],
    details: "Our zero-chemical milk comes directly from healthy, free-ranging Indian cows. No hormones, no preservatives, no adulterants. Every drop is tested for purity before delivery."
  },
  {
    id: 2, featured: true,
    name: "Butter Makkhan",
    icon: "🧈",
    tag: "Dairy",
    price: "₹2000 / kg",
    desc: "Traditional hand-churned white butter for cultivating a sattvic temperament. Deeply medicinal.",
    benefits: ["Hand-churned from cultured cream", "Cultivates sattvic energy", "Aids digestion and memory", "Pure, no added salt"],
    details: "Made using the ancient Vedic bilona method. The butter is carefully churned by hand from curd of pure Desi cow milk — a time-intensive process that preserves all prana."
  },
  {
    id: 4, featured: true,
    name: "Mauli Pure Ghee",
    icon: "✨",
    tag: "Bestseller",
    price: "₹750 / 250 gms",
    desc: "Prepared in vedic manner using the bilona method. Highly sattvic, medicinal, and deeply nourishing.",
    benefits: ["Bilona method — highest potency", "Enhances Ojas & immunity", "Ideal for cooking & rituals", "Pure golden colour & aroma"],
    details: "Our flagship ghee is slow-cooked over a wood fire from cultured Desi cow curd. Each batch carries the fragrance and golden hue only possible with truly pure ingredients."
  },
  {
    id: 3, featured: true,
    name: "Butter Milk / Chhach",
    icon: "🍶",
    tag: "Dairy",
    price: "₹25 / litre",
    desc: "Light and refreshing traditional chaas. Excellent for food digestion and cooling the body naturally.",
    benefits: ["Natural digestive aid", "Cools body heat", "Rich in probiotics", "Ideal in summer"],
    details: "Prepared fresh from pure Desi cow curd, this chhach is a time-honoured drink mentioned in Ayurveda for its digestive and cooling properties."
  },
  {
    id: 19, featured: true,
    name: "Mauli Gomay Soap",
    icon: "🧼",
    tag: "Skin Care",
    price: "₹40",
    desc: "Gobar-based herbal soap for daily bathing and relief from common skin diseases. Gentle and natural.",
    benefits: ["Contains Panchgavya ingredients", "Heals skin disorders", "Anti-bacterial naturally", "Gentle on all skin types"],
    details: "Made with cow dung (gobar), herbal extracts, and natural essential oils. Free from synthetic detergents or SLS. Leaves skin soft and protected."
  },
  {
    id: 18, featured: true,
    name: "Mauli Nasya Ghrut",
    icon: "💧",
    tag: "Wellness",
    price: "₹120",
    desc: "Panchgavya ghee for nasal administration. Useful for Sinus, Migraine, Snoring and related issues.",
    benefits: ["Relieves chronic sinusitis", "Reduces migraine frequency", "Helps stop snoring", "Nourishes nasal passage"],
    details: "Ancient Nasya therapy uses medicated ghee instilled in the nose to cleanse the head channels. This preparation follows classical Ayurvedic formulas using Desi cow ghee and therapeutic herbs."
  }
];



// GALLERY_DATA is now built automatically from the gallery grid
// in index.html — see buildGalleryData() below. No separate list
// to maintain, so the lightbox always matches your thumbnails.

// ──────────────────────────────────────────────
// NAVBAR SCROLL
// ──────────────────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  // Always start with dark navbar for video bg
  navbar.classList.add('scrolled');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.add('scrolled');
  });
}

// ──────────────────────────────────────────────
// HAMBURGER
// ──────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
  });
}

// ──────────────────────────────────────────────
// BUILD WA LINK
// ──────────────────────────────────────────────
function waLink(productName, price) {
  const msg = encodeURIComponent(
    fillMessage('productOrder', { product: productName, price: price })
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

// ──────────────────────────────────────────────
// RENDER FEATURED PRODUCTS (index.html)
// ──────────────────────────────────────────────
const featuredGrid = document.getElementById('featuredProducts');
if (featuredGrid) {
  PRODUCTS.filter(p => p.featured).forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-card-tag">${p.tag}</div>
      <div class="product-icon-wrap">${p.icon}</div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
      </div>
      <div class="product-footer">
        <span class="product-price">${p.price}</span>
        <div class="product-actions">
          <button class="btn btn-outline-saffron know-more-btn" data-id="${p.id}">Know More</button>
          <a href="${waLink(p.name, p.price)}" target="_blank" class="btn btn-wa">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Buy
          </a>
        </div>
      </div>
    `;
    featuredGrid.appendChild(card);
  });

  // Know More buttons → modal
  document.querySelectorAll('.know-more-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(parseInt(btn.dataset.id)));
  });
}

// ──────────────────────────────────────────────
// ALL PRODUCTS — cards are hardcoded in HTML.
// Filter buttons show/hide cards via data-tag.
// ──────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tag = btn.dataset.tag;
    document.querySelectorAll('#allProductsGrid .product-card').forEach(card => {
      if (tag === 'all' || card.dataset.tag === tag) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ──────────────────────────────────────────────
// PRODUCT DETAIL MODAL (index.html – full data)
// ──────────────────────────────────────────────
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose    = document.getElementById('modalClose');
const modalBody     = document.getElementById('modalBody');

// ──────────────────────────────────────────────
// VIDEO HELPERS — turns a plain URL into an embeddable player
// Accepts: YouTube links (any format), or a direct video file
// URL (.mp4/.webm/.ogg hosted anywhere, e.g. your own server,
// Google Drive direct link, Cloudinary, etc.)
// ──────────────────────────────────────────────
function getYouTubeId(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function buildVideoEmbed(video) {
  if (!video) return '';
  const ytId = getYouTubeId(video);
  if (ytId) {
    return `
      <div class="modal-video-wrap">
        <iframe
          src="https://www.youtube.com/embed/${ytId}"
          title="Product video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>`;
  }
  // Direct video file (mp4/webm/ogg)
  return `
    <div class="modal-video-wrap">
      <video controls preload="metadata" playsinline>
        <source src="${video}">
        Your browser does not support the video tag.
      </video>
    </div>`;
}

function openModal(name, tag, price, desc, icon, video = '') {
  if (!modalBody) return;
  modalBody.innerHTML = `
    <div class="modal-icon">${icon}</div>
    <div class="modal-tag">${tag}</div>
    <h2 class="modal-title">${name}</h2>
    <p class="modal-desc">${desc}</p>
    ${video ? `
    <div class="modal-video-section">
      <h4>🎬 Product Video</h4>
      ${buildVideoEmbed(video)}
    </div>` : ''}
    <div class="modal-benefits">
      <h4>Usage &amp; Info</h4>
      <ul>
        <li>100% natural, made from pure Indian cow products</li>
        <li>No chemicals, no synthetic additives</li>
        <li>Prepared as per traditional Panchgavya methods</li>
        <li>Call us for detailed dosage &amp; usage guidance</li>
      </ul>
    </div>
    <div class="modal-price-row">
      <span class="modal-price">${price}</span>
    </div>
    <div class="modal-actions">
      <a href="${waLink(name, price)}" target="_blank" class="btn btn-wa">
        🟢 Order on WhatsApp
      </a>
      <a href="tel:+${CONTACT.main}" class="btn btn-outline-saffron">
        📞 Call to Enquire
      </a>
    </div>
  `;
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}


if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}
if (modalBackdrop) {
  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) closeModal();
  });
}

function closeModal() {
  if (modalBackdrop) modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
  // Stop any playing video/iframe so audio doesn't keep running in background
  if (modalBody) {
    const vid = modalBody.querySelector('video');
    if (vid) vid.pause();
    const iframe = modalBody.querySelector('iframe');
    if (iframe) iframe.src = iframe.src; // reload = stops YouTube playback
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLightbox(); }
});

// ──────────────────────────────────────────────
// GALLERY LIGHTBOX
// ──────────────────────────────────────────────
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbClose   = document.getElementById('lbClose');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');
let lbIndex = 0;

// Reads the full-size image + caption straight from each .g-item
// in the gallery grid, so the popup always matches the thumbnail
// you clicked — change the image or caption in index.html only.
function buildGalleryData() {
  return Array.from(document.querySelectorAll('.g-item')).map(item => ({
    src: item.querySelector('img')?.src || '',
    caption: item.querySelector('.g-overlay span')?.textContent || ''
  }));
}
const GALLERY_DATA = buildGalleryData();

document.querySelectorAll('.g-item').forEach(item => {
  item.addEventListener('click', () => {
    lbIndex = parseInt(item.dataset.idx);
    showLb(lbIndex);
  });
});

function showLb(i) {
  if (!lightbox || !GALLERY_DATA[i]) return;
  lbImg.src = GALLERY_DATA[i].src;
  lbCaption.textContent = GALLERY_DATA[i].caption;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (lightbox) lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

if (lbClose) lbClose.addEventListener('click', closeLightbox);
if (lbPrev)  lbPrev.addEventListener('click', () => { lbIndex = (lbIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length; showLb(lbIndex); });
if (lbNext)  lbNext.addEventListener('click', () => { lbIndex = (lbIndex + 1) % GALLERY_DATA.length; showLb(lbIndex); });

// ──────────────────────────────────────────────
// NEWS & OUR JOURNEY — tabs with a horizontal row per tab
// Clicking a tab shows that tab's panel (and hides the rest).
// Each panel has its own row of cards with its own pair of
// arrows, so scrolling one tab's row never affects another.
// ──────────────────────────────────────────────
(function initNewsTabs() {
  const tabs   = Array.from(document.querySelectorAll('.news-tab'));
  const panels = Array.from(document.querySelectorAll('.news-panel'));
  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.dataset.tab === id));
    });
  });

  // Wire up the left/right arrows for every panel's row —
  // works no matter how many tabs or cards get added later.
  document.querySelectorAll('.news-row-wrap').forEach(wrap => {
    const row  = wrap.querySelector('.news-row');
    const prev = wrap.querySelector('[data-scroll="prev"]');
    const next = wrap.querySelector('[data-scroll="next"]');
    if (!row) return;
    const step = () => row.clientWidth; // one full box per click
    if (prev) prev.addEventListener('click', () => row.scrollBy({ left: -step(), behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => row.scrollBy({ left: step(), behavior: 'smooth' }));
  });
})();

// ──────────────────────────────────────────────
// SCROLL REVEAL (simple intersection observer)
// ──────────────────────────────────────────────
const revealTargets = document.querySelectorAll(
  '.product-card, .about-grid, .locate-grid, .g-item, .trust-item, .section-header'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

// ──────────────────────────────────────────────
// SMOOTH ACTIVE NAV LINK
// ──────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ──────────────────────────────────────────────
// HERO MUTE / UNMUTE via YouTube iframe postMessage
// ──────────────────────────────────────────────
(function () {
  const muteBtn     = document.getElementById('muteToggleBtn');
  const iconMuted   = document.getElementById('iconMuted');
  const iconUnmuted = document.getElementById('iconUnmuted');
  const videoFrame  = document.getElementById('heroVideo');
  let isMuted = true;

  function sendYTCommand(cmd) {
    if (!videoFrame) return;
    videoFrame.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: cmd, args: [] }),
      '*'
    );
  }

  if (muteBtn && videoFrame) {
    muteBtn.addEventListener('click', () => {
      if (isMuted) {
        sendYTCommand('unMute');
        if (iconMuted)   iconMuted.style.display   = 'none';
        if (iconUnmuted) iconUnmuted.style.display = 'block';
        muteBtn.setAttribute('title', 'Mute video');
        isMuted = false;
      } else {
        sendYTCommand('mute');
        if (iconMuted)   iconMuted.style.display   = 'block';
        if (iconUnmuted) iconUnmuted.style.display = 'none';
        muteBtn.setAttribute('title', 'Unmute video');
        isMuted = true;
      }
    });
  }
})();

// ──────────────────────────────────────────────
// BOOKING MODAL
// ──────────────────────────────────────────────
const bookingBackdrop   = document.getElementById('bookingBackdrop');
const bookingModalClose = document.getElementById('bookingModalClose');
const bookingModalBody  = document.getElementById('bookingModalBody');

function openBookingModal(title, icon, desc, price) {
  if (!bookingModalBody) return;
  const waMsg = encodeURIComponent(
    fillMessage('booking', { title: title, price: price })
  );
  bookingModalBody.innerHTML = `
    <div class="modal-icon">${icon}</div>
    <div class="modal-tag">Sacred Seva</div>
    <h2 class="modal-title">${title}</h2>
    <p class="modal-desc">${desc}</p>
    <div class="booking-seva-options">
      <div class="seva-option">Starting price <span>${price}</span></div>
      <div class="seva-option">Location <span>Narivali, Thane</span></div>
      <div class="seva-option">Booking via <span>WhatsApp / Call</span></div>
    </div>
    <div class="modal-actions">
      <a href="https://wa.me/${CONTACT.main}?text=${waMsg}" target="_blank" class="btn btn-wa">
        🟢 Book on WhatsApp
      </a>
      <a href="tel:+${CONTACT.main}" class="btn btn-outline-saffron">
        📞 Call to Book
      </a>
    </div>
  `;
  bookingBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

if (bookingModalClose) {
  bookingModalClose.addEventListener('click', () => {
    bookingBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  });
}
if (bookingBackdrop) {
  bookingBackdrop.addEventListener('click', e => {
    if (e.target === bookingBackdrop) {
      bookingBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ──────────────────────────────────────────────
// 🐄 SCROLL COW & KRISHNA — both are visible on screen
// from the moment the page loads. As the whole site is
// scrolled, the cow walks from the left edge toward
// Krishna's actual on-screen position (measured live, so
// it's always accurate on any screen size). They only
// visually meet once the user reaches the true bottom
// of the entire website (100% scrolled).
// ──────────────────────────────────────────────
(function () {
  const cow = document.getElementById('scrollCow');
  const krishna = document.getElementById('scrollKrishna');
  const caption = document.getElementById('krishnaCaption');
  if (!cow || !krishna) return;

  function updateCowPosition() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

    // Walk toward Krishna's real on-screen left edge
    const krishnaLeft = krishna.getBoundingClientRect().left;
    cow.style.left = `${percent * krishnaLeft}px`;

    // Only "arrive" at the true bottom of the whole page
    const arrived = percent >= 0.995;
    cow.classList.toggle('arrived', arrived);
    krishna.classList.toggle('cow-arrived', arrived);
    if (caption) caption.textContent = arrived
      ? 'Gau Mata Has Come Home 💛🙏'
      : 'Where Krishna Awaits';
  }

  window.addEventListener('scroll', updateCowPosition, { passive: true });
  window.addEventListener('resize', updateCowPosition);
  updateCowPosition();
})();
