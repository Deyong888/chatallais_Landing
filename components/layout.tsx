export default function Layout({ children }) {
  return (
    <div className="min-h-screen tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 导航栏示例 */}
        <nav className="glass-effect fixed top-0 left-0 right-0 z-50">
          {/* 导航内容 */}
        </nav>
        
        {/* 主要内容区域 */}
        <main>
          {children}
        </main>
      </div>
    </div>
  )
} 