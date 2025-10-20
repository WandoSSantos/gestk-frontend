import { Button, Logo } from "@gestk/ui";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@gestk/ui";
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
  X
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Elegante */}
      <header className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Logo size="lg" className="hover:scale-105 transition-transform duration-200" />
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
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
              
              <Button className="button-elegant">
                Entrar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Elegante */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Activity className="h-4 w-4 mr-2" />
            Sistema online
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Gestão Contábil
            <span className="gradient-text block">Inteligente</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Transforme a gestão do seu escritório contábil com dashboards inteligentes, 
            análises avançadas e relatórios automatizados. Uma solução completa para 
            profissionais contábeis modernos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="button-elegant text-lg px-8 py-4">
              Começar Agora
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="button-outline-elegant text-lg px-8 py-4">
              Ver Demonstração
            </Button>
          </div>
        </div>

        {/* Features Grid Elegante */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <Card className="card-elegant group hover:scale-105 transition-all duration-300 animate-slide-up">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">Dashboards Inteligentes</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Visualize dados contábeis e fiscais em tempo real com gráficos interativos e análises preditivas
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-elegant group hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">Gestão de Clientes</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Controle completo da carteira de clientes com análise de performance e insights comportamentais
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-elegant group hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">Relatórios Automatizados</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Gere relatórios personalizados e exporte em PDF/Excel automaticamente com agendamento inteligente
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-elegant group hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">Análise de Indicadores</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Monitore KPIs e indicadores de performance do escritório com alertas inteligentes
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-elegant group hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">Multi-Escritório</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Gerencie múltiplos escritórios e contabilidades em uma única plataforma unificada
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-elegant group hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">Integração Contábil</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Conecte com sistemas contábeis e automatize processos com APIs inteligentes
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section Elegante */}
        <div className="card-elegant p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pronto para revolucionar sua gestão contábil?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Junte-se a centenas de escritórios que já transformaram sua gestão com o GESTK. 
              Experimente a próxima geração de ferramentas contábeis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="button-elegant text-lg px-10 py-4">
                Solicitar Acesso
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="button-outline-elegant text-lg px-10 py-4">
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Elegante */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="ml-3 text-3xl font-bold">GESTK</h3>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Transformando a gestão contábil com tecnologia de ponta
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2025 GESTK. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}