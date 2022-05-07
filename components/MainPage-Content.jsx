import Image from "next/image";
import Emoji from "./utils/Emoji";
import classes from "../styles/MainPage-Content.module.css";
import ISSgifAnimated from "../public/ISSgifAnimated.gif";
import SimulationGif from "../public/UniverseSandboxGIFMain.gif";
import Telegram from "@mui/icons-material/Telegram";
import GitHub from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";

export default function MainPageContent() {
  return (
    <>
      {/*Discover Section */}
      <div className={classes.discoverh1}>
        <h1>
          <strong>
            Discover the Universe! <Emoji symbol=":rocket:"/>
          </strong>
        </h1>
        <h4 className={classes.description}>
          From a single electron to a galaxy, the Universe is complex and full
          of mysteries. Follow me in this journey and let&apos;s discover every
          part of it!
        </h4>
      </div>
      <div className={classes.discover}>
        <div className={classes.code}>
          <Image
            height={"650%"}
            width={"650%"}
            className={classes.gif}
            title="ISS trayectory plot"
            src={ISSgifAnimated}
            alt="gif"
            unoptimized={true}
          />
          <h4>
            Animated gifs, graphs and code examples to learn science{" "}
            <Emoji symbol=":telescope:"/> while also learning to code{" "}
            <Emoji symbol=":male-technologist:"/>!
          </h4>
        </div>
        <h4 className={classes.sandbox}>
          Simulations using{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://universesandbox.com/"
          >
            Universe Sandbox 2
          </a>{" "}
          <Emoji symbol=":ringed_planet:"/> and videos{" "}
          <Emoji symbol=":movie_camera:"/>
        </h4>
        <div>
          <Image
            height={"420%"}
            width={"880%"}
            src={SimulationGif}
            className={classes.SimulationGif}
            alt="UniverseSandbox2 - GIF"
            title="UniverseSandbox2 - GIF"
            unoptimized={true}
          />
        </div>
      </div>

      {/*Contact Me Section */}
      <h4 className={classes.contacth4}>
        <strong>
          Contribute to this project <Emoji symbol="🛰️" label="rocket" />
        </strong>
      </h4>
      <div className={classes.contactMe}>
        <nav>
          <ul className={classes.contactMeNav}>
            <li>
              <div className={classes.navItems}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/FedericoTorres233/spacedex"
                >
                  <GitHub
                    className={classes.img}
                    alt="github"
                    title="Send a pull request"
                    sx={{ color: "gray", fontSize: 100 }}
                  />
                </a>
                <h5>Pull Request</h5>
              </div>
            </li>
            <li>
              <div className={classes.navItems}>
                <a href="mailto:federicotorres233@protonmail.com">
                  <Email
                    className={classes.img}
                    alt="gmail"
                    title="Email me"
                    sx={{ color: "gray", fontSize: 100 }}
                  />
                </a>
                <h5>Email me</h5>
              </div>
            </li>
            <li>
              <div className={classes.navItems}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/federicotorres"
                >
                  <Telegram
                    className={classes.img}
                    alt="telegram"
                    title="Send me a message"
                    sx={{ color: "gray", fontSize: 100 }}
                  />
                </a>
                <h5>Send message</h5>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
