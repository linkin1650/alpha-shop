import { useContext } from "react"
import StepProgress from "./StepProgress"
import AddressPhase from "./AddressPhase"
import ShippingPhase from "./ShippingPhase"
import CreditCardPhase from "./CreditCardPhase"
import styles from "../styles/Register.module.scss"
import { FormContext } from "./FormContext.jsx"

export default function Register({ stepPhase }) {
  const { handleFormChange, handleShippingChange } = useContext(FormContext);
  
  //建立 function 能讓控制 shipping 的 state 和 context 從 shippingPhase 取得資料
  function handleShippingFormChange(e, name) {
    handleShippingChange(e)
    handleFormChange(e, name)
  }

  return (
    <section className={`${styles["register-container"]} col col-lg-6 col-sm-12`} data-phase="1" data-total-price="0">
      <h2 className={styles["register-title"]}>結帳</h2>
      <StepProgress 
        stepPhase={stepPhase}
      />

      <section className={styles["form-container"]}>
        <AddressPhase 
          stepPhase={stepPhase}
        />
        <ShippingPhase 
          stepPhase={stepPhase}
          onChange={(e) => handleShippingFormChange(e, "shipping-type")}
        />
        <CreditCardPhase 
          stepPhase={stepPhase}
        />
      </section>
    </section>
  )
}