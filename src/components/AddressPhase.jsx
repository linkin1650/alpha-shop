import { useContext } from "react"
import styles from "../styles/Address.module.scss"
import { city } from "./CityData.js"
import { FormContext } from "./FormContext.jsx"

export function RowContainer({ children }) {
  return (
    <div className={`${styles["row-container"]} col col-12`}>
      {children}
    </div>
  )
}

export function InputGroup({ size, label, children }) {
  return (
    <div className={`${styles["input-group"]} input-w-lg-${size.lg} input-w-sm-${size.sm}`}>
      <div className={styles["input-label"]}>{label}</div>
      { children }
    </div>
  )
}

export function Input({ name, input, onChange }) {
  return (
    <input name={name} className={styles["input-container"]} type={input.type} placeholder={input.placeholder} onChange={onChange}/>
  )
}

export function CityList({ onChange }) {
  const cities = city.map(city =>
    <option key={city.id} value={city.id}>{city.name}</option>
  );
  return (
    <select name="city" onChange={onChange} required>
      <option value="">請選擇縣市</option>
      { cities }
    </select>
  )
}

export default function AddressPhase({ stepPhase }) {
  const { handleFormChange } = useContext(FormContext);

  return (
    <form style={{display: stepPhase === 1 ? "block" : "none"}} className="col col-12">
      <h3 className={styles["form-title"]}>寄送地址</h3>
      <section className={`${styles["form-body"]} col col-12`}>
        <RowContainer>
          <InputGroup
            size={{
              lg: "2",
              sm: "s1",
            }}
            label={"稱謂"}
          >
            <div className={styles["select-container"]}>
              <select name="title" onChange={(e) => handleFormChange(e, "title")}>
                <option value="mr" selected>先生</option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </InputGroup>
          <InputGroup
            size={{
              lg: "4",
              sm: "s2",
            }}
            label={"姓名"}
          >
            <Input 
              name="name"
              input={{
                type: "text",
                placeholder: "請輸入姓名"
              }}
              onChange={(e) => handleFormChange(e, "name")}
            />
          </InputGroup>
        </RowContainer>
        <RowContainer>
          <InputGroup
            size={{
              lg: 3,
              sm: "full",
            }}
            label={"電話"}
          >
            <Input 
              name="tel"
              input={{
                type: "tel",
                placeholder: "請輸入電話"
              }}
              onChange={(e) => handleFormChange(e, "tel")}
            />
          </InputGroup>
          <InputGroup
            size={{
              lg: 3,
              sm: "full",
            }}
            label={"Email"}
          >
            <Input 
              name="email"
              input={{
                type: "email",
                placeholder: "請輸入電子郵件"
              }}
              onChange={(e) => handleFormChange(e, "email")}
            />
          </InputGroup>
        </RowContainer>
        <RowContainer>
          <InputGroup
            size={{
              lg: "2",
              sm: "full",
            }}
            label={"縣市"}
          >
            <div className={styles["select-container"]}>
              <CityList 
                onChange={(e) => handleFormChange(e, "city")}
              />
            </div>
          </InputGroup>
          <InputGroup
            size={{
              lg: 4,
              sm: "full",
            }}
            label={"地址"}
          >
            <Input 
              name="address"
              input={{
                type: "text",
                placeholder: "請輸入地址"
              }}
              onChange={(e) => handleFormChange(e, "address")}
            />
          </InputGroup>
        </RowContainer>
      </section>
    </form>
  )
}