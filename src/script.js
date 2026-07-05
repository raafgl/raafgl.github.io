import { PROJECTS, WORKED_FOR_BRANDS } from './data.js';

// State Management
let activeSegment = 'welcome';

// Dictionary source of truth
const translations = {
  en: {
    "nav.branding": ".branding",
    "nav.interface": ".ui/ux",
    "nav.print": ".print",
    "nav.worked_for": ".worked for",
    "hero.ticker0": ".visual",
    "hero.ticker1": ".branding",
    "hero.ticker2": ".ui/ux",
    "hero.ticker3": ".print",
    "hero.ticker4": ".visual",
    "hero.designer": "designer",
    "hero.desc": "spain-based graphic designer with +10 years of experience. work in advertising for +3 years with both national and international clients.",
    "section.branding.line1": ".branding",
    "section.branding.line2": "design",
    "section.interface.line1": ".ui/ux",
    "section.interface.line2": "design",
    "section.print.line1": ".print",
    "section.print.line2": "design",
    "section.worked_for": ".worked for",
    "footer.curriculum": ".curriculum",
    "footer.mail": ".mail",
    "footer.behance": ".behance",
    "project.view_project": "view project",
    "modal.overview": ".the overview",
    "modal.whitespace": "/",
    "modal.timeline": ".timeline",
    "modal.toolkit": ".toolkit",
    "modal.completed": "completed",
    "modal.close": ".close view",
    "modal.behance": ".behance project",
    // Projects English content
    "project.torii-manga.title": ".torii manga",
    "project.torii-manga.subtitle": "Branding and visual identity",
    "project.torii-manga.desc": "Torii Manga is a publishing project with three business areas: label, specialized magazine, and bookstore. It establishes its brand proposal in the discovery, sale, and dissemination of Japanese manga works that encourage personal disruption, awaken an unique interest, and promote an open attitude to new experiences.",
    "project.torii-manga.longDesc": "Torii Manga is a publishing project with three business areas: label, specialized magazine, and bookstore. It establishes its brand proposal in the discovery, sale, and dissemination of Japanese manga works that encourage personal disruption, awaken an unique interest, and promote an open attitude to new experiences.",
    
    "project.playlist.title": ".playlist app",
    "project.playlist.subtitle": "identity design & social audio curation",
    "project.playlist.desc": "visual branding and creative direction for an independent curatorial music platform. centering around typography-driven social sharing cards.",
    "project.playlist.longDesc": "playlist is a community-first audio platform. the challenge was creating a typographic visual engine that lets users generate high-contrast aesthetic playlists to be shared as social media content. we chose a strict carbon-and-white theme paired with electric green neon accents to convey an immediate underground club vibe.",
    
    "project.deckcom.title": ".deckdom",
    "project.deckcom.subtitle": "Branding architectural development & web UI",
    "project.deckcom.desc": "visual system and branding guidelines for a high-end custom modular architecture studio based in valencia.",
    "project.deckcom.longDesc": "deckcom produces industrial modular structures. we developed a structural grid-based branding system that communicates raw materials, precision assembly, and architectural elegance. the colors are muted earth-and-clay tones representing the physical materials used in building.",

    "project.layton.title": ".layton",
    "project.layton.subtitle": "UX/UI digital archive & database ui/ux",
    "project.layton.desc": "aesthetic portal concept for a dedicated archaeological database and riddle inventory system.",
    "project.layton.longDesc": "the layton files is a dedicated interactive archive that aggregates complex archeological documentation, riddles, and secret archives. the ui/ux focuses on technical data presentation, incorporating retro scanlines, file cabinet interactions, and micro-animations reminiscent of 90s OS systems.",

    "project.nintendo-comm.title": ".nintendo app",
    "project.nintendo-comm.subtitle": "community web platform & retro hub page",
    "project.nintendo-comm.desc": "aesthetic design proposal showcasing events, modern retro forums, and live tournament brackets for active retro players.",
    "project.nintendo-comm.longDesc": "a custom graphic ui/ux and dashboard proposed for community-led tournaments. the design blends modern clean spacing with nostalgic 8-bit game console grids, centering tournament brackets, match tickers, and retro cartridge animations.",

    "project.collection.title": ".poster series",
    "project.collection.subtitle": "limited screenprint series & typographic study",
    "project.collection.desc": "a premium typographic and layout print collection capturing the minimal architecture of Spanish concrete and brutalist facades.",
    "project.collection.longDesc": "the collection represents a series of limited physical screenprint poster layouts. emphasizing strong vertical layout grids, heavy negative space, and ink bleed simulations on heavy matte cotton paper. each print was meticulously produced by hand at a classic local studio."
  },
  es: {
    "nav.branding": ".branding",
    "nav.interface": ".ui/ux",
    "nav.print": ".editorial",
    "nav.worked_for": ".clientes",
    "hero.ticker0": ".gráfico",
    "hero.ticker1": ".branding",
    "hero.ticker2": ".ui/ux",
    "hero.ticker3": ".editorial",
    "hero.ticker4": ".gráfico",
    "hero.designer": "diseñador",
    "hero.desc": "diseñador gráfico español con más de 10 años de experiencia. trabajo en publicidad durante más de 3 años con clientes nacionales e internacionales.",
    "section.branding.line1": "diseño",
    "section.branding.line2": ".branding",
    "section.interface.line1": "diseño",
    "section.interface.line2": ".ui/ux",
    "section.print.line1": "diseño",
    "section.print.line2": ".editorial",
    "section.worked_for": ".clientes",
    "footer.curriculum": ".currículum",
    "footer.mail": ".contacto",
    "footer.behance": ".behance",
    "project.view_project": "ver proyecto",
    "modal.overview": ".resumen",
    "modal.whitespace": "/",
    "modal.timeline": ".cronología",
    "modal.toolkit": ".herramientas",
    "modal.completed": "completado",
    "modal.close": ".cerrar vista",
    "modal.behance": ".proyecto en behance",
    // Projects Spanish content
    "project.torii-manga.title": ".torii manga",
    "project.torii-manga.subtitle": "branding e identidad visual",
    "project.torii-manga.desc": "torii manga es un proyecto editorial con tres áreas de negocio: sello discográfico, revista especializada y librería. establece su propuesta de marca en el descubrimiento, venta y difusión de obras de manga japonés que fomentan la disrupción personal, despiertan un interés único y promueven una actitud abierta hacia nuevas experiencias.",
    "project.torii-manga.longDesc": "torii manga es un proyecto editorial con tres áreas de negocio: sello discográfico, revista especializada y librería. establece su propuesta de marca en el descubrimiento, venta y difusión de obras de manga japonés que fomentan la disrupción personal, despiertan un interés único y promueven una actitud abierta hacia nuevas experiencias.",
    
    "project.playlist.title": ".playlist app",
    "project.playlist.subtitle": "diseño de identidad y curación de audio social",
    "project.playlist.desc": "branding visual y dirección creativa para una plataforma musical independiente. centrado en tarjetas de contenido tipográfico para redes sociales.",
    "project.playlist.longDesc": "playlist es una plataforma de audio centrada en la comunidad. el reto consistió en crear un motor visual tipográfico que permite a los usuarios crear listas de reproducción estéticas de alto contraste para compartir. elegimos una paleta estricta de carbono y blanco junto con acentos verde neón para evocar la vibra de un club de música underground.",
    
    "project.deckcom.title": ".deckdom",
    "project.deckcom.subtitle": "desarrollo de branding arquitectónico y UI web",
    "project.deckcom.desc": "sistema visual y pautas de marca para un estudio de arquitectura modular personalizada de alta gama con sede en valencia.",
    "project.deckcom.longDesc": "deckcom produce estructuras modulares industriales. desarrollamos un sistema de branding basado en una cuadrícula estructural que transmite el uso de materiales puros, un ensamblaje preciso y elegancia arquitectónica. los colores son tonos tierra apagados que representan los materiales físicos de la construcción.",

    "project.layton.title": ".layton",
    "project.layton.subtitle": "archivo digital interactivo UX/UI y ui/ux de base de datos",
    "project.layton.desc": "concepto de portal estético para una base de datos arqueológica dedicada y un sistema de inventario de acertijos.",
    "project.layton.longDesc": "the layton files es un archivo interactivo dedicado que reúne documentación arqueológica compleja, acertijos y archivos secretos. la ui/ux se centra en la presentación técnica de datos mediante líneas de exploración retro, interacciones de archivadores y microanimaciones de sistemas operativos de los noventa.",

    "project.nintendo-comm.title": ".nintendo app",
    "project.nintendo-comm.subtitle": "plataforma web comunitaria y página de inicio retro",
    "project.nintendo-comm.desc": "propuesta de diseño estético que muestra eventos, foros retro modernos y cuadros de torneos en vivo para jugadores retro activos.",
    "project.nintendo-comm.longDesc": "un diseño de ui/ux interactivo y un panel personalizados propuestos para torneos organizados por la comunidad. el diseño combina espacios limpios modernos con rejillas nostálgicas de consolas de 8 bits, integrando cuadros de torneo, marcadores en vivo y animaciones de cartuchos retro.",

    "project.collection.title": ".poster series",
    "project.collection.subtitle": "serie limitada de serigrafía y estudio tipográfico",
    "project.collection.desc": "una colección premium de diseño impreso y tipográfico que captura la arquitectura minimalista de las fachadas de hormigón españolas y el brutalismo.",
    "project.collection.longDesc": "la colección representa una serie de diseños de carteles de serigrafía artística física limitada. destaca por sus rejillas de diseño vertical fuerte, abundante espacio negativo y simulaciones de sangrado de tinta sobre papel de algodón mate grueso. cada impresión fue realizada meticulosamente a mano en un estudio local clásico."
  }
};

