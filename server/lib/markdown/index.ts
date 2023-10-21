// import { Fragment, createElement, ReactElement } from "react";
// import rehypeRaw from "rehype-raw";
// import rehypeReact from "rehype-react";
// import { remark } from "remark";
// import remarkBreaks from "remark-breaks";
// import remarkGfm from "remark-gfm";
// import remarkRehype from "remark-rehype";

// import CustomImage from "@/src/components/Markdown/CustomImage";
// import CustomLink from "@/src/components/Markdown/CustomLink";

// export const markdownToReactElement = (markdownContent: string): string => {
//   const file = remark()
//     .use(remarkGfm)
//     .use(remarkBreaks)
//     .use(remarkRehype, {
//       allowDangerousHtml: true,
//     })
//     .use(rehypeRaw)
//     // .use(rehypeReact, {
//     //   Fragment,
//     //   components: {
//     //     a: CustomLink,
//     //     img: CustomImage,
//     //   },
//     //   createElement,
//     // })
//     .processSync(markdownContent);

//   return file.toString();
// };

import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";

export const markdownToHtml = async (markdownContent: string) => {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdownContent);
  return result.toString();
};