import { useContext } from "react";
import styles from "../styles/Cart.module.scss"
import { CartContext } from "./CartContext"
import { FormContext } from "./FormContext";

export function CartItem() {
  const { list, handleMinusClick, handlePlusClick } = useContext(CartContext);

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

export default function Cart() {
  const { list }=useContext(CartContext)
  const { shippingType }=useContext(FormContext)

  let shippingPrice = 0
  
  switch(shippingType) {
    case "shipping-Standard":
      shippingPrice = 0;
      break
    case "shipping-dhl":
      shippingPrice = 500;
      break
  }

  const totalAmount = list.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <section className={`${styles["cart-container"]} col col-lg-5 col-sm-12`}>
      <h3 className={styles["cart-title"]}>購物籃</h3>
      <section className={`${styles["product-list"]} col col-12`} data-total-price="0">
          <CartItem 
            list={list}
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