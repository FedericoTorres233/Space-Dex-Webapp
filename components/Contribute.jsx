import ContactItem from "./ContactItem";
import Emoji from "./utils/Emoji";

export default function Contribute({classes}) {
  return (
    <>
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
