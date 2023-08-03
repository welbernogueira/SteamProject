import styles from "./cartMenu.module.css";
import CartOption from "@/components/cartOption/cartOption";

export default function CartMenu({ cart, onRemove }) {
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        {cart.length === 0 && <p>Nenhum produto no carrinho!</p>}
        {cart.map((cartInfo, pos) => (
          <CartOption
            image={cartInfo.image}
            title={cartInfo.name}
            price={cartInfo.price}
            onRemove={() => onRemove(pos)}
            key={`cart-info=${pos}`}
          />
        ))}
      </div>
      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>R$ 999,00</h2>
      </div>
    </div>
  );
}
