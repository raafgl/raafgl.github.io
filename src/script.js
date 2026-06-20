import { PROJECTS, WORKED_FOR_BRANDS } from './data.js';

// State Management
let activeSegment = 'welcome';

// No sound triggers - empty functions mapped for zero audio footprint
export function playTick() {}
export function playSuccess() {}
export function playHover() {}

window.playTick = playTick;
window.playHover = playHover;

// Scroll to segment index logic
window.scrollToSegment = function(index) {
  const container = document.getElementById('scroll-container');
  if (container) {
    container.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  }
};

// Scroll listener handler for active navigation highlighting and vertical tracking
const handleScrollTracker = () => {
  const container = document.getElementById('scroll-container');
  if (!container) return;
  
  const scrollY = container.scrollTop;
  const height = window.innerHeight;
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
        el.className = "nav-anchor transition-all duration-300 py-1.5 px-4 rounded-sm bg-brand-orange text-brand-orange-light text-sm md:text-base font-bold cursor-pointer bg-transparent border-0 lowercase whitespace-nowrap";
      } else {
        el.className = "nav-anchor transition-all duration-300 py-1.5 px-4 rounded-sm text-zinc-400 hover:bg-brand-orange hover:text-brand-orange-light text-sm md:text-base font-bold cursor-pointer bg-transparent border-0 lowercase whitespace-nowrap";
      }
    }
  });
};

// Render lists dynamically in modern horizontal rows
const renderProjectsLists = () => {
  const brandingGrid = document.getElementById('branding-grid');
  const interfaceGrid = document.getElementById('interface-grid');
  const printGrid = document.getElementById('print-grid');

  if (brandingGrid) {
    brandingGrid.innerHTML = PROJECTS.filter(p => p.category === 'branding').map(proj => `
      <div 
        onclick="openProjectModal('${proj.id}')"
        class="bg-transparent border-0 hover:bg-white text-brand-text hover:text-brand-surface py-3 px-4 transition-all duration-300 cursor-pointer rounded-sm group flex justify-between items-center w-full"
      >
        <h3 class="font-sans text-xl md:text-2xl font-bold lowercase tracking-tight">${proj.title}</h3>
        <span class="inline-flex items-center gap-1 font-sans text-sm uppercase tracking-wider text-brand-orange group-hover:text-brand-surface font-extrabold transition-all">
          view project <i data-lucide="arrow-right" class="w-4 h-4 inline"></i>
        </span>
      </div>
    `).join('');
  }

  if (interfaceGrid) {
    interfaceGrid.innerHTML = PROJECTS.filter(p => p.category === 'interface').map(proj => `
      <div 
        onclick="openProjectModal('${proj.id}')"
        class="bg-transparent border-0 hover:bg-white text-brand-text hover:text-brand-surface py-3 px-4 transition-all duration-300 cursor-pointer rounded-sm group flex justify-between items-center w-full"
      >
        <h3 class="font-sans text-xl md:text-2xl font-bold lowercase tracking-tight">${proj.title}</h3>
        <span class="inline-flex items-center gap-1 font-sans text-sm uppercase tracking-wider text-brand-orange group-hover:text-brand-surface font-extrabold transition-all">
          view project <i data-lucide="arrow-right" class="w-4 h-4 inline"></i>
        </span>
      </div>
    `).join('');
  }

  if (printGrid) {
    printGrid.innerHTML = PROJECTS.filter(p => p.category === 'print').map(proj => `
      <div 
        onclick="openProjectModal('${proj.id}')"
        class="bg-transparent border-0 hover:bg-white text-brand-text hover:text-brand-surface py-3 px-4 transition-all duration-300 cursor-pointer rounded-sm group flex justify-between items-center w-full"
      >
        <h3 class="font-sans text-xl md:text-2xl font-bold lowercase tracking-tight">${proj.title}</h3>
        <span class="inline-flex items-center gap-1 font-sans text-sm uppercase tracking-wider text-brand-orange group-hover:text-brand-surface font-extrabold transition-all">
          view project <i data-lucide="arrow-right" class="w-4 h-4 inline"></i>
        </span>
      </div>
    `).join('');
  }

  const workedGrid = document.getElementById('worked-for-grid');
  if (workedGrid) {
    workedGrid.innerHTML = WORKED_FOR_BRANDS.map(brand => `
      <a href="${brand.url}" target="_blank" rel="noopener noreferrer" class="py-1 px-3 border border-white/10 hover:bg-white hover:text-brand-surface hover:border-white rounded-sm transition-all cursor-pointer text-[18px] font-bold block">
        ${brand.name}
      </a>
    `).join('');
  }
};

// Interactive Case Study details view
window.openProjectModal = function(id) {
  const proj = PROJECTS.find(p => p.id === id);
  if (!proj) return;

  // Insert items securely
  document.getElementById('modal-project-category').innerText = `case study / ${proj.category}`;
  document.getElementById('modal-project-title').innerText = proj.title;
  document.getElementById('modal-project-subtitle').innerText = proj.subtitle;
  document.getElementById('modal-project-desc').innerText = proj.longDescription || proj.description;
  document.getElementById('modal-project-year').innerText = `${proj.year} / completed`;

  const img = document.getElementById('modal-project-image');
  img.src = proj.image;
  img.alt = proj.title;

  const kitContainer = document.getElementById('modal-project-toolkit');
  kitContainer.innerHTML = proj.tools.map(tool => `
    <span class="px-2 py-0.5 bg-brand-surface border border-brand-outline/20 font-sans text-xs uppercase rounded-sm font-semibold">
      ${tool}
    </span>
  `).join('');

  const featuresContainer = document.getElementById('modal-project-features');
  if (proj.features && proj.features.length > 0) {
    featuresContainer.innerHTML = proj.features.map(feature => `
      <li class="flex items-start gap-2 text-sm text-brand-text-muted font-sans border-l border-brand-orange pl-3 lowercase py-0.5 font-medium">
        ${feature}
      </li>
    `).join('');
  } else {
    featuresContainer.innerHTML = '';
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
  const modal = document.getElementById('project-modal');
  const inner = document.getElementById('project-modal-content');
  inner.classList.add('translate-x-full');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 500);
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
document.addEventListener('DOMContentLoaded', () => {
  renderProjectsLists();
  initHeroTitleSlider();
  
  const container = document.getElementById('scroll-container');
  if (container) {
    container.addEventListener('scroll', handleScrollTracker, { passive: true });
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

  // Bind Behance link click prevent default behavior for layout mockup
  const behanceLink = document.getElementById('behance-link');
  if (behanceLink) {
    behanceLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('.behance creative portfolio redirection trigger!');
    });
  }

  // Render Lucide SVGs initially
  lucide.createIcons();
});
