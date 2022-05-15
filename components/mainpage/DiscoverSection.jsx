import Emoji from "../utils/Emoji";

export default function DiscoverSection() {
  return (
    <div className="py-28 px-2 grid place-items-center text-[#f0ffff] text-5xl">
      <h1>
        <strong>
          Discover the Universe! <Emoji symbol=":rocket:" />
        </strong>
      </h1>
      <h4 className="text-[#bd5eab] py-3 px-1 text-center">
        From a single electron to a galaxy, the Universe is complex and full of
        mysteries. Follow me in this journey and let&apos;s discover every part
        of it!
      </h4>
    </div>
  );
}
