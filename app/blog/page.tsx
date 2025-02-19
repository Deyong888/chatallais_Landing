import { client } from '@/lib/tina'
import Link from 'next/link'

interface Post {
  title: string
  date: string
  _sys: {
    filename: string
  }
}

export default async function BlogList() {
  // 获取所有博客文章
  const postsResponse = await client.queries.postConnection()
  const posts = postsResponse.data.postConnection.edges?.map(post => ({
    title: post?.node?.title,
    date: post?.node?.date,
    _sys: post?.node?._sys
  })) || []

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">博客文章</h1>
      <div className="space-y-6">
        {posts.map((post: Post) => (
          <article key={post._sys.filename} className="border-b pb-6">
            <Link 
              href={`/blog/${post._sys.filename}`}
              className="group"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                {post.title}
              </h2>
              {post.date && (
                <time className="text-gray-600 text-sm">
                  {new Date(post.date).toLocaleDateString('zh-CN')}
                </time>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}