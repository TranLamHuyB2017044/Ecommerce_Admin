import styles from "./DetailUser.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useEffect, useState } from "react";
import { publicRequest } from "../../request";
import { useParams } from "react-router-dom";
import Alert from "../../components/AlertComponent/Alert";
export default function DetailUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const api = publicRequest();
  const Address = user.address;
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    phone: '',
    address: ''
  });
  const [avatar, setAvatar] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUserInfo = async () => {
      const rs = await api.get(`/user/${id}`);
      setUser(rs.data);
    };
    getUserInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    setNewUser({...newUser,  [e.target.name]: e.target.value });
  };
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      let { username, email, phone, address } = newUser;
      console.log(username, email, phone, address);
      if (
        username.length === 0 &&
        email.length === 0 &&
        phone.length === 0 &&
        address.length === 0 &&
        avatar.length === 0
      ) {
        Alert.Alert("error", "You must fill at least one");
      } else {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("avatar", avatar[0]); // Assuming avatar is a File object

        // Add additional fields as needed

        setLoading(true);
        await api.put(`user/${id}`, formData).then((response) => {
          console.log(response.data);
          setUser(response.data);
          setLoading(false);
          Alert.Alert("success", "Update successfully");
        });
      }
    } catch (error) {
      Alert.Alert("error", error.response.data);
    }
  };
  return (
    <div className={styles.detail_container}>
      <Header />
      <div className={styles.home}>
        <NavBar />
        <div className={styles.body}>
          <h1 className={styles.title_content}>Profile User</h1>
          {loading ? (
            <div className={styles.loading_spinner}></div>
          ) : (
            <div className={styles.content}>
              <div className={styles.over_view}>
                <div className={styles.img}>
                  <img src={user.avatar} alt="userImg" />
                </div>
                <div className={styles.info}>
                  <h2 className={styles.fullname}>{user.username}</h2>
                  <h2 className={styles.address}>{Address}</h2>
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
                <form action="#" onSubmit={handleUpdateUser}>
                  <div className={styles.formGroup}>
                    <label htmlFor="username">UserName</label>
                    <input
                      type="text"
                      id="username"
                      placeholder=" Traore"
                      defaultValue={user.username}
                      onChange={onChange}
                      name="username"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      placeholder=" Adame@gmail.com"
                      defaultValue={user.email}
                      onChange={onChange}
                      name="email"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="phone"
                      id="phone"
                      placeholder=" +1 012 233 012"
                      defaultValue={user.phone}
                      onChange={onChange}
                      name="phone"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      placeholder=" NewYork | Usa"
                      defaultValue={user.address}
                      onChange={onChange}
                      name="address"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="img">Profile Image</label>
                    <input
                      type="file"
                      id="img"
                      onChange={(e) => setAvatar(e.target.files)}
                    />
                  </div>
                  <button type="submit" className={styles.save}>
                    Save Changes
                  </button>
                </form>
              </div>
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
