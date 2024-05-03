function ProgressGroup({ stepCount, stepTitle }) {
  return (
    <>
      <span className="progress-group" data-phase="address">
      <span className="progress-icon">
        <span className="text">{stepCount}</span>
      </span>
      <span className="progress-label">{stepTitle}</span>
      </span>
    </>
  )
}

export default function StepProgress() {
  return (
    <section className="progress-container col col-12">
      <ProgressGroup
        stepCount={1}
        stepTitle={'寄送地址'}
      />
      <ProgressGroup
        stepCount={2}
        stepTitle={'運送方式'}
      />
      <ProgressGroup
        stepCount={3}
        stepTitle={'付款資訊'}
      />
    </section>
)
}