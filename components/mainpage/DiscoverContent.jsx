import SimulationGif from "../../public/UniverseSandboxGIFMain.gif";
import ISSgifAnimated from "../../public/ISSgifAnimated.gif";
import Emoji from "../utils/Emoji";
import Image from "next/image";

export default function DiscoverContent() {
  return (
    <div className="py-20 px-8 bg-[#252736] w-full mb-8 grid place-items-center text-4xl shadow-lg shadow-black">
      <div className="flex justify-between text-center p-4">
        <Image
          height={"650%"}
          width={"650%"}
          className="rounded-[50px]"
          title="ISS trayectory plot"
          src={ISSgifAnimated}
          alt="gif"
          unoptimized={true}
        />
        <h4 className="pl-20 grid place-items-center text-[#c38fd3]">
          Animated gifs, graphs and code examples to learn science{" "}
          <Emoji symbol=":telescope:" /> while also learning to code{" "}
          <Emoji symbol=":male-technologist:" />!
        </h4>
      </div>
      <h4 className="text-[#c38fd3]">
        Simulations using{" "}
        <a
          className="text-[#c236aa] hover:text-[#742466]"
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
          className="rounded-[50px]"
          alt="UniverseSandbox2 - GIF"
          title="UniverseSandbox2 - GIF"
          unoptimized={true}
        />
      </div>
    </div>
  );
}
