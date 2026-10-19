import React, { useState } from 'react';
import { 
  Home,
  FileText, 
  PenTool, 
  BookOpen, 
  Headphones,
  Rotate3d,
  BarChart3, 
  GraduationCap, 
  Sun,
  Moon,
  Menu,
  X,
  MessageCircle,
  ExternalLink,
  Key,
  Sparkles
} from 'lucide-react';
import { useTheme, SiteTheme } from '../context/ThemeContext';
import { Logo } from './Logo';

export type ActiveTab = 'home' | 'exam' | 'writing' | 'books' | 'audio' | 'flashcards' | 'stats';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenApiKeyModal?: () => void;
  hasApiKey?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenApiKeyModal,
  hasApiKey
}) => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === 'slate') {
      setTheme('light');
    } else {
      setTheme('slate');
    }
  };

  const navItems = [
    {
      id: 'home' as ActiveTab,
      label: 'Home',
      shortLabel: 'Home',
      icon: Home,
      description: 'Landing Page'
    },
    {
      id: 'exam' as ActiveTab,
      label: 'Exam',
      shortLabel: 'Exam',
      icon: FileText,
      description: '1h 50m Practice'
    },
    {
      id: 'writing' as ActiveTab,
      label: 'Writing',
      shortLabel: 'Writing',
      icon: PenTool,
      description: 'AI Writing Lab'
    },
    {
      id: 'books' as ActiveTab,
      label: 'Books & Notes',
      shortLabel: 'Books',
      icon: BookOpen,
      description: 'Study Textbooks'
    },
    {
      id: 'audio' as ActiveTab,
      label: 'Audio Hub',
      shortLabel: 'Audio',
      icon: Headphones,
      description: 'Listening Lab'
    },
    {
      id: 'flashcards' as ActiveTab,
      label: 'Flashcards',
      shortLabel: 'Cards',
      icon: Rotate3d,
      description: '3D Vocab Cards'
    },
    {
      id: 'stats' as ActiveTab,
      label: 'Stats',
      shortLabel: 'Stats',
      icon: BarChart3,
      description: 'Progress Tracker'
    }
  ];

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-200 border-b shadow-xl ${
      theme === 'sepia'
        ? 'bg-[#f4e4c1] border-[#dec596] text-[#2d1f11]'
        : theme === 'light'
        ? 'bg-white/95 backdrop-blur-md border-[#dbe4f2] text-[#0a1636]'
        : 'bg-[#081026] border-[#16254f] text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* ==================================================================
         * TOP HEADER: Logo on left, Website Name + Subtitle, Theme Toggle & Menu Controls on right
         * ================================================================== */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Website Logo & Name */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center text-left group cursor-pointer focus:outline-none min-w-0"
            title="Go to Homepage"
          >
            <Logo variant="header" size={52} />
          </button>

          {/* Right: Theme Toggle & Menu Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* WhatsApp Community Link (Desktop & Tablet) */}
            <a
              href="https://whatsapp.com/channel/0029Vb2e7VLIt5rqrA9Iau3V"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition border cursor-pointer whitespace-nowrap shadow-sm ${
                theme === 'sepia'
                  ? 'border-blue-700/40 bg-blue-700/15 text-blue-900 hover:bg-blue-700/25'
                  : theme === 'light'
                  ? 'border-blue-500/40 bg-blue-50 text-blue-700 hover:bg-blue-100'
                  : 'border-[#1b3164] bg-[#0d1a3b] text-blue-400 hover:bg-[#132452] hover:border-blue-500/40'
              }`}
              title="Open CA Journey WhatsApp Channel"
            >
              <MessageCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>CA Journey</span>
              <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
            </a>

            {/* Theme Toggle Button (Sun / Moon) matching reference screenshot */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition border cursor-pointer ${
                theme === 'sepia'
                  ? 'bg-[#ebd5ad] border-[#d9b87a] text-[#4d371d] hover:bg-[#e2c797]'
                  : theme === 'light'
                  ? 'bg-slate-100/90 border-[#d8e3f2] text-amber-500 hover:bg-blue-50 hover:text-amber-600'
                  : 'bg-[#0f1b3d] border-[#22356c] text-amber-300 hover:bg-[#162754] hover:text-amber-200 shadow-sm'
              }`}
              title={`Switch to ${theme === 'slate' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'slate' ? (
                <Sun className="w-5 h-5 stroke-[1.8]" />
              ) : (
                <Moon className="w-5 h-5 stroke-[1.8]" />
              )}
            </button>

            {/* Menu Controls Toggle (Hamburger Button) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition border cursor-pointer ${
                theme === 'sepia'
                  ? 'bg-[#ebd5ad] border-[#d9b87a] text-[#2d1f11]'
                  : theme === 'light'
                  ? 'bg-slate-100/90 border-[#d8e3f2] text-[#0a1636] hover:bg-blue-50'
                  : 'bg-[#0f1b3d] border-[#22356c] text-white hover:bg-[#162754]'
              }`}
              title="Toggle Menu Controls"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2]" />
              )}
            </button>
          </div>
        </div>

        {/* ==================================================================
         * NAVIGATION ROW: Home, Exam, Writing, Books & Notes, Audio Hub, Flashcards, Stats
         * Card-based navigation inspired directly by reference screenshot
         * ================================================================== */}
        <nav 
          className={`py-2.5 border-t overflow-x-auto no-scrollbar scroll-smooth ${
            theme === 'light' ? 'border-[#cbd8ec] bg-white/90' : 'border-[#16254f]/70'
          }`}
          aria-label="Primary Navigation"
        >
          <div role="tablist" aria-label="Section Tabs" className="flex items-center gap-2 sm:gap-2.5 min-w-max lg:min-w-0 lg:grid lg:grid-cols-7 w-full">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={item.label}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex flex-col items-center justify-center gap-1 py-2 px-3 sm:px-4 rounded-2xl transition-all duration-150 cursor-pointer min-w-[72px] sm:min-w-[84px] lg:min-w-0 border ${
                    isActive
                      ? theme === 'sepia'
                        ? 'bg-[#deb87a] border-[#b89150] text-[#2d1f11] font-bold shadow-md'
                        : theme === 'light'
                        ? 'bg-blue-600 border-blue-600 text-white font-bold shadow-md shadow-blue-600/30 ring-2 ring-blue-500/40'
                        : 'bg-[#182c60] border-blue-400 text-white font-bold shadow-lg shadow-blue-500/20 ring-1 ring-blue-400/40'
                      : theme === 'sepia'
                      ? 'bg-[#ebd5ad]/60 border-[#dec596] text-[#634b2c] hover:bg-[#ebd5ad] hover:text-[#2d1f11]'
                      : theme === 'light'
                      ? 'bg-white border-[#cbd8ec] text-[#0a1636] font-bold hover:bg-[#eef4fd] hover:text-blue-700 hover:border-blue-300 shadow-xs'
                      : 'bg-[#0d1633] border-[#182858] text-slate-300 hover:bg-[#121f47] hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 sm:w-5 sm:h-5 transition-transform ${
                    isActive 
                      ? 'scale-110 text-white stroke-[2.4]' 
                      : (theme === 'light' ? 'text-blue-600 stroke-[2.2]' : 'text-slate-300 stroke-[1.8]')
                  }`} />
                  <span className={`text-[11px] sm:text-xs tracking-tight whitespace-nowrap ${
                    isActive 
                      ? 'font-bold text-white' 
                      : (theme === 'light' ? 'font-bold text-[#0a1636]' : 'font-medium text-slate-300')
                  }`}>
                    {item.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* ==================================================================
         * COMPACT MOBILE DRAWER / MENU CONTROLS
         * Opened when the hamburger menu button is pressed
         * ================================================================== */}
        {mobileMenuOpen && (
          <div className={`py-4 border-t animate-in fade-in duration-200 space-y-4 ${
            theme === 'light' ? 'border-[#cbd8ec] bg-slate-50/90' : 'border-[#182958]'
          }`}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs transition cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-500 font-bold shadow-sm'
                        : theme === 'light'
                        ? 'bg-white border-[#cbd8ec] text-[#0a1636] font-bold hover:bg-blue-50 hover:text-blue-700 shadow-xs'
                        : 'bg-[#0c1532] border-[#182858] text-slate-200 hover:bg-[#121f47]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${
                      isActive 
                        ? 'text-white stroke-[2.2]' 
                        : (theme === 'light' ? 'text-blue-600 stroke-[2]' : 'text-slate-300')
                    }`} />
                    <span className={`truncate ${
                      isActive 
                        ? 'text-white font-bold' 
                        : (theme === 'light' ? 'text-[#0a1636] font-bold' : 'text-slate-200 font-semibold')
                    }`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className={`flex flex-wrap items-center justify-between gap-3 pt-3 border-t text-xs ${
              theme === 'light' ? 'border-[#dbe4f2]' : 'border-[#182958]'
            }`}>
              <a
                href="https://whatsapp.com/channel/0029Vb2e7VLIt5rqrA9Iau3V"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold border transition ${
                  theme === 'light'
                    ? 'bg-blue-50 border-blue-300 text-blue-800 hover:bg-blue-100'
                    : 'bg-blue-500/15 border-blue-500/30 text-blue-400 hover:bg-blue-500/25'
                }`}
              >
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span>CA Journey Channel</span>
              </a>

              {onOpenApiKeyModal && (
                <button
                  onClick={() => {
                    onOpenApiKeyModal();
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border font-semibold transition cursor-pointer ${
                    theme === 'light'
                      ? 'bg-[#f4f8fd] border-[#d8e3f2] text-[#0a1636] hover:bg-[#e8f1fc]'
                      : 'bg-[#0f1d3f] border-[#1e3368] text-slate-200 hover:text-white'
                  }`}
                >
                  <Key className="w-3.5 h-3.5 text-blue-500" />
                  <span>{hasApiKey ? 'Gemini API Configured' : 'Configure Gemini Key'}</span>
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
