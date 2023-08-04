import styles from "./CreateProduct.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer"

export default function CreateProduct() {
  return (
    <div className={styles.createProduct_container}>
    <Header />
    <div className={styles.home}>
      <NavBar />
      <div className={styles.body}>
        <div className={styles.content}>
            <h1>New Product</h1>
            <form action="#">
                <div className={styles.form_group}>
                    <p>Image</p>
                    <input type="file" />
                </div>
                <div className={styles.form_group}>
                    <p>Name</p>
                    <input type="text" placeholder=" Apple Airpods"/>
                </div>
                <div className={styles.form_group}>
                    <p>Stock</p>
                    <input type="text" placeholder=" 123"/>
                </div>
                <div className={styles.form_group}>
                    <p>Active</p>
                    <select name="active" id="active">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <button className={styles.create}>Create</button>
            </form>
        </div>
        <div className={styles.footer}><Footer/></div>
      </div>
    </div>
  </div>
  )
}
