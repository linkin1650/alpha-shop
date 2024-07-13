import styles from "../styles/Cart.module.scss"

export function CartItem({ name, price, imgPath, }) {
  return (
    <div className={`${styles["product-container"]} col col-12`} data-count="0" data-price={price}>
      <img className={styles["img-container"]} src={imgPath} />
      <div className={styles["product-info"]}>
        <div className={styles["product-name"]}>{name}</div>
        <div className={styles["product-control-container"]}>
          <div className={styles["product-control"]}>
            <object className={`${styles["product-action"]} minus`} data="./public/icons/minus.svg"></object>
            <span className={styles["product-count"]}>0</span>
            <object className={`${styles["product-action"]} plus`} data="./public/icons/plus.svg"></object>
          </div>
        </div>
        <div className={styles["price"]}>${price}</div>
      </div>
    </div>
  )
}

export default function Cart() {
  return (
    <section className={`${styles["cart-container"]} col col-lg-5 col-sm-12`}>
      <h3 className={styles["cart-title"]}>購物籃</h3>
      <section className={`${styles["product-list"]} col col-12`} data-total-price="0">
        <CartItem 
          name="破壞補丁修身牛仔褲"
          price={3999}
          imgPath="./public/images/product-1.jpg"
        />
        <CartItem 
          name="刷色直筒牛仔褲"
          price={1299}
          imgPath="./public/images/product-2.jpg"
        />
      </section>
      <section className={`${styles["cart-info"]} shipping col col-12`}>
        <div className={styles["text"]}>運費</div>
        <div className={styles["price"]}>免費</div>
      </section>
      <section className={`${styles["cart-info"]} total col col-12`}>
        <div className={styles["text"]}>小計</div>
        <div className={styles["price"]}>$0</div>
      </section>
    </section>
  )

}