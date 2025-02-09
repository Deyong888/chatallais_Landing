import { createClient } from "tinacms/dist/client";
import { queries } from "../tina/__generated__/types";

export const client = createClient({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  queries,
});

export async function getPostsList() {
  const postsResponse = await client.queries.postConnection();
  return postsResponse.data.postConnection.edges?.map((post) => post.node) || [];
}

export async function getPost(relativePath: string) {
  const postResponse = await client.queries.post({
    relativePath: `${relativePath}.mdx`,
  });
  return postResponse.data.post;
}