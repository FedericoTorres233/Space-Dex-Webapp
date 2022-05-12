import MainPageHeader from "../components/MainPage-Header";
import MainPageContent from "../components/MainPage-Content";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Index page
export default function Home({ articles }) {
  return (
    <body className="m-0 p-0 bg-[#15151c] top-0 left-0">
      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={0.5} factor={1}>
          <video muted autoPlay loop className="object-cover">
            <source src="/videos/MainPageVideo.mp4" />
          </video>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          <MainPageHeader articles={articles} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <div className="text-7xl py-8 px-12 bg-[#15151c] text-black">
            <MainPageContent />
          </div>
        </ParallaxLayer>
      </Parallax>
    </body>
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
