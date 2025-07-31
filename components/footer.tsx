import Link from 'next/link'
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Truck,
  Shield,
  Heart
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: '商品分類', href: '/products' as const },
    { name: '品牌故事', href: '/brands' as const },
    { name: '新商品', href: '/new-arrivals' as const },
    { name: '限定商品', href: '/limited' as const },
  ]

  const customerService = [
    { name: '購物指南', href: '/' as const },
    { name: '運送政策', href: '/' as const },
    { name: '退換貨說明', href: '/' as const },
    { name: '常見問題', href: '/' as const },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: 'Noto Serif JP, serif' }}
              >
                職人の店
              </h3>
              <p className="text-gray-300 leading-relaxed">
                傳承日本中小企業的匠心工藝，為您帶來最純粹的日式美學體驗。每一件商品都承載著職人的心血與技藝。
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-yellow-400">關注我們</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 hover:bg-yellow-600 rounded-full transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 hover:bg-yellow-600 rounded-full transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 hover:bg-yellow-600 rounded-full transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-yellow-400">快速連結</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="font-semibold text-yellow-400">客戶服務</h4>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-yellow-400">聯絡資訊</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    日本東京都渋谷区<br />
                    恵比寿1-2-3 職人ビル
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-yellow-400 flex-shrink-0" />
                <p className="text-gray-300">+81-3-1234-5678</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-yellow-400 flex-shrink-0" />
                <p className="text-gray-300">info@shokunin-store.jp</p>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h5 className="font-medium text-white mb-2">客服時間</h5>
              <p className="text-gray-300 text-sm">
                平日 9:00-18:00<br />
                週六 10:00-17:00<br />
                週日及國定假日休息
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="text-yellow-400" size={24} />
              <div>
                <h5 className="font-medium text-white">免費配送</h5>
                <p className="text-gray-400 text-sm">滿¥5,000免運費</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Shield className="text-yellow-400" size={24} />
              <div>
                <h5 className="font-medium text-white">安全保障</h5>
                <p className="text-gray-400 text-sm">SSL加密保護</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Heart className="text-yellow-400" size={24} />
              <div>
                <h5 className="font-medium text-white">貼心服務</h5>
                <p className="text-gray-400 text-sm">30天退換保證</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods & Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">支付方式：</span>
              <div className="flex items-center space-x-2">
                <CreditCard size={20} className="text-gray-400" />
                <span className="text-gray-400 text-sm">Visa・MasterCard・JCB・PayPal</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} 職人の店. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with <Heart size={12} className="inline text-red-500" /> for Japanese craftsmanship
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}