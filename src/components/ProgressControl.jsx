import { useState, useContext } from "react"
import { Modal } from 'antd';
import styles from "../styles/ProgressControl.module.scss"
import { FormContext } from "./FormContext";

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

function SubmitButton({ onClick }) {
  return (
    <button className={`${styles["next"]} cursor-point`} onClick={onClick}>
      確認下單
    </button>
  )
}

export default function ProgressControl({ stepPhase, onNextBtnClick, onPrevBtnClick }) {
  const { formContent } = useContext(FormContext)
  const [isModalOpen, setModalOpen] = useState(false);

  function handleSubmitClick() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }
  //比對 formContent 顯示在畫面的名稱
  const displayMapping = {
    title: "稱謂",
    name: "姓名",
    tel: "電話",
    email: "Email",
    city: "縣市",
    address: "地址",
    "shipping-type": "運送方式",
    "name-on-credit-card": "持卡人姓名",
    "card-number": "卡號",
    "exp-date": "有限期限",
    "CVC/CCV": "CVC/CCV",
  }

  //將 formContent 資料轉換成陣列
  function formatFormContent(formContent) {
    return Object.entries(formContent).map(([key, value]) => {
      const displayLabel = displayMapping[key] || key;
      return `${displayLabel}：${value}`;
    })
  }

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
        <SubmitButton 
          onClick={handleSubmitClick}
        />
      </ButtonGroup>
      
      <Modal title="資料確認" open={isModalOpen} onOk={handleCloseModal} onCancel={handleCloseModal}>
        <h2>請確認您的資料是否正確</h2>
        <ul>
          {formatFormContent(formContent).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Modal>

    </section>
  )
}