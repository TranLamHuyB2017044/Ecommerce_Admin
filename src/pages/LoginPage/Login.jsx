import styles from "./login.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { publicRequest } from "../../request";
import { useForm } from "react-hook-form";
import { SignIn } from "../../redux/userStore";
import { useNavigate } from "react-router-dom";
import MyAlert from "../../components/AlertComponent/Alert";
import Cookies from "js-cookie";

function Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const api = publicRequest();
  const { register, handleSubmit } = useForm();

  const onAdLogin = async () => {
    setLoading(true);
    try {
      const user = await api.post("/auth/login", {
        username,
        password,
      });
      if (user) {
        const isAdmin = user?.data.others.isAdmin;
        if (isAdmin === true) {
          window.localStorage.setItem("access_token", user?.data.accessToken);
          Cookies.set('refreshToken', user?.data.refreshToken, { expires: 365 })
          dispatch(SignIn(user));
          setLoading(false);
          MyAlert.Alert("success", "Login successful");
          redirect("/");
        } else {
          setLoading(false);
          MyAlert.Alert("error", "You are not authorized");
        }
      }
    } catch (error) {
      MyAlert.Alert("error", error.response?.data);
    }
    setLoading(false)
  };

  const onKeyAdLogin = (e) => {
    if (e.key === "enter") {
      onAdLogin();
    }
  };
  return (
    <div className={styles.login_container}>
      {loading ? (
        <div className={styles.loading_spinner}></div>
      ) : (
        <div className={styles.form_container}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onAdLogin)}>
            <p>Username</p>
            <input
              {...register("username")}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p>Password</p>
            <input
              {...register("password")}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" onKeyDown={onKeyAdLogin} />
          </form>
        </div>
      )}
    </div>
  );
}
export default Login;
