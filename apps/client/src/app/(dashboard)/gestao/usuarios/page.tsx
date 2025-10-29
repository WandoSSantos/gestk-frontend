'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { Button } from '@gestk/ui';
import { Input } from '@gestk/ui';
import { LineChart, BarChart, PieChart } from '@/components/charts';
import { ExportButtons } from '@/components/export';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { useUsuariosResumoQuery } from '../../../../../../../packages/shared/src/queries/usuarios/usuarioQuery';

type Resumo = {
  total_usuarios: number;
  usuarios_ativos: number;
  usuarios_inativos: number;
};

type ProdutividadeMensal = {
  mes: string; // 'YYYY-MM'
  tempo_total_horas: number;
  total_importacoes: number;
  total_lancamentos: number;
  lancamentos_manuais: number;
  lancamentos_automaticos: number;
  total_atividades: number;
};

type RankingProd = {
  usuario_id: string;
  nome: string;
  tempo_sistema_horas: number;
  total_lancamentos: number;
  lancamentos_manuais: number;
  total_importacoes: number;
  eficiencia: number; // 0..1
};

type ProdPorEmpresa = {
  empresa_cnpj: string;
  empresa_nome: string;
  tempo_horas: number;
  total_lancamentos: number;
  lancamentos_manuais: number;
  lancamentos_automaticos: number;
  total_importacoes: number;
  total_atividades: number;
};

type UsuariosAPI = {
  resumo: Resumo;
  lista_usuarios: { id: string; nome: string; status: 'ATIVO' | 'INATIVO' }[];
  produtividade_mensal: ProdutividadeMensal[];
  ranking_produtividade: RankingProd[];
  produtividade_por_empresa: ProdPorEmpresa[];
  paginacao: {
    pagina_atual: number;
    total_paginas: number;
    total_registros: number;
    page_size: number;
  };
};

