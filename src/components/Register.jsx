import StepProgress from "./StepProgress"
import AddressPhase from "./AddressPhase"
import ShippingPhase from "./ShippingPhase"
import CreditCardPhase from "./CreditCardPhase"
import styles from "../styles/Register.module.scss"

export default function Register() {
  return (
    <section className={`${styles["register-container"]} col col-lg-6 col-sm-12`} data-phase="1" data-total-price="0">
      <h2 className={styles["register-title"]}>結帳</h2>
      <StepProgress />

      <section className={styles["form-container"]}>
        <AddressPhase />
        <ShippingPhase />
        <CreditCardPhase />
      </section>
    </section>
  )
}