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
    "project.torii-manga.subtitle": "branding and visual identity",
    "project.torii-manga.desc": "torii manga has three business areas: a publishing label, a magazine, and a bookstore. it establishes its brand proposition in the discovery, sale, and dissemination of japanese manga to encourage personal disruption, awaken a unique interest, and promote an open attitude towards new experiences.",
    "project.torii-manga.longDesc": "torii manga has three business areas: a publishing label, a magazine, and a bookstore. it establishes its brand proposition in the discovery, sale, and dissemination of japanese manga to encourage personal disruption, awaken a unique interest, and promote an open attitude towards new experiences.",
    
    "project.playlist.title": ".playlist",
    "project.playlist.subtitle": "branding & website",
    "project.playlist.desc": "playlist is a social network and library focused on gaming and videogames for users to interact, share, and record their most outstanding achievements",
    "project.playlist.longDesc": "playlist is a social network and library focused on gaming and videogames for users to interact, share, and record their most outstanding achievements",
    
    "project.deckcom.title": ".deckdom",
    "project.deckcom.subtitle": "branding",
    "project.deckcom.desc": "deckdom is a local card store chain based in elegance and royalty identities, representative of their quality and assurance",
    "project.deckcom.longDesc": "deckdom is a local card store chain based in elegance and royalty identities, representative of their quality and assurance",

    "project.layton.title": ".layton",
    "project.layton.subtitle": "website & app design",
    "project.layton.desc": "layton is an online puzzle-solving platform based on the Professor Layton video games, with daily puzzles, rankings, achievements and much more",
    "project.layton.longDesc": "layton is an online puzzle-solving platform based on the Professor Layton video games, with daily puzzles, rankings, achievements and much more",

    "project.nintendo-comm.title": ".nintendo app",
    "project.nintendo-comm.subtitle": "app design",
    "project.nintendo-comm.desc": "Nintendo community is a fan-focused platform to discover games, news, people and content for fans, by fans",
    "project.nintendo-comm.longDesc": "Nintendo community is a fan-focused platform to discover games, news, people and content for fans, by fans",

    "project.collection.title": ".print series",
    "project.collection.subtitle": "poster & print studies",
    "project.collection.desc": "a collection of personal poster and print studies: grids, typography work, advertisement, maximalism, all with focus on my own hobbies and tastes",
    "project.collection.longDesc": "a collection of personal poster and print studies: grids, typography work, advertisement, maximalism, all with focus on my own hobbies and tastes"
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
    "project.torii-manga.desc": "torii manga posee tres áreas de negocio: sello editorial, revista y librería. establece su propuesta de marca en el descubrimiento, venta y difusión de manga japonés para fomentar la disrupción personal, despertar un interés único y promover una actitud abierta hacia nuevas experiencias.",
    "project.torii-manga.longDesc": "torii manga posee tres áreas de negocio: sello editorial, revista y librería. establece su propuesta de marca en el descubrimiento, venta y difusión de manga japonés para fomentar la disrupción personal, despertar un interés único y promover una actitud abierta hacia nuevas experiencias.",
    
    "project.playlist.title": ".playlist",
    "project.playlist.subtitle": "branding y sitio web",
    "project.playlist.desc": "playlist es una red social y biblioteca enfocada en videojuegos para que los usuarios interactúen, compartan y registren sus logros más destacados",
    "project.playlist.longDesc": "playlist es una red social y biblioteca enfocada en videojuegos para que los usuarios interactúen, compartan y registren sus logros más destacados",
    
    "project.deckcom.title": ".deckdom",
    "project.deckcom.subtitle": "branding",
    "project.deckcom.desc": "deckdom es una cadena local de tiendas de cartas basada en identidades de elegancia y realeza, representativas de su calidad y garantía",
    "project.deckcom.longDesc": "deckdom es una cadena local de tiendas de cartas basada en identidades de elegancia y realeza, representativas de su calidad y garantía",

    "project.layton.title": ".layton",
    "project.layton.subtitle": "diseño de sitio web y aplicación",
    "project.layton.desc": "layton es una plataforma de resolución de rompecabezas en línea basada en los videojuegos del Profesor Layton, con rompecabezas diarios, clasificaciones, logros y mucho más",
    "project.layton.longDesc": "layton es una plataforma de resolución de rompecabezas en línea basada en los videojuegos del Profesor Layton, con rompecabezas diarios, clasificaciones, logros y mucho más",

    "project.nintendo-comm.title": ".nintendo app",
    "project.nintendo-comm.subtitle": "diseño de aplicación",
    "project.nintendo-comm.desc": "Nintendo community es una plataforma enfocada en los fanáticos para descubrir juegos, noticias, personas y contenido para fans, por fans",
    "project.nintendo-comm.longDesc": "Nintendo community es una plataforma enfocada en los fanáticos para descubrir juegos, noticias, personas y contenido para fans, por fans",

    "project.collection.title": ".print series",
    "project.collection.subtitle": "estudios de póster e impresión",
    "project.collection.desc": "una colección de estudios personales de póster e impresión: cuadrículas, trabajo tipográfico, publicidad, maximalismo, todo enfocado en mis propios gustos y pasatiempos",
    "project.collection.longDesc": "una colección de estudios personales de póster e impresión: cuadrículas, trabajo tipográfico, publicidad, maximalismo, todo enfocado en mis propios gustos y pasatiempos"
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
    // Note: progress bar widths are managed by the story auto-slide loop
    // But we still update the active state visually if needed, or checkAndStartStory takes care of it
  }
  
  if (typeof window.checkAndStartStory === 'function') {
    window.checkAndStartStory();
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
  if (typeof window.checkAndStartStory === 'function') {
    window.checkAndStartStory();
  }
};

