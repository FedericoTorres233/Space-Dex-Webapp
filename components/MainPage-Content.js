import React from "react";
import Image from "next/image";
import Emoji from "./utils/Emoji";
import githubLogo from "../public/img/logos/githubLogo.png";
import gmailLogo from "../public/img/logos/gmailLogo.png";
import telegramLogo from "../public/img/logos/telegramLogo.png";
import youtubeLogo from "../public/img/logos/youtubeLogo.png";

export default function MainPageContent() {
  return (
    <>
      <div>
        <h1>
          <strong>Discover Space with me! <Emoji symbol="🚀" label="rocket"/></strong>
        </h1>
        <div>{/*content here*/}</div>
      </div>
      <div>
        <h1>
          <strong>Contact Me! <Emoji symbol="📨" label="rocket"/></strong>
        </h1>
        <h1>
          <ul>
            <li>
              <a href="https://github.com/FedericoTorres233">
                <Image
                  src={githubLogo}
                  alt="github"
                  unoptimized={true}
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src={youtubeLogo}
                  alt="youtube"
                  unoptimized={true}
                />
              </a>
            </li>
            <li>
              <a href="mailto:federicotorres1100@gmail.com">
                <Image
                  src={gmailLogo}
                  alt="gmail"
                  unoptimized={true}
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src={telegramLogo}
                  alt="telegram"
                  unoptimized={true}
                />
              </a>
            </li>
          </ul>
        </h1>
      </div>
    </>
  );
}
