import { useEffect, useState } from "react";
import styles from "./UserInfo.module.scss";
import { publicRequest } from "../../request";
import { Link, useNavigate } from "react-router-dom";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
function UserInfo() {
  const [user, setUser] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
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
  const api = publicRequest();
  const navigate = useNavigate()
  useEffect(() => {
    const UserList = async () => {
      
      const respone = await api.get("/user/");
      setUser(respone.data);
    };
    UserList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getUserOrders = async () => {
      const rs = await api.get(`/order/`);
      setUserOrders(rs.data);
    };
    getUserOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleChangeStatus = async (type, id) => {
  //   try {
  //     const updatedOrders = [...userOrders];
  //     const orderIndex = updatedOrders.findIndex((order) => order._id === id);
  //     if (orderIndex !== -1) {
  //       updatedOrders[orderIndex].status = type;
  //       setUserOrders(updatedOrders);
  //       await api
  //         .put(
  //           `/order/${id}`,
  //           { status: type }

  //         )
  //         .then((data) => {
  //           console.log(data);
  //         });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className={styles.userInfo_container}>
      <div className={styles.newUser_container}>
        <h2 className={styles.title}>New Join Members</h2>
        <div className={styles.member_container}>
          {user.map((user) => (
            <div key={user._id} onClick={() => navigate(`/user/${user._id}`)} className={styles.member}>
              <img src={user.avatar} alt={user.avatar} />
              <div className={styles.detail_info}>
                <p className={styles.fullName}>{user.username} </p>
                <p>{user.email}</p>
              </div>
            </div>
          )).reverse()}
        </div>
      </div>
      <div className={styles.latest_trans}>
        <h2 className={styles.title}>Latest Transaction</h2>
        <table>
          <tbody>
            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            {userOrders
              .map((item) => (
                <tr key={item._id}>
                  <td className={styles.user}>
                    <img src={item.userId.avatar} alt="userImg" />
                    <p className={styles.name}>{item.userId.username}</p>
                  </td>
                  <td>
                    {new Date(item.createdAt).getDate()}{" "}
                    {months[new Date(item.createdAt).getMonth()]}{" "}
                    {new Date(item.createdAt).getFullYear()}
                  </td>
                  <td>
                    {" "}
                    {item.items.reduce(
                      (total, item) =>
                        total + item.productId.price * item.quantity,
                      0
                    ).toFixed(2)}
                    $
                  </td>

                  <td
                    style={{
                      color:
                        item.status === "Pending"
                          ? "blue"
                          : item.status === "Accepted"
                          ? "green"
                          : "red",
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      
                    }}
                  >
                      {item.status}
                      <Link to={'/order/' + item._id}
                        
                        className={styles.detail}
                      >
                        <DriveFileRenameOutlineOutlinedIcon/>
                      </Link>
                    
                  </td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserInfo;
