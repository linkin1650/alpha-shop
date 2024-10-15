import { useState, useEffect } from "react";
import styles from "../styles/Cart.module.scss"
import { initialList } from "./CartList.js"

export function CartItem({ onTotalAmountChange }) {
  const [list, setList] = useState(initialList);

  // 使用 useEffect 監聽 list 的變化
  useEffect(() => {
    const total = list.reduce((acc, item) => acc + item.quantity * item.price, 0);
    onTotalAmountChange(total);
  }, [list, onTotalAmountChange]); // 依賴 list 和 onTotalAmountChange

  function handleMinusClick(id) {
    setList(prevList => 
      prevList.map(item =>
        item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  function handlePlusClick(id) {
    setList(prevList => 
      prevList.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  const listItem = list.map(item => 
    <div key={item.id} className={`${styles["product-container"]} col col-12`} data-count="0" data-price={item.price}>
      <img className={styles["img-container"]} src={item.img} />
      <div className={styles["product-info"]}>
        <div className={styles["product-name"]}>{item.name}</div>
        <div className={styles["product-control-container"]}>
          <div className={styles["product-control"]}>
            <svg className={styles["product-action"]} onClick={() => handleMinusClick(item.id)}>
              <use xlinkHref="./public/icons/minus.svg#icon-minus"></use>
            </svg>
            <span className={styles["product-count"]}>{item.quantity}</span>
            <svg className={styles["product-action"]} onClick={() => handlePlusClick(item.id)}>
              <use xlinkHref="./public/icons/plus.svg#icon-plus"></use>
            </svg>
          </div>
        </div>
        <div className={styles["price"]}>${item.price * item.quantity}</div>
      </div>
    </div>
  );
  
  return listItem;
}

export default function Cart({ shippingPrice }) {
  const [totalAmount, setTotalAmount] = useState(0);

  function handleTotalAmount(total) {
    setTotalAmount(total);
  }

  return (
    <section className={`${styles["cart-container"]} col col-lg-5 col-sm-12`}>
      <h3 className={styles["cart-title"]}>購物籃</h3>
      <section className={`${styles["product-list"]} col col-12`} data-total-price="0">
        <CartItem 
          onTotalAmountChange={handleTotalAmount}
        />
      </section>
      <section className={`${styles["cart-info"]} shipping col col-12`}>
        <div className={styles["text"]}>運費</div>
        <div className={styles["price"]}>{`${shippingPrice === 0 ? "免費" : "$" + shippingPrice}`}</div>
      </section>
      <section className={`${styles["cart-info"]} total col col-12`}>
        <div className={styles["text"]}>小計</div>
        <div className={styles["price"]}>{`$${shippingPrice + totalAmount}`}</div>
      </section>
    </section>
  )

}