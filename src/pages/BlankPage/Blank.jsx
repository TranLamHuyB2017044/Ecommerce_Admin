import styles from "./Blank.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer"
function Home() {
  return (
    <div className={styles.home_container}>
      <Header />
      <div className={styles.home}>
        <NavBar />
        <div className={styles.body}>
          <div className={styles.content}>
            <p>There nothing here !</p>
          </div>
          <div className={styles.footer}><Footer/></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
