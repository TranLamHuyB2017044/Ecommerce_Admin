import { useEffect, useState } from "react";
import styles from "./UserInfo.module.scss";
import {  publicRequest } from "../../request";
function UserInfo() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const UserList = async () => {
      const token = localStorage.getItem('access_token');
      const respone = await publicRequest.get("/user/", { headers: {token: `Bearer ${token}`}});
      setUser(respone.data);
    };
    UserList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [  ]);
  return (
    <div className={styles.userInfo_container}>
      <div className={styles.newUser_container}>
        <h2 className={styles.title}>New Join Members</h2>
        <div className={styles.member_container}>
          {user.map((user) => (
            <div key={user._id} className={styles.member}>
              <img
                src={user.avatar }
                alt={user.avatar }
              />
              <div className={styles.detail_info}>
                <p className={styles.fullName}>{user.username} </p>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
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
            <tr>
              <td className={styles.user}>
                <img
                  src="https://mcdn.coolmate.me/image/June2023/tom-and-jerry-meme-cuc-hai-huoc-de-thuong-1447_451_(1).jpeg"
                  alt="userImg"
                />
                <p className={styles.name}>Davinci Carlson</p>
              </td>
              <td>30 May 2022</td>
              <td>$ 200.2</td>
              <td style={{ color: "green" }}>Approve</td>
            </tr>
            <tr>
              <td className={styles.user}>
                <img
                  src="https://mcdn.coolmate.me/image/June2023/tom-and-jerry-meme-cuc-hai-huoc-de-thuong-1447_451_(1).jpeg"
                  alt="userImg"
                />
                <p className={styles.name}>Davinci Carlson</p>
              </td>
              <td>30 May 2022</td>
              <td>$ 200.2</td>
              <td style={{ color: "red" }}>Rejected</td>
            </tr>
            <tr>
              <td className={styles.user}>
                <img
                  src="https://mcdn.coolmate.me/image/June2023/tom-and-jerry-meme-cuc-hai-huoc-de-thuong-1447_451_(1).jpeg"
                  alt="userImg"
                />
                <p className={styles.name}>Davinci Carlson</p>
              </td>
              <td>30 May 2022</td>
              <td>$ 200.2</td>
              <td style={{ color: "blue" }}>Pending</td>
            </tr>
            <tr>
              <td className={styles.user}>
                <img
                  src="https://mcdn.coolmate.me/image/June2023/tom-and-jerry-meme-cuc-hai-huoc-de-thuong-1447_451_(1).jpeg"
                  alt="userImg"
                />
                <p className={styles.name}>Davinci Carlson</p>
              </td>
              <td>30 May 2022</td>
              <td>$ 200.2</td>
              <td style={{ color: "green" }}>Approved</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserInfo;
