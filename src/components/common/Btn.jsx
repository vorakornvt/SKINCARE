import * as styles from "./Btn.css";

function Btn({ children }) {
  return <button className={styles.btn}>{children}</button>;
}

export default Btn;
