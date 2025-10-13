'use client';

import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@gestk/ui';
import { DateRangePicker } from './DateRangePicker';
import { MultiSelect } from './MultiSelect';

interface FilterOption {
  value: string | number;
  label: string;
}

interface GlobalFiltersProps {
  filters: {
    periodo?: {
      from: Date;
      to: Date;
    };
    regime_fiscal?: (string | number)[];
    ramo_atividade?: (string | number)[];
    status?: (string | number)[];
    busca?: string;
  };
  onFiltersChange: (filters: any) => void;
  onClearFilters: () => void;
  className?: string;
  showSearch?: boolean;
  showPeriod?: boolean;
  showRegimeFiscal?: boolean;
  showRamoAtividade?: boolean;
  showStatus?: boolean;
  regimeFiscalOptions?: FilterOption[];
  ramoAtividadeOptions?: FilterOption[];
  statusOptions?: FilterOption[];
}

const DEFAULT_REGIME_FISCAL_OPTIONS: FilterOption[] = [
  { value: 1, label: 'Simples Nacional' },
  { value: 2, label: 'Lucro Presumido' },
  { value: 3, label: 'Lucro Real' },
  { value: 4, label: 'MEI' }
];

const DEFAULT_RAMO_ATIVIDADE_OPTIONS: FilterOption[] = [
  { value: 1, label: 'Comércio' },
  { value: 2, label: 'Indústria' },
  { value: 3, label: 'Serviços' },
  { value: 4, label: 'Agronegócio' },
  { value: 5, label: 'Tecnologia' },
  { value: 6, label: 'Construção' }
];

const DEFAULT_STATUS_OPTIONS: FilterOption[] = [
  { value: 'ativo', label: 'Ativo' },
  { value: 'inativo', label: 'Inativo' },
  { value: 'novo', label: 'Novo' },
  { value: 'sem_movimentacao', label: 'Sem Movimentação' }
];

export function GlobalFilters({
  filters,
  onFiltersChange,
  onClearFilters,
  className = '',
  showSearch = true,
  showPeriod = true,
  showRegimeFiscal = true,
  showRamoAtividade = true,
  showStatus = true,
  regimeFiscalOptions = DEFAULT_REGIME_FISCAL_OPTIONS,
  ramoAtividadeOptions = DEFAULT_RAMO_ATIVIDADE_OPTIONS,
  statusOptions = DEFAULT_STATUS_OPTIONS
}: GlobalFiltersProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState(filters.busca || '');

  const hasActiveFilters = React.useMemo(() => {
    return !!(
      filters.periodo ||
      (filters.regime_fiscal && filters.regime_fiscal.length > 0) ||
      (filters.ramo_atividade && filters.ramo_atividade.length > 0) ||
      (filters.status && filters.status.length > 0) ||
      filters.busca
    );
  }, [filters]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onFiltersChange({ ...filters, busca: value });
  };

  const handlePeriodChange = (periodo: { from: Date; to: Date }) => {
    onFiltersChange({ ...filters, periodo });
  };

  const handleRegimeFiscalChange = (regime_fiscal: (string | number)[]) => {
    onFiltersChange({ ...filters, regime_fiscal });
  };

  const handleRamoAtividadeChange = (ramo_atividade: (string | number)[]) => {
    onFiltersChange({ ...filters, ramo_atividade });
  };

  const handleStatusChange = (status: (string | number)[]) => {
    onFiltersChange({ ...filters, status });
  };

  const handleClearFilters = () => {
    setSearchValue('');
    onClearFilters();
  };

  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <h3 className="text-lg font-medium text-gray-900">Filtros</h3>
          {hasActiveFilters && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              {Object.values(filters).filter(Boolean).length} ativo{Object.values(filters).filter(Boolean).length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearFilters}
              className="text-red-600 hover:text-red-800"
            >
              <X className="h-4 w-4 mr-1" />
              Limpar
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Ocultar' : 'Mostrar'} Filtros
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {/* Busca */}
          {showSearch && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Digite para buscar..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Período */}
            {showPeriod && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Período
                </label>
                <DateRangePicker
                  value={filters.periodo}
                  onChange={handlePeriodChange}
                  placeholder="Selecionar período"
                />
              </div>
            )}

            {/* Regime Fiscal */}
            {showRegimeFiscal && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Regime Fiscal
                </label>
                <MultiSelect
                  options={regimeFiscalOptions}
                  value={filters.regime_fiscal || []}
                  onChange={handleRegimeFiscalChange}
                  placeholder="Selecionar regime"
                />
              </div>
            )}

            {/* Ramo de Atividade */}
            {showRamoAtividade && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ramo de Atividade
                </label>
                <MultiSelect
                  options={ramoAtividadeOptions}
                  value={filters.ramo_atividade || []}
                  onChange={handleRamoAtividadeChange}
                  placeholder="Selecionar ramo"
                />
              </div>
            )}

            {/* Status */}
            {showStatus && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <MultiSelect
                  options={statusOptions}
                  value={filters.status || []}
                  onChange={handleStatusChange}
                  placeholder="Selecionar status"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

