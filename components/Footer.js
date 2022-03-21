// Footer general
import classes from "../styles/Footer.module.css";
import Emoji from "./utils/Emoji";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>SpaceDex <Emoji symbol="☄️" label="rocket" /> - A non profitable project by Federico Torres</div>
    </footer>
  );
}
