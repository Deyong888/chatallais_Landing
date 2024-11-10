'use client'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {children}
    </div>
  )
} 