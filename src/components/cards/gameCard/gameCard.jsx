import Image from "next/image";

import styles from "./gameCard.module.css";
import Button from "@/components/forms/button/button";

export default function GameCard({ onAdd, image, title, fullPrice }) {
  return (
    <div className={styles.gamecard}>
      <Image
        className={styles.image}
        src={`/products/${image}`}
        alt={`Produto ${image}`}
        width={305}
        height={145}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>Ação, estratégia, multijogador.</p>
        <div className={styles.pricing}>
          <h2 className={styles.price}>R${fullPrice}</h2>
          <Button onClick={onAdd}>adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  );
}
