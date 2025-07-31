'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import { ChevronRight, Loader2 } from 'lucide-react'

interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
  category?: string
  brand?: string
  rating?: number
  is_new?: boolean
  is_limited?: boolean
}

interface ProductSectionProps {
  title: string
  subtitle?: string
  type: 'popular' | 'new' | 'limited'
  viewAllLink?: string
  limit?: number
  className?: string
}

export function ProductSection({ 
  title, 
  subtitle, 
  type, 
  viewAllLink = '/products',
  limit = 4,
  className = '' 
}: ProductSectionProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/products')
        
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        
        const data = await response.json()
        
        // Transform data based on type
        let processedProducts = data.map((product: any, index: number) => ({
          ...product,
          rating: 4 + Math.random(), // Mock rating
          is_new: type === 'new' || index < 2,
          is_limited: type === 'limited' || index === data.length - 1,
          brand: `品牌 ${String.fromCharCode(65 + (index % 5))}` // Mock brand
        }))

        // Filter based on type
        if (type === 'new') {
          processedProducts = processedProducts.filter((p: Product) => p.is_new)
        } else if (type === 'limited') {
          processedProducts = processedProducts.filter((p: Product) => p.is_limited)
        }

        // Limit results
        setProducts(processedProducts.slice(0, limit))
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [type, limit])

  if (loading) {
    return (
      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-yellow-600" />
            <p className="mt-4 text-gray-600">載入中...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">載入失敗: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            {subtitle && (
              <p className="text-yellow-600 font-medium mb-2 tracking-wide">
                {subtitle}
              </p>
            )}
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Noto Serif JP, serif' }}
            >
              {title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href={viewAllLink as any}>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-3 font-medium transition-all duration-300"
            >
              查看全部商品
              <ChevronRight 
                size={20} 
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200" 
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}