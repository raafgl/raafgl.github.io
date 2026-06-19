import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  Radio, 
  Tv, 
  Volume2, 
  VolumeX, 
  ArrowDownCircle, 
  Sparkles, 
  Briefcase, 
  CheckSquare, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { PROJECTS, WORKED_FOR_BRANDS } from './data';
import { Project } from './types';
import ProjectDetailsModal from './components/ProjectDetailsModal';
import ResumeModal from './components/ResumeModal';
import { playTick, playHover, playSuccess } from './utils/audio';

export default function App() {
  // State for overlays
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Styling state controls for supreme brutalist themes
  const [useScanlines, setUseScanlines] = useState(true);
  const [useMonochrome, setUseMonochrome] = useState(true);
  const [enableSound, setEnableSound] = useState(true);
  const [activeSegment, setActiveSegment] = useState<'welcome' | 'branding' | 'interface' | 'print' | 'worked-for'>('welcome');
  const [scrollPercent, setScrollPercent] = useState(0);

  // Track scroll placement
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Update current scroll segment view for reactive indicators
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const scrollY = scrollContainerRef.current.scrollTop;
      const height = window.innerHeight;
      const index = Math.round(scrollY / height);

      const segments: ('welcome' | 'branding' | 'interface' | 'print' | 'worked-for')[] = [
        'welcome',
        'branding',
        'interface',
        'print',
        'worked-for'
      ];
      if (segments[index] && segments[index] !== activeSegment) {
        setActiveSegment(segments[index]);
        if (enableSound) playHover();
      }

      const maxScroll = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
      const percent = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      setScrollPercent(percent);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSegment, enableSound]);

  // Handle tactile sound play bound to global toggle
  const triggerTick = () => {
    if (enableSound) playTick();
  };

  const selectProject = (proj: Project) => {
    if (enableSound) playSuccess();
    setSelectedProject(proj);
  };

  const scrollToSegment = (index: number) => {
    triggerTick();
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen relative overflow-hidden bg-brand-surface text-brand-text flex flex-col justify-between selection:bg-brand-orange selection:text-brand-orange-light ${useScanlines ? 'scanlines' : ''}`}>
      
      {/* Dynamic Branding Header */}
      <nav className="fixed top-0 left-0 w-full bg-transparent flex justify-between items-center px-6 md:px-12 py-6 font-mono text-xs z-50 mix-blend-difference text-white">
        <button 
          onClick={() => scrollToSegment(0)}
          className="scale-95 transition-all hover:scale-100 text-left h-8 flex items-center justify-start cursor-pointer"
          id="branding-logo"
        >
          <img src="/raf-logo.png" alt="raf-logo" className="h-[18px] md:h-[24px] w-auto object-contain" />
        </button>

        {/* Desktop Quick Nav anchors */}
        <div className="hidden md:flex justify-between items-center space-x-8 max-w-2xl">
          <button 
            onClick={() => scrollToSegment(1)} 
            onMouseEnter={() => enableSound && playHover()}
            className={`transition-colors py-1 lowercase cursor-pointer ${activeSegment === 'branding' ? 'text-brand-orange font-bold font-mono' : 'text-zinc-400 hover:text-white'}`}
          >
            .branding
          </button>
          <button 
            onClick={() => scrollToSegment(2)} 
            onMouseEnter={() => enableSound && playHover()}
            className={`transition-colors py-1 lowercase cursor-pointer ${activeSegment === 'interface' ? 'text-brand-orange font-bold font-mono' : 'text-zinc-400 hover:text-white'}`}
          >
            .interface
          </button>
          <button 
            onClick={() => scrollToSegment(3)} 
            onMouseEnter={() => enableSound && playHover()}
            className={`transition-colors py-1 lowercase cursor-pointer ${activeSegment === 'print' ? 'text-brand-orange font-bold font-mono' : 'text-zinc-400 hover:text-white'}`}
          >
            .print
          </button>
          <button 
            onClick={() => scrollToSegment(4)} 
            onMouseEnter={() => enableSound && playHover()}
            className={`transition-colors py-1 lowercase cursor-pointer ${activeSegment === 'worked-for' ? 'text-brand-orange font-bold font-mono' : 'text-zinc-400 hover:text-white'}`}
          >
            .worked for
          </button>
        </div>
      </nav>

      {/* Screen background color overlay */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#131313]/95"></div>
      </div>

      {/* Primary Scroll Snap sections */}
      <main ref={scrollContainerRef} className="scroll-container z-10 w-full">
        
        {/* SECTION 1: .welcome */}
        <section className="scroll-section px-[5vw]">
          {/* Main Tokyo backdrop, matching image reference precisely */}
          <div 
            className="section-bg absolute inset-0 pointer-events-none -z-10 bg-cover bg-center opacity-80" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwfUY_00Hylj7Y6Asv5HUSgAHuo_jwWHn0EaulumQ63Otb5ckywi7cVNSkAaWXYnZ-zMMtOfoNquGyAvnZ6b-AS7HWLEw7-MVoSIpkwp2CeP6FeNbWLcmJdSrrrUvhwGn1fjNaSB0wttv82gM8TEANuGjnCW6Yia6-HTneGrgaUtLYclMEVToS8rfXGiIbgYs3w2n6qZjFwcQj52KdXLRqaOxtRpR05EqkrlK2NNwXzxZZcIy79cpKmTV_pUAwnzMF-dsK8dc-pZk')` }}
          />
          
          <div className="max-w-4xl pb-16 animate-fade-in-up">
            <h1 className="font-sans text-5xl md:text-8xl font-black mb-4 lowercase tracking-tight leading-none text-brand-text">
              .hi, i'm raf
            </h1>
            <p className="font-sans text-sm md:text-base text-brand-text-muted max-w-xl lowercase leading-relaxed">
              spain-based graphic designer with +10 years of experience. worked in advertising for +3 years with both national and international clients.
            </p>
          </div>
        </section>

        {/* SECTION 2: .branding design */}
        <section className="scroll-section px-[5vw]">
          <div 
            className="section-bg absolute inset-0 pointer-events-none -z-10 bg-cover bg-center" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPR2ceREfrUqOiDOWxvdgBY-t-kaK7N015t8BbT3golrdXt4BPitzPuDmc24DL9GgOUSHBDEl8IH1n-hxg5JNPEYfXiFMr0jxriNoxsKk2AxCJ-Aqnpq_T6AzIHkiHMRvRIZIDhNhL3epqUljB7x6A-VA7LhRBhd8N1O1n4irO11LVBQ2ZD8Z46z5kM--2wQwLGTaXgrTGjB04DwviFZ-pVi8cBzPt02Tuf65MdTUql_WEXneClCGUIRe-Xz8wJk-B5AeqaYJNVdk')` }}
          />

          <div className="max-w-4xl pb-16 w-full">
            <h1 className="font-sans text-4xl md:text-7xl font-black mb-6 lowercase tracking-tight text-brand-text">
              .branding design <span className="text-brand-orange">/</span>
            </h1>
            
            {/* Embedded interactive projects inline list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {PROJECTS.filter(p => p.category === 'branding').map((proj) => (
                <div 
                  key={proj.id}
                  onClick={() => selectProject(proj)}
                  onMouseEnter={() => enableSound && playHover()}
                  className="bg-brand-surface-card/85 hover:bg-black/90 p-5 border border-brand-outline/20 hover:border-brand-orange transition-all cursor-pointer rounded group"
                >
                  <h3 className="font-sans text-lg font-bold group-hover:text-brand-orange transition-colors mb-2 lowercase">{proj.title}</h3>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-brand-orange mt-4 uppercase group-hover:translate-x-1 transition-transform">
                    .view project <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: .interface design */}
        <section className="scroll-section px-[5vw]">
          <div 
            className="section-bg absolute inset-0 pointer-events-none -z-10 bg-cover bg-center" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjQlGjlj6wqxyQsjIfUz2O88Nlm9hbdwwL95uckVFs40DJd_eZQj9k5JPpLDNfxWHk1GhYM2QrKV2ETWMbuSK6w8txcHcVviWYz-1JzCckJIHykbb1Ytw9yacHO8Ly73ABmRwf8nkh0bHiS48h6MVhMbZLPAmNJx31VygP2RD41mFF7H0TPyWMiIhmFVtCBgMNpptGK8eSilAbzBhHjMVgBu5RkEW6AwWqjRuysAdIiVqthwvJklrq5vODUYhu0eXBbJR8LINc_2o')` }}
          />

          <div className="max-w-4xl pb-16 w-full">
            <h1 className="font-sans text-4xl md:text-7xl font-black mb-6 lowercase tracking-tight text-brand-text">
              .interface design <span className="text-brand-orange">/</span>
            </h1>

            {/* Interface project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {PROJECTS.filter(p => p.category === 'interface').map((proj) => (
                <div 
                  key={proj.id}
                  onClick={() => selectProject(proj)}
                  onMouseEnter={() => enableSound && playHover()}
                  className="bg-brand-surface-card/85 hover:bg-black/90 p-5 border border-brand-outline/20 hover:border-brand-orange transition-all cursor-pointer rounded group"
                >
                  <h3 className="font-sans text-lg font-bold group-hover:text-brand-orange transition-colors mb-2 lowercase">{proj.title}</h3>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-brand-orange mt-4 uppercase group-hover:translate-x-1 transition-transform">
                    .view project <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: .print design */}
        <section className="scroll-section px-[5vw]">
          <div 
            className="section-bg absolute inset-0 pointer-events-none -z-10 bg-cover bg-center" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaByw4CHO7rq-4v0cLqhiQnlH7Sv5Qk0Oef8lEhiL0l4lgt1XIVg5F7lQPu8ABK6Rvh2AzQJizwxngjn-iMgjp11byFyLw0OzCylXbZbCS6_nx8TfTwJp_W9QW7PCDu2ios8oma5VNGg2bJW4C96O4Y1RRh1R2Ypnjp3J2pA502GgTwFatZjufNZjbodhvb4PMLsv1M0uPjf1vxlZ2JjxCw-z4_KDfcvHH8BZ_PGb3rwxnEnVQIJ_EC_YYpfzJcPcEy9qb1APXjz0')` }}
          />

          <div className="max-w-4xl pb-16 w-full">
            <h1 className="font-sans text-4xl md:text-7xl font-black mb-6 lowercase tracking-tight text-brand-text">
              .print design <span className="text-brand-orange">/</span>
            </h1>

            {/* Print project card - premium showcase layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {PROJECTS.filter(p => p.category === 'print').map((proj) => (
                <div 
                  key={proj.id}
                  onClick={() => selectProject(proj)}
                  onMouseEnter={() => enableSound && playHover()}
                  className="bg-brand-surface-card/85 hover:bg-black/90 p-5 border border-brand-outline/20 hover:border-brand-orange transition-all cursor-pointer rounded group md:col-span-2"
                >
                  <h3 className="font-sans text-lg font-bold group-hover:text-brand-orange transition-colors mb-2 lowercase">{proj.title}</h3>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-brand-orange mt-4 uppercase group-hover:translate-x-1 transition-transform">
                    .view project <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: .worked for */}
        <section className="scroll-section px-[5vw]">
          <div className="w-full max-w-6xl pb-24 grid grid-cols-1 lg:grid-cols-5 gap-8 items-end">
            <div className="lg:col-span-2">
              <h1 className="font-sans text-5xl md:text-8xl font-black lowercase tracking-tight text-brand-text leading-none">
                .worked for
              </h1>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 gap-x-12 gap-y-3 font-sans text-sm md:text-base text-brand-text-muted lowercase">
              {WORKED_FOR_BRANDS.map((brand, i) => (
                <div 
                  key={i} 
                  className="py-1.5 border-b border-white/5 hover:text-brand-orange hover:border-brand-orange/30 transition-all cursor-default"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Persistent Orange Footer mimicking screenshot exactly */}
      <footer className="fixed bottom-0 left-0 w-full bg-brand-orange flex justify-between items-center px-6 md:px-[5vw] py-4 z-40 text-brand-orange-light font-sans text-xs">
        <button
          onClick={() => { triggerTick(); setIsResumeOpen(true); }}
          className="font-sans text-2xl font-black text-brand-orange-light opacity-80 hover:opacity-100 transition-opacity"
          title="See developer details"
        >
          ®
        </button>

        {/* Footer actions */}
        <div className="flex justify-end space-x-6 md:space-x-12 font-mono text-[11px] lowercase tracking-wider">
          <a 
            href="mailto:hello@raf.design"
            onClick={() => { triggerTick(); }}
            className="hover:text-white transition-colors duration-300 scale-95 hover:scale-100 lowercase"
          >
            .mail
          </a>
          <button 
            onClick={() => { triggerTick(); setIsResumeOpen(true); }}
            className="hover:text-white transition-colors duration-300 scale-95 hover:scale-100 lowercase cursor-pointer"
          >
            .curriculum
          </button>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              triggerTick();
              alert('Redirecting to Behance network mockup! Ready for physical link.');
            }}
            className="hover:text-white transition-colors duration-300 scale-95 hover:scale-100 lowercase flex items-center gap-1"
          >
            .behance
          </a>
        </div>
      </footer>

      {/* Screen Pagination Indicator: Vertical active orange bar on the right edge */}
      <div className="fixed right-6 top-[25vh] w-[3px] h-[50vh] bg-white/5 z-50 rounded-full overflow-hidden">
        <div 
          className="bg-brand-orange w-full rounded-full transition-all duration-75"
          style={{
            height: '20%', // 5 sections total: welcome, branding, interface, print, worked-for
            transform: `translateY(${(scrollPercent / 100) * 400}%)`
          }}
        />
      </div>

      {/* Interactive Modals Mount points */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

        {isResumeOpen && (
          <ResumeModal 
            onClose={() => setIsResumeOpen(false)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
