'use client'

import Link from 'next/link'

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <main className="grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
            <div className="absolute h-48 w-full bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl" />
            
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
                  教程文章
                </h1>
                
                <div className="space-y-6">
                  <article className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      <Link href="/blogs/getting-started">
                        AI使用入门指南
                      </Link>
                    </h2>
                    <p className="text-gray-300">了解如何开始使用我们的AI服务，包括基本设置和使用技巧...</p>
                    <div className="mt-4">
                      <Link 
                        href="/blogs/getting-started" 
                        className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <span>阅读更多</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 