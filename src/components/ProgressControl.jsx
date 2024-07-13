import styles from "../styles/ProgressControl.module.scss"

function ButtonGroup({ children, style ,phase }) {
  return (
    <section style={style} className={`${styles["button-group"]} col col-12`} data-phase={phase}>
      { children }
    </section>
  )
}

function NextButton() {
  return (
    <button className={styles["next"]}>
      下一步
      <object data="./public/icons/right-arrow.svg" className="cursor-point">
      </object>
    </button>
  )
}

function PrevButton() {
  return (
    <button className="prev">
      <object data="./public/icons/left-arrow.svg" className="cursor-point">
      </object>
      上一步
    </button>
  )
}

function SubmitButton() {
  return (
    <button className="next">
      確認下單
    </button>
  )
}

export default function ProgressControl() {
  return (
    <section className={`${styles["progress-control-container"]} col col-lg-6 col-sm-12`}>
      <ButtonGroup
        phase={"address"}
      >
        <NextButton />
      </ButtonGroup>
      <ButtonGroup
        style={{display: "none"}}
        phase={"shipping"}
      >
        <PrevButton />
        <NextButton />
      </ButtonGroup>
      <ButtonGroup
        style={{display: "none"}} 
        phase={"credit-card"}
      >
        <PrevButton />
        <SubmitButton />
      </ButtonGroup>
    </section>
  )
}