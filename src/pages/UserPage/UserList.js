import styles from './UserList.module.scss'
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import UserLists from '../../components/UserListComponent/UserLists';
export default function UserList() {
  
    return (
        <div className={styles.user_container}>
          <Header />
          <div className={styles.home}>
            <NavBar />
            <div className={styles.body}>
              <div className={styles.content}>
                <UserLists/>
              </div>
              <div className={styles.footer}><Footer/></div>
            </div>
          </div>
        </div>
  )
}
