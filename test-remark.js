import { remark } from "remark";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";

async function test() {
  try {
    const { default: remarkRehype } = await import("remark-rehype");
    const { default: rehypeStringify } = await import("rehype-stringify");

    const result = await remark()
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process("# Hello\n\n**world**");
    
    console.log("Success:", result.toString());
  } catch(e) {
    console.error("Error:", e);
  }
}
test();
