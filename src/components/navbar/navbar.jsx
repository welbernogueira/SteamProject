import styles from "./navbar.module.css";
import { BsCart4 } from "react-icons/bs";
import Logo from "../logo/logo";
import Input from "@/components/forms/input/input";
import CartButton from "@/components/forms/cartButton/cartButton";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <dir className={styles.search}>
        <Input type="text" placeholder="Buscar" fullWidth />
      </dir>
      <CartButton />
    </nav>
  );
}
