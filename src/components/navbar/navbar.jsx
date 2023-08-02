import styles from "./navbar.module.css";
import { BsCart4 } from "react-icons/bs";
import Logo from "../logo/logo";
import Input from "@/components/forms/input/input";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <dir className={styles.search}>
        <Input type="text" placeholder="Buscar" fullWidth />
      </dir>
      <BsCart4 size={40} />
    </nav>
  );
}
