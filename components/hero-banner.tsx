'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const bannerSlides = [
  {
    id: 1,
    title: '匠心傳承，品質至上',
    subtitle: '探索日本中小企業的精緻工藝',
    description: '每一件商品都承載著職人的心血與技藝，為您帶來最純粹的日式美學體驗',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&auto=format&fit=crop',
    cta: '探索商品',
    ctaLink: '/products'
  },
  {
    id: 2,
    title: '傳統與現代的完美融合',
    subtitle: '發現獨特的日本手作藝品',
    description: '從傳統工藝到現代設計，每個作品都訴說著獨特的故事',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=1920&h=1080&auto=format&fit=crop',
    cta: '查看新品',
    ctaLink: '/new-arrivals'
  },
  {
    id: 3,
    title: '限定珍藏，值得擁有',
    subtitle: '專屬限量商品等您珍藏',
    description: '精選限量商品，每一件都是獨一無二的藝術品',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&auto=format&fit=crop',
    cta: '立即選購',
    ctaLink: '/limited'
  }
]

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  return (
    <section 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images */}
      {bannerSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {bannerSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              >
                <div className="fade-in-up">
                  <h2 className="text-lg md:text-xl text-yellow-400 font-medium mb-4">
                    {slide.subtitle}
                  </h2>
                  <h1 
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: 'Noto Serif JP, serif' }}
                  >
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="gold-ripple bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                    onClick={() => window.location.href = slide.ctaLink}
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-yellow-400 w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">向下滾動</span>
          <div className="w-0.5 h-8 bg-white/50"></div>
        </div>
      </div>
    </section>
  )
}