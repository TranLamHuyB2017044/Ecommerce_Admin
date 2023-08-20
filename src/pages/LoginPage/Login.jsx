import styles from "./login.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { publicRequest } from "../../request";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignIn } from "../../redux/userStore";
import { useNavigate} from 'react-router-dom'
import MyAlert from '../../components/AlertComponent/Alert'
import * as yup from "yup";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const schema = yup
    .object({
      username: yup.string().required("username is required"),
      password: yup.string().required("password is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onAdLogin = async () => {
    try {
      const user = await publicRequest.post("/auth/login", {
        username,
        password,
      });
      dispatch(SignIn(user))
      if (user) {
        MyAlert.Alert('success', 'Login successful')
        redirect('/')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.form_container}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onAdLogin)}>
          <p>Username</p>
          <input
            {...register("username")}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className={styles.errors}>{errors.username?.message}</p>
          <p>Password</p>
          <input
            {...register("password")}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={styles.errors}>{errors.password?.message}</p>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
export default Login;
