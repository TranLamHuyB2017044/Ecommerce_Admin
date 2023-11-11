import styles from "./DetailProduct.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import { chartProduct } from "../../data";
import { useEffect, useState } from "react";
import { publicRequest } from "../../request";
import Alert from "../../components/AlertComponent/Alert";
import { useForm } from "react-hook-form";

export default function DetailProduct() {
  const [product, setProduct] = useState({});
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [newProduct, setnewProduct] = useState({});
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getProduct = async () => {
      const rs = await publicRequest.get(`/product/${id}`);
      setProduct(rs.data);
    };
    getProduct();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    product.img?.map((item, index) => {
      if (index === 3) {
        setImg(item.url_img);
      }
      return item.url_img;
    });
  }, [product]);

  const onChange = (e) => {
    setnewProduct({ ...product, [e.target.name]: e.target.value });
  };
  const { handleSubmit, register } = useForm({});

  const onSubmit = async (data) => {
    try {
      let { categories, size, color, title, desc, price, inStock } = data;
      if (
        categories.length === 0 &&
        size.length === 0 &&
        color.length === 0 &&
        title.length === 0 &&
        desc.length === 0 &&
        price.length === 0 &&
        inStock.length === 0 &&
        images.length === 0
      ) {
        Alert.Alert("error", "You must select at least one");
      } else {
        const arrayCategories = categories.split(",");
        const arraySize = size.split(",");
        const arrayColor = color.split(",");
        const token = localStorage.getItem("access_token");
        const formData = new FormData();
        if (images.length > 0) {
          for (let i = 0; i < images.length; i++) {
            formData.append("img", images[i]);
          }
        } else formData.append("img", product.img);

        if (categories.length > 0) {
          for (let i = 0; i < arrayCategories.length; i++) {
            formData.append(`categories[${i}]`, arrayCategories[i]);
          }
        } else formData.append("categories", product.categories);
        if (size.length > 0) {
          for (let i = 0; i < arraySize.length; i++) {
            formData.append(`size[${i}]`, arraySize[i]);
          }
        } else formData.append("size", product.size);
        if (color.length > 0) {
          for (let i = 0; i < arrayColor.length; i++) {
            formData.append(`color[${i}]`, arrayColor[i]);
          }
        } else formData.append("color", product.color);
        if (title.length > 0) {
          formData.append("title", title);
        } else formData.append("title", product.title);
        if (desc.length > 0) {
          formData.append("desc", desc);
        } else formData.append("desc", product.desc);
        if (price.length > 0) {
          formData.append("price", price);
        } else formData.append("price", product.price);
        if (inStock.length > 0) {
          formData.append("inStock", inStock);
        } else formData.append("inStock", product.inStock);
        setLoading(true);
        await publicRequest
          .put(`/product/${id}`, formData, {
            headers: {
              token: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response.data);
            Alert.Alert("success", "Update successfully");
            setLoading(false);
          });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      Alert.Alert("error", error.response.data);
    }
    return false;
  };
  const handleDeleteProduct = async () => {
    Alert.Confirm('Are you sure to delete this product ?', 'question', '', 'Yes', 'No')
      .then((result) => {
        if (result.value) {
          // The user clicked "Yes"
          setLoading(true);
          const token = localStorage.getItem("access_token");
          publicRequest.delete(`/product/${id}`, {
            headers: {
              token: `Bearer ${token}`,
            },
          })
            .then(() => {
              setLoading(false);
              Alert.Alert("success", "Product deleted successfully");
              navigate('/product');
            })
            .catch(error => {
              const errorMessage = error.response?.data || "An error occurred.";
              Alert.Alert("error", errorMessage);
            });
        } else if (result.isDismissed) {
          return false
        }
      })
      .catch(error => {
        const errorMessage = error.response?.data || "An error occurred.";
        Alert.Alert("error", errorMessage);
      });
  }
  return (
    <div className={styles.detail_container}>
      <Header />
      <div className={styles.home}>
        <NavBar />
        <div className={styles.body}>
          <h1 className={styles.title_content}>Product</h1>

          <button onClick={handleDeleteProduct} className={styles.button_name}>
            Delete
          </button>

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
                  <tbody>
                    <tr>
                      <th>
                        <img src={img} alt="product img" />
                      </th>
                      <th>{product.title}</th>
                    </tr>
                    <tr>
                      <td>id: </td>
                      <td>{id}</td>
                    </tr>
                    <tr>
                      <td>sales: </td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>active: </td>
                      <td>yes</td>
                    </tr>
                    <tr>
                      <td>in stock: </td>
                      <td>{product.inStock}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.product_bottom}>
              {loading ? (
                <div className={styles.loading_spinner}></div>
              ) : (
                <div className={styles.form_update}>
                  <h2>Product Name</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form_group_left}>
                      <div className={styles.form_group}>
                        <label htmlFor="title">Title</label>
                        <input
                          id="title"
                          type="text"
                          name="title"
                          defaultValue={product.title}
                          onChange={onChange}
                          {...register("title")}
                        />
                      </div>
                      <div className={styles.form_group}>
                        <label htmlFor="desc">Desc</label>
                        <input
                          id="desc"
                          name="desc"
                          type="text"
                          defaultValue={product.desc}
                          onChange={onChange}
                          {...register("desc")}
                        />
                      </div>
                      <div className={styles.form_group}>
                        <label htmlFor="categories">Categories</label>
                        <input
                          id="categories"
                          name="categories"
                          type="text"
                          defaultValue={product.categories}
                          onChange={onChange}
                          {...register("categories")}
                        />
                      </div>
                      <div className={styles.form_group}>
                        <label htmlFor="size">Size</label>
                        <input
                          id="size"
                          name="size"
                          type="text"
                          defaultValue={product.size}
                          onChange={onChange}
                          {...register("size")}
                        />
                      </div>
                    </div>
                    <div className={styles.form_group_right}>
                      <div className={styles.form_group}>
                        <label htmlFor="color">Color</label>
                        <input
                          id="color"
                          name="color"
                          type="text"
                          defaultValue={product.color}
                          onChange={onChange}
                          {...register("color")}
                        />
                      </div>
                      <div className={styles.form_group}>
                        <label htmlFor="price">Price</label>
                        <input
                          id="price"
                          name="price"
                          type="number"
                          defaultValue={product.price}
                          onChange={onChange}
                          {...register("price")}
                        />
                      </div>
                      <div className={styles.form_group}>
                        <label htmlFor="inStock">In Stock</label>
                        <input
                          id="inStock"
                          name="inStock"
                          type="number"
                          defaultValue={product.inStock}
                          onChange={onChange}
                          {...register("inStock")}
                        />
                      </div>
                      <div className={styles.form_group}>
                        <label htmlFor="img">IMG</label>

                        <input
                          id="img"
                          {...register("img")}
                          type="file"
                          name="img"
                          onChange={(e) => setImages(e.target.files)}
                          multiple={true}
                        />
                      </div>
                      <button type="submit" className={styles.update}>
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              )}
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
