// Footer general
import { FC } from "react";
import classes from "../styles/Footer.module.css";
import Emoji from "./utils/Emoji";

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/FedericoTorres233/Space-Dex-Webapp"
        >
          <strong>SpaceDex </strong>
          <Emoji symbol="☄️" label="rocket" />{" "}
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
};

export default Footer;
