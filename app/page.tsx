import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { HeroBanner } from '@/components/hero-banner'
import { ProductSection } from '@/components/product-section'
import { BrandStory } from '@/components/brand-story'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '職人の店 | 日本中小企業精品專賣店',
  description: '探索日本中小企業的精緻工藝品，手作工藝品、特色食品、地方職人製品。每一件商品都承載著職人的心血與技藝，為您帶來最純粹的日式美學體驗。',
  keywords: '日本工藝品, 手作商品, 職人精神, 傳統工藝, 日式美學',
  openGraph: {
    title: '職人の店 | 日本中小企業精品專賣店',
    description: '探索日本中小企業的精緻工藝品，每一件商品都承載著職人的心血與技藝',
    type: 'website',
    images: ['/og-image.jpg'],
  }
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Popular Products Section */}
      <ProductSection
        title="人氣商品"
        subtitle="お客様に愛される"
        type="popular"
        viewAllLink="/products"
      />

      {/* Brand Story Section */}
      <BrandStory />

      {/* New Arrivals Section */}
      <ProductSection
        title="新到商品"
        subtitle="新しい出会い"
        type="new"
        viewAllLink="/new-arrivals"
        className="bg-gray-50"
      />

      {/* Limited Products Section */}
      <ProductSection
        title="限定商品"
        subtitle="特別なコレクション"
        type="limited"
        viewAllLink="/limited"
      />

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Noto Serif JP, serif' }}
          >
            職人の新着情報
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            新商品發布、限定活動、品牌故事等最新資訊，第一時間為您送達
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="輸入您的電子郵件"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              訂閱
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
