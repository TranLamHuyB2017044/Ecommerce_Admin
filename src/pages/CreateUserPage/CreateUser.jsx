import styles from "./CreateUser.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import { useState } from "react";
import { publicRequest } from "../../request";
import { useDispatch } from "react-redux";
import { SignUp } from "../../redux/userStore";
import Alert from "../../components/AlertComponent/Alert";
export default function CreateUser() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const dispatch = useDispatch();
  const api = publicRequest();
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const onSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const rs = await api.post("/auth/register", newUser);
      dispatch(SignUp(rs));
      setLoading(false);
      Alert.Alert("success", "CreateUser successfully");
    } catch (error) {
      Alert.Alert("error", error.response.data);
    }
  };
  const enterSignup = async (e) => {
    if (e.key === "enter") {
      onSignup();
    }
  };
  return (
    <div className={styles.Create_container}>
      <Header />
      <div className={styles.home}>
        <NavBar />
        <div className={styles.body}>
          <h1 className={styles.title_content}>Create User</h1>
          {loading ? (
            <div className={styles.loading_spinner}></div>
          ) : (
            <div className={styles.content}>
              <form action="#" onSubmit={onSignup}>
                <div className={styles.form_content}>
                  <div className={styles.group1}>
                    <div className={styles.formGroup}>
                      <p htmlFor="username">UserName</p>
                      <input
                        type="text"
                        id="username"
                        placeholder=" Traore"
                        onChange={onChange}
                        name="username"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <p htmlFor="email">Email</p>
                      <input
                        type="email"
                        id="email"
                        placeholder=" Adame@gmail.com"
                        onChange={onChange}
                        name="email"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <p htmlFor="email">IsAdmin</p>
                      <select name="isAdmin" id="isAdmin" onChange={onChange}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.group2}>
                    <div className={styles.formGroup}>
                      <p htmlFor="address">Address</p>
                      <input
                        type="text"
                        id="address"
                        placeholder=" NewYork | Usa"
                        onChange={onChange}
                        name="address"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <p htmlFor="phone">Phone</p>
                      <input
                        type="tel"
                        id="phone"
                        placeholder=" +1 012 233 012"
                        onChange={onChange}
                        name="phone"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <p htmlFor="password">Password</p>
                      <input
                        type="password"
                        id="password"
                        placeholder=" +1 012 233 012"
                        onChange={onChange}
                        name="password"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  onKeyDown={enterSignup}
                  className={styles.save}
                >
                  Create
                </button>
              </form>
            </div>
          )}
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
