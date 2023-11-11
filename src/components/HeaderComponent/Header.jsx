import styles from "./Header.module.scss";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Logout } from "../../redux/userStore";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.currentUser.data.others);
  const username = user.username;
  const useId = user._id;
  const avatar = user.avatar;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem("persist:root");
    localStorage.removeItem("access_token");
    dispatch(Logout());
    navigate("/login");
  };
  return (
    <div className={styles.header_container}>
      <div className={styles.header_left}>
        <Link to="/" className={styles.header_logo}>
          CamileAdmin
        </Link>
        <div className={styles.search_header}>
          <MenuOutlinedIcon />
          <div className={styles.search_container}>
            <input type="text" placeholder="Search" />
            <SearchOutlinedIcon />
          </div>
        </div>
      </div>
      <div className={styles.header_right}>
        <div className={styles.header_icons}>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneOutlinedIcon color="action" />
          </Badge>
          <SettingsRoundedIcon />
        </div>
        <div className={styles.header_img}>
          <img
            onClick={() => setShowMenu(!showMenu)}
            src={avatar}
            alt="img-top"
          />
          {showMenu && (
            <div className={styles.subMenu}>
              <div className={styles.info}>
                <h2>{username}</h2>
                <p>Web Designer</p>
              </div>
              <ul>
                <li>
                  <Link to={`/user/:${useId}`}  className={styles.my_profile}>
                    <PersonOutlinedIcon /> My Profile
                  </Link>
                </li>
                <li>
                  <HelpOutlineOutlinedIcon /> Need Help ?
                </li>

                <li onClick={handleLogOut}>
                  <LogoutOutlinedIcon /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
