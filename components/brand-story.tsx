'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Users, Award } from 'lucide-react'

const brandStories = [
  {
    id: 1,
    name: '京都陶瓷工房',
    location: '京都府',
    founded: '1945年',
    specialty: '傳統陶瓷製作',
    description: '三代傳承的陶瓷工藝，每一件作品都承載著京都的文化底蘊。從原料挑選到燒製成型，堅持使用傳統技法，創造出兼具實用性與藝術價值的陶瓷精品。',
    image: 'https://images.unsplash.com/photo-1493718777829-97397ba9749e?w=600&h=400&auto=format&fit=crop',
    masterCraftsman: '田中一郎',
    employees: 8,
    awards: ['京都工藝優秀獎', '日本陶瓷文化賞'],
    link: '/brands/kyoto-ceramics'
  },
  {
    id: 2,
    name: '北海道木工坊',
    location: '北海道',
    founded: '1963年',
    specialty: '手工木製品',
    description: '利用北海道優質木材，製作溫潤有質感的生活用品。每塊木材都經過精心挑選，透過職人的巧手，轉化為兼具美感與實用性的家居藝品。',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&auto=format&fit=crop',
    masterCraftsman: '佐藤健',
    employees: 12,
    awards: ['北海道工藝獎', '全國木工技能大賞'],
    link: '/brands/hokkaido-woodwork'
  },
  {
    id: 3,
    name: '大阪織品工作室',
    location: '大阪府',
    founded: '1958年',
    specialty: '傳統紡織',
    description: '承繼大阪商都的織品傳統，結合現代設計理念，創造出既典雅又實用的紡織品。每一條圍巾、每一塊布料都是匠心獨運的藝術品。',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&auto=format&fit=crop',
    masterCraftsman: '山田花子',
    employees: 15,
    awards: ['關西紡織優秀獎', '傳統工藝繼承賞'],
    link: '/brands/osaka-textiles'
  }
]

export function BrandStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-medium mb-2 tracking-wide">
            職人の物語
          </p>
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Noto Serif JP, serif' }}
          >
            品牌故事
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            探索每個品牌背後的故事，了解職人們如何將傳統工藝與現代生活完美結合，創造出獨一無二的精品。
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Brand Stories Grid */}
        <div className="space-y-16">
          {brandStories.map((brand, index) => (
            <div key={brand.id} className="fade-in-up">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Image Section */}
                  <div className={`relative aspect-[4/3] lg:aspect-auto ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}>
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    
                    {/* Floating Info Card */}
                    <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-900">{brand.masterCraftsman}</h4>
                            <p className="text-sm text-gray-600">主任職人</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">創立</p>
                            <p className="font-semibold">{brand.founded}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}>
                    <div className="space-y-6">
                      {/* Brand Header */}
                      <div>
                        <div className="flex items-center gap-2 text-yellow-600 mb-2">
                          <MapPin size={16} />
                          <span className="text-sm font-medium">{brand.location}</span>
                        </div>
                        <h3 
                          className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: 'Noto Serif JP, serif' }}
                        >
                          {brand.name}
                        </h3>
                        <p className="text-yellow-600 font-medium">{brand.specialty}</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                        {brand.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-600">工匠人數</p>
                            <p className="font-semibold">{brand.employees}人</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award size={16} className="text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-600">獲獎次數</p>
                            <p className="font-semibold">{brand.awards.length}項</p>
                          </div>
                        </div>
                      </div>

                      {/* Awards */}
                      <div>
                        <p className="text-sm text-gray-600 mb-2">主要獎項</p>
                        <div className="flex flex-wrap gap-2">
                          {brand.awards.map((award, awardIndex) => (
                            <span
                              key={awardIndex}
                              className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
                            >
                              {award}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Link href="/brands">
                          <Button
                            className="bg-yellow-600 hover:bg-yellow-700 text-white gold-ripple"
                            size="lg"
                          >
                            探索 {brand.name} 的商品
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Brands Button */}
        <div className="text-center mt-16">
          <Link href="/brands">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-3 font-medium"
            >
              查看所有品牌故事
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}