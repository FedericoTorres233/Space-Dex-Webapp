import MainPageHeader from "../components/MainPage-Header";
import MainPageContent from "../components/MainPage-Content";
import classes from "../styles/Index.module.css";
import Footer from "../components/Footer";

// Pagina Inicial
export default function Home() {
  return (
    <>
      <body className={classes.body}>
        <div className={classes.wrapper}>
          <MainPageHeader />
          <div className={classes.section}>
            <MainPageContent />
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
}
