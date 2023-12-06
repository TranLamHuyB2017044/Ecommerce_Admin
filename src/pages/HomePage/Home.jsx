import styles from "./Home.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Future from "../../components/FutureComponent/Future";
import Chart from "../../components/ChartComponent/Chart";
import Footer from "../../components/FooterComponent/Footer";
import UserInfo from "../../components/UserInfoComponent/UserInfo";
function Home() {
  
  return (
    <div className={styles.home_container}>
      <Header />
      <div className={styles.home}>
        <NavBar />
        <div className={styles.body}>
          <div className={styles.content}>
            <Future/>
            <UserInfo/>
            <Chart/>
          </div>
          <div className={styles.footer}><Footer/></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
