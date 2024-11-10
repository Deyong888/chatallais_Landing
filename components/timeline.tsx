export default function Timeline() {
  const events = [
    {
      year: '2023 Q4',
      title: '全新升级，引领创新',
      description: '推出全新升级的星界AI平台，支持更多AI模型和创新功能，用户数突破100万。',
      icon: '🚀'
    },
    {
      year: '2023 Q3',
      title: '多模态突破',
      description: '成功整合文本、图像、音频和视频生成能力，打造全方位AIGC创作平台。',
      icon: '🎯'
    },
    {
      year: '2023 Q2',
      title: '产品矩阵扩展',
      description: '陆续推出AI写作助手、AI图片生成、AI音乐创作等多个核心产品。',
      icon: '🎨'
    },
    {
      year: '2023 Q1',
      title: '技术革新',
      description: '完成新一代AI模型升级，处理效率提升300%，用户体验显著提升。',
      icon: '⚡'
    },
    {
      year: '2022 Q4',
      title: '商业化里程碑',
      description: '正式推出企业版服务，为众多企业提供专业的AI创作解决方案。',
      icon: '💼'
    },
    {
      year: '2022 Q3',
      title: '用户突破',
      description: '月活用户突破50万，成为行业领先的AI创作平台之一。',
      icon: '📈'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div className="relative inline-flex group mb-8">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
            </div>
            <span className="relative inline-flex text-sm font-semibold py-1 px-3 text-gray-200 bg-gray-800 rounded-full">
              见证星界AI的成长
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            发展历程
          </h2>
          <p className="text-xl text-gray-400">探索我们的创新之路，见证AI技术的演进</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-400"></div>
          
          <div className="space-y-16">
            {events.map((event, index) => (
              <div key={index} 
                   className={`relative flex items-center justify-between ${
                     index % 2 === 0 ? 'flex-row-reverse' : ''
                   }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{event.icon}</span>
                      <h3 className="text-xl font-bold text-purple-400 whitespace-nowrap">{event.title}</h3>
                    </div>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg whitespace-nowrap text-sm">
                    {event.year}
                  </div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 