// Simple global retrieval utility
const getTranslation = (key) => {
  const lang = localStorage.getItem('portfolio_lang') || 'en';
  return (translations[lang] && translations[lang][key]) || (translations['en'] && translations['en'][key]) || key;
};

// Translate all elements on the page mapped with data-i18n
const translateContent = () => {
  const lang = localStorage.getItem('portfolio_lang') || 'en';
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getTranslation(key);
    if (translation) {
      el.innerText = translation;
    }
  });

  const wrapper = document.getElementById('hero-heading-wrapper');
  if (wrapper) {
    if (lang === 'es') {
      wrapper.classList.remove('flex-col');
      wrapper.classList.add('flex-col-reverse');
    } else {
      wrapper.classList.remove('flex-col-reverse');
      wrapper.classList.add('flex-col');
    }
  }
};

// No sound triggers - empty functions mapped for zero audio footprint
export function playTick() {}
export function playSuccess() {}
export function playHover() {}

window.playTick = playTick;
window.playHover = playHover;

// Scroll to segment index logic with premium requestAnimationFrame easing
window.scrollToSegment = function(index) {
  const container = document.getElementById('scroll-container');
  if (!container) return;
  
  const sections = document.querySelectorAll('.scroll-section');
  if (index < 0 || index >= sections.length) return;
  
  const sectionHeight = sections[0] ? sections[0].clientHeight : container.clientHeight;
  const targetY = index * sectionHeight;
  const startY = container.scrollTop;
  const distance = targetY - startY;
  
  // Skip if already at target
  if (Math.abs(distance) < 5) return;
  
  const duration = 400; // Smooth premium duration
  let start = null;

  // Premium easing: easeInOutQuart
  const easing = (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

  // Temporarily disable CSS snap to prevent conflicts during JS animation
  container.style.scrollSnapType = 'none';

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    
    container.scrollTo({
      top: startY + distance * easing(progress),
      behavior: 'auto'
    });

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      // Re-enable snap after transition completes
      container.style.scrollSnapType = 'y mandatory';
    }
  };

  window.requestAnimationFrame(step);
};

