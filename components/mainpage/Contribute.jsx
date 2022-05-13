import ContactItem from "./ContactItem";
import Emoji from "../utils/Emoji";

export default function Contribute() {
  return (
    <>
      <h4 className="py-0 px-40 grid place-items-center text-6xl text-white">
        <strong>
          Contribute to this project <Emoji symbol=":satellite:" />
        </strong>
      </h4>
      <div className="w-full">
        <nav>
          <ul className="flex justify-around items-center list-none">
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
