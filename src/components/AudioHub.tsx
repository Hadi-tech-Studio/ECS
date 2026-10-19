import React, { useState, useEffect } from 'react';
import { 
  Headphones, 
  Play, 
  Pause, 
  Square, 
  RotateCcw, 
  Volume2, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Video, 
  FileText, 
  ArrowLeft,
  BookOpen,
  Award,
  Zap,
  Info
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { callGeminiAPI } from '../lib/api-handler';

interface AudioHubProps {
  onBackToMain?: () => void;
  onOpenExam?: () => void;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const AUDIT_SCRIPT_TEXT = `Good morning, team. Today we are initiating the statutory audit for Prime Logistics. Before we execute substantive procedures, I want everyone to revisit our materiality threshold.

We have set planning materiality at 1.5% of gross revenue, which equates to forty-five million rupees. However, given recent turbulence in fuel hedging contracts, performance materiality is strictly capped at sixty percent of that figure.

Ayesha, ensure your team substantiates all lease liabilities and scrutinizes any related-party transactions thoroughly. Remember, documentation must be robust enough to withstand independent regulatory scrutiny by ICAP quality review boards.`;

const COMPREHENSION_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What percentage of gross revenue was designated for planning materiality?",
    options: ["0.5%", "1.5%", "5.0%", "10.0%"],
    correctIndex: 1,
    explanation: "The audit partner clearly states: 'We have set planning materiality at 1.5% of gross revenue, which equates to forty-five million rupees.'"
  },
  {
    id: 2,
    question: "Why is performance materiality strictly capped at sixty percent?",
    options: [
      "Due to bank overdraft constraints",
      "Because of recent turbulence in fuel hedging contracts",
      "Because of a recent change in external auditors",
      "Due to a shortage of junior audit staff"
    ],
    correctIndex: 1,
    explanation: "The briefing explicitly notes: 'given recent turbulence in fuel hedging contracts, performance materiality is strictly capped at sixty percent of that figure.'"
  },
  {
    id: 3,
    question: "Which areas did the partner instruct Ayesha's team to substantiate thoroughly?",
    options: [
      "Lease liabilities and related-party transactions",
      "Fixed asset depreciation schedules only",
      "Cash reconciliation and petty vouchers",
      "Trade receivable age analysis only"
    ],
    correctIndex: 0,
    explanation: "The partner ordered: 'Ayesha, ensure your team substantiates all lease liabilities and scrutinizes any related-party transactions thoroughly.'"
  }
];

