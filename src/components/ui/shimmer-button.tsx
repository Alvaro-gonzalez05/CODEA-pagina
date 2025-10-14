'use client'
import React from 'react';

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function ShimmerButton({ 
  children, 
  className = "", 
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button'
}: ShimmerButtonProps) {
  const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  // Color schemes for different variants
  const variantColors = {
    primary: {
      shimmer: '#06b6d4, #3b82f6, #06b6d4',
      bg: 'bg-black/40 dark:bg-black/60 backdrop-blur-md',
      text: 'text-white',
      hover: 'group-hover:bg-black/60 dark:group-hover:bg-black/80',
      glow: 'shadow-cyan-500/25 hover:shadow-cyan-500/50'
    },
    secondary: {
      shimmer: '#8b5cf6, #ec4899, #8b5cf6',
      bg: 'bg-black/40 dark:bg-black/60 backdrop-blur-md',
      text: 'text-white',
      hover: 'group-hover:bg-black/60 dark:group-hover:bg-black/80',
      glow: 'shadow-purple-500/25 hover:shadow-purple-500/50'
    },
    success: {
      shimmer: '#10b981, #059669, #10b981',
      bg: 'bg-black/40 dark:bg-black/60 backdrop-blur-md',
      text: 'text-white',
      hover: 'group-hover:bg-black/60 dark:group-hover:bg-black/80',
      glow: 'shadow-emerald-500/25 hover:shadow-emerald-500/50'
    },
    warning: {
      shimmer: '#f59e0b, #ef4444, #f59e0b',
      bg: 'bg-black/40 dark:bg-black/60 backdrop-blur-md',
      text: 'text-white',
      hover: 'group-hover:bg-black/60 dark:group-hover:bg-black/80',
      glow: 'shadow-orange-500/25 hover:shadow-orange-500/50'
    }
  };

  // Size configurations
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const colors = variantColors[variant];
  const sizeClass = sizeClasses[size];

  return (
    <>
      <style>{customCss}</style>
      <button 
        type={type}
        className={`relative inline-flex items-center justify-center p-[3px] rounded-full overflow-hidden group transition-all duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'} shadow-xl ${colors.glow} ${className}`}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        style={{
          background: disabled 
            ? 'linear-gradient(45deg, #374151, #4b5563)' 
            : `conic-gradient(from var(--angle), transparent 20%, ${colors.shimmer.split(', ')[0]}, ${colors.shimmer.split(', ')[1]}, ${colors.shimmer.split(', ')[2] || colors.shimmer.split(', ')[0]}, transparent 80%)`,
          animation: disabled ? 'none' : 'shimmer-spin 2.5s linear infinite',
        }}
      >
        <span className={`relative z-10 inline-flex items-center justify-center w-full h-full ${sizeClass} ${colors.text} ${colors.bg} rounded-full ${colors.hover} transition-all duration-300 font-medium border border-white/10`}>
          {children}
        </span>
      </button>
    </>
  );
}