// Scroll listener handler for active navigation highlighting and vertical tracking
const handleScrollTracker = () => {
  const container = document.getElementById('scroll-container');
  if (!container) return;
  
  const scrollY = container.scrollTop;
  // Use the stable section height for index calculation, falling back to window.innerHeight
  const firstSection = container.querySelector('.scroll-section');
  const height = firstSection ? firstSection.clientHeight : window.innerHeight;
  const index = Math.round(scrollY / height);
  
  const segments = ['welcome', 'branding', 'interface', 'print', 'worked-for'];
  const newActive = segments[index] || 'welcome';
  
  if (newActive !== activeSegment) {
    activeSegment = newActive;
    updateNavigationHighlight();
  }

  const maxScroll = container.scrollHeight - container.clientHeight;
  const percent = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
  
  // Update indicator vertical bar translate height
  const indicator = document.getElementById('scroll-indicator');
  if (indicator) {
    indicator.style.transform = `translateY(${ (percent / 100) * 400 }%)`;
  }
};

// Highlighting script for upper nav buttons (solid orange background fill behind text)
const updateNavigationHighlight = () => {
  const ids = {
    welcome: 'branding-logo',
    branding: 'nav-branding',
    interface: 'nav-interface',
    print: 'nav-print',
    'worked-for': 'nav-worked-for'
  };

  Object.keys(ids).forEach((seg) => {
    const el = document.getElementById(ids[seg]);
    if (el && seg !== 'welcome') {
      if (seg === activeSegment) {
        el.classList.add('bg-brand-orange', 'text-brand-orange-light');
        el.classList.remove('text-zinc-400', 'hover:bg-brand-orange', 'hover:text-brand-orange-light', 'bg-transparent');
      } else {
        el.classList.add('text-zinc-400', 'hover:bg-brand-orange', 'hover:text-brand-orange-light', 'bg-transparent');
        el.classList.remove('bg-brand-orange', 'text-brand-orange-light');
      }
    }
  });
};

