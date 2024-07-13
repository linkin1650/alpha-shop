import styles from "../styles/StepProgress.module.scss"

function ProgressGroup({ phase, stepCount, stepTitle }) {
  return (
    <>
      <span className={styles["progress-group"]} data-phase={phase}>
        <span className={styles["progress-icon"]}>
          <span className={styles["text"]}>{stepCount}</span>
        </span>
        <span className={styles["progress-label"]}>{stepTitle}</span>
      </span>
      <span className={styles["progress-bar"]} data-order={stepCount}></span>
    </>
  )
}

export default function StepProgress() {
  return (
    <section className={styles["progress-container"]}>
      <ProgressGroup
        phase={'address'}
        stepCount={1}
        stepTitle={'寄送地址'}
      />
      <ProgressGroup
        phase={'shipping'}
        stepCount={2}
        stepTitle={'運送方式'}
      />
      <ProgressGroup
        phase={'credit-card'}
        stepCount={3}
        stepTitle={'付款資訊'}
      />
    </section>
)
}