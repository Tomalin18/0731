import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '新商品 | 職人の店',
  description: '發現最新到貨的日本中小企業精品，每一件都是職人精心製作的藝術品。',
}

export default function NewArrivalsPage() {
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
              新商品
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              發現剛到貨的精選商品，感受職人們最新的創作靈感與工藝技巧。
            </p>
          </header>

          {/* Coming Soon Section */}
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✨</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">新品即將登場</h2>
              <p className="text-gray-600 mb-6">
                我們正在準備最新的職人作品，請稍候片刻。
              </p>
              <p className="text-sm text-gray-500">
                即將上架：春季限定陶瓷、手工編織小物、傳統工藝擺飾等
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}