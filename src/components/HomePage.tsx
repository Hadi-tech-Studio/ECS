import React from 'react';
import { 
  FileText, 
  PenTool, 
  BookOpen, 
  Headphones, 
  Rotate3d, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Clock, 
  Zap,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface HomePageProps {
  onSelectSection: (section: 'exam' | 'writing' | 'books' | 'audio' | 'flashcards' | 'stats') => void;
  onOpenApiKeyModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectSection, onOpenApiKeyModal }) => {
  const { theme } = useTheme();

  /* ========================================================================
   * EDITABLE HOMEPAGE PLACEHOLDERS
   * You can easily customize the text in the constants below.
   * ======================================================================== */

  // EDITABLE HOMEPAGE PLACEHOLDER: WELCOME MESSAGE
  const HOMEPAGE_WELCOME_MESSAGE = "Welcome to ICAP ECS By CA journey";

  // EDITABLE HOMEPAGE PLACEHOLDER: WEBSITE HEADING
  const HOMEPAGE_WEBSITE_HEADING = "CA Journey";

  // EDITABLE HOMEPAGE PLACEHOLDER: WEBSITE INTRODUCTION
  const HOMEPAGE_INTRODUCTION = 
    "Your dedicated learning portal for ICAP English Communication Skills (ECS). Prepare for Aptis-pattern exams, master formal writing with AI feedback, explore official study texts, practice audio listening, and track your progress toward CA success.";

  // EDITABLE HOMEPAGE PLACEHOLDER: PRIMARY ACTION BUTTON
  const HOMEPAGE_PRIMARY_BUTTON_TEXT = "Explore Learning →";

  /* ======================================================================== */

  const learningModules = [
    {
      id: 'exam' as const,
      title: 'Practice Exam',
      badge: '1h 50m Exam',
      description: 'Full Aptis-pattern practice tests with Core Grammar & Vocab (25+25), 4-part Reading, and CEFR grading.',
      icon: FileText,
      color: 'from-blue-600 to-indigo-600',
      tag: 'Aptis Format'
    },
    {
      id: 'writing' as const,
      title: 'Writing Lab',
      badge: 'AI Evaluation',
      description: 'Practice Part 1 to Part 4 formal emails, letters, and social forum posts with real-time rubric feedback.',
      icon: PenTool,
      color: 'from-cyan-600 to-blue-600',
      tag: 'CEFR Rubric'
    },
    {
      id: 'books' as const,
      title: 'Books & Notes',
      badge: 'ICAP Textbooks',
      description: 'Official ICAP ECS Study Text, Revision Kits, chapter notes, and integrated PDF reader with search.',
      icon: BookOpen,
      color: 'from-cyan-600 to-blue-600',
      tag: 'Study Materials'
    },
    {
      id: 'audio' as const,
      title: 'Audio Hub',
      badge: 'Speech Synthesis',
      description: 'Listen to audit & corporate dialogues with slow speed (0.75x) blind listening, interactive quizzes, and lectures.',
      icon: Headphones,
      color: 'from-indigo-600 to-purple-600',
      tag: 'Listening Lab'
    },
    {
      id: 'flashcards' as const,
      title: 'Flashcards',
      badge: '3D Flip Cards',
      description: 'High-frequency accounting, auditing, and corporate law collocations with pronunciation and Urdu definitions.',
      icon: Rotate3d,
      color: 'from-violet-600 to-fuchsia-600',
      tag: 'Active Recall'
    },
    {
      id: 'stats' as const,
      title: 'Stats & Analytics',
      badge: 'Diagnostic Report',
      description: 'Track accuracy heatmaps across all syllabus topics, analyze score history, and identify weak areas.',
      icon: BarChart3,
      color: 'from-blue-600 to-indigo-600',
      tag: 'Progress Tracker'
    }
  ];

  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-16">
      
      {/* ====================================================================
       * HERO SECTION: Clean navy presentation in dark mode & crisp navy light mode
       * ==================================================================== */}
      <section className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 text-center transition-all ${
        theme === 'sepia'
          ? 'bg-[#f4e4c1] border border-[#dec596] shadow-xl'
          : theme === 'light'
          ? 'bg-gradient-to-b from-[#eaf1fb] via-[#f2f6fc] to-white border border-[#cbdcf2] shadow-xl shadow-blue-900/5'
          : 'bg-gradient-to-b from-[#0c1635] via-[#091129] to-[#060b1b] border border-[#1b2d5f] shadow-2xl'
      }`}>
        
        {/* Subtle background ambient glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none ${
          theme === 'light' ? 'bg-blue-400/10' : 'bg-blue-600/10'
        }`} />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          
          {/* EDITABLE HOMEPAGE PLACEHOLDER: WELCOME MESSAGE */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm ${
            theme === 'sepia'
              ? 'bg-[#ebd5ad] border border-[#d9b87a] text-[#4d371d]'
              : theme === 'light'
              ? 'bg-blue-100/90 border border-blue-300 text-blue-800'
              : 'bg-blue-500/15 border border-blue-400/30 text-blue-300'
          }`}>
            <Sparkles className={`w-4 h-4 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />
            <span>{HOMEPAGE_WELCOME_MESSAGE}</span>
          </div>

          {/* EDITABLE HOMEPAGE PLACEHOLDER: WEBSITE HEADING */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight drop-shadow-sm ${
            theme === 'sepia' ? 'text-[#2d1f11]' : theme === 'light' ? 'text-[#0a1636]' : 'text-white'
          }`}>
            {HOMEPAGE_WEBSITE_HEADING}
          </h1>

          {/* EDITABLE HOMEPAGE PLACEHOLDER: WEBSITE INTRODUCTION */}
          <p className={`text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl mx-auto ${
            theme === 'sepia' ? 'text-[#5f4423]' : theme === 'light' ? 'text-[#2e4363]' : 'text-slate-300'
          }`}>
            {HOMEPAGE_INTRODUCTION}
          </p>

          {/* EDITABLE HOMEPAGE PLACEHOLDER: PRIMARY ACTION BUTTON */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onSelectSection('exam')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-base sm:text-lg shadow-lg shadow-blue-600/30 border border-blue-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{HOMEPAGE_PRIMARY_BUTTON_TEXT}</span>
            </button>

            <a
              href="https://whatsapp.com/channel/0029Vb2e7VLIt5rqrA9Iau3V"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto px-6 py-4 rounded-2xl font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm ${
                theme === 'sepia'
                  ? 'bg-[#ebd5ad] hover:bg-[#e2c797] text-[#2d1f11] border border-[#dec596]'
                  : theme === 'light'
                  ? 'bg-white hover:bg-[#f1f6fd] text-[#0f244e] border border-[#cbdcf2]'
                  : 'bg-[#0e1b3d] hover:bg-[#152755] text-slate-200 border border-[#213872]'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span>Join WhatsApp Channel</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Highlights / Quick Credibility Indicators */}
          <div className={`pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-3 text-left ${
            theme === 'light' ? 'border-[#dbe4f2]' : 'border-[#162752]'
          }`}>
            <div className={`p-3 rounded-xl border ${
              theme === 'light' ? 'bg-white border-[#d8e4f2]' : 'bg-[#09122c]/80 border-[#1a2c5a]'
            }`}>
              <span className={`text-[11px] block font-medium ${theme === 'light' ? 'text-[#486581]' : 'text-slate-400'}`}>Exam Standard</span>
              <span className={`text-xs sm:text-sm font-bold ${theme === 'light' ? 'text-[#0a1636]' : 'text-white'}`}>Aptis 1h 50m</span>
            </div>
            <div className={`p-3 rounded-xl border ${
              theme === 'light' ? 'bg-white border-[#d8e4f2]' : 'bg-[#09122c]/80 border-[#1a2c5a]'
            }`}>
              <span className={`text-[11px] block font-medium ${theme === 'light' ? 'text-[#486581]' : 'text-slate-400'}`}>Writing Lab</span>
              <span className={`text-xs sm:text-sm font-bold ${theme === 'light' ? 'text-[#0a1636]' : 'text-white'}`}>4 AI Tasks</span>
            </div>
            <div className={`p-3 rounded-xl border ${
              theme === 'light' ? 'bg-white border-[#d8e4f2]' : 'bg-[#09122c]/80 border-[#1a2c5a]'
            }`}>
              <span className={`text-[11px] block font-medium ${theme === 'light' ? 'text-[#486581]' : 'text-slate-400'}`}>Audio Lab</span>
              <span className={`text-xs sm:text-sm font-bold ${theme === 'light' ? 'text-[#0a1636]' : 'text-white'}`}>Speech Synthesis</span>
            </div>
            <div className={`p-3 rounded-xl border ${
              theme === 'light' ? 'bg-white border-[#d8e4f2]' : 'bg-[#09122c]/80 border-[#1a2c5a]'
            }`}>
              <span className={`text-[11px] block font-medium ${theme === 'light' ? 'text-[#486581]' : 'text-slate-400'}`}>Vocabulary</span>
              <span className={`text-xs sm:text-sm font-bold ${theme === 'light' ? 'text-[#0a1636]' : 'text-white'}`}>3D Flashcards</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION EXPLORATION CARDS: One-click entrance to each learning section
       * ==================================================================== */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className={`text-xl sm:text-2xl font-display font-extrabold ${
              theme === 'light' ? 'text-[#0a1636]' : 'text-white'
            }`}>
              Learning Sections & Tools
            </h2>
            <p className={`text-xs sm:text-sm ${
              theme === 'light' ? 'text-[#334e68]' : 'text-slate-400'
            }`}>
              Select any section to launch its full suite of interactive tools and practice materials.
            </p>
          </div>
          <span className={`text-xs font-semibold ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`}>
            6 Specialized Modules
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {learningModules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.id}
                onClick={() => onSelectSection(module.id)}
                className={`group relative rounded-2xl p-6 transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  theme === 'sepia'
                    ? 'bg-[#f4e4c1] border-[#dec596] hover:bg-[#ebd5ad] hover:border-[#cda863] shadow-md'
                    : theme === 'light'
                    ? 'bg-white hover:bg-[#f6faff] border-[#d4e1f2] hover:border-blue-400 shadow-sm hover:shadow-xl hover:shadow-blue-900/10'
                    : 'bg-[#0a132c] hover:bg-[#0e1a3b] border-[#182a58] hover:border-blue-500/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all group-hover:scale-105 ${
                      theme === 'light'
                        ? 'bg-blue-50 border border-blue-200 text-blue-700 group-hover:border-blue-400'
                        : 'bg-[#132247] border border-[#1e3368] text-blue-400 group-hover:border-blue-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      theme === 'light'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-blue-500/15 text-blue-300 border-blue-500/25'
                    }`}>
                      {module.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-lg font-bold transition-colors ${
                      theme === 'light' ? 'text-[#0a1636] group-hover:text-blue-700' : 'text-white group-hover:text-blue-300'
                    }`}>
                      {module.title}
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${
                      theme === 'light' ? 'text-[#334e68]' : 'text-slate-300'
                    }`}>
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className={`pt-4 mt-4 border-t flex items-center justify-between text-xs font-bold transition-colors ${
                  theme === 'light'
                    ? 'border-[#e4edf8] text-blue-700 group-hover:text-blue-800'
                    : 'border-[#15244c] text-blue-400 group-hover:text-blue-300'
                }`}>
                  <span>Open {module.title}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ====================================================================
       * STUDY TEXT & EXAM GUIDELINES BANNER
       * ==================================================================== */}
      <section className={`rounded-3xl border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all ${
        theme === 'sepia'
          ? 'bg-[#f4e4c1] border-[#dec596]'
          : theme === 'light'
          ? 'bg-gradient-to-r from-[#eaf2fc] via-[#f1f6fd] to-[#ffffff] border-[#cddff5] shadow-sm'
          : 'bg-gradient-to-r from-[#091535] to-[#070e24] border-[#192b5b]'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
            theme === 'light'
              ? 'bg-blue-100 border border-blue-300 text-blue-700'
              : 'bg-blue-600/20 border border-blue-500/30 text-blue-400'
          }`}>
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className={`text-lg font-bold ${
              theme === 'light' ? 'text-[#0a1636]' : 'text-white'
            }`}>ICAP Exam Success Blueprint</h3>
            <p className={`text-xs sm:text-sm max-w-xl ${
              theme === 'light' ? 'text-[#334e68]' : 'text-slate-300'
            }`}>
              Consistent practice across Grammar MCQs, reading speed comprehension, and formal writing tone is the proven formula to clear English Communication Skills on your first attempt.
            </p>
          </div>
        </div>

        <button
          onClick={() => onSelectSection('books')}
          className={`whitespace-nowrap px-5 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer border ${
            theme === 'light'
              ? 'bg-white hover:bg-blue-50 text-blue-700 border-blue-200 shadow-sm'
              : 'bg-[#14234c] hover:bg-[#1b2f66] text-blue-300 border-[#233b7a]'
          }`}
        >
          Browse Study Notes →
        </button>
      </section>

    </div>
  );
};
