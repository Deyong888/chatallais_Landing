import { getPost } from "@/lib/tina";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const post = await getPost(params.slug);
    
    if (!post) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
        </div>
      );
    }

    return (
      <article className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{post.title || '无标题'}</h1>
        <div className="prose max-w-none">
          {post.body ? (
            <TinaMarkdown content={post.body} />
          ) : (
            <p>暂无内容</p>
          )}
        </div>
      </article>
    );
  } catch (error) {
    console.error('Blog post error:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">加载文章时出错</h1>
      </div>
    );
  }
}