import { marked } from "marked";
import emoji from "node-emoji";

export default function ArticleContent({ content }) {
  return (
    <div className="grid place-items-center">
      <div
        className="prose prose-lg xl:prose-xl"
        dangerouslySetInnerHTML={{
          __html: marked(
            content.replace(/(:.*:)/g, (match) => emoji.emojify(match))
          ),
        }}
      ></div>
    </div>
  );
}
