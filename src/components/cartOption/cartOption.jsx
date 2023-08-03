import Image from "next/image";

import styles from "./cartOption.module.css";

export default function CartOption() {
  return (
    <div className={styles.option}>
      <Image src={`/products/valorant.jpg`} width={62} height={74} />
      <div className={styles.info}>
        <h3 className={styles.title}>Valorant</h3>
        <h3 className={styles.price}>R$99,90</h3>
        <p className={styles.remove}>Remover</p>
      </div>
    </div>
  );
}