// Render lists dynamically in modern horizontal rows
const renderProjectsLists = () => {
  const brandingGrid = document.getElementById('branding-grid');
  const interfaceGrid = document.getElementById('interface-grid');
  const printGrid = document.getElementById('print-grid');

  const viewProjectLabel = getTranslation('project.view_project');

  if (brandingGrid) {
    brandingGrid.innerHTML = PROJECTS.filter(p => p.category === 'branding').map(proj => {
      const title = getTranslation(`project.${proj.id}.title`);
      return `
        <div 
          onclick="openProjectModal('${proj.id}')"
          class="bg-transparent border-0 hover:bg-white text-brand-text hover:text-brand-surface py-3 px-2 sm:px-4 transition-all duration-300 cursor-pointer rounded-sm group flex flex-wrap sm:flex-nowrap justify-between items-baseline sm:items-center w-full gap-2"
        >
          <h3 class="font-sans text-xl md:text-2xl font-bold lowercase tracking-tight break-words max-w-full">${title}</h3>
          <span class="inline-flex items-center gap-1 font-sans text-xs sm:text-sm uppercase tracking-wider text-brand-orange group-hover:text-brand-surface font-extrabold transition-all whitespace-nowrap">
            ${viewProjectLabel} <i data-lucide="arrow-right" class="w-3 h-3 sm:w-4 sm:h-4 inline"></i>
          </span>
        </div>
      `;
    }).join('');
  }

  if (interfaceGrid) {
    interfaceGrid.innerHTML = PROJECTS.filter(p => p.category === 'interface').map(proj => {
      const title = getTranslation(`project.${proj.id}.title`);
      return `
        <div 
          onclick="openProjectModal('${proj.id}')"
          class="bg-transparent border-0 hover:bg-white text-brand-text hover:text-brand-surface py-3 px-2 sm:px-4 transition-all duration-300 cursor-pointer rounded-sm group flex flex-wrap sm:flex-nowrap justify-between items-baseline sm:items-center w-full gap-2"
        >
          <h3 class="font-sans text-xl md:text-2xl font-bold lowercase tracking-tight break-words max-w-full">${title}</h3>
          <span class="inline-flex items-center gap-1 font-sans text-xs sm:text-sm uppercase tracking-wider text-brand-orange group-hover:text-brand-surface font-extrabold transition-all whitespace-nowrap">
            ${viewProjectLabel} <i data-lucide="arrow-right" class="w-3 h-3 sm:w-4 sm:h-4 inline"></i>
          </span>
        </div>
      `;
    }).join('');
  }

  if (printGrid) {
    printGrid.innerHTML = PROJECTS.filter(p => p.category === 'print').map(proj => {
      const title = getTranslation(`project.${proj.id}.title`);
      return `
        <div 
          onclick="openProjectModal('${proj.id}')"
          class="bg-transparent border-0 hover:bg-white text-brand-text hover:text-brand-surface py-3 px-2 sm:px-4 transition-all duration-300 cursor-pointer rounded-sm group flex flex-wrap sm:flex-nowrap justify-between items-baseline sm:items-center w-full gap-2"
        >
          <h3 class="font-sans text-xl md:text-2xl font-bold lowercase tracking-tight break-words max-w-full">${title}</h3>
          <span class="inline-flex items-center gap-1 font-sans text-xs sm:text-sm uppercase tracking-wider text-brand-orange group-hover:text-brand-surface font-extrabold transition-all whitespace-nowrap">
            ${viewProjectLabel} <i data-lucide="arrow-right" class="w-3 h-3 sm:w-4 sm:h-4 inline"></i>
          </span>
        </div>
      `;
    }).join('');
  }

  const workedGrid = document.getElementById('worked-for-grid');
  if (workedGrid) {
    workedGrid.innerHTML = WORKED_FOR_BRANDS.map(brand => `
      <a href="${brand.url}" target="_blank" rel="noopener noreferrer" class="py-1 px-2.5 text-[14px] md:text-[16px] border border-white/10 hover:bg-white hover:text-brand-surface hover:border-white rounded-sm transition-all cursor-pointer font-bold block">
        ${brand.name}
      </a>
    `).join('');
  }

  lucide.createIcons();
};

