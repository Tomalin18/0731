'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X,
  ChevronDown
} from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount] = useState(0) // TODO: Connect to cart state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: '商品分類', href: '/products' as const, hasSubmenu: true },
    { name: '品牌故事', href: '/brands' as const },
    { name: '新商品', href: '/new-arrivals' as const },
    { name: '限定商品', href: '/limited' as const },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-scroll shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Left navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                  {item.hasSubmenu && <ChevronDown size={16} className="ml-1" />}
                </Link>
                
                {/* Dropdown menu placeholder */}
                {item.hasSubmenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link href="/products" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">手作工藝品</Link>
                      <Link href="/products" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">特色食品</Link>
                      <Link href="/products" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">傳統工藝</Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-bold text-white hover:text-yellow-400 transition-colors duration-200"
              style={{ fontFamily: 'Noto Serif JP, serif' }}
            >
              職人の店
            </Link>
          </div>

          {/* Right section - Search, Cart, User */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="搜尋商品..."
                  className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" />
              </div>
            </div>

            {/* Search icon - Mobile */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-white/10"
            >
              <Search size={20} />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-white hover:bg-white/10 hover:text-yellow-400 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* User */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 hover:text-yellow-400 transition-colors"
            >
              <User size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="py-4 px-4 space-y-4">
              {/* Mobile search */}
              <div className="relative">
                <Input
                  type="search"
                  placeholder="搜尋商品..."
                  className="w-full"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              
              {/* Mobile navigation */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-gray-800 hover:text-yellow-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}