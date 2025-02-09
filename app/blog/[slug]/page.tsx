import { getPost } from "@/lib/tina";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    return <div>文章未找到</div>;
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose max-w-none">
        <TinaMarkdown content={post.body} />
      </div>
    </article>
  );
}