// Interactive Case Study details view
let currentGalleryIndex = 0;
let currentGalleryImages = [];

window.setModalActiveImageIndex = function(index) {
  if (!currentGalleryImages || currentGalleryImages.length === 0) return;

  if (index < 0) {
    index = currentGalleryImages.length - 1;
  } else if (index >= currentGalleryImages.length) {
    index = 0;
  }

  currentGalleryIndex = index;
  const imgUrl = currentGalleryImages[currentGalleryIndex];

  const mainImg = document.getElementById('modal-project-image');
  if (mainImg) {
    mainImg.src = imgUrl;
  }

  // Highlight active desktop thumbnail
  const row = document.getElementById('modal-project-gallery-row');
  if (row) {
    const buttons = row.querySelectorAll('button');
    buttons.forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.remove('opacity-50');
        btn.classList.add('opacity-100');
      } else {
        btn.classList.add('opacity-50');
        btn.classList.remove('opacity-100');
      }
    });
  }

  // Highlight active mobile segment indicator
  const dotsContainer = document.getElementById('modal-project-gallery-dots');
  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.remove('bg-white/20');
        dot.classList.add('bg-brand-orange');
      } else {
        dot.classList.add('bg-white/20');
        dot.classList.remove('bg-brand-orange');
      }
    });
  }
};

window.navigateModalGallery = function(direction) {
  window.setModalActiveImageIndex(currentGalleryIndex + direction);
};

window.changeModalActiveImage = function(imgUrl, el) {
  const mainImg = document.getElementById('modal-project-image');
  if (mainImg) {
    mainImg.src = imgUrl;
  }
  
  if (currentGalleryImages && currentGalleryImages.length > 0) {
    const idx = currentGalleryImages.indexOf(imgUrl);
    if (idx !== -1) {
      currentGalleryIndex = idx;
    }
  }

  // Highlight active thumbnail
  const row = document.getElementById('modal-project-gallery-row');
  if (row) {
    const buttons = row.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.classList.add('opacity-50');
      btn.classList.remove('opacity-100');
    });
  }
  if (el) {
    el.classList.remove('opacity-50');
    el.classList.add('opacity-100');
  }

  // Sync mobile indicators
  const dotsContainer = document.getElementById('modal-project-gallery-dots');
  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, idx) => {
      if (idx === currentGalleryIndex) {
        dot.classList.remove('bg-white/20');
        dot.classList.add('bg-brand-orange');
      } else {
        dot.classList.add('bg-white/20');
        dot.classList.remove('bg-brand-orange');
      }
    });
  }
};

let activeProjectId = null;

