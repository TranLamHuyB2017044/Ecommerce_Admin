import styles from "./UserInfo.module.scss";
function UserInfo() {
  return (
    <div className={styles.userInfo_container}>
      <div className={styles.newUser_container}>
        <h2 className={styles.title}>New Join Members</h2>
        <div className={styles.member}>
          <img
            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/279505617_3149760731906345_6845756444812484616_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcyqnAeeY_MAX-udYRu&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDNkk9YtlGXJl-06nxBekQUSb3qdq8QOOs_093wFVtJCQ&oe=64E34BDD"
            alt="userImg"
          />
          <div className={styles.detail_info}>
            <p className={styles.fullName}>Huy Tran Lam</p>
            <p>Web Developer</p>
          </div>
        </div>
        <div className={styles.member}>
          <img
            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/279505617_3149760731906345_6845756444812484616_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcyqnAeeY_MAX-udYRu&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDNkk9YtlGXJl-06nxBekQUSb3qdq8QOOs_093wFVtJCQ&oe=64E34BDD"
            alt="userImg"
          />
          <div className={styles.detail_info}>
            <p className={styles.fullName}>Leo Messi</p>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className={styles.member}>
          <img
            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/279505617_3149760731906345_6845756444812484616_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcyqnAeeY_MAX-udYRu&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDNkk9YtlGXJl-06nxBekQUSb3qdq8QOOs_093wFVtJCQ&oe=64E34BDD"
            alt="userImg"
          />
          <div className={styles.detail_info}>
            <p className={styles.fullName}>Cristiano Ronaldo</p>
            <p>UI/UX Developer</p>
          </div>
        </div>
        <div className={styles.member}>
          <img
            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/279505617_3149760731906345_6845756444812484616_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcyqnAeeY_MAX-udYRu&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDNkk9YtlGXJl-06nxBekQUSb3qdq8QOOs_093wFVtJCQ&oe=64E34BDD"
            alt="userImg"
          />
          <div className={styles.detail_info}>
            <p className={styles.fullName}>Russ Linville</p>
            <p>Manager</p>
          </div>
        </div>
        <div className={styles.member}>
          <img
            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/279505617_3149760731906345_6845756444812484616_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcyqnAeeY_MAX-udYRu&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDNkk9YtlGXJl-06nxBekQUSb3qdq8QOOs_093wFVtJCQ&oe=64E34BDD"
            alt="userImg"
          />
          <div className={styles.detail_info}>
            <p className={styles.fullName}>Alisha Davidson</p>
            <p>Art Director</p>
          </div>
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
                  src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/279505617_3149760731906345_6845756444812484616_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcyqnAeeY_MAX-udYRu&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDNkk9YtlGXJl-06nxBekQUSb3qdq8QOOs_093wFVtJCQ&oe=64E34BDD"
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
                  src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/279505617_3149760731906345_6845756444812484616_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcyqnAeeY_MAX-udYRu&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDNkk9YtlGXJl-06nxBekQUSb3qdq8QOOs_093wFVtJCQ&oe=64E34BDD"
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
                  src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/279505617_3149760731906345_6845756444812484616_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcyqnAeeY_MAX-udYRu&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDNkk9YtlGXJl-06nxBekQUSb3qdq8QOOs_093wFVtJCQ&oe=64E34BDD"
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
                  src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/279505617_3149760731906345_6845756444812484616_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcyqnAeeY_MAX-udYRu&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDNkk9YtlGXJl-06nxBekQUSb3qdq8QOOs_093wFVtJCQ&oe=64E34BDD"
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
