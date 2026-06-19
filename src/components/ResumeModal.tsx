import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Briefcase, GraduationCap, Download, Layers, Award } from 'lucide-react';
import { CV_ITEMS } from '../data';
import { playTick, playHover } from '../utils/audio';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = CV_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  const skills = [
    { category: '.brand architecture', items: ['brand guidelines', 'logo creation', 'visual systems', 'stationery sets'] },
    { category: '.digital interfaces', items: ['UX/UI design', 'Figma prototypes', 'React coding', 'mobile styling'] },
    { category: '.fine print tech', items: ['silkscreen prints', 'pantone mapping', 'typographic books', 'material curation'] },
    { category: '.creative motion', items: ['commercial trailers', 'logo stings', 'product mockups', 'After Effects'] },
  ];

  const handleClose = () => {
    playTick();
    onClose();
  };

  const selectTab = (tab: 'all' | 'experience' | 'education') => {
    playTick();
    setActiveTab(tab);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl bg-brand-surface-card border border-brand-outline/20 p-6 md:p-8 rounded shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-brand-outline/10 pb-4 mb-6">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-brand-orange" />
            <span className="font-mono text-xs uppercase tracking-wider text-brand-text-muted">
              designer credential .curriculum vital
            </span>
          </div>
          <button
            onClick={handleClose}
            id="close-cv-btn"
            className="p-2 border border-brand-outline/20 hover:border-brand-orange hover:text-brand-orange transition-colors rounded-sm"
            title="Close Panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Credentials & Quick Facts & Skills */}
          <div className="space-y-6">
            <div className="p-4 bg-brand-surface border border-brand-outline/10 rounded-sm">
              <h3 className="font-sans text-xl font-bold text-brand-text mb-1 lowercase">raf .</h3>
              <p className="font-mono text-xs text-brand-text-muted mb-4">senior graphic &amp; visual media designer</p>
              
              <div className="space-y-2 border-t border-brand-outline/10 pt-4 text-xs text-brand-text-muted font-sans lowercase">
                <div className="flex justify-between">
                  <span className="font-mono text-brand-orange text-[10px]">location:</span>
                  <span>valencia, spain</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-brand-orange text-[10px]">experience:</span>
                  <span>10+ years (self-taught focus)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-brand-orange text-[10px]">availability:</span>
                  <span className="text-emerald-400">● immediate commissions</span>
                </div>
              </div>
            </div>

            {/* Skills Panel */}
            <div>
              <h3 className="font-mono text-xs uppercase text-brand-orange tracking-wider mb-3 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> .mastered matrices
              </h3>
              <div className="space-y-4">
                {skills.map((skillGroup, groupIdx) => (
                  <div key={groupIdx} className="border-l border-brand-outline/20 pl-3">
                    <h4 className="font-mono text-xs text-brand-text font-bold uppercase mb-1">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {skillGroup.items.map((skillItem) => (
                        <span
                          key={skillItem}
                          className="px-2 py-0.5 bg-brand-surface/40 border border-brand-outline/10 text-[10px] text-brand-text-muted hover:text-brand-orange rounded-sm transition-colors uppercase font-mono"
                        >
                          {skillItem}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline Section */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-2 border-b border-brand-outline/10 pb-4">
              <span className="font-mono text-xs text-brand-text-muted/60 uppercase mr-2">filter ledger:</span>
              {(['all', 'experience', 'education'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => selectTab(tab)}
                  className={`px-3 py-1 text-xs font-mono lowercase border transition-all rounded-sm ${
                    activeTab === tab
                      ? 'bg-brand-orange border-brand-orange text-brand-orange-light'
                      : 'border-brand-outline/20 hover:border-brand-orange text-brand-text-muted'
                  }`}
                >
                  .{tab}
                </button>
              ))}
            </div>

            {/* Timeline Items list */}
            <div className="space-y-6 overflow-y-auto max-h-[45vh] pr-2 scrollbar-thin">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={playHover}
                    className="relative pl-6 border-l border-brand-outline/20 hover:border-brand-orange group transition-colors pb-1"
                  >
                    {/* Tiny bullet overlay */}
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border border-brand-surface-card bg-brand-outline group-hover:bg-brand-orange transition-colors" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="font-sans text-sm font-bold text-brand-text uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                        {item.title}
                      </h4>
                      <span className="shrink-0 font-mono text-[10px] uppercase text-brand-orange-hover bg-brand-orange/10 px-2 py-0.5 border border-brand-orange/20 rounded-sm">
                        {item.date}
                      </span>
                    </div>

                    <p className="font-mono text-xs text-brand-text-muted font-medium mb-2 lowercase">
                      {item.subtitle}
                    </p>

                    <p className="font-sans text-xs text-brand-text-muted/80 leading-relaxed lowercase">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Action Buttons inside CV footer */}
            <div className="border-t border-brand-outline/10 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-text-muted/70">
                <GraduationCap className="h-4 w-4 text-brand-orange" />
                <span>accredited curriculum format active.</span>
              </div>
              <a
                onClick={() => {
                  playTick();
                  alert('CV printed simulated dispatch! In production, this hosts your secure portfolio PDF file.');
                }}
                className="flex items-center gap-2 px-4 py-2 border border-brand-orange hover:bg-brand-orange/10 text-brand-orange font-sans text-xs font-semibold uppercase tracking-wider rounded-sm cursor-pointer transition-all"
              >
                <Download className="w-3.5 h-3.5" /> .download printed dossier [pdf]
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
