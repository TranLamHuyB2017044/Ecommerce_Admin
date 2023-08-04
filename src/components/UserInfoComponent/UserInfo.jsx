import styles from "./UserInfo.module.scss";
function UserInfo() {
  return (
    <div className={styles.userInfo_container}>
      <div className={styles.newUser_container}>
        <h2 className={styles.title}>New Join Members</h2>
        <div className={styles.member}>
          <img
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/279638355_715296559610620_976661376510071519_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8xbrkJ3LxHoAX81ekCu&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDWd9O21g_Y-tOYzXtK4FgYHCvHbChlB_DP32n47IGMzg&oe=64CD7AC0"
            alt="userImg"
          />
          <div className={styles.detail_info}>
            <p className={styles.fullName}>Huy Tran Lam</p>
            <p>Web Developer</p>
          </div>
        </div>
        <div className={styles.member}>
          <img
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/279638355_715296559610620_976661376510071519_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8xbrkJ3LxHoAX81ekCu&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDWd9O21g_Y-tOYzXtK4FgYHCvHbChlB_DP32n47IGMzg&oe=64CD7AC0"
            alt="userImg"
          />
          <div className={styles.detail_info}>
            <p className={styles.fullName}>Leo Messi</p>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className={styles.member}>
          <img
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/279638355_715296559610620_976661376510071519_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8xbrkJ3LxHoAX81ekCu&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDWd9O21g_Y-tOYzXtK4FgYHCvHbChlB_DP32n47IGMzg&oe=64CD7AC0"
            alt="userImg"
          />
          <div className={styles.detail_info}>
            <p className={styles.fullName}>Cristiano Ronaldo</p>
            <p>UI/UX Developer</p>
          </div>
        </div>
        <div className={styles.member}>
          <img
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/279638355_715296559610620_976661376510071519_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8xbrkJ3LxHoAX81ekCu&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDWd9O21g_Y-tOYzXtK4FgYHCvHbChlB_DP32n47IGMzg&oe=64CD7AC0"
            alt="userImg"
          />
          <div className={styles.detail_info}>
            <p className={styles.fullName}>Russ Linville</p>
            <p>Manager</p>
          </div>
        </div>
        <div className={styles.member}>
          <img
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/279638355_715296559610620_976661376510071519_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8xbrkJ3LxHoAX81ekCu&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDWd9O21g_Y-tOYzXtK4FgYHCvHbChlB_DP32n47IGMzg&oe=64CD7AC0"
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
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          <tr>
            <div className={styles.user}>
              <img
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/279638355_715296559610620_976661376510071519_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8xbrkJ3LxHoAX81ekCu&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDWd9O21g_Y-tOYzXtK4FgYHCvHbChlB_DP32n47IGMzg&oe=64CD7AC0"
                alt="userImg"
              />
              <td className={styles.name}>Davinci Carlson</td>
            </div>
            <td>30 May 2022</td>
            <td>$ 200.2</td>
            <td style={{color:'green'}}>Approve</td>
          </tr>
          <tr>
            <div className={styles.user}>
              <img
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/279638355_715296559610620_976661376510071519_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8xbrkJ3LxHoAX81ekCu&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDWd9O21g_Y-tOYzXtK4FgYHCvHbChlB_DP32n47IGMzg&oe=64CD7AC0"
                alt="userImg"
              />
              <td className={styles.name}>Davinci Carlson</td>
            </div>
            <td>30 May 2022</td>
            <td>$ 200.2</td>
            <td style={{color:'red'}}>Rejected</td>
          </tr>
          <tr>
            <div className={styles.user}>
              <img
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/279638355_715296559610620_976661376510071519_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8xbrkJ3LxHoAX81ekCu&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDWd9O21g_Y-tOYzXtK4FgYHCvHbChlB_DP32n47IGMzg&oe=64CD7AC0"
                alt="userImg"
              />
              <td className={styles.name}>Davinci Carlson</td>
            </div>
            <td>30 May 2022</td>
            <td>$ 200.2</td>
            <td style={{color:'blue'}}>Pending</td>
          </tr>
          <tr>
            <div className={styles.user}>
              <img
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/279638355_715296559610620_976661376510071519_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8xbrkJ3LxHoAX81ekCu&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDWd9O21g_Y-tOYzXtK4FgYHCvHbChlB_DP32n47IGMzg&oe=64CD7AC0"
                alt="userImg"
              />
              <td className={styles.name}>Davinci Carlson</td>
            </div>
            <td>30 May 2022</td>
            <td>$ 200.2</td>
            <td style={{color:'green'}}>Approved</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default UserInfo;
