import { createClient } from "tinacms/dist/client";
import { queries } from "../tina/__generated__/types";

// 定义文章接口
export interface Post {
  title: string;
  date: string;
  body: string;
  _sys: {
    filename: string;
  };
}

// 定义查询结果接口
interface PostConnectionResponse {
  data: {
    postConnection: {
      edges: Array<{
        node: Post;
      }>;
    };
  };
}

// 创建 Tina 客户端
export const client = createClient({
  queries,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
}) as typeof client & {
  queries: {
    postConnection: () => Promise<PostConnectionResponse>;
    post: (variables: { relativePath: string }) => Promise<{ 
      data: { 
        post: Post 
      } 
    }>;
  };
};

// 获取文章列表
export async function getPostsList() {
  try {
    const response = await client.queries.postConnection();
    return response.data.postConnection.edges.map(edge => edge.node);
  } catch (error) {
    console.error('获取文章列表失败:', error);
    return [];
  }
}

// 获取单篇文章
export async function getPost(relativePath: string) {
  try {
    const response = await client.queries.post({
      relativePath: `${relativePath}.mdx`,
    });
    return response.data.post;
  } catch (error) {
    console.error('获取文章失败:', error);
    return null;
  }
}