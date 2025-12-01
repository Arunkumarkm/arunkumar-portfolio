import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", hoverEffect = true }) => {
  return (
    <div 
      className={`
        bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-6 shadow-xl
        ${hoverEffect ? 'hover:bg-white/60 hover:border-white hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};