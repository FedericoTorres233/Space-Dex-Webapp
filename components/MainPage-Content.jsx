import Image from "next/image";
import Emoji from "./utils/Emoji";
import classes from "../styles/MainPage-Content.module.css";
import ISSgifAnimated from "../public/ISSgifAnimated.gif";
import SimulationGif from "../public/UniverseSandboxGIFMain.gif";
import ContactItem from "./ContactItem";

export default function MainPageContent() {
  return (
    <>
      {/*Discover Section */}
      <div className={classes.discoverh1}>
        <h1>
          <strong>
            Discover the Universe! <Emoji symbol=":rocket:" />
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
            <Emoji symbol=":telescope:" /> while also learning to code{" "}
            <Emoji symbol=":male-technologist:" />!
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
          <Emoji symbol=":ringed_planet:" /> and videos{" "}
          <Emoji symbol=":movie_camera:" />
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
          Contribute to this project <Emoji symbol=":satellite:" />
        </strong>
      </h4>
      <div className={classes.contactMe}>
        <nav>
          <ul className={classes.contactMeNav}>
            <ContactItem
              type={"github"}
              text_below={"Pull Request"}
              title={"Send a pull request"}
              link={"https://github.com/FedericoTorres233/spacedex"}
            />
            <ContactItem
              type={"gmail"}
              text_below={"Email"}
              title={"Email"}
              link={"mailto:federicotorres233@protonmail.com"}
            />
            <ContactItem
              type={"telegram"}
              text_below={"Send message"}
              title={"Send me a message"}
              link={"https://t.me/federicotorres"}
            />
          </ul>
        </nav>
      </div>
    </>
  );
}
