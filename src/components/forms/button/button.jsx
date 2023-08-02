import styles from "./button.module.css";

export default function Button({ children, fullWidth }) {
  return (
    <button className={`${styles.button} ${fullWidth && styles.fullwidth}`}>
      {children}
    </button>
  );
}
