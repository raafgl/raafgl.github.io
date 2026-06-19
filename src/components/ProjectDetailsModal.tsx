import { motion } from 'motion/react';
import { X, Calendar, Wrench, Sparkles, FolderKanban } from 'lucide-react';
import { Project } from '../types';
import { playTick } from '../utils/audio';

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const handleClose = () => {
    playTick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-2xl bg-brand-surface-card border border-brand-outline/20 p-6 md:p-8 rounded shadow-2xl h-full flex flex-col justify-between overflow-y-auto"
      >
        <div>
          {/* Header */}
          <div className="flex justify-between items-center border-b border-brand-outline/10 pb-4 mb-6">
            <div className="flex items-center space-x-2">
              <FolderKanban className="w-5 h-5 text-brand-orange" />
              <span className="font-mono text-xs uppercase tracking-wider text-brand-text-muted">
                case study / {project.category}
              </span>
            </div>
            <button
              onClick={handleClose}
              id="close-modal-btn"
              className="p-2 border border-brand-outline/20 hover:border-brand-orange hover:text-brand-orange transition-colors rounded-sm"
              title="Close Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Project Title */}
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-brand-text lowercase mb-2">
            {project.title} <span className="text-brand-orange">/</span>
          </h2>
          <p className="font-sans text-lg text-brand-orange font-medium mb-6">
            {project.subtitle}
          </p>

          {/* Hero Image Inside Modal with Grayscale to Color hover option */}
          <div className="relative aspect-video w-full overflow-hidden border border-brand-outline/10 mb-6 rounded-sm group bg-black">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-brand-surface px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-brand-outline/30 rounded-sm">
              active preview
            </div>
          </div>

          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <h3 className="font-mono text-xs uppercase text-brand-orange mb-2 tracking-wider">.the overview</h3>
              <p className="font-sans text-brand-text-muted text-sm leading-relaxed lowercase">
                {project.longDescription}
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-mono text-xs uppercase text-brand-orange tracking-wider flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> .timeline
                </h4>
                <p className="font-sans text-brand-text text-sm lowercase">{project.year} / completed</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase text-brand-orange tracking-wider flex items-center gap-1">
                  <Wrench className="w-3.5 h-3.5" /> .toolkit
                </h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 bg-brand-surface border border-brand-outline/20 font-mono text-[11px] uppercase rounded-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Specific Solutions/Features designed */}
          {project.features && project.features.length > 0 && (
            <div className="border-t border-brand-outline/10 pt-6 mb-6">
              <h3 className="font-mono text-xs uppercase text-brand-orange tracking-wider mb-4 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> .designed deliverables
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-brand-text-muted font-sans border-l border-brand-orange pl-3 lowercase py-0.5"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="border-t border-brand-outline/10 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
          <div className="font-mono text-[10px] text-brand-text-muted/60 lowercase">
            ® 2026. all digital files secure.
          </div>
          <button
            onClick={handleClose}
            id="close-panel-btn-bottom"
            className="px-6 py-2 bg-brand-orange hover:bg-brand-orange-hover text-brand-orange-light font-sans text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors text-center cursor-pointer"
          >
            .close publication view
          </button>
        </div>
      </motion.div>
    </div>
  );
}
