import Register from "./components/Register.jsx"
import Cart from "./components/Cart.jsx"
import ProgressControl from "./components/ProgressControl.jsx"
import styles from "./styles/App.module.scss"


export default function App() {
  return (
    // main
    <main className={styles["site-main"]}>
      <div className={styles["main-container"]}>
        <Register />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  )
}