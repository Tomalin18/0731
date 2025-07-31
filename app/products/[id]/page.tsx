import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params
  return {
    title: `商品詳情 | 職人の店`,
    description: `查看商品 ${id} 的詳細資訊`,
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
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
              商品詳情
            </h1>
            <p className="text-gray-600 text-lg">
              商品 ID: {id}
            </p>
          </header>

          {/* Coming Soon Section */}
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">商品詳情頁面開發中</h2>
              <p className="text-gray-600 mb-6">
                我們正在精心設計商品詳情頁面，敬請期待。
              </p>
              <p className="text-sm text-gray-500">
                即將推出：高清商品圖片、詳細規格說明、職人故事、購買選項等
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}