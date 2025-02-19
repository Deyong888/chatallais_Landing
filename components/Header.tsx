import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  博客
                </Link>
              </li>
              {/* Add other navigation items here */}
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
} 