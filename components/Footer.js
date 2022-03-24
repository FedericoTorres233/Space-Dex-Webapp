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
          SpaceDex <Emoji symbol="☄️" label="rocket" /> - A non profitable
          project by Federico Torres
        </a>
      </div>
    </footer>
  );
}