window.openProjectModal = function(id) {
  const proj = PROJECTS.find(p => p.id === id);
  if (!proj) return;

  activeProjectId = id;

  const title = getTranslation(`project.${proj.id}.title`);
  const subtitle = getTranslation(`project.${proj.id}.subtitle`);
  const desc = getTranslation(`project.${proj.id}.longDesc`) || getTranslation(`project.${proj.id}.desc`);

  // Insert items securely
  document.getElementById('modal-project-title').innerText = title;
  document.getElementById('modal-project-subtitle').innerText = subtitle;
  document.getElementById('modal-project-desc').innerText = desc;
  
  const descMobile = document.getElementById('modal-project-desc-mobile');
  if (descMobile) {
    descMobile.innerText = desc;
  }

  // Reset mobile overview accordion state to closed
  const mobileDescContainer = document.getElementById('modal-project-desc-mobile-container');
  if (mobileDescContainer) {
    mobileDescContainer.classList.add('max-h-0');
    mobileDescContainer.classList.remove('max-h-[500px]');
  }
  const mobileChevron = document.getElementById('modal-overview-chevron');
  if (mobileChevron) {
    mobileChevron.classList.remove('rotate-180');
  }

  document.getElementById('modal-project-year').innerText = proj.year;

  // Initialize gallery arrays
  currentGalleryImages = proj.gallery || [proj.image];
  currentGalleryIndex = 0;

  const img = document.getElementById('modal-project-image');
  img.src = proj.image;
  img.alt = title;

  // Populate interactive gallery of up to 5 images (Desktop thumbnail grid)
  const galleryContainer = document.getElementById('modal-project-gallery-row');
  if (proj.gallery && proj.gallery.length > 0) {
    galleryContainer.innerHTML = proj.gallery.map((imgUrl, idx) => `
      <button 
        onclick="changeModalActiveImage('${imgUrl}', this)" 
        class="aspect-video w-full overflow-hidden bg-black transition-all duration-300 relative focus:outline-none cursor-pointer ${idx === 0 ? 'opacity-100' : 'opacity-50 hover:opacity-100'}"
      >
        <img src="${imgUrl}" alt="${title} thumbnail ${idx + 1}" referrerpolicy="no-referrer" class="w-full h-full object-cover" />
      </button>
    `).join('');
  } else {
    galleryContainer.innerHTML = '';
  }

  // Populate indicator segments (for mobile/tablets)
  const dotsContainer = document.getElementById('modal-project-gallery-dots');
  if (dotsContainer && proj.gallery && proj.gallery.length > 0) {
    dotsContainer.innerHTML = proj.gallery.map((imgUrl, idx) => `
      <button 
        onclick="setModalActiveImageIndex(${idx})" 
        class="h-[3px] rounded-sm flex-1 transition-all duration-300 cursor-pointer focus:outline-none ${idx === 0 ? 'bg-brand-orange' : 'bg-white/20 hover:bg-white/40'}"
        aria-label="Go to image ${idx + 1}"
      ></button>
    `).join('');
  } else if (dotsContainer) {
    dotsContainer.innerHTML = '';
  }

  const kitContainer = document.getElementById('modal-project-toolkit');
  kitContainer.innerHTML = proj.tools.map(tool => `
    <span class="px-3.5 py-1.5 bg-brand-surface border-0 font-sans text-xs uppercase rounded-sm font-semibold text-brand-text-muted leading-none">
      ${tool}
    </span>
  `).join('');

  const behanceLink = document.getElementById('modal-behance-link');
  if (behanceLink) {
    if (proj.behanceUrl) {
      behanceLink.href = proj.behanceUrl;
      behanceLink.classList.remove('hidden');
    } else {
      behanceLink.classList.add('hidden');
      behanceLink.href = '';
    }
  }

  const modal = document.getElementById('project-modal');
  const inner = document.getElementById('project-modal-content');
  modal.classList.remove('hidden');
  
  // Staggered translate effect
  setTimeout(() => {
    inner.classList.remove('translate-x-full');
  }, 50);

  lucide.createIcons();
};

window.closeProjectModal = function() {
  activeProjectId = null;
  const modal = document.getElementById('project-modal');
  const inner = document.getElementById('project-modal-content');
  inner.classList.add('translate-x-full');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 500);
};

window.toggleMobileOverview = function() {
  const container = document.getElementById('modal-project-desc-mobile-container');
  const chevron = document.getElementById('modal-overview-chevron');
  if (container) {
    if (container.classList.contains('max-h-0')) {
      container.classList.remove('max-h-0');
      container.classList.add('max-h-[500px]');
      if (chevron) {
        chevron.classList.add('rotate-180');
      }
    } else {
      container.classList.add('max-h-0');
      container.classList.remove('max-h-[500px]');
      if (chevron) {
        chevron.classList.remove('rotate-180');
      }
    }
  }
};

