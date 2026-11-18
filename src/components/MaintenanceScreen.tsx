import React, { useState } from 'react';
import { 
  Wrench, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles, 
  FileCheck2,
  Clock
} from 'lucide-react';
import { MAINTENANCE_CONFIG } from '../config/maintenance';

export const MaintenanceScreen: React.FC = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [refreshFeedback, setRefreshFeedback] = useState<string | null>(null);

  const handleRefresh = () => {
    setIsChecking(true);
    setRefreshFeedback('Checking system status...');
    setTimeout(() => {
      window.location.reload();
    }, 600);
  };

  return (
    <div className="min-h-screen w-full bg-[#050b17] text-slate-100 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/25 via-[#070e20] to-[#030712] pointer-events-none" />
      
      {/* Decorative Golden & Cyan Ambient Glowing Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Grid Lines Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top Bar / Minimalist Header */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/40 bg-[#081226] p-1 shadow-lg shadow-amber-500/10 flex items-center justify-center">
            <img 
              src="/logo-full-clean.png" 
              alt="CA Journey Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-display font-extrabold text-sm sm:text-base tracking-tight uppercase text-white block leading-tight">
              ICAP ECS
            </span>
            <span className="text-[11px] font-bold tracking-wider text-amber-400 uppercase block">
              CA Journey
            </span>
          </div>
        </div>

        {/* System Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span>System Maintenance</span>
        </div>
      </header>

      {/* Main Content Hero */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center max-w-4xl mx-auto w-full">
        
        {/* Animated Emblem / Logo with Orbiting Upgrade Rings */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Outer Pulsing Aura Ring */}
          <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-amber-500/20 animate-[spin_24s_linear_infinite] pointer-events-none" />
          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-dashed border-blue-500/20 animate-[spin_36s_linear_infinite_reverse] pointer-events-none" />
          
          {/* Radiant Glow Behind Logo */}
          <div className="absolute w-36 h-36 bg-gradient-to-tr from-amber-500/30 via-amber-400/20 to-blue-500/30 rounded-full blur-2xl animate-pulse" />

          {/* Central Logo Container */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-b from-[#0e1d3d] to-[#071026] border-2 border-amber-500/60 p-3 sm:p-4 shadow-2xl shadow-amber-500/20 flex items-center justify-center transform transition duration-500 hover:scale-105">
            <img 
              src="/logo-full-clean.png" 
              alt="CA Journey Emblem" 
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(245,158,11,0.35)]"
            />
            {/* Maintenance Badge Overlay on Logo */}
            <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 sm:p-2 rounded-xl shadow-lg border-2 border-[#050b17] flex items-center justify-center animate-bounce">
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight sm:leading-none mb-4">
          Website Under <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Maintenance</span>
        </h1>

        {/* Required Message Banner */}
        <div className="w-full max-w-2xl bg-gradient-to-r from-slate-900/90 via-[#0a1630]/90 to-slate-900/90 border border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-xl backdrop-blur-md mb-8">
          <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-200 leading-relaxed">
            "{MAINTENANCE_CONFIG.message}"
          </p>
        </div>

        {/* Live Enhancement Features Grid */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8 text-left">
          
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Exam Simulator
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Synchronizing authentic Aptis questions, randomized pools, and timer accuracy.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                AI Writing Lab
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fine-tuning instant CEFR band diagnostics and real-time grammar feedback.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Data & Progress
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Preserved and secure. Student exam records and smart notes remain 100% intact.
            </p>
          </div>

        </div>

        {/* Action Controls: Refresh Status Check */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm justify-center mb-6">
          <button
            onClick={handleRefresh}
            disabled={isChecking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isChecking ? 'animate-spin' : ''}`} />
            <span>{isChecking ? 'Checking System...' : 'Check If Portal Is Live'}</span>
          </button>
        </div>

        {/* Status Feedback Toast */}
        {refreshFeedback && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/95 border border-amber-500/40 text-amber-300 text-xs shadow-lg animate-in fade-in">
            <Clock className="w-3.5 h-3.5 shrink-0 text-amber-400" />
            <span>{refreshFeedback}</span>
          </div>
        )}

      </main>

      {/* Footer / Clean Copyright */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 border-t border-slate-900/80 flex items-center justify-center text-xs text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} ICAP ECS - CA Journey. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
