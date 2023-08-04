import styles from "./Footer.module.scss";
function Footer() {
  return (
    <div className={styles.footer_container}>
      <p className={styles.text}>
        &copy; Copyright CamileAdmin. All Right Reserved
      </p>
      <p>Design by <a href="/#">TranLamHuy</a>.</p>
    </div>
  );
}

export default Footer;
