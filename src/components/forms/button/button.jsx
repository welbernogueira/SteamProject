import styles from "./button.module.css";

export default function Button({ children, fullWidth, ...props }) {
  return (
    <button
      className={`${styles.button} ${fullWidth && styles.fullwidth}`}
      {...props}
    >
      {children}
    </button>
  );
}
