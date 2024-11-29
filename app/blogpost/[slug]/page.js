import fs from "fs";
import matter from "gray-matter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

export default async function Page({ params }) {
  const filepath = `content/${params.slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  // Mock blog object for demonstration
  // const blog = {
  //   title: "Exploring Next.js 13 Features",
  //   author: "Sopan Bharkad",
  //   description: "Dive into the latest features of Next.js and their impact on modern web development.",
  //   date: "November 18, 2024",
  //   content: `
  //     <p>Next.js 13 introduced many groundbreaking features, such as the App Directory, built-in server components, and improved data fetching mechanisms.</p>
  //     <ul>
  //       <li>Server and Client Component Hybrid Architecture</li>
  //       <li>Dynamic Routing Simplifications</li>
  //       <li>Improved Performance with RSC</li>
  //     </ul>
  //     <p>These advancements make Next.js 13 a go-to framework for building highly scalable and efficient web applications.</p>
  //   `,
  // };
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4">{data.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      ></div>
      {/* <OnThisPage htmlContent={htmlContent}/> */}
    </div>
  );
}
