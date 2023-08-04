import styles from './ProductList.module.scss'
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import ProductLists from '../../components/ProductListsComponent/ProductLists'
export default function ProductList() {
  
    return (
        <div className={styles.Product_container}>
          <Header />
          <div className={styles.home}>
            <NavBar />
            <div className={styles.body}>
              <div className={styles.content}>
                <ProductLists/>
              </div>
              <div className={styles.footer}><Footer/></div>
            </div>
          </div>
        </div>
  )
}
