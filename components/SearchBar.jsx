import { useState } from "react";
import Link from "next/link";

export default function SearchBar({ articles }) {
  const [filterData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = articles.filter((value) => {
      return value.frontmatter.title
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <input
        className="w-[20%] text-base py-1 px-3.5 pt-5 outline-none mt-4 bg-transparent border-transparent border-b-black text-[#f0f8ffbf] focus:border-b-white focus:text-[#f0f8ff]"
        type="text"
        placeholder="Search"
        onChange={handleFilter}
      />
      <div className="m-0 p-0 max-h-[110px] w-[20%]">
        {filterData.length != 0 && (
          <div className="mt-1 w-[20%] max-h-[110px] items-center overflow-hidden no-scrollbar overflow-y-auto absolute rounded-lg bg-white/25 shadow-md shadow-black/30">
            {filterData.map((article, index) => {
              return (
                <Link href={`/article/${article.slug}`} key={index}>
                  <a className="w-full h-12 text-black hover:text-white transition-all ease-in-out">
                    <p className="mx-2.5">{article.frontmatter.title}</p>{" "}
                  </a>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
