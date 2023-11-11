import styles from "./DetailUser.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function DetailUser() {
  return (
    <div className={styles.detail_container}>
      <Header />
      <div className={styles.home}>
        <NavBar />
        <div className={styles.body}>
          <h1 className={styles.title_content}>Profile User</h1>
          <div className={styles.content}>
            <div className={styles.over_view}>
              <div className={styles.img}>
                <img
                  src="https://i.pinimg.com/564x/98/90/25/98902569a74f39e4dc24636a652ba278.jpg"
                  alt="userImg"
                />
              </div>
              <div className={styles.info}>
                <h2 className={styles.fullname}>Kevin Anderson</h2>
                <h2 className={styles.job}>Web Designer</h2>
              </div>
              <div className={styles.social}>
                <TwitterIcon />
                <InstagramIcon />
                <FacebookOutlinedIcon />
                <LinkedInIcon />
              </div>
            </div>
            <div className={styles.edit_profile}>
              <h2>Overview</h2>
              <form action="#">
                <div className={styles.formGroup}>
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder=" Traore"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" id="lastname" placeholder=" Adame" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder=" Adame@gmail.com" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="phone"
                    id="phone"
                    placeholder=" +1 012 233 012"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    placeholder=" NewYork | Usa"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="img">Profile Image</label>
                  <input type="file" id="img" />
                </div>
                <button className={styles.save}>Save Changes</button>
              </form>
            </div>
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