// Global interactive language selection state and updater
window.changeLanguage = function(lang) {
  localStorage.setItem('portfolio_lang', lang);

  const buttons = document.querySelectorAll('.lang-toggle-btn');
  buttons.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.style.setProperty('color', '#fcfce8', 'important');
      btn.style.setProperty('opacity', '1', 'important');
    } else {
      btn.style.setProperty('color', '#fcfce8', 'important');
      btn.style.setProperty('opacity', '0.5', 'important');
    }
  });

  // Programmatically translate other items
  translateContent();
  renderProjectsLists();

  // If there is an active project modal open, translate its contents dynamically
  if (activeProjectId) {
    const proj = PROJECTS.find(p => p.id === activeProjectId);
    if (proj) {
      const title = getTranslation(`project.${proj.id}.title`);
      const subtitle = getTranslation(`project.${proj.id}.subtitle`);
      const desc = getTranslation(`project.${proj.id}.longDesc`) || getTranslation(`project.${proj.id}.desc`);

      document.getElementById('modal-project-title').innerText = title;
      document.getElementById('modal-project-subtitle').innerText = subtitle;
      document.getElementById('modal-project-desc').innerText = desc;
      
      const descMobile = document.getElementById('modal-project-desc-mobile');
      if (descMobile) {
        descMobile.innerText = desc;
      }

      document.getElementById('modal-project-year').innerText = proj.year;
    }
  }
  
  if (window.applyRevealAnimations) {
    window.applyRevealAnimations();
  }
};

window.toggleMobileMenu = function() {
  const overlay = document.getElementById('mobile-menu-overlay');
  const btn = document.getElementById('mobile-menu-btn');

  if (overlay.classList.contains('hidden')) {
    overlay.classList.remove('hidden');
    // slight delay for transition
    setTimeout(() => {
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
    }, 10);
    btn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    lucide.createIcons();
  } else {
    window.closeMobileMenu();
  }
};

window.closeMobileMenu = function() {
  const overlay = document.getElementById('mobile-menu-overlay');
  const btn = document.getElementById('mobile-menu-btn');
  if (!btn) return;
  
  if (!overlay.classList.contains('hidden')) {
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
    setTimeout(() => {
       overlay.classList.add('hidden');
    }, 300); // match transition duration
    btn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    lucide.createIcons();
  }
};

// Title Rotator slider loop
const initHeroTitleSlider = () => {
  let currentIndex = 0;
  // Total 4 unique items. 5th item is a duplicate of the first one for seamless loop.
  const totalItems = 4;
  
  setInterval(() => {
    currentIndex++;
    const slider = document.getElementById('hero-title-slider');
    const container = document.getElementById('hero-title-container');
    
    if (slider && container) {
      const stepHeight = container.clientHeight;
      slider.style.transition = 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)';
      slider.style.transform = `translateY(-${currentIndex * stepHeight}px)`;
      
      // If we've reached the duplicate 5th item, reset position invisibly after transition
      if (currentIndex === totalItems) {
        setTimeout(() => {
          slider.style.transition = 'none';
          currentIndex = 0;
          slider.style.transform = `translateY(0px)`;
          // Force layout reflow before next transition
          slider.offsetHeight;
        }, 600); // match the transition duration
      }
    }
  }, 3000);
};

