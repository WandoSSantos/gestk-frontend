'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ChevronLeft, 
  ChevronRight,
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Users,
  DollarSign,
  Calendar,
  Target
} from 'lucide-react'

export function AdminDashboardCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const dashboardData = [
    {
      id: 'revenue',
      title: 'Receita Mensal',
      icon: DollarSign,
      value: 'R$ 245.890',
      change: '+12.5%',
      trend: 'up',
      chart: 'revenue-chart',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'clients',
      title: 'Clientes Ativos',
      icon: Users,
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      chart: 'clients-chart',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'efficiency',
      title: 'Eficiência Operacional',
      icon: Target,
      value: '98.5%',
      change: '+2.1%',
      trend: 'up',
      chart: 'efficiency-chart',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'tasks',
      title: 'Tarefas Concluídas',
      icon: Calendar,
      value: '89%',
      change: '+5.3%',
      trend: 'up',
      chart: 'tasks-chart',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ]

  const chartTypes = [
    {
      id: 'revenue-chart',
      type: 'bar',
      data: [
        { month: 'Jan', value: 180000 },
        { month: 'Fev', value: 195000 },
        { month: 'Mar', value: 220000 },
        { month: 'Abr', value: 245000 },
        { month: 'Mai', value: 230000 },
        { month: 'Jun', value: 245890 }
      ]
    },
    {
      id: 'clients-chart',
      type: 'line',
      data: [
        { month: 'Jan', value: 1100 },
        { month: 'Fev', value: 1150 },
        { month: 'Mar', value: 1200 },
        { month: 'Abr', value: 1180 },
        { month: 'Mai', value: 1250 },
        { month: 'Jun', value: 1234 }
      ]
    },
    {
      id: 'efficiency-chart',
      type: 'pie',
      data: [
        { label: 'Processados', value: 98.5, color: '#10b981' },
        { label: 'Pendentes', value: 1.5, color: '#ef4444' }
      ]
    },
    {
      id: 'tasks-chart',
      type: 'area',
      data: [
        { month: 'Jan', value: 75 },
        { month: 'Fev', value: 82 },
        { month: 'Mar', value: 85 },
        { month: 'Abr', value: 88 },
        { month: 'Mai', value: 87 },
        { month: 'Jun', value: 89 }
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dashboardData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dashboardData.length) % dashboardData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentData = dashboardData[currentSlide]
  const currentChart = chartTypes.find(chart => chart.id === currentData.chart)

  const renderChart = () => {
    if (!currentChart) return null

    switch (currentChart.type) {
      case 'bar':
        return (
          <div className="relative h-24 p-2">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 dark:text-gray-500">
              <span>250k</span>
              <span>200k</span>
              <span>150k</span>
              <span>100k</span>
              <span>50k</span>
              <span>0</span>
            </div>
            
            {/* Chart area */}
            <div className="flex items-end justify-between h-full ml-8 space-x-1">
              {currentChart.data.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="bg-gradient-to-t from-green-500 to-green-400 rounded-t w-full min-h-[4px] transition-all duration-500 hover:from-green-600 hover:to-green-500"
                    style={{ height: `${Math.max((item.value / 250000) * 80, 8)}px` }}
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                    {'month' in item ? item.month : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'line':
        return (
          <div className="relative h-24 p-2">
            <svg className="w-full h-full" viewBox="0 0 300 100">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="30" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="300" height="100" fill="url(#grid)" />
              
              {/* Line chart */}
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                points={currentChart.data.map((item, index) => 
                  `${(index * 300) / (currentChart.data.length - 1)},${100 - (item.value / 1300) * 80}`
                ).join(' ')}
                className="text-blue-500"
              />
              {currentChart.data.map((item, index) => (
                <circle
                  key={index}
                  cx={(index * 300) / (currentChart.data.length - 1)}
                  cy={100 - (item.value / 1300) * 80}
                  r="4"
                  fill="currentColor"
                  className="text-blue-500"
                />
              ))}
            </svg>
          </div>
        )
      
      case 'pie':
        return (
          <div className="flex items-center justify-center h-24">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 40 * 0.985} ${2 * Math.PI * 40}`}
                  strokeDashoffset="0"
                  className="text-green-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-green-600 dark:text-green-400">98.5%</span>
              </div>
            </div>
          </div>
        )
      
      case 'area':
        return (
          <div className="relative h-24 p-2">
            <svg className="w-full h-full" viewBox="0 0 300 100">
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d={`M 0,100 L ${currentChart.data.map((item, index) => 
                  `${(index * 300) / (currentChart.data.length - 1)},${100 - (item.value / 100) * 80}`
                ).join(' L ')} L 300,100 Z`}
                fill="url(#areaGradient)"
                className="text-orange-500"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                points={currentChart.data.map((item, index) => 
                  `${(index * 300) / (currentChart.data.length - 1)},${100 - (item.value / 100) * 80}`
                ).join(' ')}
                className="text-orange-500"
              />
              {currentChart.data.map((item, index) => (
                <circle
                  key={index}
                  cx={(index * 300) / (currentChart.data.length - 1)}
                  cy={100 - (item.value / 100) * 80}
                  r="3"
                  fill="currentColor"
                  className="text-orange-500"
                />
              ))}
            </svg>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 ${currentData.bgColor} rounded-lg flex items-center justify-center`}>
            <currentData.icon className={`w-4 h-4 ${currentData.iconColor}`} />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {currentData.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Últimos 6 meses
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="w-6 h-6 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ChevronLeft className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="w-6 h-6 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ChevronRight className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Chart Card */}
      <Card className="modern-card border-0 shadow-lg">
        <CardContent className="p-6">
          {/* Value and Change */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentData.value}
              </div>
              <div className={`text-sm font-medium ${currentData.color} flex items-center`}>
                <TrendingUp className="w-3 h-3 mr-1" />
                {currentData.change}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                vs mês anterior
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="mb-4">
            {renderChart()}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {dashboardData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-primary-600' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Dados atualizados em tempo real
        </p>
      </div>
    </div>
  )
}
