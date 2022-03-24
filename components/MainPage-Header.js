import React from "react";
import Image from "next/image";
import mainpage from "../public/img/mainpage.jpg";
import pageLogo from "../public/img/pageLogo.png";
import classes from "../styles/MainPage-Header.module.css";

export default function MainPageHeader() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.mainpage}>
          <Image
            unoptimized={true}
            src={mainpage}
            alt="Main page picture"
          ></Image>
        </div>
        <div className={classes.title}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/FedericoTorres233/Space-Dex-Webapp"
          >
            <Image src={pageLogo} alt="Page Logo" unoptimized={true}></Image>
          </a>
        </div>
        <input className={classes.search} type="search" placeholder="Search" />
      </header>
    </>
  );
}
