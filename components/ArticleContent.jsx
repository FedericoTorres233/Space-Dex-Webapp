import { marked } from "marked";

export default function ArticleContent({ content }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>;
    </div>
  );
}
