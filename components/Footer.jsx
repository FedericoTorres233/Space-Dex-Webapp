// Footer general
import classes from "../styles/Footer.module.css";
import Emoji from "./utils/Emoji";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/FedericoTorres233/Space-Dex-Webapp"
        >
          <strong>SpaceDex </strong>
          <Emoji symbol=":comet:"/>{" "}
        </a>
        - A project by{" "}
        <a
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
