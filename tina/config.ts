import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  schema: {
    collections: [
      {
        name: "post",
        label: "博客文章",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "标题",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "发布日期",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "正文内容",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "页面",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "标题",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "页面内容",
            isBody: true,
          },
        ],
      },
    ],
  },