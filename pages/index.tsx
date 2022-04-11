import MainPageHeader from "../components/MainPage-Header";
import MainPageContent from "../components/MainPage-Content";
import classes from "../styles/Index.module.css";
import Footer from "../components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Index page
export default function Home({ articles }) {
  return (
    <>
      <body className={classes.body}>
        <div className={classes.wrapper}>
          <MainPageHeader articles={articles} />
          <div className={classes.section}>
            <MainPageContent />
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
}

export async function getStaticProps() {
  // Get files from posts directory
  const files = fs.readdirSync(path.join("articles"));

  // Get frontmatter from posts
  const articles = files.map((filename) => {
    // Get slugs from posts directory
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("articles", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      articles: articles,
    },
  };
}
