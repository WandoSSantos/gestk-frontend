import React from 'react';
import { cn } from '../utils';

export interface LogoProps {
  variant?: 'default' | 'white' | 'dark' | 'icon-only';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  iconColor?: string;
}

const sizeClasses = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-14',
  xl: 'h-20',
};

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  size = 'md',
  className,
  iconColor 
}) => {
  const baseClasses = cn(
    'inline-block',
    sizeClasses[size],
    className
  );

  const getIconColors = () => {
    if (iconColor) return { shield: iconColor, arrow: iconColor };
    
    switch (variant) {
      case 'white':
        return { shield: '#FFFFFF', arrow: '#E0E0E0' };
      case 'dark':
        return { shield: '#000000', arrow: '#333333' };
      default:
        return { shield: '#1F3A52', arrow: '#8B9BA8' };
    }
  };

  // SVG inline para melhor performance e customização
  if (variant === 'icon-only') {
    const colors = getIconColors();
    return (
      <svg 
        className={baseClasses}
        viewBox="0 0 150 180" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Escudo */}
        <path 
          d="M75 10L20 40V90C20 130 75 170 75 170C75 170 130 130 130 90V40L75 10Z" 
          fill={colors.shield}
        />
        {/* Seta */}
        <path 
          d="M50 140L110 80L95 95L120 70L85 85L95 75L50 140Z" 
          fill={colors.arrow}
        />
      </svg>
    );
  }

  return (
    <img 
      src="/logo-gestk.svg" 
      alt="GestK" 
      className={baseClasses}
      style={{
        filter: variant === 'white' 
          ? 'brightness(0) invert(1)' 
          : variant === 'dark'
          ? 'brightness(0)'
          : 'none'
      }}
    />
  );
};

Logo.displayName = 'Logo';
