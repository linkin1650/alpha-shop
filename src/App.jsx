import Register from "./components/Register.jsx"
import Cart from "./components/Cart.jsx"
import ProgressControl from "./components/ProgressControl.jsx"
import styles from "./styles/App.module.scss"
import { useState } from "react"
import { CartProvider } from "./components/CartContext.jsx"
import { FormProvider } from "./components/FormContext.jsx"

export default function App() {
  const [stepPhase, setStepPhase] = useState(1)

  function handleNextBtnClick() {
    if( 1 <= stepPhase < 3){
      setStepPhase(stepPhase + 1)
    }
  }

  function handlePrevBtnClick() {
    if ( 1 < stepPhase <= 3 ){
      setStepPhase(stepPhase - 1)
    }
  }

  return (
    // main
    <main className={styles["site-main"]}>
        <div className={styles["main-container"]}>
          <FormProvider>
            <CartProvider>
              <Register 
                stepPhase={stepPhase}
              />
              <Cart/>
              <ProgressControl 
                stepPhase={stepPhase}
                onNextBtnClick={handleNextBtnClick}
                onPrevBtnClick={handlePrevBtnClick}
              />
            </CartProvider>
          </FormProvider>
        </div>
    </main>
  )
}