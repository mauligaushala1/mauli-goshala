/* ═══════════════════════════════════════════════
   Mauli Go-Vardhan Goshala — script.js
═══════════════════════════════════════════════ */

// ──────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────
const WA_NUMBER = '919870832979';

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

const ALL_PRODUCTS = [
  { id:1,  name:"Mauli Zero Chemical Milk",          icon:"🥛", tag:"Dairy",    price:"₹110 / litre",      desc:"Intellectual booster for babies, similar to mother's milk" },
  { id:2,  name:"Butter Makkhan",                    icon:"🧈", tag:"Dairy",    price:"₹2000 / kg",        desc:"For cultivating sattvic vritti and medicinal use" },
  { id:3,  name:"Butter Milk / Chhach",              icon:"🍶", tag:"Dairy",    price:"₹25 / litre",       desc:"Useful for food digestion and heat absorption" },
  { id:4,  name:"Mauli Pure Ghee",                   icon:"✨", tag:"Dairy",    price:"₹750 / 250 gms",    desc:"Made in vedic manner, very sattvic & medicinal" },
  { id:5,  name:"Go-ark Tulsi Ghanvati",             icon:"🌿", tag:"Wellness", price:"₹200",              desc:"Useful on piles and kapha diseases" },
  { id:6,  name:"Go-ark Prajkta Ghanvati",           icon:"🌱", tag:"Wellness", price:"₹160",              desc:"Useful for joint pain & vata" },
  { id:7,  name:"Go-ark Arjun Ghanvati",             icon:"❤️", tag:"Wellness", price:"₹200",              desc:"Useful on heart and blood related diseases" },
  { id:8,  name:"Go-ark Pashanbhed Ghanvati",        icon:"🫘", tag:"Wellness", price:"₹200",              desc:"Useful for kidney stones" },
  { id:9,  name:"Go-ark Amrutvel Ghanvati",          icon:"🩸", tag:"Wellness", price:"₹200",              desc:"Useful for diabetes" },
  { id:10, name:"Go-ark Punarnava Ghanvati",         icon:"🌾", tag:"Wellness", price:"₹200",              desc:"Useful on cancer and fat lumps" },
  { id:11, name:"Mauli Divya Dant Manjan",           icon:"😁", tag:"Oral Care",price:"₹50",               desc:"For clean, healthy teeth and gums. For bad breath" },
  { id:12, name:"Mauli Suvasik Utne",                icon:"🛁", tag:"Bath",     price:"₹20 / 40 gms",      desc:"For Abhyang bath" },
  { id:13, name:"Mauli Netra Aushdhi",               icon:"👁️", tag:"Wellness", price:"₹50",               desc:"For redness of the eyes and other eye diseases" },
  { id:14, name:"Mauli Karn Aushdhi",                icon:"👂", tag:"Wellness", price:"₹40",               desc:"For ear diseases" },
  { id:15, name:"Mauli Amrutdhara",                  icon:"💆", tag:"Pain Care", price:"₹100 & ₹50",       desc:"For body pain, Joint pain" },
  { id:16, name:"Mauli Dhupbatti",                   icon:"🪔", tag:"Spiritual", price:"₹30",              desc:"Purifies atmosphere, produces plenty of oxygen" },
  { id:17, name:"Mauli Go-nail",                     icon:"🏠", tag:"Home",     price:"₹100",              desc:"Natural floor cleaner" },
  { id:18, name:"Mauli Nasya Ghrut",                 icon:"💧", tag:"Wellness", price:"₹120",              desc:"For Sinus, Migraine, Snoring — nasal Panchgavya ghee" },
  { id:19, name:"Mauli Gomay Soap",                  icon:"🧼", tag:"Skin Care", price:"₹40",              desc:"Useful for daily bathing and skin diseases" },
  { id:20, name:"Mauli Panchgavya Soap",             icon:"🫧", tag:"Skin Care", price:"₹60",              desc:"Useful for daily bathing" },
  { id:21, name:"Mauli Takrarist",                   icon:"🌀", tag:"Wellness", price:"₹120",              desc:"Useful in acidity, loss of appetite, constipation" },
  { id:22, name:"Mauli Shat Dhaut Ghrut",            icon:"🌸", tag:"Skin Care", price:"₹125 / 25 gms",    desc:"Useful in skin diseases, wounds and rheumatic disease" },
  { id:23, name:"Anti Radiation Chip",               icon:"📡", tag:"Protection",price:"₹100",             desc:"To avoid harmful radiation" }
];

