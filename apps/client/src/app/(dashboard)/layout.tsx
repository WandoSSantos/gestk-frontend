'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Users,
  FileText,
  TrendingUp,
  Building2,
  Calculator,
  Shield,
  Activity,
  ChevronRight,
  Bell,
  Search,
  Menu,
  X,
  Home,
  Settings,
  UserCheck,
  Briefcase,
  PieChart,
  BarChart,
  LineChart,
  Target,
  Building,
  Percent
} from 'lucide-react';
import { Button } from '@gestk/ui';

const navigation = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: Home,
    description: 'Visão geral do sistema'
  },
  {
    name: 'Gestão',
    href: '#',
    icon: Building,
    description: 'Gestão do escritório',
    children: [
      {
        name: 'Carteira',
        href: '/gestao/carteira',
        icon: Briefcase,
        description: 'Gestão de clientes'
      },
      {
        name: 'Clientes',
        href: '/gestao/clientes',
        icon: Users,
        description: 'Detalhes dos clientes'
      },
      {
        name: 'Usuários',
        href: '/gestao/usuarios',
        icon: UserCheck,
        description: 'Gestão de usuários'
      },
      {
        name: 'Análise do Escritório',
        href: '/gestao/escritorio',
        icon: Building2,
        description: 'KPIs e análises'
      }
    ]
  },
  {
    name: 'Simuladores',
    href: '#',
    icon: Calculator,
    description: 'Simuladores fiscais',
    children: [
      {
        name: 'Simulador de INSS',
        href: '/simuladores/inss',
        icon: Shield,
        description: 'Contribuições e benefícios'
      },
      {
        name: 'Simulador de IRPF',
        href: '/simuladores/irpf',
        icon: Percent,
        description: 'Imposto de renda pessoa física'
      }
    ]
  },
  {
    name: 'Dashboards',
    href: '#',
    icon: BarChart3,
    description: 'Visualizações e relatórios',
    children: [
      {
        name: 'Demográfico',
        href: '/dashboards/demografico',
        icon: PieChart,
        description: 'Análise demográfica'
      },
      {
        name: 'Fiscal',
        href: '/dashboards/fiscal',
        icon: Calculator,
        description: 'Análise fiscal'
      },
      {
        name: 'Contábil',
        href: '/dashboards/contabil',
        icon: BarChart,
        description: 'Análise contábil'
      },
      {
        name: 'Indicadores',
        href: '/dashboards/indicadores',
        icon: Target,
        description: 'KPIs e métricas'
      },
      {
        name: 'DRE',
        href: '/dashboards/dre',
        icon: LineChart,
        description: 'Demonstração de resultados'
      }
    ]
  },
  {
    name: 'Relatórios',
    href: '/relatorios',
    icon: FileText,
    description: 'Relatórios automatizados'
  },
  {
    name: 'Configurações',
    href: '/configuracoes',
    icon: Settings,
    description: 'Configurações do sistema'
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMenu = (menuName: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(name => name !== menuName)
        : [...prev, menuName]
    );
  };

  const isMenuActive = (item: any) => {
    if (item.children) {
      return item.children.some((child: any) => pathname === child.href);
    }
    return pathname === item.href;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Elegante */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 bg-white/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-gray-200/50",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center px-6 border-b border-gray-200/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  GESTK
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-2">Client</span>
                </h1>
                <p className="text-xs text-gray-500">Sistema de Gestão</p>
              </div>
            </div>
          </div>

          {/* Status indicator */}
          <div className="px-6 py-3 border-b border-gray-200/50">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600">Sistema online</span>
              <Activity className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 px-4 py-6">
            {navigation.map((item) => {
              const isActive = isMenuActive(item);
              const isExpanded = expandedMenus.includes(item.name);
              
              if (item.children) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={cn(
                        "group w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 relative",
                        isActive
                          ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border border-blue-200/50"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
                      )}
                    >
                      <div className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-lg mr-3 transition-all duration-200",
                        isActive 
                          ? "bg-blue-100 text-blue-600" 
                          : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-600"
                      )}>
                        <item.icon className="h-4 w-4" />
                      </div>
                      
                      <div className="flex-1 text-left">
                        <div className="font-medium">{item.name}</div>
                        <div className={cn(
                          "text-xs mt-0.5 transition-colors duration-200",
                          isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-600"
                        )}>
                          {item.description}
                        </div>
                      </div>
                      
                      <ChevronRight className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isExpanded ? "rotate-90" : "",
                        isActive ? "text-blue-600" : "text-gray-400"
                      )} />
                    </button>
                    
                    {isExpanded && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={cn(
                                "group flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative",
                                isChildActive
                                  ? "bg-blue-100 text-blue-700 shadow-sm"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className={cn(
                                "flex items-center justify-center w-6 h-6 rounded-md mr-3 transition-all duration-200",
                                isChildActive 
                                  ? "bg-blue-200 text-blue-600" 
                                  : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-600"
                              )}>
                                <child.icon className="h-3 w-3" />
                              </div>
                              
                              <div className="flex-1">
                                <div className="font-medium">{child.name}</div>
                                <div className={cn(
                                  "text-xs mt-0.5 transition-colors duration-200",
                                  isChildActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-600"
                                )}>
                                  {child.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 relative",
                    isActive
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border border-blue-200/50"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-lg mr-3 transition-all duration-200",
                    isActive 
                      ? "bg-blue-100 text-blue-600" 
                      : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-600"
                  )}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className={cn(
                      "text-xs mt-0.5 transition-colors duration-200",
                      isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-600"
                    )}>
                      {item.description}
                    </div>
                  </div>
                  
                  {isActive && (
                    <ChevronRight className="h-4 w-4 text-blue-600" />
                  )}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-r-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200/50">
            <div className="text-xs text-gray-500 text-center">
              <p>GESTK Client v1.0.0</p>
              <p className="mt-1">© 2025 Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Header */}
        <header className="glass-effect sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Mobile menu button */}
              <div className="lg:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {mobileMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* Header Content */}
              <div className="flex-1 flex items-center justify-between">
                <div className="flex-1 flex items-center justify-center lg:justify-start">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Dashboard GESTK
                  </h2>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Pesquisar..." 
                      className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div className="relative">
                    <Bell className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                      A
                    </div>
                    <span className="text-sm font-medium text-gray-700">admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
