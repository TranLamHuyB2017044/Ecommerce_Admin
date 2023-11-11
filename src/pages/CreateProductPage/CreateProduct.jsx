import styles from "./CreateProduct.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { publicRequest } from "../../request";
import Alert from "../../components/AlertComponent/Alert";
import { useNavigate } from "react-router-dom";

// import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
export default function CreateProduct() {
  const [newProduct, setnewProduct] = useState({
    title: "",
    desc: "",
    categories: "",
    size: "",
    color: "",
    price: 0,
    inStock: 0,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const onChange = (e) => {
    setnewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const { handleSubmit, register } = useForm({});

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { categories, size, color, title, desc, price, inStock } = data;
      const arrayCategories = categories.split(",");
      const arraySize = size.split(",");
      const arrayColor = color.split(",");
      const token = localStorage.getItem("access_token");
      const formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append("img", images[i]);
      }
      for (let i = 0; i < arrayCategories.length; i++) {
        formData.append(`categories[${i}]`, arrayCategories[i]);
      }
      for (let i = 0; i < arrayColor.length; i++) {
        formData.append(`color[${i}]`, arrayColor[i]);
      }
      for (let i = 0; i < arraySize.length; i++) {
        formData.append(`size[${i}]`, arraySize[i]);
      }

      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("price", price);
      formData.append("inStock", inStock);
      await publicRequest
        .post("/product/", formData, {
          headers: {
            token: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          Alert.Alert("success", "Create product successfully");
        });
      navigate("/product");
    } catch (error) {
      Alert.Alert("error", error.response.data);
    }
    return false;
  };

  return (
    <div className={styles.createProduct_container}>
      <Header />
      <div className={styles.home}>
        <NavBar />
        <div className={styles.body}>
          <div className={styles.content}>
            <h1>New Product</h1>
            {loading ? (
              <div className={styles.loading_spinner}></div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form_content}>
                  <div className={styles.left_group}>
                    <div className={styles.form_group}>
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        placeholder=" Apple Airpods"
                        {...register("title")}
                        name="title"
                        onChange={onChange}
                        id="title"
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="desc">Decs</label>
                      <input
                        type="text"
                        placeholder=" Something about product"
                        {...register("desc")}
                        name="desc"
                        onChange={onChange}
                        id="desc"
                      />
                    </div>

                    <div className={styles.form_group}>
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        placeholder=" 123"
                        {...register("price")}
                        name="price"
                        onChange={onChange}
                        id="price"
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="inStock">inStock</label>
                      <input
                        type="number"
                        placeholder=" 123"
                        {...register("inStock")}
                        name="inStock"
                        onChange={onChange}
                        id="inStock"
                      />
                    </div>
                  </div>
                  <div className={styles.right_group}>
                    <div className={styles.form_group}>
                      <label htmlFor="categories">Categories</label>
                      <input
                        type="text"
                        placeholder="Adidas, Nike, Vans, Man, Woman"
                        {...register(`categories`)}
                        name="categories"
                        id="categories"
                        onChange={onChange}
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="color">Color</label>
                      <input
                        type="text"
                        placeholder="Blue White Black"
                        {...register(`color`)}
                        name="color"
                        id="color"
                        onChange={onChange}
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="size">Size</label>
                      <input
                        type="text"
                        placeholder="4 4.5 8 9"
                        {...register(`size`)}
                        name="size"
                        id="size"
                        onChange={onChange}
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="img">Image</label>
                      <input
                        id="img"
                        {...register("img")}
                        type="file"
                        name="img"
                        onChange={(e) => setImages(e.target.files)}
                        multiple={true}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className={styles.create}>
                  Create
                </button>
              </form>
            )}
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
