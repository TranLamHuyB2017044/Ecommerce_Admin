import styles from './Header.module.scss';
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Header() {
  return (
   <div className={styles.header_container}>
        <div className={styles.header_left}>
            <a href='/' className={styles.header_logo}>CamileAdmin</a>
            <div className={styles.search_header}>
                <MenuOutlinedIcon/>
                <div className={styles.search_container}>
                    <input type='text' placeholder='Search'/>
                    <SearchOutlinedIcon/>
                </div>
            </div>
        </div>
        <div className={styles.header_right}>
            <div className={styles.header_icons}>
                <Badge badgeContent={4} color="primary">
                    <NotificationsNoneOutlinedIcon color="action" />
                </Badge>
                <SettingsRoundedIcon/>
            </div>
            <div className={styles.header_img}>
                <img src='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg' alt='img-top'/>
            </div>
        </div>
   </div>
  );
}

export default Header;