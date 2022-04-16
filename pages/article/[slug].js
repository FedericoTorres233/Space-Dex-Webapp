import ArticleHeader from "../../components/Header";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function ArticlePage({
  frontmatter: { title, date, author, github },
  slug,
  content,
}) {
  return (
    <>
      <ArticleHeader />
      <div>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>;
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(path.join("articles"));

  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(".md", "") },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const mdWithMeta = fs.readFileSync(
    path.join("articles", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(mdWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