export const AudioHub: React.FC<AudioHubProps> = ({ onBackToMain, onOpenExam }) => {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(0.75);
  const [showScript, setShowScript] = useState<boolean>(false);
  const [statusText, setStatusText] = useState<string>('Ready to play');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  
  const [aiRules, setAiRules] = useState<string[]>([
    '1. Subject-Verb Agreement: Inverted sentences beginning with "Under no circumstances" invert the auxiliary verb and subject.',
    '2. Modal Verbs: "Must substantiate" expresses high statutory audit obligation under ISA 500.',
    '3. Prepositions: Always say "comply with" regulations, "conform to" guidelines, and "adhere to" standards.',
    '4. Conditionals: "Should management fail to disclose..." uses subjunctive inversion in formal audit reporting.',
    '5. Passive Voice: "Materiality was established at..." is preferred in formal audit working papers.'
  ]);
  const [isGeneratingRules, setIsGeneratingRules] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayAudio = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setStatusText('Speech Synthesis not supported in this browser');
      return;
    }

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      setStatusText('Resumed playback');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(AUDIT_SCRIPT_TEXT);
    utterance.rate = playbackRate;
    utterance.lang = 'en-GB';

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setStatusText(`Playing (${playbackRate}x speed)...`);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setStatusText('Completed');
    };

    utterance.onerror = (e) => {
      setIsPlaying(false);
      setIsPaused(false);
      setStatusText('Audio stopped');
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePauseAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
      setStatusText('Paused');
    }
  };

  const handleStopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setStatusText('Stopped');
    }
  };

  const handleSpeedChange = (rate: number) => {
    setPlaybackRate(rate);
    if (isPlaying) {
      handleStopAudio();
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(AUDIT_SCRIPT_TEXT);
        utterance.rate = rate;
        utterance.lang = 'en-GB';
        utterance.onstart = () => {
          setIsPlaying(true);
          setStatusText(`Playing (${rate}x speed)...`);
        };
        utterance.onend = () => {
          setIsPlaying(false);
          setStatusText('Completed');
        };
        window.speechSynthesis.speak(utterance);
      }, 100);
    }
  };

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleGenerateAiRules = async () => {
    setIsGeneratingRules(true);
    try {
      const prompt = `You are a senior ICAP English Communication Skills (ECS) master teacher.
Generate exactly 5 concise, high-yield grammar and subject-verb agreement rules tailored for Pakistani CA students taking the ECS exam.
Return only a JSON array of 5 numbered strings.`;

      const fallback = [
        '1. Singular subjects with "along with" take singular verbs in formal corporate letters.',
        '2. In "Neither... nor", the verb agrees with the closest noun/subject.',
        '3. Collective nouns take singular verbs when acting together as a company body.',
        '4. "Each" and "Everyone" strictly require singular auxiliary verbs.',
        '5. Inverted conditional structures omit "if" and invert subject and auxiliary (e.g., "Should you require...").'
      ];

      const res = await callGeminiAPI(
        'You are an expert ICAP English tutor.',
        prompt,
        fallback
      );

      if (Array.isArray(res) && res.length > 0) {
        setAiRules(res.slice(0, 5));
      }
    } catch (e) {
      console.warn('AI Rules generation failed, keeping curated rules:', e);
    } finally {
      setIsGeneratingRules(false);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Back button & Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            {onBackToMain && (
              <button
                onClick={onBackToMain}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </button>
            )}
            <span className="text-slate-400 text-xs">•</span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
              theme === 'light'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            }`}>
              Audio & Visual Learning Hub
            </span>
          </div>
          <h1 className={`text-2xl sm:text-3xl font-display font-extrabold ${
            theme === 'light' ? 'text-[#0a1636]' : 'text-white'
          }`}>
            ICAP Listening Comprehension & Speech Lab
          </h1>
          <p className={`text-xs sm:text-sm mt-1 max-w-2xl ${
            theme === 'light' ? 'text-[#334e68]' : 'text-slate-300'
          }`}>
            Train your listening comprehension with local speech synthesis, slow playback (0.75x) for blind listening practice, interactive quizzes, and AI video rule summaries.
          </p>
        </div>

        {onOpenExam && (
          <button
            onClick={onOpenExam}
            className="self-start sm:self-auto px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 transition cursor-pointer"
          >
            Launch Practice Exam →
          </button>
        )}
      </div>

      {/* Main Listening Lab Card */}
      <div className={`rounded-3xl p-6 sm:p-8 border shadow-xl space-y-6 transition-all ${
        theme === 'sepia'
          ? 'bg-[#f4e4c1] border-[#dec596]'
          : theme === 'light'
          ? 'bg-white border-[#d4e1f2] shadow-blue-900/5'
          : 'bg-[#0b142d] border-[#182958]'
      }`}>
        
        {/* Scenario Header */}
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
          theme === 'light' ? 'border-[#e4edf8]' : 'border-[#182958]'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold border ${
                theme === 'light'
                  ? 'bg-blue-50 text-blue-800 border-blue-300'
                  : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
              }`}>
                Audit & Assurance Dialogue
              </span>
              <span className={`text-xs ${theme === 'light' ? 'text-[#486581]' : 'text-slate-400'}`}>
                Audio Dialogue Comprehension
              </span>
            </div>
            <h2 className={`text-lg sm:text-xl font-bold ${
              theme === 'light' ? 'text-[#0a1636]' : 'text-white'
            }`}>
              Audit Partner Briefing on Materiality & Risk
            </h2>
            <p className={`text-xs mt-0.5 ${theme === 'light' ? 'text-[#334e68]' : 'text-slate-300'}`}>
              Speakers: Mr. Salman (Engagement Partner) & Ayesha (Audit Senior)
            </p>
          </div>

          <button
            onClick={() => setShowScript(!showScript)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition cursor-pointer self-start sm:self-auto ${
              theme === 'light'
                ? 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200'
                : 'bg-[#132247] hover:bg-[#1b2f63] text-blue-300 border-[#233872]'
            }`}
          >
            {showScript ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showScript ? 'Hide Script (Blind Listening)' : 'Reveal Script & Vocabulary'}</span>
          </button>
        </div>

        {/* Audio Player Controls */}
        <div className={`p-4 sm:p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4 transition-all ${
          theme === 'light'
            ? 'bg-[#f4f8fd] border-[#d4e1f2]'
            : 'bg-[#070d1e] border-[#182958]'
        }`}>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePlayAudio}
              className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-lg transition cursor-pointer ${
                isPlaying 
                  ? 'bg-blue-600 ring-2 ring-blue-400' 
                  : 'bg-blue-600 hover:bg-blue-500'
              }`}
              title={isPlaying ? 'Playing' : 'Play Audio'}
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>

            <button
              onClick={handlePauseAudio}
              disabled={!isPlaying}
              className="w-11 h-11 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-500 border border-amber-500/30 disabled:opacity-40 flex items-center justify-center transition cursor-pointer"
              title="Pause Audio"
            >
              <Pause className="w-5 h-5 fill-current" />
            </button>

            <button
              onClick={handleStopAudio}
              className={`w-11 h-11 rounded-xl border flex items-center justify-center transition cursor-pointer ${
                theme === 'light'
                  ? 'bg-white hover:bg-slate-100 text-[#0a1636] border-[#d4e1f2]'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
              title="Stop Audio"
            >
              <Square className="w-4 h-4 fill-current" />
            </button>

            <div className="ml-2">
              <div className="flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-blue-600" />
                <span className={`text-xs font-mono font-semibold ${
                  theme === 'light' ? 'text-[#0a1636]' : 'text-slate-200'
                }`}>
                  {statusText}
                </span>
              </div>
              <p className={`text-[10px] ${theme === 'light' ? 'text-[#486581]' : 'text-slate-400'}`}>
                British English (en-GB)
              </p>
            </div>
          </div>

          {/* Speed Controls */}
          <div className={`flex items-center gap-1.5 p-1 rounded-xl border ${
            theme === 'light'
              ? 'bg-white border-[#d4e1f2]'
              : 'bg-[#0f1d3f] border-[#1e336d]'
          }`}>
            <span className={`px-2 font-bold uppercase text-[10px] ${
              theme === 'light' ? 'text-[#486581]' : 'text-slate-400'
            }`}>
              Speed:
            </span>
            <button
              onClick={() => handleSpeedChange(0.75)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                playbackRate === 0.75
                  ? 'bg-blue-600 text-white shadow-sm'
                  : theme === 'light'
                  ? 'text-[#1b2d56] hover:bg-blue-50'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              0.75x (Slow)
            </button>
            <button
              onClick={() => handleSpeedChange(1.0)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                playbackRate === 1.0
                  ? 'bg-blue-600 text-white shadow-sm'
                  : theme === 'light'
                  ? 'text-[#1b2d56] hover:bg-blue-50'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              1.0x (Normal)
            </button>
          </div>
        </div>

        {/* Script Area (Hidden by default for blind listening) */}
        {showScript && (
          <div className={`p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed whitespace-pre-line animate-in fade-in duration-200 ${
            theme === 'light'
              ? 'bg-[#f8faff] border-[#d4e1f2] text-[#0a1636]'
              : 'bg-[#070e22] border-[#1d3368] text-slate-200'
          }`}>
            <div className="flex items-center gap-1.5 mb-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Full Dialogue Transcript (with Accounting Lexicon)</span>
            </div>
            {AUDIT_SCRIPT_TEXT}
          </div>
        )}

        {/* Interactive Comprehension Quiz */}
        <div className={`pt-4 border-t space-y-4 ${
          theme === 'light' ? 'border-[#e4edf8]' : 'border-[#182958]'
        }`}>
          <div className="flex items-center justify-between">
            <h3 className={`font-display font-bold text-base flex items-center gap-2 ${
              theme === 'light' ? 'text-[#0a1636]' : 'text-white'
            }`}>
              <Award className="w-4 h-4 text-blue-600" />
              <span>Interactive Comprehension Quiz</span>
            </h3>
            <span className={`text-xs ${theme === 'light' ? 'text-[#486581]' : 'text-slate-400'}`}>
              3 Questions
            </span>
          </div>

          <div className="space-y-4">
            {COMPREHENSION_QUESTIONS.map((q) => {
              const selectedIdx = selectedAnswers[q.id];
              const isAnswered = typeof selectedIdx === 'number';
              const isCorrect = isAnswered && selectedIdx === q.correctIndex;

              return (
                <div 
                  key={q.id}
                  className={`p-4 sm:p-5 rounded-2xl border space-y-3 ${
                    theme === 'light'
                      ? 'bg-[#f4f8fd] border-[#d4e1f2]'
                      : 'bg-[#070e24] border-[#182958]'
                  }`}
                >
                  <p className={`font-semibold text-xs sm:text-sm ${
                    theme === 'light' ? 'text-[#0a1636]' : 'text-slate-100'
                  }`}>
                    {q.id}. {q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, optIdx) => {
                      let btnStyle = theme === 'light'
                        ? 'bg-white border-[#d4e1f2] text-[#0a1636] hover:bg-blue-50'
                        : 'bg-[#0f1d3f] border-[#1d3368] text-slate-200 hover:bg-[#152755]';
                        
                      if (isAnswered) {
                        if (optIdx === q.correctIndex) {
                          btnStyle = theme === 'light'
                            ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold'
                            : 'bg-blue-950/80 border-blue-500 text-blue-200 font-bold';
                        } else if (optIdx === selectedIdx) {
                          btnStyle = theme === 'light'
                            ? 'bg-rose-50 border-rose-400 text-rose-800 line-through'
                            : 'bg-rose-950/80 border-rose-500 text-rose-200 line-through';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isAnswered && optIdx === q.correctIndex && (
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 ml-2" />
                          )}
                          {isAnswered && optIdx === selectedIdx && optIdx !== q.correctIndex && (
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className={`p-3 rounded-xl border text-xs mt-2 ${
                      theme === 'light'
                        ? 'bg-blue-50 border-blue-200 text-blue-900'
                        : 'bg-blue-950/50 border-blue-800/60 text-blue-200'
                    }`}>
                      <strong className={theme === 'light' ? 'text-blue-700' : 'text-blue-300'}>
                        Explanation:{' '}
                      </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Video & AI Rules Section */}
      <div className={`rounded-3xl p-6 sm:p-8 border shadow-xl space-y-6 transition-all ${
        theme === 'sepia'
          ? 'bg-[#f4e4c1] border-[#dec596]'
          : theme === 'light'
          ? 'bg-white border-[#d4e1f2] shadow-blue-900/5'
          : 'bg-[#0b142d] border-[#182958]'
      }`}>
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
          theme === 'light' ? 'border-[#e4edf8]' : 'border-[#182958]'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold border ${
                theme === 'light'
                  ? 'bg-cyan-50 text-cyan-800 border-cyan-300'
                  : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
              }`}>
                Visual & Video Learning
              </span>
              <span className={`text-xs ${theme === 'light' ? 'text-[#486581]' : 'text-slate-400'}`}>
                English Grammar Masterclass
              </span>
            </div>
            <h2 className={`text-lg sm:text-xl font-bold ${
              theme === 'light' ? 'text-[#0a1636]' : 'text-white'
            }`}>
              ICAP English Video Lecture & Grammar Rules
            </h2>
          </div>

          <button
            onClick={handleGenerateAiRules}
            disabled={isGeneratingRules}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md transition cursor-pointer disabled:opacity-50 self-start sm:self-auto"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isGeneratingRules ? 'Generating...' : 'Refresh AI Rules'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-7 aspect-video rounded-2xl overflow-hidden border shadow-lg ${
            theme === 'light' ? 'bg-[#050a18] border-[#d4e1f2]' : 'bg-[#050a18] border-[#182958]'
          }`}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0"
              title="ICAP English Lecture"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className={`lg:col-span-5 p-5 rounded-2xl border space-y-3 text-xs ${
            theme === 'light'
              ? 'bg-[#f4f8fd] border-[#d4e1f2]'
              : 'bg-[#070e24] border-[#182958]'
          }`}>
            <div className={`flex items-center gap-2 pb-2 border-b ${
              theme === 'light' ? 'border-[#e4edf8]' : 'border-[#182958]'
            }`}>
              <Zap className="w-4 h-4 text-amber-500" />
              <strong className={`text-xs font-bold uppercase tracking-wider ${
                theme === 'light' ? 'text-[#0a1636]' : 'text-white'
              }`}>
                Subject-Verb Agreement Core Rules:
              </strong>
            </div>

            <div className="space-y-2.5">
              {aiRules.map((rule, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border leading-relaxed ${
                    theme === 'light'
                      ? 'bg-white border-[#d4e1f2] text-[#0a1636]'
                      : 'bg-[#0f1d3f] border-[#1d3368] text-slate-200'
                  }`}
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
