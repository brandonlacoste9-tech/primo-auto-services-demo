const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.reviews": "Reviews", "nav.contact": "Contact",
  "nav.call": "(864) 436-4020",
  "hero.kicker": "Greenville, SC · Repair, collision & paint · 4.7-star rated",
  "hero.title": "Repair, bodywork & paint —<br>all under one roof.",
  "hero.sub": "Rated 4.7 out of 5 from 41 reviews: Primo Auto Services LLC is Greenville's full-service shop for auto repair, collision work and painting.",
  "hero.cta1": "Call (864) 436-4020", "hero.cta2": "See services",
  "trust.t1t": "Repair & bodywork", "trust.t1d": "Mechanical + collision in one shop",
  "trust.t2t": "4.7 ★ rated", "trust.t2d": "41 reviews on Birdeye",
  "trust.t3t": "Mon – Fri, 9:30 AM – 7 PM", "trust.t3d": "Open weekdays, late hours",
  "stats.hoursNum": "Mon – Fri", "stats.hours": "9:30 AM – 7 PM",
  "stats.makesNum": "4.7 ★", "stats.makes": "41 customer reviews",
  "stats.diagNum": "Repair", "stats.diag": "+ body & paint",
  "stats.quoteNum": "Upfront", "stats.quote": "clear pricing",
  "services.kicker": "What we do", "services.title": "Mechanical repair to full bodywork",
  "services.s1t": "Auto repair", "services.s1d": "Full mechanical repair and maintenance — from diagnostics to major work.",
  "services.s2t": "Collision repair", "services.s2d": "Body straightening and structural repair after accidents — done right.",
  "services.s3t": "Auto painting", "services.s3d": "Professional paint matching and refinishing — your car, showroom fresh.",
  "services.s4t": "Diagnostics", "services.s4d": "Modern diagnostic equipment finds the real problem — no guessing.",
  "services.s5t": "Brake service", "services.s5d": "Pads, rotors and full brake inspection — your safety comes first.",
  "services.s6t": "Car buying & selling", "services.s6d": "Looking to buy or sell? We deal in quality used vehicles too.",
  "why.kicker": "Why choose us", "why.title": "One shop for the whole job",
  "why.intro": "Primo Auto Services LLC is Greenville's full-service shop: mechanical repair, collision work, painting and restoration — plus car buying and selling. One team, one estimate, no runaround.",
  "why.l1t": "Repair + bodywork", "why.l1d": "Mechanical and collision work under one roof.",
  "why.l2t": "4.7-star rated", "why.l2d": "41 published reviews from Greenville drivers.",
  "why.l3t": "Upfront pricing", "why.l3d": "Clear estimates before any work begins.",
  "why.l4t": "Late weekday hours", "why.l4d": "Open until 7 PM — easy after work.",
  "gallery.kicker": "In the shop", "gallery.title": "From repair bay to paint booth",
  "gallery.c1": "Mechanical work done right",
  "gallery.c2": "Paint finished to shine",
  "gallery.c3": "Accurate diagnostics",
  "reviews.kicker": "Word on the street", "reviews.title": "Trusted by Greenville drivers",
  "reviews.num": "4.7", "reviews.more": "from 41 reviews on Birdeye",
  "reviews.cta": "See what customers say about us on Birdeye",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "Do you do collision repair and painting?",
  "faq.a1": "Yes — body straightening, structural repair and professional painting are core services here, alongside full mechanical repair.",
  "faq.q2": "Do you buy and sell cars?",
  "faq.a2": "Yes — we deal in quality used vehicles. Call (864) 436-4020 to ask what's available.",
  "faq.q3": "What are your hours?",
  "faq.a3": "Monday to Friday, 9:30 AM to 7:00 PM. We're closed on weekends.",
  "faq.q4": "How do I get an estimate?",
  "faq.a4": "Call us at (864) 436-4020 or stop by 418 Old Paris Mountain Rd — we'll give you a clear, upfront estimate.",
  "contact.kicker": "Come see us", "contact.title": "Book your service",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 9:30 AM – 7:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "footer.tag": "Auto repair & body shop · Greenville, South Carolina"
}};

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Primo Auto Services LLC — Auto Repair & Body Shop in Greenville, SC";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
