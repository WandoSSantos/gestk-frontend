'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@gestk/ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@gestk/ui';
import { Input } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { Search, Building, Filter, X } from 'lucide-react';

interface Empresa {
  id: string;
  empresa: string;
  cnpj: string;
  regime_fiscal: string;
  ramo_atividade: string;
  escritorio_contabilidade: string;
}

interface CompanyFilterProps {
  empresas: Empresa[];
  empresaSelecionada: string | null;
  onEmpresaChange: (empresaId: string | null) => void;
  escritorioSelecionado: string | null;
  onEscritorioChange: (escritorioId: string | null) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onClearFilters: () => void;
}

export function CompanyFilter({
  empresas,
  empresaSelecionada,
  onEmpresaChange,
  escritorioSelecionado,
  onEscritorioChange,
  searchTerm,
  onSearchChange,
  onClearFilters
}: CompanyFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Obter escritórios únicos
  const escritorios = Array.from(
    new Set(empresas.map(emp => emp.escritorio_contabilidade))
  ).sort();

  // Filtrar empresas baseado na busca e escritório
  const empresasFiltradas = empresas.filter(emp => {
    const matchesSearch = emp.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.cnpj.includes(searchTerm);
    const matchesEscritorio = !escritorioSelecionado || emp.escritorio_contabilidade === escritorioSelecionado;
    return matchesSearch && matchesEscritorio;
  });

  const empresaAtual = empresas.find(emp => emp.id === empresaSelecionada);

  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Building className="h-5 w-5 text-blue-600" />
          Filtros de Análise
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Filtros Principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar empresa ou CNPJ..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filtro por Escritório */}
            <Select
              value={escritorioSelecionado || 'todos'}
              onValueChange={(value) => onEscritorioChange(value === 'todos' ? null : value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Escritório de Contabilidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Escritórios</SelectItem>
                {escritorios.map(escritorio => (
                  <SelectItem key={escritorio} value={escritorio}>
                    {escritorio}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Seleção de Empresa */}
            <Select
              value={empresaSelecionada || 'todas'}
              onValueChange={(value) => onEmpresaChange(value === 'todas' ? null : value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecionar Empresa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as Empresas</SelectItem>
                {empresasFiltradas.map(empresa => (
                  <SelectItem key={empresa.id} value={empresa.id}>
                    <div className="flex flex-col">
                      <span className="font-medium">{empresa.empresa}</span>
                      <span className="text-xs text-gray-500">{empresa.cnpj}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Empresa Selecionada */}
          {empresaAtual && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900">{empresaAtual.empresa}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-blue-700">
                    <span><strong>CNPJ:</strong> {empresaAtual.cnpj}</span>
                    <span><strong>Regime:</strong> {empresaAtual.regime_fiscal}</span>
                    <span><strong>Ramo:</strong> {empresaAtual.ramo_atividade}</span>
                    <span><strong>Escritório:</strong> {empresaAtual.escritorio_contabilidade}</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onEmpresaChange(null)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Filtros Avançados */}
          <div className="border-t pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-gray-600"
            >
              <Filter className="h-4 w-4" />
              Filtros Avançados
              {isExpanded ? '↑' : '↓'}
            </Button>

            {isExpanded && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Filtro por Regime Fiscal */}
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Regime Fiscal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos-regimes">Todos os Regimes</SelectItem>
                    <SelectItem value="Simples Nacional">Simples Nacional</SelectItem>
                    <SelectItem value="Lucro Presumido">Lucro Presumido</SelectItem>
                    <SelectItem value="Lucro Real">Lucro Real</SelectItem>
                  </SelectContent>
                </Select>

                {/* Filtro por Ramo de Atividade */}
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Ramo de Atividade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos-ramos">Todos os Ramos</SelectItem>
                    <SelectItem value="Comércio">Comércio</SelectItem>
                    <SelectItem value="Indústria">Indústria</SelectItem>
                    <SelectItem value="Serviços">Serviços</SelectItem>
                    <SelectItem value="Agronegócio">Agronegócio</SelectItem>
                  </SelectContent>
                </Select>

                {/* Filtro por Período */}
                <div className="flex gap-2">
                  <Input
                    type="date"
                    placeholder="Data Início"
                    className="text-sm"
                  />
                  <Input
                    type="date"
                    placeholder="Data Fim"
                    className="text-sm"
                  />
                </div>

                {/* Botão Limpar */}
                <Button
                  variant="outline"
                  onClick={onClearFilters}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
