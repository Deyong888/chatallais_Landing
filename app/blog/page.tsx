import Link from "next/link";
import { getPostsList } from "@/lib/tina";

export default async function BlogList() {
  const posts = await getPostsList();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">博客文章</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post._sys.filename} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post._sys.filename}`}>
                {post.title}
              </Link>
            </h2>
            <time className="text-gray-500">
              {new Date(post.date).toLocaleDateString('zh-CN')}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
}