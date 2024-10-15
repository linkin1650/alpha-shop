import styles from "../styles/ProgressControl.module.scss"

function ButtonGroup({ children, style ,phase }) {
  return (
    <section style={style} className={`${styles["button-group"]} col col-12`} data-phase={phase}>
      { children }
    </section>
  )
}

function NextButton({ onClick }) {
  return (
    <button className={`${styles["next"]} cursor-point`} onClick={onClick}>
      下一步
      <svg>
        <use xlinkHref="./public/icons/right-arrow.svg#icon-right-arrow"></use>
      </svg>
    </button>
  )
}

function PrevButton({ onClick }) {
  return (
    <button className={`${styles["prev"]} cursor-point`} onClick={onClick}>
      <svg>
        <use xlinkHref="./public/icons/left-arrow.svg#icon-left-arrow"></use>
      </svg>
      上一步
    </button>
  )
}

function SubmitButton() {
  return (
    <button className={`${styles["next"]} cursor-point`}>
      確認下單
    </button>
  )
}

export default function ProgressControl({ stepPhase, onNextBtnClick, onPrevBtnClick }) {
  return (
    <section className={`${styles["progress-control-container"]} col col-lg-6 col-sm-12`}>
      <ButtonGroup
        style={{display: stepPhase === 1 ? "flex" : "none"}}
        phase={"address"}
      >
        <NextButton 
          onClick={onNextBtnClick}
        />
      </ButtonGroup>
      <ButtonGroup
        style={{display: stepPhase === 2 ? "flex" : "none"}}
        phase={"shipping"}
      >
        <PrevButton 
          onClick={onPrevBtnClick}
        />
        <NextButton 
          onClick={onNextBtnClick}
        />
      </ButtonGroup>
      <ButtonGroup
        style={{display: stepPhase === 3 ? "flex" : "none"}}
        phase={"credit-card"}
      >
        <PrevButton 
          onClick={onPrevBtnClick}
        />
        <SubmitButton />
      </ButtonGroup>
    </section>
  )
}