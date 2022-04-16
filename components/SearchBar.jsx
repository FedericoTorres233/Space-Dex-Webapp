import { useState } from "react";
import classes from "../styles/SearchBar.module.css";
import Link from "next/link";

function SearchBar({ articles }) {
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
        className={classes.search}
        type="text"
        placeholder="Search"
        onChange={handleFilter}
      />
      <div className={classes.dataResultWrapper}>
        {filterData.length != 0 && (
          <div className={classes.dataResult}>
            {filterData.map((article, index) => {
              return (
                <Link href={`/article/${article.slug}`} key={index}>
                  <a className={classes.dataItem}>
                    <p>{article.frontmatter.title}</p>{" "}
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

export default SearchBar;
