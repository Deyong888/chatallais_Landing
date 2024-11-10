'use client'
import { useState, useEffect } from 'react';

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      video: 'https://sparkai-web.oss-cn-shanghai.aliyuncs.com/sparkaiweb/app.mp4',
      poster: 'https://sparkai-web.oss-cn-shanghai.aliyuncs.com/sparkaiweb/banner-app.png'
    },
    {
      video: 'https://sparkai-web.oss-cn-shanghai.aliyuncs.com/sparkaiweb/chat.mp4',
      poster: 'https://sparkai-web.oss-cn-shanghai.aliyuncs.com/sparkaiweb/banner-chat.png'
    },
    {
      video: 'https://sparkai-web.oss-cn-shanghai.aliyuncs.com/sparkaiweb/painting-mj.mp4',
      poster: 'https://sparkai-web.oss-cn-shanghai.aliyuncs.com/sparkaiweb/banner-painting-mj.png'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen">
      <div className="relative w-full h-full">
        {/* 导航按钮 */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all"
        >
          <svg className="w-6 h-6 rotate-180" viewBox="0 0 16 16" stroke="currentColor">
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                  d="M9.26942778,12.2568054 L13.2625122,8.2602662 L9.26251221,4.25680542 M2.74890137,8.2602662 L13.2625122,8.2602662" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all"
        >
          <svg className="w-6 h-6" viewBox="0 0 16 16" stroke="currentColor">
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                  d="M9.26942778,12.2568054 L13.2625122,8.2602662 L9.26251221,4.25680542 M2.74890137,8.2602662 L13.2625122,8.2602662" />
          </svg>
        </button>

        {/* 轮播内容 */}
        <div className="relative w-full h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster={slide.poster}
                src={slide.video}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>

        {/* 底部指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 