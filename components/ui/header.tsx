import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="./" className="font-medium text-white-600 hover:text-gray-200 px-20 py-20 flex items-center transition duration-150 ease-in-out">
            <img  className="w-20 h-20 fill-current text-purple-600" src="./favicon.ico" alt="ChatGPT入口图标" />
            <p  className="text-4xl">星界AI</p>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            <li>
                <Link
                  href="#"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  教程
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  定价
                </Link>
              </li>
              
              <li>
                <Link
                  href="/about"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  关于
                </Link>
              </li>
              <li>
                <Link href="https://chatallais.com/chat" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  登录
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
