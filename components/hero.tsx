import VideoThumb from '@/public/images/hero-image-01.png'
import ModalVideo from '@/components/modal-video'
import HeroSlider from '@/components/hero-slider';

export default function Hero() {
  return (
    <section className="relative">
      {/* 背景动画效果 */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px] motion-safe:animate-grid-fade" />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-purple-500/30 via-transparent to-cyan-500/30 blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* 主标题区域 */}
          <div className="text-center pb-12 md:pb-16">
            <div className="relative inline-flex group mb-8" data-aos="zoom-y-out">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
              </div>
              <span className="relative inline-flex text-sm font-semibold py-1 px-3 text-gray-200 bg-gray-800 rounded-full">
                全新升级 AI 创作体验
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                星界AI
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                一站式AIGC创作平台
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-400 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                集成全网顶级AI模型，让创作更简单
              </p>
              
              {/* 特性展示区 */}
              <div className="relative pt-12 pb-10">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <div className="relative glass-card p-8 rounded-2xl">
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="flex flex-col items-center p-4 rounded-lg bg-white/5">
                          <span className="text-4xl mb-2">🤖</span>
                          <span className="text-sm text-gray-300">AI对话</span>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-lg bg-white/5">
                          <span className="text-4xl mb-2">🎨</span>
                          <span className="text-sm text-gray-300">AI绘画</span>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-lg bg-white/5">
                          <span className="text-4xl mb-2">🎵</span>
                          <span className="text-sm text-gray-300">AI音乐</span>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-lg bg-white/5">
                          <span className="text-4xl mb-2">🎬</span>
                          <span className="text-sm text-gray-300">AI视频</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="z-10 btn text-white bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 w-full mb-4 sm:w-auto sm:mb-0" href="https://chatallais.com/chat">
                    开始创作
                  </a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-800 hover:bg-gray-700 w-full sm:w-auto sm:ml-4" href="https://linktoai.top">
                    了解更多
                  </a>
                </div>
              </div>
            </div>
          </div>



          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />


        </div>
      </div>
    </section>
  )
}
