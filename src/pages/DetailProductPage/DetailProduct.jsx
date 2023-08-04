import styles from "./DetailProduct.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import { chartProduct } from "../../data";
export default function DetailProduct() {
  return (
    <div className={styles.detail_container}>
      <Header />
      <div className={styles.home}>
        <NavBar />
        <div className={styles.body}>
          <h1 className={styles.title_content}>Product</h1>
          <Link to="/product/create">
            <button className={styles.button_name}>Create</button>
          </Link>
          <div className={styles.content}>
            <div className={styles.product_top}>
              <div className={styles.chart_product}>
                <h3>Sales Performance</h3>
                <ResponsiveContainer width="100%" aspect={3}>
                  <LineChart
                    width={300}
                    height={200}
                    data={chartProduct}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis
                      dataKey="name"
                      stroke="#5550bd"
                      strokeDasharray={0}
                    />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 1 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className={styles.product_info}>
                <table>
                  <tr>
                    <th>
                      <img
                        src="https://hips.hearstapps.com/hmg-prod/images/apple-airpods-pro-amazon-sale-2023-1675781255.jpg?crop=0.668xw:1.00xh;0.0289xw,0&resize=1200:*"
                        alt="apple"
                      />
                    </th>
                    <th>Apple Airpods</th>
                  </tr>
                  <tr>
                    <td>id: </td>
                    <td>123</td>
                  </tr>
                  <tr>
                    <td>sales: </td>
                    <td>5123</td>
                  </tr>
                  <tr>
                    <td>active: </td>
                    <td>yes</td>
                  </tr>
                  <tr>
                    <td>in stock: </td>
                    <td>no</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className={styles.product_bottom}>
              <div className={styles.form_update}>
                <h2>Product Name</h2>
                <form action="#">
                  <div className={styles.form_group}>
                    <input type="text" placeholder=" Apple AirPods" />
                  </div>
                  <div className={styles.form_group}>
                    <p>In Stock</p>
                    <select name="instock" id="instock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className={styles.form_group}>
                    <p>Active</p>
                    <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className={styles.img_update}>
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/apple-airpods-pro-amazon-sale-2023-1675781255.jpg?crop=0.668xw:1.00xh;0.0289xw,0&resize=1200:*"
                  alt="apple"
                />
                <br />
                <input type="file" />
                <button className={styles.update}>Update</button>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
