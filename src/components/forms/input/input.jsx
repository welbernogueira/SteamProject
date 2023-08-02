import styles from "./input.module.css";

export default function Imput({ fullWidth, ...props }) {
  return (
    <input
      className={`${styles.input} ${fullWidth && styles.fullwidth}`}
      {...props}
    />
  );
}
