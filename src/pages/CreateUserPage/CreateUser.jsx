import styles from "./CreateUser.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";

export default function CreateUser() {
  return (
    <div className={styles.Create_container}>
      <Header />
      <div className={styles.home}>
        <NavBar />
        <div className={styles.body}>
          <h1 className={styles.title_content}>Create User</h1>
          <div className={styles.content}>
            <form action="#">
              <div className={styles.group1}>
                <div className={styles.formGroup}>
                  <p htmlFor="firstname">First Name</p>
                  <input type="text" id="firstname" placeholder=" Traore" />
                </div>
                <div className={styles.formGroup}>
                  <p htmlFor="lastname">Last Name</p>
                  <input type="text" id="lastname" placeholder=" Adame" />
                </div>
                <div className={styles.formGroup}>
                  <p htmlFor="email">Email</p>
                  <input
                    type="text"
                    id="email"
                    placeholder=" Adame@gmail.com"
                  />
                </div>
                <div className={styles.formGroup}>
                  <p htmlFor="gender">Gender</p>
                  <div className={styles.radio}>
                    <input type="radio" id="male" name="gender" value="Male" />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                    />
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="Other"
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
                <button className={styles.save}>Create</button>
              </div>
              <div className={styles.group2}>
                <div className={styles.formGroup}>
                  <p htmlFor="address">Address</p>
                  <input
                    type="text"
                    id="address"
                    placeholder=" NewYork | Usa"
                  />
                </div>
                <div className={styles.formGroup}>
                  <p htmlFor="phone">Phone</p>
                  <input
                    type="phone"
                    id="phone"
                    placeholder=" +1 012 233 012"
                  />
                </div>
                <div className={styles.formGroup}>
                  <p htmlFor="password">Password</p>
                  <input
                    type="password"
                    id="password"
                    placeholder=" +1 012 233 012"
                  />
                </div>
                <div className={styles.formGroup}>
                  <p htmlFor="active">Active</p>
                  <select name="actice" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* <div className={styles.formGroup}>
                  <label htmlFor="img">Profile Image</label>
                  <input type="file" id="img" />
                </div> */}
              </div>
            </form>
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
