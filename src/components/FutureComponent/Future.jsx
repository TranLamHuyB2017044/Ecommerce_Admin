import styles from "./Future.module.scss";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
function Future() {
  return (
    <div className={styles.Dashboard_container}>
      <div className={styles.Feature_container}>
        <div className={styles.Feature_items}>
          <h2 className={styles.Feature_title}>Sales</h2>
          <div className={styles.data}>
            <h1 className={styles.detail_data}>$ 4,454</h1>
            <div className={styles.compare_number}>
              <p>1.5%</p>
              <ArrowUpwardOutlinedIcon style={{color: 'green'}}/>
            </div>
          </div>
          <p className={styles.compare_data}>Compared to last month</p>
        </div>
        <div className={styles.Feature_items}>
          <h2 className={styles.Feature_title}>Revenue</h2>
          <div className={styles.data}>
            <h1 className={styles.detail_data}>$ 2,532</h1>
            <div className={styles.compare_number}>
              <p>3.5%</p>
              <ArrowUpwardOutlinedIcon style={{color: 'green'}}/>
            </div>
          </div>
          <p className={styles.compare_data}>Compared to last month</p>
        </div>
        <div className={styles.Feature_items}>
          <h2 className={styles.Feature_title}>Cost</h2>
          <div className={styles.data}>
            <h1 className={styles.detail_data}>$ 12.56</h1>
            <div className={styles.compare_number}>
              <p>1.4%</p>
              <ArrowDownwardOutlinedIcon style={{color: 'red'}}/>
            </div>
          </div>
          <p className={styles.compare_data}>Compared to last month</p>
        </div>
      </div>
    </div>
  );
}

export default Future;
