
export default function Faq() {
    return (
<section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">常见问题</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Celebration</p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">为什么我让AI生成图片或音乐时遭到拒绝，没有创作对应的内容?</p>
                    <p className="mt-4 text-base text-gray-400">星界AI集成了全网各种顶级AI，每一款AI都有自己的特长和能力，当需要生成图片时，应在对话框切换成Midjourney等标注为绘画模型的模型。同理，需要使用音乐生成能力时应切换为Suno音乐模型。</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">星界AI是免费的吗?</p>
                    <p className="mt-4 text-base text-gray-400">是的，星界AI 提供免费使用服务。用户可以注册账号，免费体验星界AI 的部分功能，感受 AI 创作的魅力。如需使用高级功能需要加入会员</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white"> 星界AI 支持哪些 AI 模型？</p>
                    <p className="mt-4 text-base text-gray-400">星界AI 支持多种最先进的 AI 模型，包括 ChatGPT、Midjourney、Gemini、Claude、零一万物、DeepSeek、讯飞星火、Suno 音乐生成等。用户可以在一个窗口一键切换模型，同时调用各种 AI 模型进行创作。</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">星界AI 如何保证用户数据安全?</p>
                    <p className="mt-4 text-base text-gray-400">星界AI 致力于为用户提供安全可靠的 AI 创作平台，保障用户数据安全。我们采用先进的加密技术保护用户数据，并严格遵守隐私保护政策，确保用户数据不会被泄露或滥用。</p>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-20">
            <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
                <p className="text-gray-50">Didn’t find the answer you are looking for? <a href="#" title="" className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Contact our support</a></p>
            </div>
        </div>
    </div>
</section>

    )
  }
  