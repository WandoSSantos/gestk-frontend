'use client';

import React from 'react';
import { Calendar, CalendarDays } from 'lucide-react';
import { Button } from '@gestk/ui';
import { format, subDays, subMonths, subYears } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface DateRange {
  from: Date;
  to: Date;
}

interface DateRangePickerProps {
  value?: DateRange;
  onChange: (range: DateRange) => void;
  presets?: {
    label: string;
    range: DateRange;
  }[];
  className?: string;
  placeholder?: string;
}

const DEFAULT_PRESETS = [
  {
    label: 'Últimos 7 dias',
    range: {
      from: subDays(new Date(), 7),
      to: new Date()
    }
  },
  {
    label: 'Últimos 30 dias',
    range: {
      from: subDays(new Date(), 30),
      to: new Date()
    }
  },
  {
    label: 'Últimos 3 meses',
    range: {
      from: subMonths(new Date(), 3),
      to: new Date()
    }
  },
  {
    label: 'Últimos 6 meses',
    range: {
      from: subMonths(new Date(), 6),
      to: new Date()
    }
  },
  {
    label: 'Último ano',
    range: {
      from: subYears(new Date(), 1),
      to: new Date()
    }
  }
];

export function DateRangePicker({
  value,
  onChange,
  presets = DEFAULT_PRESETS,
  className = '',
  placeholder = 'Selecionar período'
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const formatDateRange = (range: DateRange) => {
    return `${format(range.from, 'dd/MM/yyyy', { locale: ptBR })} - ${format(range.to, 'dd/MM/yyyy', { locale: ptBR })}`;
  };

  const handlePresetClick = (preset: typeof presets[0]) => {
    onChange(preset.range);
    setIsOpen(false);
  };

  const handleCustomRange = () => {
    // Aqui você pode implementar um seletor de data customizado
    // Por enquanto, vamos usar um prompt simples
    const fromStr = prompt('Data inicial (DD/MM/AAAA):');
    const toStr = prompt('Data final (DD/MM/AAAA):');
    
    if (fromStr && toStr) {
      const from = new Date(fromStr.split('/').reverse().join('-'));
      const to = new Date(toStr.split('/').reverse().join('-'));
      
      if (!isNaN(from.getTime()) && !isNaN(to.getTime())) {
        onChange({ from, to });
        setIsOpen(false);
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-start text-left font-normal"
      >
        <Calendar className="mr-2 h-4 w-4" />
        {value ? formatDateRange(value) : placeholder}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3">
            <div className="space-y-1">
              <div className="text-sm font-medium text-gray-900 mb-2">
                Períodos rápidos
              </div>
              {presets.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => handlePresetClick(preset)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {preset.label}
                </button>
              ))}
              <div className="border-t border-gray-200 my-2"></div>
              <button
                onClick={handleCustomRange}
                className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors flex items-center"
              >
                <CalendarDays className="mr-2 h-4 w-4" />
                Período personalizado
              </button>
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

