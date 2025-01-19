import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed w-full z-30">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 to-slate-800/75 backdrop-blur-md border-b border-slate-700/30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link
              href="./"
              className="group flex items-center transition duration-300 ease-in-out"
            >
              <img
                className="w-12 h-12 mr-3 hover:animate-spin-slow"
                src="./favicon.ico"
                alt="ChatGPT入口图标"
              />
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-200 transition-all duration-300">
                星界AI
              </p>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center gap-2">
              {["AI智研院","AI未来城","免费网络资源","24K在线游戏", ""].map((item) => (
                <li key={item}>
                  {item === "AI智研院" ? ( // 如果是 "AI智研院"
                    <a
                      href="https://www.ai4you.top"
                      className="relative font-medium text-slate-300 px-4 py-2 flex items-center transition-all duration-300 hover:text-cyan-300 group"
                      target="_blank" // 添加 target="_blank" 以在新标签页中打开链接
                      rel="noopener noreferrer" // 推荐添加此属性以增加安全性
                    >
                      <span>{item}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ) : item === "AI未来城" ? ( // 如果是 "网络游戏"
                    <a
                      href="https://www.linktoai.top"
                      className="relative font-medium text-slate-300 px-4 py-2 flex items-center transition-all duration-300 hover:text-cyan-300 group"
                      target="_blank" // 添加 target="_blank" 以在新标签页中打开链接
                      rel="noopener noreferrer" // 推荐添加此属性以增加安全性
                    >
                      <span>{item}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ) : item === "免费网络资源" ? ( // 如果是 "网络游戏"
                    <a
                      href="http://resource.chatallais.com/"
                      className="relative font-medium text-slate-300 px-4 py-2 flex items-center transition-all duration-300 hover:text-cyan-300 group"
                      target="_blank" // 添加 target="_blank" 以在新标签页中打开链接
                      rel="noopener noreferrer" // 推荐添加此属性以增加安全性
                    >
                      <span>{item}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ): item === "24K在线游戏" ? ( // 如果是 "地铁跑酷"
                    <a
                      href="https://24kwebgames.com"
                      className="relative font-medium text-slate-300 px-4 py-2 flex items-center transition-all duration-300 hover:text-cyan-300 group"
                      target="_blank" // 添加 target="_blank" 以在新标签页中打开链接
                      rel="noopener noreferrer" // 推荐添加此属性以增加安全性
                    >
                      <span>{item}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ) :
                  (
                    // 如果不是 "AI智研院" 或 "网络游戏"
                    <Link
                      href={`/${item === "关于" ? "signin" : "about"}`}
                      className="relative font-medium text-slate-300 px-4 py-2 flex items-center transition-all duration-300 hover:text-cyan-300 group"
                    >
                      <span>{item}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="https://chatallais.com/chat"
                  className="relative overflow-hidden px-6 py-2 rounded-lg group bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative">登录</span>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
