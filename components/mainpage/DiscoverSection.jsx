import SimulationGif from "../../public/UniverseSandboxGIFMain.gif";
import ISSgifAnimated from "../../public/ISSgifAnimated.gif";
import Emoji from "../utils/Emoji";
import Image from "next/image";

export default function DiscoverSection({ classes }) {
  return (
    <>
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
    </>
  );
}
