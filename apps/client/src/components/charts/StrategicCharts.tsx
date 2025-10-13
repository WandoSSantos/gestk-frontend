'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@gestk/ui';
import { LineChart, BarChart, PieChart, AreaChart } from './index';

interface EficienciaData {
  usuario: string;
  eficiencia: number;
  produtividade: number;
  horas: number;
}

interface TendenciaData {
  mes: string;
  atividades: number;
  eficiencia_media: number;
  produtividade_media: number;
}

interface ComparativoData {
  categoria: string;
  atual: number;
  anterior: number;
  variacao: number;
}

interface StrategicChartsProps {
  eficienciaData: EficienciaData[];
  tendenciaData: TendenciaData[];
  comparativoData: ComparativoData[];
  topUsuarios: Array<{usuario: string, lancamentos: number, produtividade: number}>;
}

export function EficienciaVsProdutividadeChart({ data }: { data: EficienciaData[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Eficiência vs Produtividade</CardTitle>
        <CardDescription>
          Relação entre eficiência e produtividade dos usuários
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <AreaChart
            data={data}
            xKey="eficiencia"
            yKey="produtividade"
            height={300}
            color="#8b5cf6"
            showDots={true}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function TendenciaEvolucaoChart({ data }: { data: TendenciaData[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolução de Tendências</CardTitle>
        <CardDescription>
          Evolução da eficiência e produtividade ao longo do tempo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <LineChart
            data={data}
            xKey="mes"
            yKey="eficiencia_media"
            height={300}
            color="#f59e0b"
            showDots={true}
            strokeWidth={3}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function ComparativoPeriodoChart({ data }: { data: ComparativoData[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparativo Período Anterior</CardTitle>
        <CardDescription>
          Comparação entre período atual e anterior
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <BarChart
            data={data}
            xKey="categoria"
            yKey="atual"
            height={300}
            color="#10b981"
            showComparison={true}
            comparisonKey="anterior"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function TopUsuariosChart({ data }: { data: Array<{usuario: string, lancamentos: number, produtividade: number}> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 5 Usuários Mais Produtivos</CardTitle>
        <CardDescription>
          Ranking dos usuários com maior produtividade
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <BarChart
            data={data.slice(0, 5)}
            xKey="usuario"
            yKey="lancamentos"
            height={300}
            color="#3b82f6"
            horizontal={true}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function HeatmapProdutividade({ data }: { data: EficienciaData[] }) {
  const getIntensity = (value: number, max: number) => {
    return Math.min((value / max) * 100, 100);
  };

  const maxProdutividade = Math.max(...data.map(d => d.produtividade));
  const maxEficiencia = Math.max(...data.map(d => d.eficiencia));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Heatmap de Produtividade</CardTitle>
        <CardDescription>
          Visualização da produtividade por usuário (intensidade da cor)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((usuario, index) => {
            const produtividadeIntensity = getIntensity(usuario.produtividade, maxProdutividade);
            const eficienciaIntensity = getIntensity(usuario.eficiencia, maxEficiencia);
            
            return (
              <div
                key={usuario.usuario}
                className="p-4 rounded-lg border-2 text-center"
                style={{
                  backgroundColor: `rgba(59, 130, 246, ${produtividadeIntensity / 100})`,
                  borderColor: `rgba(16, 185, 129, ${eficienciaIntensity / 100})`
                }}
              >
                <div className="font-medium text-sm">{usuario.usuario}</div>
                <div className="text-xs text-gray-600 mt-1">
                  Prod: {usuario.produtividade.toFixed(1)}
                </div>
                <div className="text-xs text-gray-600">
                  Efic: {usuario.eficiencia.toFixed(0)}%
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export function IndicadoresKPIs({ 
  totalUsuarios, 
  eficienciaMedia, 
  produtividadeMedia, 
  horasTotais 
}: {
  totalUsuarios: number;
  eficienciaMedia: number;
  produtividadeMedia: number;
  horasTotais: number;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalUsuarios}</div>
          <p className="text-xs text-gray-600">Usuários ativos</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Eficiência Média</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{eficienciaMedia.toFixed(1)}%</div>
          <p className="text-xs text-gray-600">Performance geral</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Produtividade Média</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{produtividadeMedia.toFixed(1)}</div>
          <p className="text-xs text-gray-600">Lançamentos/hora</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Horas Totais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{horasTotais.toFixed(0)}h</div>
          <p className="text-xs text-gray-600">Tempo trabalhado</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function AlertasPerformance({ data }: { data: EficienciaData[] }) {
  const alertas = data
    .filter(usuario => usuario.eficiencia < 70 || usuario.produtividade < 10)
    .map(usuario => ({
      usuario: usuario.usuario,
      tipo: usuario.eficiencia < 70 ? 'Eficiência Baixa' : 'Produtividade Baixa',
      valor: usuario.eficiencia < 70 ? usuario.eficiencia : usuario.produtividade,
      cor: usuario.eficiencia < 70 ? 'text-red-600' : 'text-yellow-600'
    }));

  if (alertas.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-green-600">✅ Todos os Usuários em Boa Performance</CardTitle>
          <CardDescription>
            Nenhum alerta de performance detectado
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-orange-600">⚠️ Alertas de Performance</CardTitle>
        <CardDescription>
          Usuários que precisam de atenção
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alertas.map((alerta, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">{alerta.usuario}</div>
                <div className="text-sm text-gray-600">{alerta.tipo}</div>
              </div>
              <div className={`font-bold ${alerta.cor}`}>
                {alerta.valor.toFixed(1)}
                {alerta.tipo === 'Eficiência Baixa' ? '%' : ''}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

