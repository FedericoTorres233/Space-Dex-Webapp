import classes from "../styles/MainPage-Content.module.css";
import Contribute from "./Contribute";
import DiscoverSection from "./DiscoverSection";

export default function MainPageContent() {
  return (
    <>
      <DiscoverSection classes={classes} />
      <Contribute classes={classes} />
    </>
  );
}
