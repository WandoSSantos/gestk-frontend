'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/providers/ThemeProvider'
import { Logo } from '@gestk/ui'
import { 
  Menu, 
  X, 
  ChevronDown,
  BarChart3,
  Users,
  Sun,
  Moon,
  Shield
} from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Preços', href: '#precos' },
    { name: 'Contato', href: '#contato' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo 
              variant="default" 
              size="lg" 
              className="transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>

            {/* Login Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                className="flex items-center space-x-1"
              >
                <span className="text-gray-700 dark:text-gray-300">Entrar</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
              
              {isLoginDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  <Link
                    href="/login/admin"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setIsLoginDropdownOpen(false)}
                  >
                    <Shield className="w-4 h-4" />
                    <span>Administração</span>
                  </Link>
                  <Link
                    href="/login/cliente"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setIsLoginDropdownOpen(false)}
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>Cliente</span>
                  </Link>
                </div>
              )}
            </div>

            <Button
              variant="gradient"
              size="lg"
              onClick={() => scrollToSection('#contato')}
              className="btn-hover"
            >
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="space-y-2">
                  <Link
                    href="/login/admin"
                    className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Shield className="w-4 h-4" />
                    <span>Login Administração</span>
                  </Link>
                  <Link
                    href="/login/cliente"
                    className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>Login Cliente</span>
                  </Link>
                </div>
                
                <div className="pt-4">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      scrollToSection('#contato')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Começar Grátis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Overlay for login dropdown */}
      {isLoginDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLoginDropdownOpen(false)}
        />
      )}
    </nav>
  )
}