let activeProjectId = null;
let storyTimeout = null;

window.checkAndStartStory = function() {
  clearTimeout(storyTimeout);
  
  if (window.innerWidth < 1024) {
    if (!currentGalleryImages || currentGalleryImages.length <= 1) return;
    
    // Update progress bars visually
    currentGalleryImages.forEach((_, idx) => {
      const bar = document.getElementById(`modal-gallery-progress-${idx}`);
      if (!bar) return;
      
      bar.style.transition = 'none'; // clear transitions
      
      if (idx < currentGalleryIndex) {
        bar.style.width = '100%';
      } else if (idx > currentGalleryIndex) {
        bar.style.width = '0%';
      } else {
        bar.style.width = '0%';
        void bar.offsetWidth; // trigger reflow
        bar.style.transition = 'width 3s linear';
        bar.style.width = '100%';
      }
    });

    // Schedule next slide
    storyTimeout = setTimeout(() => {
      window.navigateModalGallery(1);
    }, 3000);
  } else {
    // Reset widths if on desktop
    currentGalleryImages.forEach((_, idx) => {
      const bar = document.getElementById(`modal-gallery-progress-${idx}`);
      if (bar) {
        bar.style.transition = 'none';
        bar.style.width = '0%';
      }
    });
  }
};

window.slideMobileInfo = function(pageIndex) {
  const slider = document.getElementById('mobile-info-slider');
  if (slider) {
    slider.style.transform = `translateX(-${pageIndex * 50}%)`;
  }

  const arrowIcon = document.getElementById('mobile-nav-arrow-icon');
  const arrowBtn = document.getElementById('mobile-nav-arrow-btn');
  if (arrowIcon && arrowBtn) {
    if (pageIndex === 0) {
      arrowIcon.setAttribute('data-lucide', 'arrow-right');
      arrowBtn.onclick = () => window.slideMobileInfo(1);
    } else {
      arrowIcon.setAttribute('data-lucide', 'arrow-left');
      arrowBtn.onclick = () => window.slideMobileInfo(0);
    }
    lucide.createIcons();
  }
};

window.addEventListener('resize', () => {
  if (typeof window.checkAndStartStory === 'function') {
    window.checkAndStartStory();
  }
});

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
      <div 
        onclick="setModalActiveImageIndex(${idx})" 
        class="h-[3px] rounded-sm flex-1 bg-white/20 relative overflow-hidden cursor-pointer"
        aria-label="Go to image ${idx + 1}"
      >
        <div id="modal-gallery-progress-${idx}" class="absolute top-0 left-0 bottom-0 bg-brand-orange w-0"></div>
      </div>
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

  // Reset mobile info slider to first card
  window.slideMobileInfo(0);

  // Start story if needed
  if (typeof window.checkAndStartStory === 'function') {
    // slightly delay so DOM calculates correctly
    setTimeout(() => {
      window.checkAndStartStory();
    }, 50);
  }

  lucide.createIcons();
};

window.closeProjectModal = function() {
  activeProjectId = null;
  clearTimeout(storyTimeout);
  const modal = document.getElementById('project-modal');
  const inner = document.getElementById('project-modal-content');
  inner.classList.add('translate-x-full');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 500);
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