// Main setup initialization block
const initializePortfolio = () => {
  // --- Mobile Chrome Viewport Fix ---
  // Ensure the section height does not change during scroll when the address bar hides.
  const setStableViewportHeight = () => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--stable-vh', `${vh}px`);
  };
  
  // Set initially
  setStableViewportHeight();
  
  // Update only on width change (orientation change) for mobile to avoid recalculating on vertical scroll
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    
    if (isMobile) {
      if (currentWidth !== lastWidth) {
        lastWidth = currentWidth;
        setStableViewportHeight();
      }
    } else {
      // On desktop, update on any resize to keep layout responsive
      setStableViewportHeight();
    }
  });
  // ----------------------------------

  // --- Mobile PDF Open Behavior ---
  // Ensure the curriculum PDF link opens in a new tab on mobile without forcing a download,
  // while preserving the download attribute behavior on desktop.
  const updateCvDownloadAttribute = () => {
    const cvLink = document.querySelector('a[data-i18n="footer.curriculum"]');
    if (cvLink) {
      // Resolve to fully qualified absolute URL, supporting subdirectories (like GitHub Pages repositories)
      // regardless of trailing slashes or index.html in the address bar.
      let path = window.location.pathname;
      if (path.endsWith('.html') || path.endsWith('.htm')) {
        path = path.substring(0, path.lastIndexOf('/'));
      }
      if (!path.endsWith('/')) {
        path += '/';
      }
      cvLink.href = window.location.origin + path + 'Rafael_Guerra_Lazaro_CV.pdf';

      const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      if (isMobile) {
        cvLink.removeAttribute('download');
      } else {
        cvLink.setAttribute('download', 'Rafael_Guerra_Lazaro_CV.pdf');
      }
    }
  };

  updateCvDownloadAttribute();
  window.addEventListener('resize', updateCvDownloadAttribute);
  // ----------------------------------

  const initLang = localStorage.getItem('portfolio_lang') || 'en';
  window.changeLanguage(initLang);
  initHeroTitleSlider();

  // --- Modal Gallery Touch Swipe Support ---
  const modalMainImg = document.getElementById('modal-project-image');
  if (modalMainImg) {
    let touchStartX = 0;
    let touchEndX = 0;

    modalMainImg.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modalMainImg.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 40) { // minimum swipe threshold
        if (diffX > 0) {
          // swipe right -> previous image
          window.navigateModalGallery(-1);
        } else {
          // swipe left -> next image
          window.navigateModalGallery(1);
        }
      }
    }, { passive: true });
  }
  
  const container = document.getElementById('scroll-container');
  if (container) {
    container.addEventListener('scroll', handleScrollTracker, { passive: true });
    
    // Smooth wheel scrolling interceptor
    let isWheeling = false;
    container.addEventListener('wheel', (e) => {
      // Only intercept discrete mouse wheels to preserve native trackpad feel
      if (Math.abs(e.deltaY) < 40) return;
      
      e.preventDefault();
      
      if (isWheeling) return;
      isWheeling = true;
      
      const direction = Math.sign(e.deltaY);
      const firstSection = container.querySelector('.scroll-section');
      const sectionHeight = firstSection ? firstSection.clientHeight : container.clientHeight;
      const currentIndex = Math.round(container.scrollTop / sectionHeight);
      const sections = document.querySelectorAll('.scroll-section');
      const nextIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));
      
      window.scrollToSegment(nextIndex);
      
      // Debounce window to match easing duration
      setTimeout(() => {
        isWheeling = false;
      }, 450);
    }, { passive: false });
  }

  // Interactive spotlight tracking logic for section backgrounds
  let lastMouseX = -999;
  let lastMouseY = -999;

  const updateSpotlights = (clientX, clientY) => {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      section.style.setProperty('--mouse-x', `${x}px`);
      section.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  document.addEventListener('mousemove', (e) => {
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    updateSpotlights(lastMouseX, lastMouseY);
  });

  if (container) {
    container.addEventListener('scroll', () => {
      if (lastMouseX !== -999) {
        updateSpotlights(lastMouseX, lastMouseY);
      }
    }, { passive: true });
  }

  // Render Lucide SVGs initially
  lucide.createIcons();

  // --- Scroll Text Reveal Animations ---
  if (!window.textRevealObserver) {
    window.textRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          // Optional: remove if you want them to hide again when scrolled out
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });
  }

  window.applyRevealAnimations = () => {
    const textElementsToReveal = document.querySelectorAll('h1, h2, h3, p, li, span.reveal-target');
    textElementsToReveal.forEach(el => {
      // Avoid adding reveal to navigation elements, buttons, modal texts, welcome section (already animated), etc.
      if (!el.closest('nav') && 
          !el.closest('#project-modal') && 
          !el.closest('button') && 
          !el.closest('a') &&
          !el.closest('#section-welcome') &&
          !el.classList.contains('reveal-text')) {
        el.classList.add('reveal-text');
        window.textRevealObserver.observe(el);
      }
    });
  };

  window.applyRevealAnimations();

  // --- Custom Cursor ---
  const cursor = document.getElementById('custom-cursor');
  if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.setProperty('--cx', `${e.clientX}px`);
      cursor.style.setProperty('--cy', `${e.clientY}px`);
      cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });

    const updateCursorHoverState = (e) => {
      const target = e.target;
      if (!target || !target.closest) return;
      
      const isClickable = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer, .nav-anchor');
      if (isClickable) {
        cursor.classList.add('cursor-hover');
      } else {
        cursor.classList.remove('cursor-hover');
      }

      // Detect if we are over an orange background
      // Footer and explicitly styled elements
      const isOrangeBg = target.closest('footer, .bg-brand-orange');
      // Elements that turn orange on hover
      const isOrangeHover = target.closest('.hover\\:bg-brand-orange, .hover\\:bg-brand-orange-hover');
      
      if (isOrangeBg || isOrangeHover) {
        cursor.classList.add('cursor-over-orange');
      } else {
        cursor.classList.remove('cursor-over-orange');
      }
    };

    document.addEventListener('mouseover', updateCursorHoverState);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
  initializePortfolio();
}
