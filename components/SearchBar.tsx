import React, { FC, useState } from "react";
import classes from "../styles/SearchBar.module.css";

interface Props {
  articles: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      author: string;
      github: string;
    };
  }[];
}

const SearchBar: FC<Props> = ({ articles }) => {
  const [filterData, setFilteredData] = useState<Props["articles"]>([]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    const newFilter = articles.filter((value) => {
      return value.frontmatter.title
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    console.log(newFilter);
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
                <a className={classes.dataItem} key={index} href="">
                  <p>{article.frontmatter.title}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
