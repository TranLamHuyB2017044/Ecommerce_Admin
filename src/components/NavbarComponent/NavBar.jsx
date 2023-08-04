import styles from "./NavBar.module.scss";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className={styles.NavBar_container}>
      <section className={styles.NavBar_top}>
        <div className={styles.NavBar_item}>
          <WindowOutlinedIcon />
          <Link
            to="/"
            className={styles.item_title}
            style={{ textDecoration: "none", color: "black", opacity: "0.8" }}
          >
            <p>Dashboard</p>
          </Link>
        </div>
        <div className={styles.NavBar_item}>
          <StorageOutlinedIcon />
          <Link
            to="/user"
            className={styles.item_title}
            style={{ textDecoration: "none", color: "black", opacity: "0.8" }}
          >
            <p>Users</p>
          </Link>
        </div>
        <div className={styles.NavBar_item}>
          <AutoAwesomeMosaicOutlinedIcon />
          <Link
            to="/user/create"
            className={styles.item_title}
            style={{ textDecoration: "none", color: "black", opacity: "0.8" }}
          >
            <p>Create User</p>
          </Link>
        </div>
        <div className={styles.NavBar_item}>
          <SubjectOutlinedIcon />
          <Link
            to="/product"
            className={styles.item_title}
            style={{ textDecoration: "none", color: "black", opacity: "0.8" }}
          >
            <p>Product</p>
          </Link>
        </div>
        <div className={styles.NavBar_item}>
          <LeaderboardOutlinedIcon />
          <Link
            to="/product/create"
            className={styles.item_title}
            style={{ textDecoration: "none", color: "black", opacity: "0.8" }}
          >
            <p>Create Product</p>
          </Link>
        </div>
      </section>
      <p style={{ paddingLeft: "3rem", fontSize: "1.5rem" }}>PAGES</p>
      <section className={styles.NavBar_bottom}>
        <div className={styles.NavBar_item}>
          <PersonOutlinedIcon />
          <p className={styles.item_title}>Profile</p>
        </div>
        <div className={styles.NavBar_item}>
          <HelpOutlineOutlinedIcon />
          <p className={styles.item_title}>F.A.Q</p>
        </div>
        <div className={styles.NavBar_item}>
          <MailOutlineOutlinedIcon />
          <p className={styles.item_title}>Contact</p>
        </div>
        <div className={styles.NavBar_item}>
          <ListAltOutlinedIcon />
          <p className={styles.item_title}>Register</p>
        </div>
        <div className={styles.NavBar_item}>
          <LogoutOutlinedIcon />
          <p className={styles.item_title}>Login</p>
        </div>
        <div className={styles.NavBar_item}>
          <DoDisturbOnOutlinedIcon />
          <p className={styles.item_title}>Error 404</p>
        </div>
        <div className={styles.NavBar_item}>
          <InsertDriveFileOutlinedIcon />
          <Link
            to="*"
            className={styles.item_title}
            style={{ textDecoration: "none", color: "black", opacity: "0.8" }}
          >
            <p>Blank</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
