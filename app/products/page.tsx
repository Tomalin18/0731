import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '商品分類 | 職人の店',
  description: '瀏覽我們的精選商品分類，包含手作工藝品、特色食品、傳統工藝等日本中小企業精品。',
}

export default function ProductsPage() {
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
              商品分類
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              探索日本中小企業的精緻工藝品，每個分類都蘊含著獨特的職人精神和傳統技藝。
            </p>
          </header>

          {/* Coming Soon Section */}
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏗️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">敬請期待</h2>
              <p className="text-gray-600 mb-6">
                我們正在精心準備商品分類頁面，很快就會與您見面。
              </p>
              <p className="text-sm text-gray-500">
                即將上線：手作工藝品、特色食品、傳統工藝等精選分類
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}