const GALLERY_DATA = [
  { src:"https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=900&q=85", caption:"Sacred Indian Cows at the Goshala" },
  { src:"https://images.unsplash.com/photo-1596715657897-e8e52c44df53?w=900&q=85", caption:"Vedic Ghee Making Process" },
  { src:"https://images.unsplash.com/photo-1612197527762-8cfb4b634fe9?w=900&q=85", caption:"Daily Cow Seva & Care" },
  { src:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=900&q=85", caption:"Pure Panchgavya Products" },
  { src:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=85", caption:"Morning Puja at the Goshala" },
  { src:"https://images.unsplash.com/photo-1560493676-04071c5f467b?w=900&q=85", caption:"Green Pastures of Narivali" }
];

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
    `Namaste Pradip ji 🙏\n\nI am interested in ordering:\n*${productName}*\nPrice: ${price}\n\nPlease confirm availability and delivery details. Thank you!`
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
// RENDER ALL PRODUCTS (products.html)
// ──────────────────────────────────────────────
const allGrid = document.getElementById('allProductsGrid');
if (allGrid) {
  renderAllProducts(ALL_PRODUCTS);
}

function renderAllProducts(list) {
  const allGrid = document.getElementById('allProductsGrid');
  if (!allGrid) return;
  allGrid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.tag = p.tag;
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
          <button class="btn btn-outline-saffron know-more-all-btn" data-id="${p.id}">Details</button>
          <a href="${waLink(p.name, p.price)}" target="_blank" class="btn btn-wa">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order
          </a>
        </div>
      </div>
    `;
    allGrid.appendChild(card);
  });

  document.querySelectorAll('.know-more-all-btn').forEach(btn => {
    btn.addEventListener('click', () => openModalAll(parseInt(btn.dataset.id)));
  });
}

// Filter buttons (products.html)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tag = btn.dataset.tag;
    if (tag === 'all') renderAllProducts(ALL_PRODUCTS);
    else renderAllProducts(ALL_PRODUCTS.filter(p => p.tag === tag));
  });
});

// ──────────────────────────────────────────────
// PRODUCT DETAIL MODAL (index.html – full data)
// ──────────────────────────────────────────────
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose    = document.getElementById('modalClose');
const modalBody     = document.getElementById('modalBody');

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p || !modalBody) return;
  modalBody.innerHTML = `
    <div class="modal-icon">${p.icon}</div>
    <div class="modal-tag">${p.tag}</div>
    <h2 class="modal-title">${p.name}</h2>
    <p class="modal-desc">${p.details || p.desc}</p>
    <div class="modal-benefits">
      <h4>Key Benefits</h4>
      <ul>${(p.benefits||[]).map(b=>`<li>${b}</li>`).join('')}</ul>
    </div>
    <div class="modal-price-row">
      <span class="modal-price">${p.price}</span>
    </div>
    <div class="modal-actions">
      <a href="${waLink(p.name, p.price)}" target="_blank" class="btn btn-wa">
        🟢 Order on WhatsApp
      </a>
      <a href="tel:+919870832979" class="btn btn-outline-saffron">
        📞 Call to Enquire
      </a>
    </div>
  `;
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openModalAll(id) {
  const p = ALL_PRODUCTS.find(x => x.id === id);
  if (!p || !modalBody) return;
  modalBody.innerHTML = `
    <div class="modal-icon">${p.icon}</div>
    <div class="modal-tag">${p.tag}</div>
    <h2 class="modal-title">${p.name}</h2>
    <p class="modal-desc">${p.desc}</p>
    <div class="modal-benefits">
      <h4>Usage & Info</h4>
      <ul>
        <li>100% natural, made from pure Indian cow products</li>
        <li>No chemicals, no synthetic additives</li>
        <li>Prepared as per traditional Panchgavya methods</li>
        <li>Call us for detailed dosage & usage guidance</li>
      </ul>
    </div>
    <div class="modal-price-row">
      <span class="modal-price">${p.price}</span>
    </div>
    <div class="modal-actions">
      <a href="${waLink(p.name, p.price)}" target="_blank" class="btn btn-wa">
        🟢 Order on WhatsApp
      </a>
      <a href="tel:+919870832979" class="btn btn-outline-saffron">
        📞 Call for Details
      </a>
    </div>
  `;
  if (modalBackdrop) {
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
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
