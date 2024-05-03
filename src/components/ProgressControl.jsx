function ButtonGroup({ children }) {
  return (
    <section className="button-group col col-12" data-phase="address">
      { children }
    </section>
  )
}

function NextButton() {
  return (
    <button className="next">
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
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <ButtonGroup>
        <NextButton />
      </ButtonGroup>
      <ButtonGroup>
        <PrevButton />
        <NextButton />
      </ButtonGroup>
      <ButtonGroup>
        <PrevButton />
        <SubmitButton />
      </ButtonGroup>
    </section>
  )
}