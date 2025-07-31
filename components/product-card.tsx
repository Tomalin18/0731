'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Eye, 
  ShoppingCart, 
  Heart,
  Star 
} from 'lucide-react'
import { useState } from 'react'

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

interface ProductCardProps {
  product: Product
  className?: string
  size?: 'default' | 'compact'
}

export function ProductCard({ product, className = '', size = 'default' }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const formatPrice = (priceInCents: number) => {
    return `¥${(priceInCents / 100).toLocaleString()}`
  }

  const isCompact = size === 'compact'
  
  return (
    <Card className={`group card-hover bg-white border-0 shadow-md hover:shadow-xl overflow-hidden ${className}`}>
      <div className={`relative overflow-hidden ${isCompact ? 'aspect-[4/3]' : 'aspect-square'}`}>
        {/* Product Image */}
        <Link href={`/products/${product.id}`}>
          <div className="relative w-full h-full">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className={`object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
              </div>
            )}
          </div>
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.is_new && (
            <Badge className="bg-green-500 text-white text-xs px-2 py-1">
              新品
            </Badge>
          )}
          {product.is_limited && (
            <Badge className="bg-red-500 text-white text-xs px-2 py-1">
              限定
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <Heart 
            size={16} 
            className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'} transition-colors`}
          />
        </button>

        {/* Quick Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 hover:bg-white text-gray-800 shadow-lg"
            >
              <Eye size={16} className="mr-1" />
              快速查看
            </Button>
            <Button
              size="sm"
              className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg gold-ripple"
            >
              <ShoppingCart size={16} className="mr-1" />
              加入購物車
            </Button>
          </div>
        </div>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className={isCompact ? "p-3" : "p-4"}>
        <div className={isCompact ? "space-y-1" : "space-y-2"}>
          {/* Brand/Category */}
          {product.brand && (
            <p className={`text-gray-500 font-medium ${isCompact ? "text-xs" : "text-sm"}`}>{product.brand}</p>
          )}

          {/* Product Name */}
          <Link href={`/products/${product.id}`}>
            <h3 className={`font-semibold text-gray-900 line-clamp-2 hover:text-yellow-600 transition-colors duration-200 leading-snug ${isCompact ? "text-sm" : ""}`}>
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          {product.rating && !isCompact && (
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(product.rating!)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-1">
                ({product.rating})
              </span>
            </div>
          )}

          {/* Price */}
          <div className={`flex items-center justify-between ${isCompact ? "pt-1" : "pt-2"}`}>
            <p className={`font-bold text-gray-900 ${isCompact ? "text-base" : "text-lg"}`}>
              {formatPrice(product.price_in_cents)}
            </p>
            {!isCompact && (
              <Button
                size="sm"
                variant="outline"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
              >
                詳細
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}