import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '品牌故事 | 職人の店',
  description: '了解每個品牌背後的故事，探索日本中小企業職人們的工藝傳承與創新精神。',
}

export default function BrandsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-12">
            <h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Noto Serif JP, serif' }}
            >
              品牌故事
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              每個品牌都有屬於自己的故事，了解職人們如何將傳統工藝與現代生活完美結合。
            </p>
          </header>

          {/* Coming Soon Section */}
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📖</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">故事即將上線</h2>
              <p className="text-gray-600 mb-6">
                我們正在收集各個品牌的精彩故事，敬請期待。
              </p>
              <p className="text-sm text-gray-500">
                即將分享：京都陶瓷工房、北海道木工坊、大阪織品工作室等品牌故事
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}