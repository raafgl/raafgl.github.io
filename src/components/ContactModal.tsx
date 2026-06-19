import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Command, CheckSquare, MessageSquare, ExternalLink } from 'lucide-react';
import { Message } from '../types';
import { playTick, playSuccess } from '../utils/audio';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('branding');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [recentMessages, setRecentMessages] = useState<Message[]>([]);

  // Load message logs from localStorage to mock the server payload
  useEffect(() => {
    const loaded = localStorage.getItem('raf_commissions');
    if (loaded) {
      try {
        setRecentMessages(JSON.parse(loaded));
      } catch (e) {}
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newMessage: Message = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      projectType,
      message,
      timestamp: new Date().toLocaleTimeString(),
    };

    const updated = [newMessage, ...recentMessages].slice(0, 3);
    setRecentMessages(updated);
    localStorage.setItem('raf_commissions', JSON.stringify(updated));

    playSuccess();
    setSubmitted(true);

    // Reset fields after delay
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleClose = () => {
    playTick();
    onClose();
  };

  const clearLogs = () => {
    playTick();
    localStorage.removeItem('raf_commissions');
    setRecentMessages([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="relative w-full max-w-2xl bg-brand-surface-card border border-brand-outline/20 p-6 md:p-8 rounded shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-brand-outline/10 pb-4 mb-6">
          <div className="flex items-center space-x-2">
            <Command className="w-5 h-5 text-brand-orange animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-brand-text-muted">
              commission dispatch .terminal terminal
            </span>
          </div>
          <button
            onClick={handleClose}
            id="close-contact-btn"
            className="p-2 border border-brand-outline/20 hover:border-brand-orange hover:text-brand-orange transition-colors rounded-sm"
            title="Close Panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          
          {/* Main dispatch section */}
          <div className="md:col-span-3 space-y-4">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-4 font-sans text-xs lowercase"
                >
                  <div>
                    <label className="block text-[11px] font-mono text-brand-orange mb-1 uppercase tracking-wider">
                      .your designation / name *
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. rafael guerra"
                      className="w-full bg-brand-surface border border-brand-outline/30 focus:border-brand-orange focus:outline-none p-2.5 text-brand-text rounded-sm placeholder:text-brand-text-muted/40 font-mono text-xs lowercase transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-brand-orange mb-1 uppercase tracking-wider">
                      .callback channels / email *
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. address@service.com"
                      className="w-full bg-brand-surface border border-brand-outline/30 focus:border-brand-orange focus:outline-none p-2.5 text-brand-text rounded-sm placeholder:text-brand-text-muted/40 font-mono text-xs lowercase transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-brand-orange mb-1 uppercase tracking-wider">
                      .selected vector / category
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-brand-surface border border-brand-outline/30 focus:border-brand-orange focus:outline-none p-2.5 text-brand-text rounded-sm font-mono text-xs transition-all uppercase"
                    >
                      <option value="branding">.branding design</option>
                      <option value="interface">.interface &amp; digital UI</option>
                      <option value="print">.print posters &amp; books</option>
                      <option value="motion">.custom interactive / other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-brand-orange mb-1 uppercase tracking-wider">
                      .brief statement / message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="explain scope, budget limits or references..."
                      className="w-full bg-brand-surface border border-brand-outline/30 focus:border-brand-orange focus:outline-none p-2.5 text-brand-text rounded-sm placeholder:text-brand-text-muted/40 font-sans text-xs lowercase resize-none leading-relaxed transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange-hover text-brand-orange-light font-sans font-bold text-xs uppercase py-3 px-4 rounded-sm tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" /> .transmit project brief
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-brand-surface border border-brand-orange/30 p-6 rounded-sm text-center py-10 space-y-4"
                >
                  <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange rounded-full flex items-center justify-center mx-auto text-brand-orange animate-bounce">
                    <CheckSquare className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-mono text-sm uppercase text-brand-text font-bold">
                    transmission complete // ok
                  </h3>
                  
                  <p className="font-sans text-xs text-brand-text-muted/80 lowercase leading-relaxed max-w-xs mx-auto">
                    proposal successfully stored in client logs. thank you very much, i will respond to your channels very soon!
                  </p>

                  <button
                    onClick={() => { playTick(); setSubmitted(false); }}
                    className="mt-2 px-4 py-1.5 border border-brand-outline/30 hover:border-brand-orange font-mono text-[11px] uppercase text-brand-text transition-colors rounded-sm"
                  >
                    .write another log
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right sidebar: Local terminal monitoring messages stored locally */}
          <div className="md:col-span-2 flex flex-col justify-between border-t md:border-t-0 md:border-l border-brand-outline/10 pt-4 md:pt-0 md:pl-4">
            <div>
              <h3 className="font-mono text-[10px] uppercase text-brand-orange tracking-widest mb-3 flex items-center gap-1">
                <MessageSquare className="w-3 h-3" /> local dispatcher logs
              </h3>
              
              <div className="bg-black/40 border border-brand-outline/10 p-3 rounded-sm font-mono text-[10px] text-brand-text-muted/80 min-h-[150px] flex flex-col justify-between">
                <div className="space-y-3">
                  {recentMessages.length === 0 ? (
                    <p className="text-brand-text-muted/40 italic">
                      // logs queue empty. send a message to see raw payload structure here.
                    </p>
                  ) : (
                    recentMessages.map((msg) => (
                      <div key={msg.id} className="border-b border-brand-outline/5 pb-2">
                        <div className="flex justify-between text-brand-orange text-[9px]">
                          <span>[{msg.timestamp}]</span>
                          <span>ID: {msg.id}</span>
                        </div>
                        <p className="text-brand-text text-[11px] lowercase font-sans font-bold truncate mt-0.5">{msg.name}</p>
                        <p className="text-[9px] text-[#8a8a7c] uppercase">{msg.projectType} commission</p>
                      </div>
                    ))
                  )}
                </div>

                {recentMessages.length > 0 && (
                  <button
                    onClick={clearLogs}
                    className="self-start text-[9px] text-brand-orange hover:underline uppercase tracking-wide mt-4"
                  >
                    .flush local logs
                  </button>
                )}
              </div>
            </div>

            <div className="text-[10px] font-mono text-brand-text-muted/60 lowercase mt-4 space-y-1 bg-brand-surface/20 p-2 rounded-sm border border-brand-outline/10">
              <p className="text-brand-orange">// direct channel</p>
              <p className="select-all cursor-pointer font-bold hover:text-brand-orange transition-colors">hello@raf.design</p>
              <div className="flex items-center gap-1 text-[9px] hover:underline cursor-pointer pt-1 text-sky-400">
                <ExternalLink className="w-2.5 h-2.5" /> <span>open secure pgp credential</span>
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}
