import React from "react";
import Image from "next/image";
import Emoji from "./utils/Emoji";
import githubLogo from "../public/img/logos/githubLogo.png";
import gmailLogo from "../public/img/logos/gmailLogo.png";
import telegramLogo from "../public/img/logos/telegramLogo.png";
import youtubeLogo from "../public/img/logos/youtubeLogo.png";
import classes from "../styles/MainPage-Content.module.css";

export default function MainPageContent() {
  return (
    <>
      {/*Discover Section */}
      <div className={classes.discover}>
        <h1>
          <strong>
            Discover Space with me! <Emoji symbol="🚀" label="rocket" />
          </strong>
        </h1>
        <div>{/*content here*/}</div>
      </div>

      {/*Contact Me Section */}
      <div className={classes.contactMe}>
        <h1>
          <strong>
            Contact Me! <Emoji symbol="📨" label="rocket" />
          </strong>
        </h1>
        <nav>
          <ul className={classes.contactMeNav}>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FedericoTorres233"
              >
                <Image
                  height={"150%"}
                  width={"150%"}
                  className={classes.img}
                  src={githubLogo}
                  alt="github"
                  unoptimized={true}
                />
              </a>
            </li>
            {/*
            <li>
              <a href="" target="_blank" rel="noreferrer">
                <Image
                  height={"150%"}
                  width={"200%"}
                  className={classes.img}
                  src={youtubeLogo}
                  alt="youtube"
                  unoptimized={true}
                />
              </a>
            </li>
            */}
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:federicotorres233@protonmail.com"
              >
                <Image
                  height={"150%"}
                  width={"150%"}
                  className={classes.img}
                  src={gmailLogo}
                  alt="gmail"
                  unoptimized={true}
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/federicotorres"
              >
                <Image
                  height={"150%"}
                  width={"150%"}
                  className={classes.img}
                  src={telegramLogo}
                  alt="telegram"
                  unoptimized={true}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
