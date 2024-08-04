export const metadata = {
  title: '星界AI - 一站式AIGC集成创作平台|文本生成、图片生成、音乐生成',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
     
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
