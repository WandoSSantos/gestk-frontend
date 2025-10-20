import React from 'react';
import { cn } from '../utils';

export interface LogoProps {
  variant?: 'default' | 'white' | 'dark' | 'icon-only';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  xs: 'h-8',
  sm: 'h-12',
  md: 'h-16',
  lg: 'h-20',
  xl: 'h-28',
};

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  size = 'md',
  className
}) => {
  const baseClasses = cn(
    'inline-block w-auto',
    sizeClasses[size],
    className
  );

  // Aplicar filtros CSS para variantes de cor
  const getFilterStyle = () => {
    switch (variant) {
      case 'white':
        return { filter: 'brightness(0) invert(1)' };
      case 'dark':
        return { filter: 'brightness(0)' };
      case 'icon-only':
        return {}; // Sem filtro para icon-only
      default:
        return {}; // Logo original sem filtros
    }
  };

  return (
    <img 
      src="/logo-gestk.svg" 
      alt="GestK" 
      className={baseClasses}
      style={getFilterStyle()}
    />
  );
};

Logo.displayName = 'Logo';
