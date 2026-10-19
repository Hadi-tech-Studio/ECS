/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { PracticeExamEngine } from './components/PracticeExamEngine';
import { WritingLab } from './components/WritingLab';
import { BooksHub } from './components/BooksHub';
import { AudioHub } from './components/AudioHub';
import { Dashboard } from './components/Dashboard';
import { ApiKeyModal } from './components/ApiKeyModal';
import { Footer } from './components/Footer';
import { registerKeyModalHandler, checkServerGeminiStatus } from './lib/api-handler';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { theme } = useTheme();
  
  // Default to 'home' landing page as the first screen
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState<boolean>(false);
  const [hasApiKey, setHasApiKey] = useState<boolean>(true);

  useEffect(() => {
    // Check initial API key from localStorage or server environment
    const checkApiKeyStatus = async () => {
      const key = localStorage.getItem('GEMINI_API_KEY');
      if (key && key.trim().length > 0) {
        setHasApiKey(true);
        return;
      }
      const status = await checkServerGeminiStatus();
      setHasApiKey(status.available || status.hasServerKey);
    };
    checkApiKeyStatus();

    // Register callback for when Gemini API handler needs a key
    registerKeyModalHandler(() => {
      return new Promise((resolve) => {
        setIsApiKeyModalOpen(true);
        const interval = setInterval(() => {
          const stored = localStorage.getItem('GEMINI_API_KEY');
          if (stored && stored.trim()) {
            clearInterval(interval);
            resolve(stored.trim());
          }
        }, 500);

        setTimeout(() => {
          clearInterval(interval);
          resolve(null);
        }, 30000);
      });
    });
  }, []);

  const handleKeySaved = (newKey: string) => {
    setHasApiKey(!!(newKey && newKey.trim().length > 0));
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200 overflow-x-hidden w-full ${
      theme === 'sepia'
        ? 'bg-[#fbf0d9] text-[#342410]'
        : theme === 'light'
        ? 'bg-[#f0f4fa] text-[#0a1636]'
        : 'bg-[#060b18] text-slate-100'
    }`}>
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        hasApiKey={hasApiKey}
      />

      {/* Main Container - Renders only the selected section, never simultaneously on the homepage */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-16">
        
        {/* HOMEPAGE: Landing Screen */}
        {activeTab === 'home' && (
          <div role="tabpanel" aria-label="Home">
            <HomePage 
              onSelectSection={(section) => setActiveTab(section)}
              onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
            />
          </div>
        )}

        {/* EXAM: Practice Exam Engine (Aptis 1h 50m / Core / Reading / Writing) */}
        {activeTab === 'exam' && (
          <div role="tabpanel" aria-label="Practice Exam">
            <PracticeExamEngine />
          </div>
        )}

        {/* WRITING: AI Writing Lab */}
        {activeTab === 'writing' && (
          <div role="tabpanel" aria-label="Writing Lab">
            <WritingLab onBackToMain={() => setActiveTab('home')} />
          </div>
        )}

        {/* BOOKS: Books & Revision Notes Library */}
        {activeTab === 'books' && (
          <div role="tabpanel" aria-label="Books and Notes">
            <BooksHub 
              onBackToMain={() => setActiveTab('home')} 
              onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)} 
            />
          </div>
        )}

        {/* AUDIO: Audio & Visual Listening Hub */}
        {activeTab === 'audio' && (
          <div role="tabpanel" aria-label="Audio Hub">
            <AudioHub 
              onBackToMain={() => setActiveTab('home')} 
              onOpenExam={() => setActiveTab('exam')} 
            />
          </div>
        )}

        {/* FLASHCARDS: 3D Vocabulary & Collocations */}
        {activeTab === 'flashcards' && (
          <div role="tabpanel" aria-label="Flashcards">
            <Dashboard
              viewMode="flashcards"
              onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
              onBackToMain={() => setActiveTab('home')}
              onStartExam={() => setActiveTab('exam')}
              isActive={activeTab === 'flashcards'}
            />
          </div>
        )}

        {/* STATS: Diagnostic Analytics & Student Score Records */}
        {activeTab === 'stats' && (
          <div role="tabpanel" aria-label="Stats">
            <Dashboard
              viewMode="stats"
              onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
              onBackToMain={() => setActiveTab('home')}
              onStartExam={() => setActiveTab('exam')}
              isActive={activeTab === 'stats'}
            />
          </div>
        )}
      </main>

      {/* Senior Developer Footer */}
      <Footer 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        hasApiKey={hasApiKey}
      />

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onSaved={handleKeySaved}
      />
    </div>
  );
}
