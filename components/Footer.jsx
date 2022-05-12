// Footer general
import Emoji from "./utils/Emoji";

export default function Footer() {
  return (
    <footer className="mt-20 grid text-white bg-slate-900 place-items-center min-h-[4rem]">
      <div>
        <a
          className="hover:text-gray-400 transition-all ease-in-out"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/FedericoTorres233/spacedex"
        >
          <strong>SpaceDex </strong>
          <Emoji symbol=":comet:" />{" "}
        </a>
        - A project by{" "}
        <a
          className="hover:text-gray-400 transition-all ease-in-out"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/FedericoTorres233"
        >
          <strong>Federico Torres</strong>
        </a>
      </div>
    </footer>
  );
}
