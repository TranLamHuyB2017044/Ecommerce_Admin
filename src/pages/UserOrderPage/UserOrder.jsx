import styles from "./UserOrder.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavbarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import { useEffect, useState } from "react";
import { publicRequest } from "../../request";
import { useParams } from "react-router-dom";
export default function UserOrder() {
  const [userOrders, setUserOrders] = useState({});
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const api = publicRequest();
  const { id } = useParams();
  useEffect(() => {
    const getUserOrders = async () => {
      const rs = await api.get(`/order/${id}`);
      setUserOrders(rs.data);
    };
    getUserOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeStatus = async (type, id) => {
    try {
      const rs = await api.put(
        `/order/${id}`,
        { status: type }
      );
      window.location.reload();
      setUserOrders(rs.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.order_container}>
      <Header />
      <div className={styles.home}>
        <NavBar />
        <div className={styles.body}>
          <h2 className={styles.title_content}>
            Order Number<p style={{ color: "red" }}> #{id}</p>
          </h2>
          <div className={styles.items_sumary}>
            <div className={styles.head_title}>
              <h3>Item sumary</h3>
              <p>Quantity</p>
              <p>Price</p>
              <p>Total Price</p>
            </div>
            {userOrders?.items?.map((item) => (
              <div key={item._id} className={styles.items}>
                <div className={styles.product_title}>
                  <img src={item.productId?.img?.[3]?.url_img} alt="product_img" />
                  <div className={styles.product_name}>
                    {item.productId.title}
                  </div>
                  <div className={styles.product_varian}>
                    Varian: {item.color}, {item.size}
                  </div>
                </div>
                <p>x {item.quantity}</p>
                <p>${item.productId.price}</p>
                <p>${item.productId.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className={styles.customer_detail}>
            <div className={styles.header_detail}>
              <h2>Customer And Order Details</h2>
              <div className={styles.status}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  Status:{" "}
                  <p
                    style={{
                      color:
                        userOrders.status === "Pending"
                          ? "blue"
                          : userOrders.status === "Accepted"
                          ? "green"
                          : "red",
                    }}
                  >
                    {userOrders.status}
                  </p>
                </div>
                {userOrders.status === "Pending" && (
                  <>
                    <button
                      onClick={() =>
                        handleChangeStatus("Accepted", userOrders._id)
                      }
                      className={styles.accept}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() =>
                        handleChangeStatus("Rejected", userOrders._id)
                      }
                      className={styles.reject}
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className={styles.customer_info}>
              <div className={styles.info}>
                <p>Order Created</p>
                <p>
                  {" "}
                  {daysOfWeek[new Date(userOrders.createdAt).getDay()]},{" "}
                  {months[new Date(userOrders.createdAt).getMonth()]}{" "}
                  {new Date(userOrders.createdAt).getDate()}{" "}
                  {new Date(userOrders.createdAt).getFullYear()} -{" "}
                  {new Date(userOrders.createdAt).getHours() < 10
                    ? "0" + new Date(userOrders.createdAt).getHours()
                    : new Date(userOrders.createdAt).getHours()}
                  :
                  {new Date(userOrders.createdAt).getMinutes() < 10
                    ? "0" + new Date(userOrders.createdAt).getMinutes()
                    : new Date(userOrders.createdAt).getMinutes()}{" "}
                  {new Date(userOrders.createdAt).getHours() > 11 ? "PM" : "AM"}
                </p>
              </div>
              <div className={styles.info}>
                <p>Customer Name</p>
                <p>{userOrders?.userId?.username}</p>
              </div>
              <div className={styles.info}>
                <p>Address</p>
                <p>{userOrders.address}</p>
              </div>
              <div className={styles.info}>
                <p>Phone</p>
                <p>{userOrders.phone}</p>
              </div>
              <div className={styles.info}>
                <p>Payment Method</p>
                <p>{userOrders.payment}</p>
              </div>
              <div className={styles.info}>
                <p>Shipping Method</p>
                <p>{userOrders.shipping}</p>
              </div>
              <div className={styles.info}>
                <p>Sub Total</p>
                <p>
                  {userOrders?.items?.reduce(
                    (total, item) =>
                      total + item.productId.price * item.quantity,
                    0
                  )}
                  $
                </p>
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
