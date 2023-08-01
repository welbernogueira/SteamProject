import styles from "./subtitle.module.css";

export default function ({ children }) {
  return <h2 className={styles.subtitle}>{children}</h2>;
}
