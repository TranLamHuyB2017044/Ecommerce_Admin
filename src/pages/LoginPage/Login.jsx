import styles from "./login.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { publicRequest } from "../../request";
import { useForm } from "react-hook-form";
import { SignIn } from "../../redux/userStore";
import { useNavigate } from "react-router-dom";
import MyAlert from "../../components/AlertComponent/Alert";

function Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const { register, handleSubmit } = useForm();

  const onAdLogin = async () => {
    setLoading(true);
    try {
      const user = await publicRequest.post("/auth/login", {
        username,
        password,
      });
      if (user) {
        const isAdmin = user?.data.others.isAdmin;
        if (isAdmin === true) {
          window.localStorage.setItem("access_token", user?.data.accessToken);
          MyAlert.Alert("success", "Login successful");
          dispatch(SignIn(user));
          setLoading(false);
          redirect("/");
        } else {
          MyAlert.Alert("error", "You are not authorized");
        }
      }
    } catch (error) {
      MyAlert.Alert("error", error.response?.data);
    }
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
