'use client';

import React from 'react';
import { Check, ChevronDown, X } from 'lucide-react';
import { Button } from '@gestk/ui';

interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface MultiSelectProps {
  options: Option[];
  value: (string | number)[];
  onChange: (value: (string | number)[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  maxDisplay?: number;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = 'Selecionar opções',
  className = '',
  disabled = false,
  maxDisplay = 3
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const selectedOptions = options.filter(option => value.includes(option.value));
  const displayText = React.useMemo(() => {
    if (selectedOptions.length === 0) {
      return placeholder;
    }
    
    if (selectedOptions.length <= maxDisplay) {
      return selectedOptions.map(option => option.label).join(', ');
    }
    
    return `${selectedOptions.length} opções selecionadas`;
  }, [selectedOptions, maxDisplay, placeholder]);

  const handleToggle = (optionValue: string | number) => {
    if (disabled) return;
    
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    
    onChange(newValue);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    onChange([]);
  };

  const handleClearAll = () => {
    if (disabled) return;
    onChange([]);
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="w-full justify-between text-left font-normal"
      >
        <span className="truncate">{displayText}</span>
        <div className="flex items-center space-x-1">
          {value.length > 0 && (
            <button
              onClick={handleClear}
              className="p-1 hover:bg-gray-100 rounded-sm"
            >
              <X className="h-3 w-3" />
            </button>
          )}
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          <div className="p-2">
            {value.length > 0 && (
              <div className="flex justify-between items-center p-2 mb-2 bg-gray-50 rounded-md">
                <span className="text-sm text-gray-600">
                  {value.length} selecionado{value.length !== 1 ? 's' : ''}
                </span>
                <button
                  onClick={handleClearAll}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Limpar tudo
                </button>
              </div>
            )}
            
            <div className="space-y-1">
              {options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer ${
                    option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={value.includes(option.value)}
                    onChange={() => handleToggle(option.value)}
                    disabled={option.disabled || disabled}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex items-center space-x-2 flex-1">
                    {value.includes(option.value) && (
                      <Check className="h-4 w-4 text-blue-600" />
                    )}
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Overlay para fechar o dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