function horasFloatParaHHMMSS(h?: number) {
  const v = Number(h ?? 0);
  const hours = Math.floor(v);
  const minutes = Math.floor((v - hours) * 60);
  const seconds = Math.round(((v - hours) * 60 - minutes) * 60);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Evolução mensal para LineChart
function mapEvolucaoMensal(prodMensal: ProdutividadeMensal[]) {
  return (prodMensal ?? []).map((m) => ({
    mes: format(parseISO(m.mes + '-01'), 'MMM/yyyy', { locale: ptBR }),
    atividades: m.total_lancamentos, // ou m.total_atividades, se preferir
  }));
}

// Top produtividade (BarChart)
function mapTopProdutividade(ranking: RankingProd[], topN = 8) {
  const arr = (ranking ?? [])
    .map((r) => ({
      usuario: r.nome,
      // produtividade (lançamentos por hora)
      produtividade:
        r.tempo_sistema_horas > 0
          ? Math.round((r.total_lancamentos / r.tempo_sistema_horas) * 10) / 10
          : 0,
    }))
    .sort((a, b) => b.produtividade - a.produtividade)
    .slice(0, topN);

  return arr.length ? arr : [];
}

// Distribuição de eficiência (PieChart)
function mapDistribuicaoEficiencia(ranking: RankingProd[]) {
  const buckets: Record<string, number> = {
    '90-100%': 0,
    '80-89%': 0,
    '70-79%': 0,
    '60-69%': 0,
    '50-59%': 0,
  };

  (ranking ?? []).forEach((r) => {
    const ef = (r.eficiencia ?? 0) * 100;
    if (ef >= 90) buckets['90-100%']++;
    else if (ef >= 80) buckets['80-89%']++;
    else if (ef >= 70) buckets['70-79%']++;
    else if (ef >= 60) buckets['60-69%']++;
    else buckets['50-59%']++;
  });

  const out = Object.entries(buckets)
    .filter(([, count]) => count > 0)
    .map(([faixa, count]) => ({ faixa, usuarios: count }));

  return out.length ? out : [];
}

function mapDadosPorUsuario(ranking: RankingProd[]) {
  return (ranking ?? []).map((r) => ({
    usuario: r.nome,
    total_horas: r.tempo_sistema_horas,
    total_importacoes: r.total_importacoes,
    total_lancamentos: r.total_lancamentos,
    total_lancamentos_manuais: r.lancamentos_manuais,
    eficiencia_media: (r.eficiencia ?? 0) * 100, // em %
    produtividade_media:
      r.tempo_sistema_horas > 0
        ? r.total_lancamentos / r.tempo_sistema_horas
        : 0,
  }));
}

// Clientes (tabela por empresa)
function mapClientes(prodEmpresas: ProdPorEmpresa[]) {
  return (prodEmpresas ?? []).map((e) => ({
    id: e.empresa_cnpj, // mantenho string (CNPJ)
    razao_social: e.empresa_nome,
    horas_trabalhadas: horasFloatParaHHMMSS(e.tempo_horas),
    importacoes: e.total_importacoes,
    lancamentos: e.total_lancamentos,
    lancamentos_manuais: e.lancamentos_manuais,
  }));
}

type ViewType = 'analise' | 'usuarios' | 'modulo' | 'cliente';

export default function UsuariosPage() {
  const [viewType, setViewType] = useState<ViewType>('analise');
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: usuariosData,
    isLoading: isLoadingUsuarios,
    error: errorUsuarios,
  } = useUsuariosResumoQuery();

  // Loading / Error
  if (isLoadingUsuarios) {
    return <div className="p-6">Carregando usuários…</div>;
  }
  if (errorUsuarios) {
    return <div className="p-6 text-red-600">Falha ao carregar usuários.</div>;
  }

  const api = usuariosData as UsuariosAPI | undefined;

  // Adapters
  const resumo = useMemo(() => api?.resumo ?? {
    total_usuarios: 0, usuarios_ativos: 0, usuarios_inativos: 0
  }, [api]);

  const dadosEvolucao = useMemo(
    () => mapEvolucaoMensal(api?.produtividade_mensal ?? []),
    [api]
  );

  const dadosPorUsuario = useMemo(
    () => mapDadosPorUsuario(api?.ranking_produtividade ?? []),
    [api]
  );

  const dadosProdutividade = useMemo(
    () => mapTopProdutividade(api?.ranking_produtividade ?? []),
    [api]
  );

  const dadosEficiencia = useMemo(
    () => mapDistribuicaoEficiencia(api?.ranking_produtividade ?? []),
    [api]
  );

  const dadosClientes = useMemo(
    () => mapClientes(api?.produtividade_por_empresa ?? []),
    [api]
  );

  // KPIs extras a partir do mês corrente no payload (se houver)
  const kpiMensal = useMemo(() => {
    const m = (api?.produtividade_mensal ?? [])[0];
    return {
      lancamentos: m?.total_lancamentos ?? 0,
      importacoes: m?.total_importacoes ?? 0,
      horas_ativas: Math.round(m?.tempo_total_horas ?? 0),
    };
  }, [api]);

  const renderAnaliseGeral = () => (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumo.total_usuarios.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumo.usuarios_ativos.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Usuários Inativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumo.usuarios_inativos.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Lançamentos (mês)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiMensal.lancamentos.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Horas Ativas (mês)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiMensal.horas_ativas.toLocaleString()}h</div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Evolução */}
      <Card>
        <CardHeader>
          <CardTitle>Atividades por Mês</CardTitle>
          <CardDescription>
            Evolução de lançamentos ao longo do tempo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LineChart
            data={dadosEvolucao}
            xKey="mes"
            yKey="atividades"
            height={300}
            color="#3b82f6"
          />
        </CardContent>
      </Card>

      {/* Gráficos Estratégicos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Produtividade dos Usuários</CardTitle>
            <CardDescription>
              Lançamentos por hora (top usuários)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={dadosProdutividade}
              xKey="usuario"
              yKey="produtividade"
              height={250}
              color="#10b981"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Eficiência</CardTitle>
            <CardDescription>
              Percentual de usuários por faixa de eficiência
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart
              data={dadosEficiencia}
              nameKey="faixa"
              valueKey="usuarios"
              height={250}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAtividadesUsuarios = () => {
    const filtrados = dadosPorUsuario.filter((u) =>
      u.usuario.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Atividades por Usuário</h2>
          <div className="flex gap-2">
            <Input
              placeholder="Buscar Usuário"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
            <ExportButtons
              data={filtrados}
              nomeArquivo="atividades_por_usuario"
              colunas={[
                'usuario',
                'total_horas',
                'total_importacoes',
                'total_lancamentos',
                'total_lancamentos_manuais',
                'eficiencia_media',
                'produtividade_media',
              ]}
            />
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      Usuário
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      Horas
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      Importações
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      Lançamentos
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      L. Manuais
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      Eficiência
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Produtividade (L/h)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filtrados.map((u, index) => (
                    <tr key={u.usuario} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r border-gray-200">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-blue-600">
                              {u.usuario.charAt(0)}
                            </span>
                          </div>
                          <span>{u.usuario}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center border-r border-gray-200 font-mono">
                        {horasFloatParaHHMMSS(u.total_horas)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-blue-600 border-r border-gray-200">
                        {u.total_importacoes}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-green-600 border-r border-gray-200">
                        {u.total_lancamentos}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-orange-600 border-r border-gray-200">
                        {u.total_lancamentos_manuais}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center border-r border-gray-200">
                        {u.eficiencia_media.toFixed(1)}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        {u.produtividade_media.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                  {filtrados.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                        Nenhum usuário encontrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderAtividadesClientes = () => {
    const filtrados = dadosClientes.filter((c) =>
      c.razao_social.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Atividades por Cliente</h2>
          <div className="flex gap-2">
            <Input
              placeholder="Buscar Empresa"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
            <ExportButtons
              data={filtrados}
              nomeArquivo="atividades_por_cliente"
              colunas={[
                'id',
                'razao_social',
                'horas_trabalhadas',
                'importacoes',
                'lancamentos',
                'lancamentos_manuais',
              ]}
            />
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      ID (CNPJ)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      Razão Social
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      Horas
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      Importações
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                      Lançamentos
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      L. Manuais
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filtrados.map((cliente, index) => (
                    <tr key={cliente.id} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r border-gray-200">
                        <div className="w-18 h-8 bg-green-100 rounded-full flex items-center justify-center px-2">
                          <span className="text-xs font-bold text-green-700 truncate">
                            {cliente.id}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs border-r border-gray-200">
                        <div className="font-medium truncate" title={cliente.razao_social}>
                          {cliente.razao_social}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center border-r border-gray-200 font-mono">
                        {cliente.horas_trabalhadas}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-blue-600 border-r border-gray-200">
                        {cliente.importacoes}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-green-600 border-r border-gray-200">
                        {cliente.lancamentos}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-orange-600">
                        {cliente.lancamentos_manuais}
                      </td>
                    </tr>
                  ))}
                  {filtrados.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                        Nenhuma empresa encontrada.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  function renderAtividadesModulos() {
    // Exemplo estático (sua API atual não traz módulos)
    const comparativo = [
      { modulo: 'Escrita Fiscal', total_hours: 9644 },
      { modulo: 'Folha de Pagamento', total_hours: 9099 },
      { modulo: 'Contábil', total_hours: 8754 },
    ];

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Comparativo de Módulos (exemplo)
            </CardTitle>
            <CardDescription>
              Exibição ilustrativa — substitua quando a API fornecer estes dados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <BarChart
                data={comparativo.map(c => ({ name: c.modulo, value: c.total_hours }))}
                xKey="name"
                yKey="value"
                color="#3B82F6"
                title="Horas por Módulo"
                description="Total de horas trabalhadas em cada módulo"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Análise de Usuários</h1>
          <p className="text-gray-600 mt-1">
            Desempenho e atividades dos usuários
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/gestao/usuarios/estrategico">
            <Button variant="outline">
              Dashboard Estratégico
            </Button>
          </Link>
          <ExportButtons
            data={dadosPorUsuario}
            nomeArquivo="atividades_usuarios"
            colunas={[
              'usuario',
              'total_horas',
              'total_importacoes',
              'total_lancamentos',
              'total_lancamentos_manuais',
              'eficiencia_media',
              'produtividade_media',
            ]}
          />
        </div>
      </div>

      {/* Navegação */}
      <div className="flex gap-2">
        <Button
          variant={viewType === 'analise' ? 'default' : 'outline'}
          onClick={() => setViewType('analise')}
        >
          Análise Geral
        </Button>
        <Button
          variant={viewType === 'usuarios' ? 'default' : 'outline'}
          onClick={() => setViewType('usuarios')}
        >
          Atividade por Usuário
        </Button>
        <Button
          variant={viewType === 'modulo' ? 'default' : 'outline'}
          onClick={() => setViewType('modulo')}
        >
          Atividade por Módulo
        </Button>
        <Button
          variant={viewType === 'cliente' ? 'default' : 'outline'}
          onClick={() => setViewType('cliente')}
        >
          Atividade por Cliente
        </Button>
      </div>

      {/* Conteúdo */}
      {viewType === 'analise' && renderAnaliseGeral()}
      {viewType === 'usuarios' && renderAtividadesUsuarios()}
      {viewType === 'modulo' && renderAtividadesModulos()}
      {viewType === 'cliente' && renderAtividadesClientes()}
    </div>
  );
}
