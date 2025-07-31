import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '限定商品 | 職人の店',
  description: '珍貴的限量商品，每一件都是獨一無二的職人精品，值得您珍藏。',
}

export default function LimitedPage() {
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
              限定商品
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              珍貴限量，值得收藏。每一件限定商品都承載著職人獨特的創意與精湛技藝。
            </p>
          </header>

          {/* Coming Soon Section */}
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💎</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">珍品即將發布</h2>
              <p className="text-gray-600 mb-6">
                我們正在精選最珍貴的限定商品，敬請期待。
              </p>
              <p className="text-sm text-gray-500">
                即將推出：季節限定茶具、職人親筆簽名作品、特別紀念版商品等
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}