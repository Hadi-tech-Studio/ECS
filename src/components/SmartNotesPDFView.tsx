import React from 'react';
import { 
  CheckCircle2, 
  HelpCircle,
  Clock,
  Sparkles,
  Info,
  BookOpen,
  ArrowRight,
  ListOrdered,
  FileText,
  Mail,
  Lightbulb
} from 'lucide-react';
import { BookChapter } from '../types';

interface SmartNotesProps {
  chapter: BookChapter;
  theme: 'slate' | 'sepia' | 'light' | 'midnight';
}

export const SmartNotesPDFView: React.FC<SmartNotesProps> = ({ chapter, theme }) => {
  const isLight = theme === 'light' || theme === 'sepia';
  const isSepia = theme === 'sepia';

  const cardBg = isSepia 
    ? 'bg-[#f7ebd0] border-[#dec596]' 
    : theme === 'light' 
    ? 'bg-white border-slate-200' 
    : theme === 'midnight' 
    ? 'bg-zinc-900/90 border-zinc-800' 
    : 'bg-slate-900/90 border-slate-800';

  const tableHeaderBg = isSepia
    ? 'bg-[#1e3a5f] text-white'
    : 'bg-[#14284b] text-white';

  const tableAltRowBg = isSepia
    ? 'bg-[#f0dfba]/50'
    : isLight
    ? 'bg-slate-50'
    : 'bg-slate-950/40';

  const boxBg = isSepia
    ? 'bg-[#eef2f7] border-[#2b4c6f]/30 text-[#1e293b]'
    : isLight
    ? 'bg-[#f0f6ff] border-blue-200 text-slate-800'
    : 'bg-blue-950/25 border-blue-500/30 text-blue-100';

  const innerCardBg = isSepia
    ? 'bg-white/80 border-[#dec596]'
    : isLight
    ? 'bg-white border-slate-200'
    : 'bg-slate-850/90 border-slate-800';

  // PDF Page Header banner helper
  const renderPageHeader = (pageNumber: number, title: string = 'ENGLISH COMMUNICATION SKILLS', subtitle: string = 'ECS / HOC • Complete Study Guide') => (
    <div className="flex items-center justify-between pb-3 mb-6 border-b border-inherit text-xs opacity-75 font-semibold select-none">
      <span className="flex items-center gap-2">
        <span className="font-extrabold uppercase tracking-wider text-blue-500">{title}</span>
        <span>•</span>
        <span className="text-inherit opacity-90">{subtitle}</span>
      </span>
      <span className="font-mono bg-black/10 px-2.5 py-0.5 rounded text-[11px] font-bold">
        Page {pageNumber} of 28
      </span>
    </div>
  );

  return (
    <div className="space-y-10 select-text font-sans">

      {/* =========================================================================
          CHAPTER 1: EXAM PATTERN (Pages 1 - 5)
          ========================================================================= */}
      {chapter.number === 1 && (
        <div className="space-y-8">
          
          {/* Header Cover Banner */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(3)}
            
            <div className="p-6 rounded-2xl bg-[#0d2240] text-white space-y-3 shadow-lg border border-blue-600/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                  ECS / HOC • COMPLETE STUDY GUIDE
                </span>
                <span className="text-xs text-blue-200 font-mono">1 hour 50 minutes</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
                1. Exam Pattern
              </h1>
              <p className="text-xs sm:text-sm text-blue-200 font-medium">
                ECS / HOC Exam – Complete Explanation (Paper Pattern)
              </p>
            </div>

            {/* Exam Format Box */}
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">Exam Format</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm opacity-90 leading-relaxed list-disc list-inside">
                <li>Exam mein mainly <strong>3 sections</strong> hote hain: <strong>Grammar & Vocabulary</strong>, <strong>Reading</strong>, aur <strong>Writing</strong>.</li>
                <li><strong>Total Exam Time:</strong> 1 hour 50 minutes.</li>
                <li>Exam mein approximately <strong>50 questions</strong> Grammar & Vocabulary se related hote hain.</li>
                <li>Baqi questions <strong>Reading</strong> aur <strong>Writing</strong> ko assess karte hain.</li>
              </ul>

              {/* Exam Format Timing Table */}
              <div className="overflow-x-auto rounded-xl border border-inherit mt-4">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className={tableHeaderBg}>
                      <th className="p-3 font-bold w-1/4">Part</th>
                      <th className="p-3 font-bold">Section</th>
                      <th className="p-3 font-bold text-center w-36">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-inherit">
                    <tr className="hover:bg-black/5">
                      <td className="p-3 font-bold text-blue-500">Part 1</td>
                      <td className="p-3 font-medium">Grammar & Vocabulary</td>
                      <td className="p-3 text-center font-mono">25 minutes</td>
                    </tr>
                    <tr className={tableAltRowBg}>
                      <td className="p-3 font-bold text-blue-500">Part 2</td>
                      <td className="p-3 font-medium">Reading</td>
                      <td className="p-3 text-center font-mono">35 minutes</td>
                    </tr>
                    <tr className="hover:bg-black/5">
                      <td className="p-3 font-bold text-blue-500">Part 3</td>
                      <td className="p-3 font-medium">Writing</td>
                      <td className="p-3 text-center font-mono">50 minutes</td>
                    </tr>
                    <tr className={`${tableAltRowBg} font-bold border-t-2 border-inherit`}>
                      <td className="p-3 text-cyan-400">Total</td>
                      <td className="p-3">All sections</td>
                      <td className="p-3 text-center font-mono text-cyan-400">1 hour 50 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Part 1: Grammar & Vocabulary Section */}
            <div className="space-y-4 pt-4 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-base sm:text-lg font-bold text-blue-500">
                  Part 1 – Grammar & Vocabulary | 25 Minutes
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-5 rounded-2xl border ${boxBg} space-y-3`}>
                  <h4 className="font-bold text-sm text-blue-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Grammar (25 Questions)
                  </h4>
                  <p className="text-xs leading-relaxed opacity-90">
                    Grammar mein different levels test kiye jate hain. Total <strong>25 questions</strong> hotay hain:
                  </p>
                  <ul className="text-xs space-y-1 font-mono list-disc list-inside opacity-90 pl-1">
                    <li>A1–A2</li>
                    <li>B1–B2</li>
                    <li>C1</li>
                  </ul>
                  <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-500/30 text-[11px] leading-relaxed">
                    <strong className="text-cyan-400 block mb-1 uppercase tracking-wider font-mono">IMPORTANT:</strong>
                    Majority MCQs A1–A2 aur B1–B2 levels se hote hain. C1 level se normally sirf 2–3 MCQs hote hain. C1 questions comparatively thora difficult hote hain. Overall grammar ka kaafi portion woh hota hai jo aap FSC level par already study kar chuke hote hain.
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${boxBg} space-y-3`}>
                  <h4 className="font-bold text-sm text-blue-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Vocabulary (25 Questions)
                  </h4>
                  <p className="text-xs leading-relaxed opacity-90">
                    Vocabulary mein different types ke questions aa sakte hain. Total <strong>25 questions</strong> hotay hain:
                  </p>
                  <ul className="text-xs space-y-1 font-medium list-disc list-inside opacity-90 pl-1">
                    <li>Word Matching</li>
                    <li>Word Definition</li>
                    <li>Word Usage</li>
                    <li>Word Pairs / Combinations</li>
                  </ul>
                  <div className="p-3 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[11px] text-amber-200 leading-relaxed">
                    Is liye vocabulary mein sirf words ke meanings nahi, balkay unka <strong>correct usage aur combination</strong> bhi prepare karna important hai.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Part 2: Reading Breakdown (Page 4 in PDF) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(4)}

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">
                  Part 2 – Reading | 35 Minutes (4 Parts)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Part 1 */}
                <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                  <div className="flex items-center gap-2 font-bold text-sm text-blue-400">
                    <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-xs font-mono">1</span>
                    Sentence Comprehension
                  </div>
                  <ul className="text-xs space-y-1 opacity-90 leading-relaxed list-disc list-inside">
                    <li>Aapko 5 sentences diye jayenge.</li>
                    <li>Har sentence mein ek word missing hoga.</li>
                    <li>Aapko 3 options mein se appropriate word select karna hoga.</li>
                  </ul>
                  <p className="text-[11px] text-cyan-300 italic pt-1">
                    Is mein sentence ka meaning aur context samajhna important hai.
                  </p>
                </div>

                {/* Part 2 */}
                <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                  <div className="flex items-center gap-2 font-bold text-sm text-blue-400">
                    <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-xs font-mono">2</span>
                    Text Cohesion
                  </div>
                  <ul className="text-xs space-y-1 opacity-90 leading-relaxed list-disc list-inside">
                    <li>Is part mein 2 questions honge.</li>
                    <li>Har question mein 6 sentences hongi.</li>
                    <li>Sentences wrong order mein di jayengi.</li>
                    <li>First sentence already identify ki hui hogi.</li>
                    <li>Aapko baqi sentences ko correct sequence mein arrange karna hoga.</li>
                    <li>Is ka sirf ek correct solution hoga.</li>
                  </ul>
                  <p className="text-[11px] text-cyan-300 italic pt-1">
                    Yahan sentence ke beech logical connection aur sequence samajhna important hai.
                  </p>
                </div>

                {/* Part 3 */}
                <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                  <div className="flex items-center gap-2 font-bold text-sm text-blue-400">
                    <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-xs font-mono">3</span>
                    Opinion Matching
                  </div>
                  <ul className="text-xs space-y-1 opacity-90 leading-relaxed list-disc list-inside">
                    <li>Is mein 4 short paragraphs honge.</li>
                    <li>Har paragraph different person ki opinion represent karega.</li>
                    <li>Saath mein 7 statements di jayengi.</li>
                    <li>Aapko determine karna hoga ke kaunsi statement kis person's opinion se match karti hai.</li>
                  </ul>
                  <p className="text-[11px] text-cyan-300 italic pt-1">
                    Is ke liye paragraphs ko carefully read karna zaroori hai.
                  </p>
                </div>

                {/* Part 4 */}
                <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                  <div className="flex items-center gap-2 font-bold text-sm text-blue-400">
                    <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-xs font-mono">4</span>
                    Long Text Comprehension
                  </div>
                  <ul className="text-xs space-y-1 opacity-90 leading-relaxed list-disc list-inside">
                    <li>Is section mein 7 paragraphs honge.</li>
                    <li>Sab paragraphs same topic se related honge.</li>
                    <li>Saath mein 8 headings di jayengi.</li>
                    <li>1 heading extra hogi jo kisi paragraph ke liye suitable nahi hogi.</li>
                    <li>Aapko har paragraph ke liye appropriate heading select karni hogi.</li>
                  </ul>
                  <p className="text-[11px] text-cyan-300 italic pt-1">
                    Is mein main idea of each paragraph identify karna sab se important hai.
                  </p>
                </div>
              </div>
            </div>

            {/* Part 3: Writing Breakdown */}
            <div className="space-y-4 pt-4 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">
                  Part 3 – Writing | 50 Minutes
                </h3>
              </div>
              <p className="text-xs sm:text-sm opacity-90">
                Writing section mein 4 parts include hote hain:
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30 font-semibold">1. Word Level Writing</span>
                <span className="px-3 py-1 rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30 font-semibold">2. Short Text Writing</span>
                <span className="px-3 py-1 rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30 font-semibold">3. Three Written Responses</span>
                <span className="px-3 py-1 rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30 font-semibold">4. Formal & Informal Writing</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-blue-400">1. Formal Email</h4>
                  <ul className="text-xs space-y-1 opacity-90 list-disc list-inside leading-relaxed">
                    <li><strong>Word limit:</strong> 120–150 words.</li>
                    <li>Koshish karein ke word limit ke andar hi writing complete ho.</li>
                    <li>Aapka main concern/message clearly communicate hona chahiye.</li>
                    <li>Formal email mein <strong>contractions use nahi karni chahiye</strong>.</li>
                  </ul>
                  <p className="text-[11px] text-slate-300 italic pt-1">
                    Formal email ka tone professional aur clear hona chahiye.
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-blue-400">2. Informal Email</h4>
                  <ul className="text-xs space-y-1 opacity-90 list-disc list-inside leading-relaxed">
                    <li><strong>Word limit:</strong> 40–50 words.</li>
                    <li>Is mein bhi word limit exceed nahi karni.</li>
                    <li>Writing ko short, clear aur relevant rakhein.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exam Format – Writing Section Table (Page 5 in PDF) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(5)}

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">
                  Exam Format – Writing Section (Pattern)
                </h3>
              </div>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                The Writing section lasts approximately <strong>50 minutes</strong>. It includes four task types. The first three require short, clear responses; the final task involves formal and informal emails.
              </p>

              <div className="overflow-x-auto rounded-xl border border-inherit">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className={tableHeaderBg}>
                      <th className="p-3 font-bold w-1/4">Task</th>
                      <th className="p-3 font-bold">What you do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-inherit">
                    <tr className="hover:bg-black/5">
                      <td className="p-3 font-bold text-blue-400">1. Word Level Writing</td>
                      <td className="p-3 leading-relaxed">Aap club, course ya activity ke members ke 5 messages ka mukhtasar jawab dete hain. Har jawab seedha message ka jawab dena chahiye. Is kaam mein lambe paragraphs ki zaroorat nahi hoti.</td>
                    </tr>
                    <tr className={tableAltRowBg}>
                      <td className="p-3 font-bold text-blue-400">2. Short Text Writing</td>
                      <td className="p-3 leading-relaxed">Aap kisi di gayi situation ke liye taqreeban 20–30 lafzon ka ek chhota text likhte hain. Apna jawab relevant rakhein aur sahi grammar, spelling aur punctuation istemal karein.</td>
                    </tr>
                    <tr className="hover:bg-black/5">
                      <td className="p-3 font-bold text-blue-400">3. Three Written Responses to Questions</td>
                      <td className="p-3 leading-relaxed">Aap 3 alag alag sawal ka jawab dete hain, aksar online ya social-network ke context mein. Har sawal ka saaf jawab dein aur topic par qayam rahein.</td>
                    </tr>
                    <tr className={tableAltRowBg}>
                      <td className="p-3 font-bold text-blue-400">4. Formal & Informal Writing</td>
                      <td className="p-3 leading-relaxed">You write emails using the appropriate tone. A formal email is polite and professional; an informal email is friendly and conversational. Follow the word limit stated in the task.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl border-l-4 border-l-blue-500 bg-blue-950/20 text-xs text-blue-200">
                <strong>Remember:</strong> Read each prompt carefully, answer what is asked, and check grammar, spelling, and punctuation.
              </div>
            </div>
          </section>

        </div>
      )}

      {/* =========================================================================
          CHAPTER 2: GRAMMAR (Pages 6 - 11)
          ========================================================================= */}
      {chapter.number === 2 && (
        <div className="space-y-8">
          
          {/* Header Cover Banner */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(6)}
            
            <div className="p-6 rounded-2xl bg-[#0d2240] text-white space-y-3 shadow-lg border border-blue-600/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                  SECTION 2 • 10 TOPICS
                </span>
                <span className="text-xs text-blue-200">Theory + Solved MCQs</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
                2. Grammar
              </h1>
              <p className="text-xs sm:text-sm text-blue-200 font-medium">
                Theory notes with easy explanations, examples and practice MCQs
              </p>
            </div>

            <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
              Grammar helps us make clear and correct sentences. Each topic includes an easy explanation, examples, and short practice questions.
            </p>

            {/* 1. Prepositions */}
            <div className="space-y-4 pt-4 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">1. Prepositions</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  A preposition shows the relationship between a noun or pronoun and another word. It often tells us about place, time, direction, or position.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>The book is <strong>on</strong> the table.</li>
                    <li>We meet <strong>at</strong> 9 a.m.</li>
                    <li>She walked <strong>into</strong> the room.</li>
                  </ul>
                </div>
              </div>

              {/* MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. The class starts ___ 9 a.m.</p>
                  <div className="flex gap-4 font-mono">
                    <span>A. in</span>
                    <span>B. at</span>
                    <span>C. on</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Use <em>at</em> for a specific time.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. The cat is hiding ___ the bed.</p>
                  <div className="flex gap-4 font-mono">
                    <span>A. under</span>
                    <span>B. during</span>
                    <span>C. towards</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> <em>Under</em> shows position.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. He lives ___ Karachi.</p>
                  <div className="flex gap-4 font-mono">
                    <span>A. at</span>
                    <span>B. in</span>
                    <span>C. on</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Use <em>in</em> with a city.
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Adverbs */}
            <div className="space-y-4 pt-6 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">2. Adverbs</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  An adverb gives more information about a verb, adjective, or another adverb. It may tell us how, when, where, or how often something happens.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>She speaks <strong>clearly</strong>.</li>
                    <li>He arrived <strong>yesterday</strong>.</li>
                    <li>The children played <strong>outside</strong>.</li>
                  </ul>
                </div>
              </div>

              {/* MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. She completed the work ___.</p>
                  <div className="flex gap-4 font-mono">
                    <span>A. careful</span>
                    <span>B. carefully</span>
                    <span>C. care</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> <em>Carefully</em> describes how she worked.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. We will leave ___.</p>
                  <div className="flex gap-4 font-mono">
                    <span>A. soon</span>
                    <span>B. soft</span>
                    <span>C. slow</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> <em>Soon</em> tells us when.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. He ___ visits his grandparents.</p>
                  <div className="flex gap-4 font-mono">
                    <span>A. regular</span>
                    <span>B. regularly</span>
                    <span>C. regularity</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> <em>Regularly</em> tells us how often.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Tenses & 4. Modal Verbs & 5. Conditionals (Pages 7 & 8) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(7)}

            {/* 3. Tenses */}
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">3. Tenses</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Tense shows when an action happens: in the present, past, or future. A tense may describe a regular action, an action in progress, or a completed action.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li><strong>Present:</strong> I study every day.</li>
                    <li><strong>Past:</strong> I studied yesterday.</li>
                    <li><strong>Future:</strong> I will study tomorrow.</li>
                    <li><strong>Present continuous:</strong> She is reading now.</li>
                  </ul>
                </div>
              </div>

              {/* Tenses MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. Ali ___ to college every day.</p>
                  <div className="flex gap-4 font-mono"><span>A. go</span><span>B. goes</span><span>C. went</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Present simple: use <em>goes</em> with he/she/it.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. They ___ a film last night.</p>
                  <div className="flex gap-4 font-mono"><span>A. watch</span><span>B. watched</span><span>C. will watch</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> <em>Last night</em> signals the past.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. I ___ you tomorrow.</p>
                  <div className="flex gap-4 font-mono"><span>A. called</span><span>B. call yesterday</span><span>C. will call</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: C.</strong> <em>Tomorrow</em> signals the future.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">4. She ___ dinner right now.</p>
                  <div className="flex gap-4 font-mono"><span>A. cooks</span><span>B. cooked</span><span>C. is cooking</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: C.</strong> Use present continuous for an action happening now.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">5. We have ___ our homework.</p>
                  <div className="flex gap-4 font-mono"><span>A. finish</span><span>B. finished</span><span>C. finishing</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Present perfect uses <em>have/has + past participle</em>.
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Modal Verbs */}
            <div className="space-y-4 pt-6 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">4. Modal Verbs</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Modal verbs are helping verbs that express ability, permission, possibility, advice, or necessity. Common modals include <em>can, could, may, might, must, should,</em> and <em>would</em>.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>I <strong>can</strong> swim.</li>
                    <li>You <strong>should</strong> rest.</li>
                    <li><strong>May</strong> I come in?</li>
                  </ul>
                </div>
              </div>

              {/* Modals MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. You ___ wear a seat belt. It is necessary.</p>
                  <div className="flex gap-4 font-mono"><span>A. might</span><span>B. must</span><span>C. would</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> <em>Must</em> expresses necessity.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. ___ I borrow your pen, please?</p>
                  <div className="flex gap-4 font-mono"><span>A. May</span><span>B. Must</span><span>C. Should</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> <em>May</em> can ask permission.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. You look tired. You ___ take a break.</p>
                  <div className="flex gap-4 font-mono"><span>A. should</span><span>B. can’t</span><span>C. mustn’t</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> <em>Should</em> gives advice.
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Conditionals */}
            <div className="space-y-4 pt-6 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">5. Conditionals</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Conditional sentences connect a condition with a result. <strong>First conditional:</strong> a real future possibility. <strong>Second conditional:</strong> an unreal or unlikely situation. <strong>Third conditional:</strong> an imagined past situation.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li><strong>First:</strong> If it rains, we will stay home.</li>
                    <li><strong>Second:</strong> If I had time, I would travel.</li>
                    <li><strong>Third:</strong> If she had studied, she would have passed.</li>
                  </ul>
                </div>
              </div>

              {/* Conditionals MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. If you study, you ___ the test.</p>
                  <div className="flex gap-4 font-mono"><span>A. will pass</span><span>B. would have passed</span><span>C. passed</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> First conditional: <em>if + present, will + verb</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. If I ___ rich, I would help others.</p>
                  <div className="flex gap-4 font-mono"><span>A. am</span><span>B. were</span><span>C. will be</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Second conditional commonly uses <em>were</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. If he had left earlier, he ___ the bus.</p>
                  <div className="flex gap-4 font-mono"><span>A. would catch</span><span>B. will catch</span><span>C. would have caught</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: C.</strong> Third conditional uses <em>would have + past participle</em>.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Connectors & 7. Comparatives & 8. Gerunds (Pages 9 & 10) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(9)}

            {/* 6. Connectors */}
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">6. Connectors</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Connectors join words, phrases, or sentences. They show addition, contrast, reason, result, or sequence.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>I was tired, <strong>but</strong> I finished my work.</li>
                    <li><strong>Because</strong> it rained, we stayed inside.</li>
                    <li>She studied; <strong>therefore</strong>, she passed.</li>
                  </ul>
                </div>
              </div>

              {/* Connectors MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. I wanted to go, ___ I was ill.</p>
                  <div className="flex gap-4 font-mono"><span>A. because</span><span>B. but</span><span>C. therefore</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> <em>But</em> shows contrast.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. It rained; ___, the match was cancelled.</p>
                  <div className="flex gap-4 font-mono"><span>A. therefore</span><span>B. although</span><span>C. meanwhile</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> <em>Therefore</em> shows a result.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. She stayed home ___ she was unwell.</p>
                  <div className="flex gap-4 font-mono"><span>A. because</span><span>B. however</span><span>C. or</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> <em>Because</em> gives a reason.
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Comparatives */}
            <div className="space-y-4 pt-6 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">7. Comparatives</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  A comparative compares two people, places, or things. Short adjectives often take <em>-er</em>; longer adjectives often use <em>more</em>. Some forms are irregular, such as <em>good → better</em>.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>A train is <strong>faster</strong> than a bus.</li>
                    <li>This book is <strong>more interesting</strong> than that one.</li>
                    <li>Today is <strong>better</strong> than yesterday.</li>
                  </ul>
                </div>
              </div>

              {/* Comparatives MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. My bag is ___ than yours.</p>
                  <div className="flex gap-4 font-mono"><span>A. heavy</span><span>B. heavier</span><span>C. heaviest</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Use <em>heavier</em> to compare two bags.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. This task is ___ difficult than the last one.</p>
                  <div className="flex gap-4 font-mono"><span>A. more</span><span>B. most</span><span>C. much</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> Use <em>more</em> with many longer adjectives.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. Sara is ___ at maths than Ali.</p>
                  <div className="flex gap-4 font-mono"><span>A. good</span><span>B. better</span><span>C. best</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> The comparative of <em>good</em> is <em>better</em>.
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Gerunds and Infinitives */}
            <div className="space-y-4 pt-6 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">8. Gerunds and Infinitives</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  A gerund is an <em>-ing</em> verb form used like a noun. An infinitive is usually <em>to + base verb</em>. Some verbs are followed by gerunds and others by infinitives.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li><strong>Swimming</strong> is good exercise.</li>
                    <li>I enjoy <strong>reading</strong>.</li>
                    <li>She wants <strong>to learn</strong> English.</li>
                  </ul>
                </div>
              </div>

              {/* Gerunds MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. I enjoy ___ novels.</p>
                  <div className="flex gap-4 font-mono"><span>A. to read</span><span>B. reading</span><span>C. read</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> <em>Enjoy</em> is followed by a gerund.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. He hopes ___ a doctor.</p>
                  <div className="flex gap-4 font-mono"><span>A. becoming</span><span>B. become</span><span>C. to become</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: C.</strong> <em>Hope</em> is followed by an infinitive.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. ___ every day improves your English.</p>
                  <div className="flex gap-4 font-mono"><span>A. Practise</span><span>B. Practising</span><span>C. To practising</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> A gerund can be the subject.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. Active and Passive Voice & 10. Auxiliary Verbs (Pages 10 & 11) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(11)}

            {/* 9. Active and Passive Voice */}
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">9. Active and Passive Voice</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  In active voice, the subject performs the action. In passive voice, the subject receives the action. Passive forms use a form of <em>be + past participle</em>.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li><strong>Active:</strong> The chef cooked the meal.</li>
                    <li><strong>Passive:</strong> The meal was cooked by the chef.</li>
                    <li><strong>Active:</strong> They clean the room. <strong>Passive:</strong> The room is cleaned.</li>
                  </ul>
                </div>
              </div>

              {/* Passive MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. Passive of "She wrote the letter":</p>
                  <div className="flex flex-col sm:flex-row gap-2 font-mono text-[11px]">
                    <span>A. The letter wrote her.</span>
                    <span>B. The letter was written by her.</span>
                    <span>C. The letter is writing.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Past simple passive = <em>was/were + past participle</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. Active of "The window was broken by Tom":</p>
                  <div className="flex flex-col sm:flex-row gap-2 font-mono text-[11px]">
                    <span>A. Tom broke the window.</span>
                    <span>B. Tom was broken by the window.</span>
                    <span>C. The window broke Tom.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> The active subject performs the action.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. English ___ in many countries.</p>
                  <div className="flex gap-4 font-mono"><span>A. speaks</span><span>B. is spoken</span><span>C. is speaking</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Present simple passive = <em>is/are + past participle</em>.
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Auxiliary Verbs */}
            <div className="space-y-4 pt-6 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">10. Auxiliary Verbs</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Auxiliary verbs are helping verbs used to make questions, negatives, tenses, and passive forms. Common auxiliaries are <em>be, do,</em> and <em>have</em>.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>She <strong>is</strong> studying.</li>
                    <li><strong>Do</strong> you like tea?</li>
                    <li>They <strong>have</strong> finished.</li>
                  </ul>
                </div>
              </div>

              {/* Auxiliaries MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. ___ you understand the question?</p>
                  <div className="flex gap-4 font-mono"><span>A. Do</span><span>B. Are</span><span>C. Have</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> Use <em>do</em> with the present simple verb <em>understand</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. They ___ been waiting for an hour.</p>
                  <div className="flex gap-4 font-mono"><span>A. has</span><span>B. have</span><span>C. is</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Use <em>have</em> with <em>they</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. She ___ not like coffee.</p>
                  <div className="flex gap-4 font-mono"><span>A. do</span><span>B. does</span><span>C. has</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Use <em>does</em> with <em>she/he/it</em>.
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      )}

      {/* =========================================================================
          CHAPTER 3: VOCABULARY (Pages 12 - 14)
          ========================================================================= */}
      {chapter.number === 3 && (
        <div className="space-y-8">
          
          {/* Header Cover Banner */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(12)}
            
            <div className="p-6 rounded-2xl bg-[#0d2240] text-white space-y-3 shadow-lg border border-blue-600/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                  SECTION 3 • 4 QUESTION TYPES
                </span>
                <span className="text-xs text-blue-200">Definitions • Usage • Collocations • Synonyms</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
                3. Vocabulary
              </h1>
              <p className="text-xs sm:text-sm text-blue-200 font-medium">
                Word meanings, usage, combinations and synonyms
              </p>
            </div>

            <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
              Vocabulary questions check word meanings and whether words are used and combined correctly.
            </p>

            {/* 1. Word Definitions */}
            <div className="space-y-4 pt-4 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">1. Word Definitions</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  You are given a definition and must choose the word that matches it. Focus on the main meaning of the definition.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>A person who buys goods or services is a <strong>customer</strong>.</li>
                    <li>A person who teaches students is a <strong>teacher</strong>.</li>
                  </ul>
                </div>
              </div>

              {/* MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. A person who teaches students is a ___.</p>
                  <div className="flex gap-4 font-mono"><span>A. doctor</span><span>B. teacher</span><span>C. driver</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> A teacher teaches students.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. Something very important is ___.</p>
                  <div className="flex gap-4 font-mono"><span>A. essential</span><span>B. ordinary</span><span>C. distant</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> <em>Essential</em> means very important.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. To make something better is to ___.</p>
                  <div className="flex gap-4 font-mono"><span>A. improve</span><span>B. ignore</span><span>C. remove</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> <em>Improve</em> means make better.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">4. A place where books can be borrowed is a ___.</p>
                  <div className="flex gap-4 font-mono"><span>A. library</span><span>B. factory</span><span>C. stadium</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> A library holds books for reading or borrowing.
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Word Usage (Page 13) */}
            <div className="space-y-4 pt-6 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">2. Word Usage</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Choose the word that fits the meaning and grammar of the sentence. Read the entire sentence and use the surrounding words as clues.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>Please <strong>make</strong> a decision.</li>
                    <li>She gave me useful <strong>advice</strong>.</li>
                  </ul>
                </div>
              </div>

              {/* Word Usage MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. The manager will ___ a meeting tomorrow.</p>
                  <div className="flex gap-4 font-mono"><span>A. do</span><span>B. hold</span><span>C. take</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> The common phrase is <em>hold a meeting</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. Please ___ attention to the instructions.</p>
                  <div className="flex gap-4 font-mono"><span>A. pay</span><span>B. give</span><span>C. make</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> The phrase is <em>pay attention</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. He is interested ___ learning English.</p>
                  <div className="flex gap-4 font-mono"><span>A. on</span><span>B. in</span><span>C. at</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> The phrase is <em>interested in</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">4. The medicine had a positive ___ on her health.</p>
                  <div className="flex gap-4 font-mono"><span>A. affect</span><span>B. effect</span><span>C. effort</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Here, <em>effect</em> is a noun meaning result.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Collocations & 4. Synonyms (Pages 13 & 14) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(14)}

            {/* 3. Word Combination (Collocations) */}
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">3. Word Combination (Collocations)</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  A word combination (collocation) is a pair or group of words that commonly go together in English.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <p className="text-xs font-semibold text-blue-300">
                    make a decision, heavy rain, strong coffee, take responsibility.
                  </p>
                </div>
              </div>

              {/* Collocations MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. Choose the correct combination.</p>
                  <div className="flex flex-col sm:flex-row gap-2 font-mono text-[11px]">
                    <span>A. do a decision</span>
                    <span>B. make a decision</span>
                    <span>C. build a decision</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> We say <em>make a decision</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. Choose the correct combination.</p>
                  <div className="flex flex-col sm:flex-row gap-2 font-mono text-[11px]">
                    <span>A. heavy rain</span>
                    <span>B. strong rain</span>
                    <span>C. hard rainly</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> We say <em>heavy rain</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. Choose the correct combination.</p>
                  <div className="flex flex-col sm:flex-row gap-2 font-mono text-[11px]">
                    <span>A. pay attention</span>
                    <span>B. make attention</span>
                    <span>C. do attention</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> We say <em>pay attention</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">4. Choose the correct combination.</p>
                  <div className="flex flex-col sm:flex-row gap-2 font-mono text-[11px]">
                    <span>A. strong coffee</span>
                    <span>B. hard coffee</span>
                    <span>C. power coffeeing</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> We say <em>strong coffee</em>.
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Word Making (Synonyms) */}
            <div className="space-y-4 pt-6 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">4. Word Making (Synonyms)</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  A synonym is a word with the same or a similar meaning. Choose the word closest in meaning to the given word.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <p className="text-xs font-semibold text-blue-300">
                    Quick → fast; begin → start; silent → quiet.
                  </p>
                </div>
              </div>

              {/* Synonyms MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. Choose the synonym of "assist".</p>
                  <div className="flex gap-4 font-mono"><span>A. help</span><span>B. hide</span><span>C. hurt</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> <em>Assist</em> means help.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. Choose the synonym of "rapid".</p>
                  <div className="flex gap-4 font-mono"><span>A. slow</span><span>B. quick</span><span>C. late</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> <em>Rapid</em> means quick.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. Choose the synonym of "accurate".</p>
                  <div className="flex gap-4 font-mono"><span>A. correct</span><span>B. careless</span><span>C. weak</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> <em>Accurate</em> means correct.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">4. Choose the synonym of "purchase".</p>
                  <div className="flex gap-4 font-mono"><span>A. sell</span><span>B. buy</span><span>C. borrow</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> <em>Purchase</em> means buy.
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      )}

      {/* =========================================================================
          CHAPTER 4: READING (Pages 15 - 22)
          ========================================================================= */}
      {chapter.number === 4 && (
        <div className="space-y-8">
          
          {/* Header Cover Banner */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(15)}
            
            <div className="p-6 rounded-2xl bg-[#0d2240] text-white space-y-3 shadow-lg border border-blue-600/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                  SECTION 4 • 4 READING TASKS
                </span>
                <span className="text-xs text-blue-200">35 Minutes</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
                4. Reading
              </h1>
              <p className="text-xs sm:text-sm text-blue-200 font-medium">
                Sentence Comprehension • Text Cohesion • Opinion Matching • Long Text
              </p>
            </div>

            {/* Part 1 – Sentence Comprehension / Sentence Completion */}
            <div className="space-y-4 pt-4 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">
                  Part 1 – Sentence Comprehension / Sentence Completion
                </h3>
              </div>

              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  A sentence contains a missing word or blank. Choose the word that completes the sentence correctly in meaning and grammar. Read the full sentence before choosing.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">Examples:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>She was tired, <strong>so</strong> she went to bed early.</li>
                    <li>Please switch off the lights <strong>before</strong> you leave.</li>
                    <li>He studied hard <strong>and</strong> passed the exam.</li>
                  </ul>
                </div>
              </div>

              {/* MCQs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice MCQs</h4>
                
                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">1. The weather was cold, ___ we wore warm coats.</p>
                  <div className="flex gap-4 font-mono"><span>A. because</span><span>B. so</span><span>C. although</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> <em>So</em> introduces the result.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">2. Could you ___ me your notebook for a day?</p>
                  <div className="flex gap-4 font-mono"><span>A. lend</span><span>B. borrow</span><span>C. owe</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> You <em>lend</em> something to another person.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">3. The train arrived ___ than we expected.</p>
                  <div className="flex gap-4 font-mono"><span>A. early</span><span>B. earlier</span><span>C. earliest</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> Use a comparative with <em>than</em>.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">4. She has lived here ___ 2020.</p>
                  <div className="flex gap-4 font-mono"><span>A. for</span><span>B. since</span><span>C. during</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: B.</strong> <em>Since</em> is used with a starting point.
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                  <p className="font-semibold text-sm">5. Although it was raining, they ___ playing.</p>
                  <div className="flex gap-4 font-mono"><span>A. continued</span><span>B. continue</span><span>C. continuing</span></div>
                  <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 font-medium">
                    <strong>Answer: A.</strong> The past tense matches the sentence.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Part 2 – Text Cohesion & Practice Ordering Tasks (Pages 15 - 17) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(16)}

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">
                  Part 2 – Text Cohesion (2 ordering tasks, 6 sentences each)
                </h3>
              </div>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                Text cohesion questions ask you to arrange sentences or identify how ideas connect. Look for pronouns, sequence words, contrast, and cause-and-effect clues. You receive 6 mixed-up sentences. The <strong>first sentence is given</strong>. You must put the other 5 sentences in the correct logical order.
              </p>

              {/* Cohesion Clues Table */}
              <div className="space-y-2 pt-2">
                <h4 className="text-sm font-bold text-blue-400">Cohesion Clues to Look For</h4>
                <div className="overflow-x-auto rounded-xl border border-inherit">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className={tableHeaderBg}>
                        <th className="p-3 font-bold w-1/4">Clue type</th>
                        <th className="p-3 font-bold">What to look for</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-inherit">
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-blue-400">Pronouns</td><td className="p-3">‘he’, ‘she’, ‘it’, ‘they’, ‘this’, ‘these’, ‘the + noun’ refer to something mentioned BEFORE.</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-blue-400">Sequence markers</td><td className="p-3">first / then / next / after that / subsequently / finally / in the end</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-blue-400">Contrast markers</td><td className="p-3">however / but / nevertheless / on the other hand / despite this</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-blue-400">Result markers</td><td className="p-3">therefore / as a result / consequently / because of this / so</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-blue-400">Addition markers</td><td className="p-3">moreover / furthermore / in addition / also / what is more</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-blue-400">Time markers</td><td className="p-3">at first / in the beginning / over time / eventually / nowadays</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-blue-400">General → Specific</td><td className="p-3">Texts often move from a broad statement to specific examples.</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-blue-400">Problem → Solution</td><td className="p-3">Look for a problem sentence followed by a solution sentence.</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Practice Task 1 – Ordering */}
              <div className={`p-5 rounded-2xl border ${boxBg} space-y-3 mt-4`}>
                <h4 className="font-bold text-sm text-cyan-300">Practice Task 1 – Ordering</h4>
                <div className="space-y-1.5 text-xs opacity-95">
                  <p className="p-2.5 rounded-lg bg-black/15 font-semibold">
                    <strong className="text-cyan-400 mr-2 font-mono">[1]</strong>
                    The role of social media in modern communication cannot be underestimated.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[A]</strong>
                    However, not everyone views this change positively.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[B]</strong>
                    Over time, platforms such as Facebook, Twitter, and Instagram attracted billions of users worldwide.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[C]</strong>
                    Despite these concerns, social media remains an integral part of daily life for most people.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[D]</strong>
                    What began as simple websites for sharing updates among friends quickly evolved into powerful tools for news, marketing, and political debate.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[E]</strong>
                    Critics argue that it has shortened attention spans, promoted misinformation, and contributed to rising levels of anxiety.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-900/30 border border-blue-500/40 text-xs space-y-1">
                  <div className="font-bold text-cyan-300 text-sm">
                    Answer & Explanation: 1 → D → B → A → E → C
                  </div>
                  <p className="opacity-90 leading-relaxed text-[11px]">
                    <strong>Logic:</strong> 1 (general claim) → D (what social media started as / how it grew) → B (global growth) → A (transition: not everyone agrees) → E (specific criticisms) → C (conclusion: despite issues, still important)
                  </p>
                </div>
              </div>

              {/* Practice Task 2 – Ordering */}
              <div className={`p-5 rounded-2xl border ${boxBg} space-y-3 mt-4`}>
                <h4 className="font-bold text-sm text-cyan-300">Practice Task 2 – Ordering</h4>
                <div className="space-y-1.5 text-xs opacity-95">
                  <p className="p-2.5 rounded-lg bg-black/15 font-semibold">
                    <strong className="text-cyan-400 mr-2 font-mono">[1]</strong>
                    Volunteering can be one of the most rewarding experiences a person can have.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[A]</strong>
                    In addition to the personal benefits, volunteers also contribute to addressing important social issues.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[B]</strong>
                    As a result, many volunteers report feeling more confident, skilled, and connected to their communities after their experiences.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[C]</strong>
                    By giving their time and energy, volunteers help fill gaps in services that governments and businesses cannot always provide.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[D]</strong>
                    Furthermore, the sense of purpose and satisfaction that comes from helping others is difficult to find elsewhere.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[E]</strong>
                    Through volunteering, individuals gain practical experience, develop new skills, and form meaningful relationships with others.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-900/30 border border-blue-500/40 text-xs space-y-1">
                  <div className="font-bold text-cyan-300 text-sm">
                    Answer & Explanation: 1 → E → B → D → A → C
                  </div>
                  <p className="opacity-90 leading-relaxed text-[11px]">
                    <strong>Logic:</strong> 1 (general intro) → E (benefits for the individual) → B (result for the individual) → D (further personal benefit: sense of purpose) → A (transition to wider benefits) → C (benefits for society)
                  </p>
                </div>
              </div>

              {/* Practice Task 3 – Ordering (Study Time) */}
              <div className={`p-5 rounded-2xl border ${boxBg} space-y-3 mt-4`}>
                <h4 className="font-bold text-sm text-cyan-300">Practice Task 3 – Ordering (Study Time)</h4>
                <div className="space-y-1.5 text-xs opacity-95">
                  <p className="p-2.5 rounded-lg bg-black/15 font-semibold">
                    <strong className="text-cyan-400 mr-2 font-mono">[1]</strong>
                    Many students find it difficult to manage their time during exam preparation.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[A]</strong>
                    As a result, they may feel stressed and struggle to revise every subject properly.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[B]</strong>
                    One useful solution is to prepare a realistic study timetable.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[C]</strong>
                    However, they often begin studying without deciding which topics are most important.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[D]</strong>
                    This plan helps them divide their available hours between different subjects.
                  </p>
                  <p className="p-2 rounded-lg bg-black/5">
                    <strong className="text-blue-400 mr-2 font-mono">[E]</strong>
                    They should also include short breaks so that they can stay focused.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-900/30 border border-blue-500/40 text-xs space-y-1">
                  <div className="font-bold text-cyan-300 text-sm">
                    Answer & Explanation: 1 → C → A → B → D → E
                  </div>
                  <p className="opacity-90 leading-relaxed text-[11px]">
                    <strong>Logic:</strong> “However” introduces the problem, “As a result” gives its consequence, “One useful solution” introduces the response, “This plan” refers to the timetable, and “also” adds another helpful recommendation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Part 3 – Opinion Matching (Pages 17 & 18) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(18)}

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">
                  Part 3 – Opinion Matching (4 opinions, 7 statements)
                </h3>
              </div>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                You read four short texts in which different people express their opinions on the same topic. Then you read 7 statements and decide which person’s text each statement matches. A person may be matched to more than one statement.
              </p>

              {/* Strategy */}
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 text-xs space-y-1.5">
                <span className="font-bold text-cyan-400 uppercase tracking-wider block">Strategy</span>
                <ul className="space-y-1 list-disc list-inside opacity-90 leading-relaxed">
                  <li>Read <strong>ALL four opinions</strong> before attempting ANY matching.</li>
                  <li>Underline or note the <strong>KEY OPINION</strong> in each text — what does each person mainly believe?</li>
                  <li>The statements are <strong>PARAPHRASES</strong> — they use different words than the original text.</li>
                  <li>Look for <strong>similar IDEAS</strong>, not identical words.</li>
                  <li>Some opinions may seem similar — look for subtle differences in viewpoint.</li>
                  <li>If unsure, eliminate obviously wrong options first.</li>
                </ul>
              </div>

              {/* Practice Task – Fast Food */}
              <div className="space-y-3 pt-3">
                <h4 className="text-sm font-bold text-blue-400">Practice Task – Topic: Fast Food</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-1.5`}>
                    <span className="font-bold text-cyan-400 uppercase tracking-wider block font-mono">KAREN</span>
                    <p className="leading-relaxed opacity-90">
                      I understand why fast food is popular — it’s quick, cheap, and convenient for people with busy lives. However, I strongly believe that consuming it regularly is a serious health risk. The high levels of fat, salt, and sugar in most fast food products contribute directly to obesity, heart disease, and diabetes. Society needs to be better educated about these risks.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-1.5`}>
                    <span className="font-bold text-cyan-400 uppercase tracking-wider block font-mono">MARCUS</span>
                    <p className="leading-relaxed opacity-90">
                      Fast food has become a scapegoat for all of society’s health problems. The real issue is portion control and individual responsibility. If someone chooses to eat a burger every day, that is their choice. Governments should not interfere with personal dietary decisions. Education is useful, but ultimately, people are responsible for their own health.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-1.5`}>
                    <span className="font-bold text-cyan-400 uppercase tracking-wider block font-mono">PRIYA</span>
                    <p className="leading-relaxed opacity-90">
                      What concerns me most about fast food is not the food itself but the industry behind it. The marketing of unhealthy products directly to children is deeply unethical. Children cannot make informed decisions about nutrition, yet they are bombarded with advertisements designed to create lifelong customers. This should be regulated far more strictly.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-1.5`}>
                    <span className="font-bold text-cyan-400 uppercase tracking-wider block font-mono">LEON</span>
                    <p className="leading-relaxed opacity-90">
                      I work in the food industry and I’ve seen real changes in recent years. Many fast food chains are now offering healthier options — salads, grilled items, and lower-calorie meals. I think critics are too negative. The industry is responding to consumer demand and health concerns. It would be unfair to dismiss all fast food companies as irresponsible.
                    </p>
                  </div>
                </div>

                {/* Statements List */}
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-2 text-slate-300">
                    Statements – Match each to Karen (K), Marcus (M), Priya (P), or Leon (L):
                  </span>
                  <ol className="text-xs space-y-1.5 list-decimal list-inside opacity-90 leading-relaxed">
                    <li>The fast food sector is making genuine efforts to offer healthier products.</li>
                    <li>Repeated consumption of fast food poses a serious threat to people’s health.</li>
                    <li>It is wrong that fast food companies target young consumers with advertising.</li>
                    <li>People should take personal responsibility for what they eat rather than blaming the industry.</li>
                    <li>Better public awareness of nutritional risks is needed.</li>
                    <li>The government should introduce tighter rules on how fast food is marketed to children.</li>
                    <li>The fast food sector is unfairly blamed for broader health issues in society.</li>
                  </ol>
                </div>

                {/* Answer Grid */}
                <div className="overflow-x-auto rounded-xl border border-inherit mt-3">
                  <table className="w-full text-xs text-center border-collapse">
                    <thead>
                      <tr className={tableHeaderBg}>
                        <th className="p-2.5">1</th>
                        <th className="p-2.5">2</th>
                        <th className="p-2.5">3</th>
                        <th className="p-2.5">4</th>
                        <th className="p-2.5">5</th>
                        <th className="p-2.5">6</th>
                        <th className="p-2.5">7</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="font-bold text-cyan-400 bg-black/10">
                        <td className="p-2.5">Leon</td>
                        <td className="p-2.5">Karen</td>
                        <td className="p-2.5">Priya</td>
                        <td className="p-2.5">Marcus</td>
                        <td className="p-2.5">Karen</td>
                        <td className="p-2.5">Priya</td>
                        <td className="p-2.5">Marcus</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-900/30 border border-blue-500/30 text-[11px] leading-relaxed opacity-95">
                  <strong>Explanations:</strong> Leon says fast food chains are ‘offering healthier options’. Karen talks about ‘serious health risk’ and ‘better educated’. Priya focuses on ‘marketing to children’ and stricter regulation. Marcus says ‘individual responsibility’ and fast food is a ‘scapegoat’.
                </div>
              </div>

              {/* Practice Example 2 – Learning Methods */}
              <div className="space-y-3 pt-4 border-t border-inherit">
                <h4 className="text-sm font-bold text-blue-400">Practice Example 2 – Learning Methods</h4>
                <p className="text-xs opacity-90">
                  Read the opinions and match each statement to the person who expresses that idea. Focus on meaning, even when the wording is different.
                </p>

                <div className="space-y-2 text-xs">
                  <div className={`p-3 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 mr-2 font-mono">A — Mina:</strong>
                    Online classes save travel time and allow students to replay lessons, but learners need a quiet place to study.
                  </div>
                  <div className={`p-3 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 mr-2 font-mono">B — Omar:</strong>
                    I prefer classroom lessons because I can ask questions immediately and work face-to-face with classmates.
                  </div>
                  <div className={`p-3 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 mr-2 font-mono">C — Sara:</strong>
                    A mixture of online and classroom learning is best because it offers flexibility and time with teachers in person.
                  </div>
                </div>

                <div className="space-y-1 text-xs opacity-90 pt-1">
                  <p>1. This person prefers a combination of two learning methods.</p>
                  <p>2. This person values immediate discussion.</p>
                  <p>3. This person likes being able to replay a lesson.</p>
                </div>

                <div className="p-2.5 rounded-lg bg-blue-600/20 text-cyan-300 text-xs font-bold border border-blue-500/30">
                  Answers: 1 — C; 2 — B; 3 — A.
                </div>
              </div>
            </div>
          </section>

          {/* Part 4 – Long Text and Headings (Pages 19 - 22) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(20)}

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">
                  Part 4 – Long Text and Headings (7 paragraphs, 8 headings)
                </h3>
              </div>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                You read a long article of approximately 750 words divided into 7 paragraphs. You are given 8 headings — match 7 of them to the paragraphs. One heading does not match.
              </p>

              {/* 6-Step Strategy Table */}
              <div className="space-y-2 pt-2">
                <h4 className="text-sm font-bold text-blue-400">6-Step Strategy</h4>
                <div className="overflow-x-auto rounded-xl border border-inherit">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className={tableHeaderBg}>
                        <th className="p-3 font-bold w-1/4">Step</th>
                        <th className="p-3 font-bold">What to do</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-inherit">
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">FIRST</td><td className="p-3">Skim the whole text quickly to understand the general topic.</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">SECOND</td><td className="p-3">Read the headings carefully — note key nouns, verbs, and concepts.</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">THIRD</td><td className="p-3">For each paragraph, identify its MAIN IDEA (often the first or last sentence).</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">FOURTH</td><td className="p-3">Match the main idea to the heading — they may use different vocabulary.</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">FIFTH</td><td className="p-3">The extra heading often sounds relevant but doesn’t quite fit any paragraph.</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-rose-400">DO NOT</td><td className="p-3 font-semibold text-rose-300">Base your answer on just one matching word — check the whole paragraph.</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Practice Text 1 – Artificial Intelligence in Education */}
              <div className="space-y-4 pt-4 border-t border-inherit">
                <h4 className="text-sm font-bold text-blue-400">
                  Practice Text – Artificial Intelligence in Education
                </h4>

                {/* Headings List */}
                <div className={`p-4 rounded-xl border ${boxBg} text-xs space-y-1.5`}>
                  <span className="font-bold text-cyan-400 uppercase tracking-wider block">Headings (Match 1–7 to i–viii. One heading is NOT used):</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono text-[11px] pt-1">
                    <span><strong>i.</strong> Concerns about fairness and access</span>
                    <span><strong>ii.</strong> Personalised learning for individual students</span>
                    <span><strong>iii.</strong> How AI is already being used in classrooms</span>
                    <span><strong>iv.</strong> The history of technology in education</span>
                    <span><strong>v.</strong> Preparing students for an AI-driven world</span>
                    <span><strong>vi.</strong> The risk of reducing human connection in teaching</span>
                    <span><strong>vii.</strong> Improving assessment and feedback</span>
                    <span><strong>viii.</strong> Support for teachers, not replacement</span>
                  </div>
                </div>

                {/* Paragraphs 1-7 */}
                <div className="space-y-3 text-xs leading-relaxed opacity-95">
                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 1</strong>
                    Artificial intelligence is gradually making its presence felt in schools and universities across the world. From automated marking systems and intelligent tutoring programmes to virtual assistants and adaptive learning platforms, AI technologies are increasingly being integrated into the everyday experience of both students and educators. What was once the subject of science fiction is now a practical reality in many classrooms.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 2</strong>
                    One of the most promising applications of AI in education is its ability to adapt to the individual needs of each learner. Unlike a single teacher managing thirty students, an AI system can simultaneously track the progress of every student, identify areas of weakness, and adjust the difficulty and content of exercises accordingly. This means that a student who struggles with fractions can receive additional support while a more advanced student is challenged with higher-level problems, all without disrupting the rest of the class.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 3</strong>
                    Assessment is another area where AI is proving its value. Traditionally, teachers spend enormous amounts of time marking assignments, writing feedback, and recording results. AI tools can now perform these tasks in a fraction of the time, providing students with immediate, detailed feedback on their work. This not only reduces the administrative burden on teachers but also allows students to correct their mistakes quickly, which research suggests significantly improves retention and understanding.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 4</strong>
                    Despite the excitement surrounding AI in education, some educators are cautious. They argue that teaching is fundamentally a human activity that depends on empathy, emotional intelligence, and the ability to read a room. A machine, however sophisticated, cannot replace the bond that forms between a teacher and a student, nor the motivational power of genuine human encouragement. If schools over-rely on AI, they risk producing students who are technically proficient but emotionally disconnected from learning.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 5</strong>
                    There are also important questions to be asked about equity. Not all schools have equal access to technology, and not all students have reliable internet access at home. If wealthier schools can afford cutting-edge AI tools while underfunded schools cannot, the gap in educational outcomes between privileged and disadvantaged students may actually widen. Policymakers must ensure that the introduction of AI in education does not deepen existing inequalities.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 6</strong>
                    Many proponents of AI in education are keen to emphasise that the goal is not to replace teachers but to empower them. By taking over time-consuming administrative tasks, AI can free teachers to focus on what they do best: inspiring students, facilitating discussion, and providing mentorship. In this view, AI serves as a powerful assistant rather than a competitor, allowing educators to dedicate more time and energy to the interpersonal aspects of their work.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 7</strong>
                    Perhaps most importantly, AI literacy is fast becoming an essential skill for the modern workforce. Students who leave school without a basic understanding of how artificial intelligence works will be at a significant disadvantage in an increasingly automated job market. Schools therefore have a responsibility not only to use AI as a teaching tool but to teach about AI itself, ensuring that graduates are prepared to navigate and contribute to a world shaped by these technologies.
                  </div>
                </div>

                {/* Solution Table */}
                <div className="overflow-x-auto rounded-xl border border-inherit mt-3">
                  <table className="w-full text-xs text-center border-collapse">
                    <thead>
                      <tr className={tableHeaderBg}>
                        <th className="p-2.5">Para</th>
                        <th className="p-2.5">1</th>
                        <th className="p-2.5">2</th>
                        <th className="p-2.5">3</th>
                        <th className="p-2.5">4</th>
                        <th className="p-2.5">5</th>
                        <th className="p-2.5">6</th>
                        <th className="p-2.5">7</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="font-bold text-cyan-400 bg-black/10">
                        <td className="p-2.5 font-bold text-white">Heading</td>
                        <td className="p-2.5">iii</td>
                        <td className="p-2.5">ii</td>
                        <td className="p-2.5">vii</td>
                        <td className="p-2.5">vi</td>
                        <td className="p-2.5">i</td>
                        <td className="p-2.5">viii</td>
                        <td className="p-2.5">v</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-500/30 text-xs">
                  <strong className="text-cyan-300">Extra heading (NOT used):</strong> iv — ‘The history of technology in education’ is not discussed in any paragraph.
                </div>
              </div>

              {/* Practice Example 2 – Long Text Comprehension (Pages 21 & 22) */}
              <div className="space-y-4 pt-6 border-t border-inherit">
                <h4 className="text-sm font-bold text-blue-400">
                  Practice Example 2 – Long Text Comprehension
                </h4>
                <p className="text-xs opacity-90">
                  Match each paragraph (1–7) with the best heading (A–H). One heading is extra and will not be used.
                </p>

                {/* Headings A-H */}
                <div className={`p-4 rounded-xl border ${boxBg} text-xs space-y-1.5`}>
                  <span className="font-bold text-cyan-400 uppercase tracking-wider block">Headings:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono text-[11px] pt-1">
                    <span><strong>A.</strong> Personalised learning with technology</span>
                    <span><strong>B.</strong> Community action to protect nature</span>
                    <span><strong>C.</strong> Making city travel more efficient</span>
                    <span><strong>D.</strong> The value of regular physical activity</span>
                    <span><strong>E.</strong> How the internet first developed</span>
                    <span><strong>F.</strong> Simple ways to reduce household waste</span>
                    <span><strong>G.</strong> Practising to learn a new language</span>
                    <span><strong>H.</strong> Reading for enjoyment and well-being</span>
                  </div>
                </div>

                {/* Paragraphs 1-7 */}
                <div className="space-y-3 text-xs leading-relaxed opacity-95">
                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 1</strong>
                    Some schools use digital platforms that adjust tasks to a learner’s progress. When a student finds an activity difficult, the programme may offer extra practice. When the student improves, it can provide more challenging work. This helps each learner move forward at a suitable pace.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 2</strong>
                    Walking, swimming, and playing team sports strengthen the body. Physical activity can also lower stress and improve sleep. People do not always need an expensive gym membership; even a short walk each day can be a useful first step.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 3</strong>
                    Families can reduce the amount of rubbish they produce by planning meals, reusing bags and containers, and choosing goods with less packaging. Sorting glass, paper, and plastic also helps recycling. These small actions work best when everyone in the household joins in.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 4</strong>
                    Knowing vocabulary is important, but becoming confident in another language requires regular use. Learners should listen, speak, read, and write whenever they can. Reviewing phrases and learning from mistakes gradually helps them communicate more naturally.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 5</strong>
                    In busy towns, growing numbers of cars can lead to traffic jams and unreliable journey times. Dedicated bus lanes, dependable train services, and clear travel information can help. For these options to attract more passengers, they also need to be affordable and convenient.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 6</strong>
                    Stories and non-fiction books allow readers to discover new places, people, and ideas. Reading for pleasure can build vocabulary and imagination. It can also offer a quiet break from screens and the pressures of everyday life.
                  </div>

                  <div className={`p-3.5 rounded-xl border ${innerCardBg}`}>
                    <strong className="text-cyan-400 block mb-1">Paragraph 7</strong>
                    People in some neighbourhoods organise clean-ups, plant native trees, and report damage to local habitats. Working together makes these projects more successful and can encourage others to care for nearby rivers, parks, and wildlife.
                  </div>
                </div>

                {/* Solution Table */}
                <div className="overflow-x-auto rounded-xl border border-inherit mt-3">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className={tableHeaderBg}>
                        <th className="p-3 font-bold text-center w-20">Paragraph</th>
                        <th className="p-3 font-bold text-center w-24">Heading</th>
                        <th className="p-3 font-bold">Why</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-inherit">
                      <tr className="hover:bg-black/5"><td className="p-3 text-center font-bold">1</td><td className="p-3 text-center font-bold text-cyan-400">A</td><td className="p-3">It describes digital tools that adapt learning to each student.</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 text-center font-bold">2</td><td className="p-3 text-center font-bold text-cyan-400">D</td><td className="p-3">It explains the physical and mental benefits of exercise.</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 text-center font-bold">3</td><td className="p-3 text-center font-bold text-cyan-400">F</td><td className="p-3">It gives examples of reducing household rubbish.</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 text-center font-bold">4</td><td className="p-3 text-center font-bold text-cyan-400">G</td><td className="p-3">It explains that regular practice helps people learn a language.</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 text-center font-bold">5</td><td className="p-3 text-center font-bold text-cyan-400">C</td><td className="p-3">It focuses on traffic problems and ways to improve city transport.</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 text-center font-bold">6</td><td className="p-3 text-center font-bold text-cyan-400">H</td><td className="p-3">It explains the benefits of reading for enjoyment.</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 text-center font-bold">7</td><td className="p-3 text-center font-bold text-cyan-400">B</td><td className="p-3">It describes community work to protect natural areas and wildlife.</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-500/30 text-xs">
                  <strong className="text-cyan-300">Unused heading:</strong> E — None of the paragraphs describes the early development of the internet.
                </div>
              </div>
            </div>
          </section>

        </div>
      )}

      {/* =========================================================================
          CHAPTER 5: WRITING SKILLS (Pages 23 - 28)
          ========================================================================= */}
      {chapter.number === 5 && (
        <div className="space-y-8">
          
          {/* Header Cover Banner */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(23)}
            
            <div className="p-6 rounded-2xl bg-[#0d2240] text-white space-y-3 shadow-lg border border-blue-600/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                  SECTION 5 • 4 WRITING PARTS
                </span>
                <span className="text-xs text-blue-200">50 Minutes</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
                5. Writing Skills
              </h1>
              <p className="text-xs sm:text-sm text-blue-200 font-medium">
                4 parts • Models • Phrases • Practice tasks (50 minutes)
              </p>
            </div>

            <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
              The Writing section includes four task types: <strong>Word Level Writing</strong>, <strong>Short Text Writing</strong>, <strong>Three Written Responses to Questions</strong>, and <strong>Formal & Informal Writing</strong>. You are assessed on task completion, grammar, vocabulary range, spelling, punctuation, register, and coherence.
            </p>

            {/* 1. Word Level Writing */}
            <div className="space-y-4 pt-4 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">1. Word Level Writing</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  In this task, you take part in a club, course, or activity and receive a series of <strong>five short text messages</strong> from other members. You reply to each message briefly and appropriately. The focus is on understanding each message and giving a clear, relevant response. This is not an extended-writing task, so long paragraphs are not required.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">How to answer:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>Read each message carefully.</li>
                    <li>Answer the point or question raised in that message.</li>
                    <li>Keep each reply short, natural, and on topic.</li>
                    <li>Check basic grammar, spelling, and punctuation.</li>
                  </ul>
                </div>
              </div>

              {/* Example */}
              <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-1.5`}>
                <span className="font-bold text-cyan-400 uppercase tracking-wider block">Example:</span>
                <p><strong>Club member:</strong> Hi! We are planning a photography club meeting on Saturday. Can you come?</p>
                <p className="text-blue-300 font-medium"><strong>Possible reply:</strong> Yes, I can come on Saturday. What time does the meeting start?</p>
              </div>

              {/* Practice Task 1 – Book Club */}
              <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                <span className="font-bold text-blue-400 uppercase tracking-wider block">Practice Task 1 – Book Club</span>
                <p className="opacity-90">Imagine you have joined a book club. Write a short reply to each message.</p>
                <ol className="space-y-1 list-decimal list-inside opacity-90 pl-1">
                  <li>Welcome to the club! What kind of books do you enjoy?</li>
                  <li>We are meeting at the library on Friday. Can you join us?</li>
                  <li>Could you suggest a book for our next discussion?</li>
                  <li>Please bring a notebook to the meeting. Is that okay?</li>
                  <li>We may change the meeting time. What time is best for you?</li>
                </ol>
              </div>

              {/* More Practice – Personal Questions */}
              <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                <span className="font-bold text-blue-400 uppercase tracking-wider block">More Practice – Personal Questions</span>
                <p className="opacity-90">Write one short, natural response to each question, as if you were replying to a club member or another student.</p>
                <ol className="space-y-1 list-decimal list-inside opacity-90 pl-1">
                  <li>What is your favourite hobby, and why do you enjoy it?</li>
                  <li>What is your favourite colour? Why do you like it?</li>
                  <li>What is your favourite flower, and what do you like about it?</li>
                </ol>
                <div className="p-2.5 rounded-lg bg-blue-900/30 text-blue-200 border border-blue-500/30 text-[11px] mt-2">
                  <strong>Tip:</strong> Give a direct answer and, when useful, add one simple detail. For example: <em>“My favourite hobby is reading because I enjoy learning new things.”</em>
                </div>
              </div>
            </div>

            {/* 2. Short Text Writing (Page 24) */}
            <div className="space-y-4 pt-6 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">2. Short Text Writing</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  In this task, you write a short text of around <strong>20–30 words</strong> in response to a situation or prompt. Your answer should stay on topic and communicate the required information clearly. Accurate grammar, punctuation, and spelling are important. Avoid adding unrelated details.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">How to answer:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>Identify exactly what the question asks you to do.</li>
                    <li>Include the key information requested.</li>
                    <li>Use complete, clear sentences.</li>
                    <li>Keep close to the stated word limit and check your writing.</li>
                  </ul>
                </div>
              </div>

              {/* Example Question */}
              <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                <span className="font-bold text-cyan-400 uppercase tracking-wider block">Example question:</span>
                <p className="opacity-90">
                  You have joined a fitness class. Write a short message to the instructor saying which class you want to attend and asking what you should bring. Write 20–30 words.
                </p>
                <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-500/30 text-blue-200">
                  <span className="font-bold text-cyan-300 block mb-1">Sample answer (27 words):</span>
                  <p className="italic">
                    "Hello, I would like to join the evening fitness class on Tuesday. Could you please tell me what equipment or clothing I should bring? Thank you."
                  </p>
                </div>
              </div>

              {/* Practice Questions */}
              <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                <span className="font-bold text-blue-400 uppercase tracking-wider block">Practice questions:</span>
                <ol className="space-y-1.5 list-decimal list-inside opacity-90 leading-relaxed pl-1">
                  <li>You are joining a college study group. Write a 20–30 word message introducing yourself and asking when the group meets.</li>
                  <li>You attended a workshop. Write a 20–30 word message thanking the organiser and mentioning one thing you learned.</li>
                  <li>Your friend invited you to a weekend activity, but you need more details. Write a 20–30 word reply asking about the time and place.</li>
                </ol>
                <div className="p-2.5 rounded-lg bg-black/15 text-slate-300 border border-inherit text-[11px] mt-2">
                  <strong>Quick reminder:</strong> Short does not mean incomplete: answer the prompt directly, include the necessary details, and avoid unnecessary sentences.
                </div>
              </div>
            </div>

            {/* 3. Three Written Responses to Questions (Pages 24 & 25) */}
            <div className="space-y-4 pt-6 border-t border-inherit">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">3. Three Written Responses to Questions</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${boxBg} space-y-2`}>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Definition & Explanation</h4>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  In this task, you respond to <strong>three questions</strong>, often in the context of an online or social-network interaction. Each question asks for a relevant piece of information, an opinion, or a personal response. Read each question separately and make sure your answer addresses it.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold block mb-1">How to answer:</span>
                  <ul className="text-xs space-y-1 list-disc list-inside opacity-90">
                    <li>Respond to all three questions.</li>
                    <li>Stay focused on the question asked.</li>
                    <li>Give a reason or example when it helps explain your answer.</li>
                    <li>Use clear sentences and check grammar, spelling, and punctuation.</li>
                  </ul>
                </div>
              </div>

              {/* Example – Topic: A social networking group */}
              <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2.5`}>
                <span className="font-bold text-cyan-400 uppercase tracking-wider block">
                  Example – Topic: A social networking group for students
                </span>
                <div className="space-y-1.5 opacity-90">
                  <p><strong>1.</strong> What do you usually use social networking sites for?</p>
                  <p><strong>2.</strong> Do you think online student groups are useful? Why?</p>
                  <p><strong>3.</strong> What activity would you suggest for your group?</p>
                </div>
                <div className="p-3.5 rounded-lg bg-blue-900/30 border border-blue-500/30 text-blue-200 space-y-2">
                  <span className="font-bold text-cyan-300 block">Sample responses:</span>
                  <p><strong>1.</strong> <em>I mainly use social networking sites to keep in touch with friends and share useful study materials.</em></p>
                  <p><strong>2.</strong> <em>Yes, they are useful because students can ask questions, exchange notes, and remind one another about deadlines.</em></p>
                  <p><strong>3.</strong> <em>I would suggest a weekly online study session where members discuss difficult topics and help each other prepare for exams.</em></p>
                </div>
              </div>

              {/* Practice questions – Learning English */}
              <div className={`p-4 rounded-xl border ${innerCardBg} text-xs space-y-2`}>
                <span className="font-bold text-blue-400 uppercase tracking-wider block">
                  Practice questions – Topic: Learning English
                </span>
                <ol className="space-y-1.5 list-decimal list-inside opacity-90 leading-relaxed pl-1">
                  <li>Which English skill would you most like to improve, and why?</li>
                  <li>How do you practise English outside class?</li>
                  <li>What would make an English-learning group more helpful for students?</li>
                </ol>
                <div className="p-2.5 rounded-lg bg-amber-950/25 text-amber-200 border border-amber-500/30 text-[11px] mt-2">
                  <strong>Before moving to the next task:</strong> Check that you have answered each question, kept your ideas relevant, and used clear, accurate English. The exact response length should follow the instructions given in your exam task.
                </div>
              </div>
            </div>
          </section>

          {/* 4. Formal & Informal Writing (Emails) Tables & References (Pages 25 - 27) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(26)}

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">
                  4. Formal & Informal Writing (Emails)
                </h3>
              </div>

              {/* Formal vs Informal Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-inherit">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className={tableHeaderBg}>
                      <th className="p-3 font-bold w-1/4">Feature</th>
                      <th className="p-3 font-bold w-3/8 text-cyan-300">Formal Email</th>
                      <th className="p-3 font-bold w-3/8 text-blue-200">Informal Email</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-inherit">
                    <tr className="hover:bg-black/5">
                      <td className="p-3 font-bold text-slate-400">Word limit</td>
                      <td className="p-3 font-mono font-bold text-cyan-400">120–150 words</td>
                      <td className="p-3 font-mono font-bold text-blue-300">40–50 words</td>
                    </tr>
                    <tr className={tableAltRowBg}>
                      <td className="p-3 font-bold text-slate-400">Tone</td>
                      <td className="p-3 font-medium">Polite, professional and clear</td>
                      <td className="p-3 font-medium">Friendly, short and conversational</td>
                    </tr>
                    <tr className="hover:bg-black/5">
                      <td className="p-3 font-bold text-slate-400">Contractions</td>
                      <td className="p-3 font-semibold text-rose-400">Do not use contractions</td>
                      <td className="p-3 font-semibold text-emerald-400">Contractions are fine (can’t, I’ll)</td>
                    </tr>
                    <tr className={tableAltRowBg}>
                      <td className="p-3 font-bold text-slate-400">Greeting</td>
                      <td className="p-3 italic">Dear Sir/Madam, / Dear Mr/Ms [surname],</td>
                      <td className="p-3 italic">Hi [name], / Hey [name]!</td>
                    </tr>
                    <tr className="hover:bg-black/5">
                      <td className="p-3 font-bold text-slate-400">Closing</td>
                      <td className="p-3 italic">Yours faithfully / Yours sincerely</td>
                      <td className="p-3 italic">Take care, / Best wishes, / Cheers,</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Linking Words and Discourse Markers Table (Page 26) */}
              <div className="space-y-2 pt-4">
                <h4 className="text-sm font-bold text-blue-400">Linking Words and Discourse Markers</h4>
                <div className="overflow-x-auto rounded-xl border border-inherit">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className={tableHeaderBg}>
                        <th className="p-3 font-bold w-1/4">Function</th>
                        <th className="p-3 font-bold">Words and phrases</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-inherit">
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Adding information</td><td className="p-3">moreover, furthermore, in addition, also, what is more, besides, not only…but also</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">Contrasting</td><td className="p-3">however, nevertheless, despite this, on the other hand, although, even though, while, whereas, yet, in spite of this</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Cause and reason</td><td className="p-3">because, since, as, due to, owing to, on account of</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">Effect / result</td><td className="p-3">therefore, as a result, consequently, thus, hence, for this reason, so</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Giving examples</td><td className="p-3">for example, for instance, such as, to illustrate, namely, in particular</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">Concession</td><td className="p-3">although, though, even though, while, despite + noun/gerund, in spite of</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Condition</td><td className="p-3">if, unless, provided that, as long as, on condition that, given that</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">Sequence / order</td><td className="p-3">first(ly), second(ly), then, next, after that, subsequently, finally, eventually, lastly</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Emphasising</td><td className="p-3">indeed, in fact, certainly, clearly, obviously, undoubtedly, above all</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">Summarising / concluding</td><td className="p-3">in conclusion, to sum up, overall, in summary, on balance, to conclude, all in all</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Time</td><td className="p-3">when, while, as, before, after, since, until, as soon as, once, during, by the time</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">Purpose</td><td className="p-3">in order to, so as to, so that, with the aim of</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Formal Email Phrases – Complete Reference (Page 27) */}
              <div className="space-y-2 pt-4">
                <h4 className="text-sm font-bold text-blue-400">Formal Email Phrases – Complete Reference</h4>
                <div className="overflow-x-auto rounded-xl border border-inherit">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className={tableHeaderBg}>
                        <th className="p-3 font-bold w-1/4">Use</th>
                        <th className="p-3 font-bold">Phrases</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-inherit">
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Salutation</td><td className="p-3">Dear Mr/Mrs/Ms [surname], | Dear Sir/Madam, | To Whom It May Concern,</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">Opening / purpose</td><td className="p-3 leading-relaxed">I am writing to enquire about… | I am writing with reference to… | I am writing in response to your advertisement/letter/email regarding… | I am writing on behalf of [name/organisation]… | I am contacting you to request/express/complain/inform…</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Giving background</td><td className="p-3 leading-relaxed">As you may be aware,… | I would like to draw your attention to… | With reference to our recent conversation,… | I have recently become aware that…</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">Making requests</td><td className="p-3 leading-relaxed">I would be grateful if you could… | Could you please provide… | I would appreciate it if you could… | I would like to request… | Would it be possible to…?</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Expressing concern</td><td className="p-3 leading-relaxed">I am concerned/worried that… | I am disappointed to hear that… | I wish to express my dissatisfaction with… | I feel that this situation is unacceptable.</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">Making suggestions</td><td className="p-3 leading-relaxed">I would like to suggest that… | It may be worth considering… | I strongly recommend that… | Perhaps it would be beneficial to…</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Apologising (if needed)</td><td className="p-3 leading-relaxed">I sincerely apologise for any inconvenience caused. | I regret to inform you that… | I am sorry to hear that…</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-cyan-400">Closing statements</td><td className="p-3 leading-relaxed">I look forward to hearing from you. | I await your response at your earliest convenience. | Please do not hesitate to contact me if you require further information. | I would appreciate a prompt response to this matter.</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-cyan-400">Sign-off</td><td className="p-3 leading-relaxed">Yours faithfully, [full name] <em>(when you used ‘Dear Sir/Madam’)</em> | Yours sincerely, [full name] <em>(when you used their name)</em></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Informal Email Phrases (Page 27) */}
              <div className="space-y-2 pt-4">
                <h4 className="text-sm font-bold text-blue-400">Informal Email Phrases</h4>
                <div className="overflow-x-auto rounded-xl border border-inherit">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className={tableHeaderBg}>
                        <th className="p-3 font-bold w-1/4">Use</th>
                        <th className="p-3 font-bold">Phrases</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-inherit">
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-blue-300">Salutation</td><td className="p-3">Hi [name], | Hey [name]! | Dear [name],</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-blue-300">Opening</td><td className="p-3 leading-relaxed">How are you? | I hope you’re well! | It was great to hear from you! | Guess what! | You won’t believe this, but…</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-blue-300">Body phrases</td><td className="p-3 leading-relaxed">I just wanted to let you know that… | I thought you’d like to hear… | I can’t believe that… | What do you think about…? | Have you heard that…?</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-blue-300">Making suggestions</td><td className="p-3 leading-relaxed">Why don’t we…? | How about…? | We should definitely… | Let’s…! | Maybe we could…?</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-blue-300">Expressing feelings</td><td className="p-3 leading-relaxed">I’m so excited about… | I was really surprised/shocked/disappointed that… | I can’t wait to… | I’m not sure about…</td></tr>
                      <tr className={tableAltRowBg}><td className="p-3 font-bold text-blue-300">Closing</td><td className="p-3 leading-relaxed">Let me know what you think! | Write back soon! | Talk soon! | Hope to hear from you! | Can’t wait to catch up!</td></tr>
                      <tr className="hover:bg-black/5"><td className="p-3 font-bold text-blue-300">Sign-off</td><td className="p-3 leading-relaxed">Lots of love, | Take care, | Best wishes, | Cheers, | See you soon,</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Solved Writing Example (Page 28) */}
          <section className={`p-7 rounded-3xl border ${cardBg} shadow-xl space-y-6`}>
            {renderPageHeader(28)}

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-blue-500">Solved Writing Example</h3>
              </div>
              <div className="p-3.5 rounded-xl bg-blue-900/30 border border-blue-500/30 text-xs sm:text-sm font-semibold text-blue-200">
                <strong>Topic:</strong> You cannot attend an English class tomorrow. Write an email explaining why and asking for the lesson notes.
              </div>

              {/* A. Formal Email */}
              <div className={`p-5 rounded-2xl border-l-4 border-l-blue-600 border ${boxBg} space-y-3`}>
                <span className="font-bold text-sm text-cyan-400 block uppercase tracking-wider font-mono">
                  A. Formal Email
                </span>
                <div className="p-4 rounded-xl bg-black/15 border border-inherit text-xs sm:text-sm space-y-2 leading-relaxed">
                  <p><strong>Subject:</strong> Request for Lesson Notes</p>
                  <p>Dear Sir/Madam,</p>
                  <p>
                    I am writing to inform you that I will be unable to attend the English class tomorrow due to a personal commitment. I would be grateful if you could share the lesson notes or advise me on how I may catch up on the missed work.
                  </p>
                  <p>Thank you for your time and understanding.</p>
                  <p>Yours faithfully,<br/><span className="italic opacity-80">[Your Name]</span></p>
                </div>
                <div className="p-2.5 rounded-lg bg-blue-900/20 text-blue-300 text-xs font-medium">
                  <strong>Why it is formal:</strong> It uses a professional greeting, polite request, complete sentences, and a formal closing.
                </div>
              </div>

              {/* B. Informal Email */}
              <div className={`p-5 rounded-2xl border-l-4 border-l-blue-400 border ${boxBg} space-y-3`}>
                <span className="font-bold text-sm text-blue-300 block uppercase tracking-wider font-mono">
                  B. Informal Email
                </span>
                <div className="p-4 rounded-xl bg-black/15 border border-inherit text-xs sm:text-sm space-y-2 leading-relaxed">
                  <p><strong>Subject:</strong> Tomorrow’s English Class</p>
                  <p>Hi Ayesha,</p>
                  <p>
                    I can’t make it to English class tomorrow because I have something personal to take care of. Could you please send me the notes after class? I’ll catch up as soon as I can.
                  </p>
                  <p>Thanks a lot!</p>
                  <p>Take care,<br/><span className="italic opacity-80">[Your Name]</span></p>
                </div>
                <div className="p-2.5 rounded-lg bg-blue-900/20 text-blue-300 text-xs font-medium">
                  <strong>Why it is informal:</strong> It uses a friendly greeting, everyday language, and a relaxed closing.
                </div>
              </div>

              {/* Checklist & Footer */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/40 text-xs text-blue-200">
                <strong>Quick checklist:</strong> Stay on topic, use the correct tone, check grammar and spelling, and include a suitable greeting and sign-off.
              </div>

              <p className="text-[11px] text-slate-400 italic text-center pt-2">
                Best of luck for your exam! Practice material adapted from the APTIS General self-study booklet by Nasir Aziz, for personal and classroom study.
              </p>
            </div>
          </section>

        </div>
      )}

    </div>
  );
};
