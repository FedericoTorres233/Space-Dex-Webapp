import { marked } from "marked";
import emoji from "node-emoji";

export default function ArticleContent({ content }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(
          content.replace(/(:.*:)/g, (match) => emoji.emojify(match))
        ),
      }}
    ></div>
  );
}
