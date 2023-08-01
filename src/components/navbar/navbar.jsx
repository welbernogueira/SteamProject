import styles from "./navbar.module.css";
import { BsCart4 } from "react-icons/bs";
import Logo from "../logo/logo";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <input />
      <BsCart4 size={40} />
    </nav>
  );
}
