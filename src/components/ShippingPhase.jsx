import styles from "../styles/ShippingPhase.module.scss"

function RadioGroup({ dataPrice, id, isChecked=false, text, price, period, onChange }) {
  return (
    <label className={`${styles["radio-group"]} col col-12`} data-price={dataPrice}>
      <input id={id} value={dataPrice} type="radio" name="shipping" defaultChecked={isChecked} onChange={onChange}/>
      <div className={styles["radio-info"]}>
        <div className="col col-12">
          <div className={styles["text"]}>{text}</div>
          <div className={styles["price"]}>{price}</div>
        </div>
        <div className={`${styles["period"]} col col-12`}>{period}</div>
      </div>
      <div className={styles["radio-box-border"]}></div>
    </label>
  )
}

export default function ShippingPhase({ stepPhase, onChange }) {
  return (
    <form style={{display: stepPhase === 2 ? "flex" : "none"}} className="col col-12" data-phase="shipping">
      <h3 className={styles["form-title"]}>運送方式</h3>
      <section className={`${styles["form-body"]} col col-12`}>
        <RadioGroup 
          dataPrice={0}
          id="shipping-standard"
          isChecked={true}
          text="標準運送"
          price="免費"
          period="約 3~7 個工作天"
          onChange={onChange}
        />
        <RadioGroup 
          dataPrice={500}
          id="shipping-dhl"
          isChecked={false}
          text="DHL 貨運"
          price="$500"
          period="48 小時內送達"
          onChange={onChange}
        />  
      </section>
    </form>
  )
}