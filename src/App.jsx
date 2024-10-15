import Register from "./components/Register.jsx"
import Cart from "./components/Cart.jsx"
import ProgressControl from "./components/ProgressControl.jsx"
import styles from "./styles/App.module.scss"
import { useState } from "react"


export default function App() {
  const [stepPhase, setStepPhase] = useState(1)
  const [shippingPrice, setShippingPrice] = useState(0)

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

  function handleShippingChange(e) {
    const valueNum = Number(e.target.value)
    setShippingPrice(valueNum)
  }

  return (
    // main
    <main className={styles["site-main"]}>
      <div className={styles["main-container"]}>
        <Register 
          stepPhase={stepPhase}
          onShippingChange={handleShippingChange}
        />
        <Cart 
        shippingPrice={shippingPrice}
        />
        <ProgressControl 
          stepPhase={stepPhase}
          onNextBtnClick={handleNextBtnClick}
          onPrevBtnClick={handlePrevBtnClick}
        />
      </div>
    </main>
  )
}