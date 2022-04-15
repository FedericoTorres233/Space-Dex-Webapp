import React from "react";
import Image from "next/image";
import mainpage from "../public/img/mainpageimg.jpg";
import pageLogo from "../public/img/pageLogo.png";
import classes from "../styles/MainPage-Header.module.css";
import SearchBar from "./SearchBar";

export default function MainPageHeader({ articles }) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.mainpage}>
          <video muted autoPlay loop className={classes.video}>
            <source src="/videos/MainPageVideo.mp4" />
          </video>
        </div>
        <div className={classes.title}>
          <Image src={pageLogo} alt="Page Logo" unoptimized={true}></Image>
        </div>
        <SearchBar articles={articles} />
      </header>
    </>
  );
}
