import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface LogoProps {
  variant?: 'header' | 'hero' | 'footer' | 'icon';
  className?: string;
  showText?: boolean;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'header', 
  className = '', 
  showText = true,
  size
}) => {
  const { theme } = useTheme();
  const dimensions = size || (variant === 'hero' ? 112 : variant === 'footer' ? 64 : 58);

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Complete CA Journey Golden Emblem & Text */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-2xl overflow-hidden shadow-lg border border-amber-500/50 bg-[#081226] transition-all duration-300 hover:scale-105 hover:border-amber-400"
        style={{ width: dimensions, height: dimensions }}
      >
        <img 
          src="/logo-full-clean.png" 
          alt="CA Journey Logo" 
          className="w-full h-full object-contain p-1"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-none min-w-0">
          <span className={`font-display font-extrabold text-lg sm:text-2xl tracking-tight uppercase transition-colors ${
            theme === 'sepia' ? 'text-[#2d1f11]' : theme === 'light' ? 'text-[#0a1636]' : 'text-white'
          }`}>
            ICAP ECS
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 mt-1 uppercase">
            CA Journey
          </span>
        </div>
      )}
    </div>
  );
};
