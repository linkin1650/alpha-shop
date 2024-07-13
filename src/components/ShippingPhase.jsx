function RadioGroup({ dataPrice, id, isChecked=false, text, period }) {
  return (
    <label className="radio-group col col-12" data-price={dataPrice}>
      <input id={id} type="radio" name="shipping" defaultChecked={isChecked}/>
      <div className="radio-info">
        <div className="col col-12">
          <div className="text">{text}</div>
          <div className="price"></div>
        </div>
        <div className="period col col-12">{period}</div>
      </div>
      <div className="radio-box-border"></div>
    </label>
  )
}

export default function ShippingPhase() {
  return (
    <form style={{display: "none"}} className="col col-12" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <section className="form-body col col-12">
        <RadioGroup 
          dataPrice="0"
          id="shipping-standard"
          isChecked={true}
          text="標準運送"
          period="約 3-7 個工作天"
        />
        <RadioGroup 
          dataPrice="500"
          id="shipping-dhl"
          isChecked={false}
          text="DHL 貨運"
          period="48 小時內送達"
        />  
      </section>
    </form>
  )
}