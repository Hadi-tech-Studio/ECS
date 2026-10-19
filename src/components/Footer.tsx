import React, { useState } from 'react';
import { ActiveTab } from './Navbar';
import { useTheme } from '../context/ThemeContext';
import { 
  GraduationCap, 
  X, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Clock,
  Layers,
  Award
} from 'lucide-react';

interface FooterProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenApiKeyModal?: () => void;
  hasApiKey?: boolean;
}

type ModalType = 'faq' | 'syllabus' | 'tips' | 'contact' | 'privacy' | 'terms' | null;

export const Footer: React.FC<FooterProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const { theme } = useTheme();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    scrollToTop();
  };

  const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029Vb2e7VLIt5rqrA9Iau3V';

  // Base colors aligned with theme
  const isDark = theme === 'slate';
  const isSepia = theme === 'sepia';

  const footerBg = isSepia
    ? 'bg-[#f4e4c1] border-[#dec596] text-[#4a3418]'
    : isDark
    ? 'bg-[#060b18] border-[#15234b] text-slate-300'
    : 'bg-[#ffffff] border-[#d8e3f2] text-[#1b2d56]';

  const bottomBg = isSepia
    ? 'border-[#dec596] bg-[#ebd5ad]/40 text-[#5a4223]'
    : isDark
    ? 'border-[#15234b] bg-[#040813] text-slate-400'
    : 'border-[#d8e3f2] bg-[#f8fafd] text-[#486581]';

  const headingColor = isSepia
    ? 'text-[#2d1f11]'
    : isDark
    ? 'text-white'
    : 'text-[#0a1636]';

  const subtextColor = isSepia
    ? 'text-[#5f4423]'
    : isDark
    ? 'text-slate-400'
    : 'text-slate-600';

  const linkColor = isSepia
    ? 'text-[#4d361c] hover:text-amber-800'
    : isDark
    ? 'text-slate-300 hover:text-amber-400'
    : 'text-slate-700 hover:text-amber-600';

  const dividerBorder = isSepia
    ? 'border-[#dec596]'
    : isDark
    ? 'border-[#1c2d5e]'
    : 'border-slate-200';

  return (
    <>
      <footer 
        role="contentinfo"
        aria-label="Site Footer"
        className={`border-t transition-colors duration-200 mt-auto ${footerBg}`}
      >
        {/* Main Footer Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* COLUMN 1: BRAND LOGO & TAGLINE (Span 4) */}
            <div className="lg:col-span-4 space-y-3.5">
              <button 
                onClick={() => handleNavClick('home')}
                className="group flex items-center gap-3 cursor-pointer text-left focus:outline-none"
                title="ICAP ECS by CA Journey"
              >
                {/* High Resolution Complete CA Journey Logo Badge */}
                <div className="relative flex items-center justify-center shrink-0 w-16 h-16 rounded-2xl overflow-hidden shadow-xl border border-amber-500/50 bg-[#081226] group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300">
                  <img 
                    src="/logo-full-clean.png" 
                    alt="CA Journey Logo" 
                    className="w-full h-full object-contain p-1"
                    loading="eager"
                  />
                </div>

                {/* Brand Text matching Header */}
                <div className="flex flex-col text-left leading-none min-w-0">
                  <span className={`font-display font-extrabold text-2xl tracking-tight uppercase ${headingColor}`}>
                    ICAP ECS
                  </span>
                  <span className="text-xs font-bold tracking-wider text-blue-500 dark:text-blue-400 mt-1 uppercase">
                    CA Journey
                  </span>
                </div>
              </button>

              {/* Accent divider line in website theme color (Amber-Gold) */}
              <div className="w-14 h-[2.5px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 rounded-full" />

              {/* Taglines from reference image */}
              <div className="space-y-1 pt-0.5">
                <p className={`text-sm font-semibold tracking-tight ${headingColor}`}>
                  Build your English. Boost your future.
                </p>
                <p className={`text-xs sm:text-sm leading-relaxed ${subtextColor}`}>
                  Your complete ICAP ECS practice platform.
                </p>
              </div>
            </div>

            {/* COLUMN 2: QUICK LINKS (Span 2) */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className={`text-sm font-bold tracking-tight ${headingColor}`}>
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button
                    onClick={() => handleNavClick('home')}
                    className={`text-left transition-colors cursor-pointer ${
                      activeTab === 'home' ? 'font-bold text-amber-400' : linkColor
                    }`}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('exam')}
                    className={`text-left transition-colors cursor-pointer ${
                      activeTab === 'exam' ? 'font-bold text-amber-400' : linkColor
                    }`}
                  >
                    Exam Engine
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('writing')}
                    className={`text-left transition-colors cursor-pointer ${
                      activeTab === 'writing' ? 'font-bold text-amber-400' : linkColor
                    }`}
                  >
                    Writing Lab
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('books')}
                    className={`text-left transition-colors cursor-pointer ${
                      activeTab === 'books' ? 'font-bold text-amber-400' : linkColor
                    }`}
                  >
                    Books & Notes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('flashcards')}
                    className={`text-left transition-colors cursor-pointer ${
                      activeTab === 'flashcards' ? 'font-bold text-amber-400' : linkColor
                    }`}
                  >
                    Flashcards
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: RESOURCES (Span 2) */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className={`text-sm font-bold tracking-tight ${headingColor}`}>
                Resources
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button
                    onClick={() => setActiveModal('faq')}
                    className={`text-left transition-colors cursor-pointer ${linkColor}`}
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('syllabus')}
                    className={`text-left transition-colors cursor-pointer ${linkColor}`}
                  >
                    Syllabus
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('tips')}
                    className={`text-left transition-colors cursor-pointer ${linkColor}`}
                  >
                    Study Tips
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('contact')}
                    className={`text-left transition-colors cursor-pointer ${linkColor}`}
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: FOLLOW US & WHATSAPP LINK (Span 2 or 3) */}
            <div className="lg:col-span-2 space-y-3.5">
              <h3 className={`text-sm font-bold tracking-tight ${headingColor}`}>
                Follow Us
              </h3>

              {/* Social Icons Row - WhatsApp Only */}
              <div className="flex items-center gap-2.5">
                {/* WhatsApp Button */}
                <a
                  href={WHATSAPP_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Join CA Journey WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-current">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM9.11 7.02C8.94 7.02 8.68 7.08 8.45 7.33C8.22 7.57 7.58 8.17 7.58 9.39C7.58 10.61 8.47 11.78 8.59 11.95C8.72 12.11 10.33 14.6 12.82 15.68C14.89 16.58 15.31 16.4 15.77 16.36C16.23 16.32 17.25 15.76 17.46 15.17C17.67 14.58 17.67 14.07 17.6 13.97C17.54 13.86 17.38 13.8 17.14 13.68C16.9 13.56 15.72 12.98 15.5 12.9C15.28 12.82 15.12 12.78 14.96 13.02C14.8 13.26 14.34 13.8 14.2 13.97C14.06 14.13 13.92 14.15 13.68 14.03C13.44 13.91 12.67 13.66 11.75 12.84C11.03 12.2 10.54 11.41 10.4 11.17C10.26 10.93 10.39 10.79 10.51 10.68C10.62 10.57 10.76 10.39 10.88 10.25C11 10.11 11.05 10.01 11.13 9.85C11.21 9.69 11.17 9.55 11.11 9.43C11.05 9.31 10.58 8.15 10.38 7.68C10.19 7.22 9.99 7.28 9.84 7.27C9.7 7.27 9.54 7.27 9.38 7.27C9.22 7.27 9.11 7.02 9.11 7.02Z"/>
                  </svg>
                </a>
              </div>

              {/* Exact WhatsApp Channel Link with icon & arrow */}
              <div className="pt-1">
                <a
                  href={WHATSAPP_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group cursor-pointer"
                >
                  {/* WhatsApp phone/chat outline icon */}
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="w-4 h-4 text-blue-400 shrink-0 group-hover:scale-110 transition-transform" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Join our WhatsApp Channel</span>
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* COLUMN 5: VERTICAL DIVIDER & CA JOURNEY BRAND HALLMARK (Span 2) */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end">
              <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto">
                {/* Vertical Divider line */}
                <div className={`hidden lg:block w-[1px] h-28 self-center ${dividerBorder} border-l`} />

                {/* CA Journey Script Signature Block */}
                <div className="flex flex-col items-center justify-center text-center select-none py-2">
                  {/* Graduation cap with theme amber accent */}
                  <div className="relative mb-0.5">
                    <GraduationCap 
                      className={`w-7 h-7 sm:w-8 sm:h-8 ${
                        isDark ? 'text-amber-400' : isSepia ? 'text-[#3d2711]' : 'text-amber-600'
                      }`} 
                      strokeWidth={1.8} 
                    />
                  </div>

                  {/* "CA Journey" in cursive / script font */}
                  <div 
                    className={`font-script text-3xl sm:text-4xl font-bold tracking-wide italic leading-none my-1 ${
                      isDark ? 'text-white' : isSepia ? 'text-[#2d1f11]' : 'text-[#0a1636]'
                    }`}
                    style={{ textShadow: isDark ? '0 2px 14px rgba(245,158,11,0.25)' : 'none' }}
                  >
                    CA Journey
                  </div>

                  {/* Slogan underneath */}
                  <div className={`text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase mt-1 ${subtextColor}`}>
                    Learn <span className="opacity-40 mx-0.5">|</span> Practice <span className="opacity-40 mx-0.5">|</span> Succeed
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================================
            BOTTOM COPYRIGHT, PRIVACY POLICY & TERMS BAR
            ===================================================================== */}
        <div className={`border-t py-4 px-4 sm:px-6 lg:px-8 text-xs ${bottomBg}`}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            
            {/* Left: Exact Copyright String from Reference Image */}
            <p className="font-normal">
              © 2025 ICAP ECS by CA Journey. All rights reserved.
            </p>

            {/* Right: Exact Privacy Policy | Terms & Conditions */}
            <div className="flex items-center gap-2 font-normal">
              <button
                onClick={() => setActiveModal('privacy')}
                className="hover:underline hover:text-amber-400 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="opacity-40">|</span>
              <button
                onClick={() => setActiveModal('terms')}
                className="hover:underline hover:text-amber-400 transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>

          </div>
        </div>
      </footer>

      {/* =====================================================================
          INTERACTIVE RESOURCE MODALS
          ===================================================================== */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className={`relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 shadow-2xl border ${
              isSepia 
                ? 'bg-[#fbf0d9] border-[#dec596] text-[#342410]' 
                : isDark 
                ? 'bg-[#0b142c] border-[#1e3060] text-slate-100' 
                : 'bg-white border-slate-200 text-[#0a1636]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700/50 transition cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* FAQ MODAL */}
            {activeModal === 'faq' && (
              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-display">Frequently Asked Questions</h2>
                    <p className={`text-xs ${subtextColor}`}>ICAP ECS & British Council Aptis General Preparation</p>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <h4 className="font-bold text-blue-400 mb-1">What is the ICAP ECS Exam format?</h4>
                    <p className={subtextColor}>
                      ICAP English Communication Skills (ECS) adopts the official British Council Aptis General format, comprising Core Grammar & Vocabulary (50 questions), Reading Comprehension (4 tasks), AI-evaluated Writing, and Listening practice.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <h4 className="font-bold text-blue-400 mb-1">How does the Writing Lab evaluate my answers?</h4>
                    <p className={subtextColor}>
                      Our simulator utilizes Google Gemini AI trained on British Council Aptis marking scales (CEFR A1–C) to give you instant band scores, structural feedback, vocabulary enhancements, and model solutions.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <h4 className="font-bold text-blue-400 mb-1">Where can I receive updates and new mock tests?</h4>
                    <p className={subtextColor}>
                      Join our official CA Journey WhatsApp Channel for exam dates, newly released mock test sets, study text summaries, and student revision webinars.
                    </p>
                    <a 
                      href={WHATSAPP_CHANNEL_URL} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 mt-2"
                    >
                      <span>Join WhatsApp Channel</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* SYLLABUS MODAL */}
            {activeModal === 'syllabus' && (
              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-display">ICAP ECS Syllabus & Structure</h2>
                    <p className={`text-xs ${subtextColor}`}>Complete Exam Breakdown & Blueprint</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold text-blue-400 flex items-center gap-1.5 mb-1">
                      <Layers className="w-3.5 h-3.5" />
                      <span>1. Core Grammar (25 Qs)</span>
                    </div>
                    <p className={subtextColor}>Tenses, Conditionals, Modals, Passive Voice, Gerunds & Infinitives, Prepositions, and Connectors.</p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold text-blue-400 flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>2. Vocabulary (25 Qs)</span>
                    </div>
                    <p className={subtextColor}>Word Matching, Synonyms, Collocations, Sentence Definition Completion, and Phrasal Verbs.</p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold text-cyan-400 flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>3. Reading Comprehension</span>
                    </div>
                    <p className={subtextColor}>Task 1 Sentence Gap Fill, Task 2 Story Reordering, Task 3 Multi-Text Opinion Matching, Task 4 Headings Matching.</p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold text-amber-400 flex items-center gap-1.5 mb-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>4. Writing Test</span>
                    </div>
                    <p className={subtextColor}>Part 1 Form Filler (Word-level), Part 2 Personal Info (20-30 words), Part 3 Social Forum, Part 4 Formal/Informal Emails.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      handleNavClick('books');
                    }}
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition cursor-pointer"
                  >
                    Open Official Study Texts in Books Hub
                  </button>
                </div>
              </div>
            )}

            {/* STUDY TIPS MODAL */}
            {activeModal === 'tips' && (
              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-display">ICAP ECS Master Study Tips</h2>
                    <p className={`text-xs ${subtextColor}`}>Proven High-Yield Strategies by CA Journey</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-100">Pace Yourself: 30 Seconds Per Grammar MCQ</span>
                      <p className={subtextColor}>The Core Grammar & Vocab section gives you 25 minutes for 50 questions. Keep a brisk pace so you have 5 minutes left to review flagged questions.</p>
                    </div>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-100">Formal vs. Informal Email Register</span>
                      <p className={subtextColor}>In Writing Part 4, never use contractions (don't, can't) or colloquialisms in the formal email to an authority figure. Save friendly expressions for the informal email.</p>
                    </div>
                  </div>

                  <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-100">Review Urdu Explanations</span>
                      <p className={subtextColor}>Whenever you review your exam solution in our engine, read both the English and Urdu explanations to deeply grasp the underlying grammatical rationale.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CONTACT US MODAL */}
            {activeModal === 'contact' && (
              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-display">Contact CA Journey</h2>
                    <p className={`text-xs ${subtextColor}`}>We are here to help you succeed in your ICAP journey</p>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${subtextColor}`}>
                  Join our official WhatsApp Channel for instantaneous announcements, exam schedule updates, student discussion threads, and direct revision support.
                </p>

                <div className={`p-4 rounded-xl border space-y-3 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm text-blue-400">Official WhatsApp Channel</div>
                      <div className="text-xs text-slate-400">Direct student portal & announcements</div>
                    </div>
                    <a
                      href={WHATSAPP_CHANNEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm cursor-pointer"
                    >
                      <span>Join Now</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* PRIVACY POLICY MODAL */}
            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-display">Privacy Policy</h2>
                    <p className={`text-xs ${subtextColor}`}>Effective Date: 2025 – 2026</p>
                  </div>
                </div>

                <div className={`space-y-3 text-xs leading-relaxed ${subtextColor} max-h-[50vh] overflow-y-auto pr-2`}>
                  <p>
                    At <strong className="text-slate-200">ICAP ECS by CA Journey</strong>, your privacy and data security are our top priorities. This Privacy Policy outlines our transparent data practices:
                  </p>
                  <p>
                    <strong className="text-slate-200">1. Local Storage:</strong> All mock test results, flashcard study histories, and user settings are stored locally on your device via browser localStorage. We do not track or sell your personal information.
                  </p>
                  <p>
                    <strong className="text-slate-200">2. AI Evaluation Engine:</strong> When you submit writing tasks for instant CEFR grading, your text is submitted via Google Gemini API solely to generate your score report and feedback.
                  </p>
                  <p>
                    <strong className="text-slate-200">3. Independent Platform:</strong> This website is an independent educational simulator developed by CA Journey to assist students preparing for ICAP ECS examinations.
                  </p>
                </div>
              </div>
            )}

            {/* TERMS & CONDITIONS MODAL */}
            {activeModal === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-display">Terms & Conditions</h2>
                    <p className={`text-xs ${subtextColor}`}>User Agreement & Academic Simulator Guidelines</p>
                  </div>
                </div>

                <div className={`space-y-3 text-xs leading-relaxed ${subtextColor} max-h-[50vh] overflow-y-auto pr-2`}>
                  <p>
                    Welcome to <strong className="text-slate-200">ICAP ECS by CA Journey</strong>. By accessing or using this test engine, you agree to the following terms:
                  </p>
                  <p>
                    <strong className="text-slate-200">1. Educational Simulator:</strong> This platform is designed exclusively for educational, revision, and self-assessment purposes. Test scores and AI feedback are practice benchmarks.
                  </p>
                  <p>
                    <strong className="text-slate-200">2. Trademark Notice:</strong> "Aptis" is a registered trademark of the British Council. "ICAP" is the Institute of Chartered Accountants of Pakistan. CA Journey operates this revision platform independently.
                  </p>
                  <p>
                    <strong className="text-slate-200">3. Community Conduct:</strong> Members participating in CA Journey channels and forums are expected to maintain professional, supportive academic dialogue.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};
