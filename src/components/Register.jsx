import StepProgress from "./StepProgress"
import AddressPhase from "./AddressPhase"
import ShippingPhase from "./ShippingPhase"
import CreditCardPhase from "./CreditCardPhase"
import ProgressControl from "./ProgressControl"

export default function Register() {
  return (
    <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
      <h2 className="register-title col col-12">結帳</h2>
      <StepProgress />

      <section className="form-container col col-12">
        <AddressPhase />
        <ShippingPhase />
        <CreditCardPhase />
        <ProgressControl />
      </section>
    </section>
  )
}