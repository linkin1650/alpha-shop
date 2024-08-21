import styles from "../styles/Address.module.scss"
import { city } from "./CityData"

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

export function Input({ input }) {
  return (
    <input className={styles["input-container"]} type={input.type} placeholder={input.placeholder}/>
  )
}

export function CityList() {
  const cities = city.map(city =>
    <option key={city.id} value={city.id}>{city.name}</option>
  );
  return (
    <select required>
      <option value="">請選擇縣市</option>
      { cities }
    </select>
  )
}

export default function AddressPhase() {
  return (
    <form className="col col-12">
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
              <select>
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
              input={{
                type: "text",
                placeholder: "請輸入姓名"
              }}
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
              input={{
                type: "tel",
                placeholder: "請輸入電話"
              }}
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
              input={{
                type: "email",
                placeholder: "請輸入電子郵件"
              }}
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
              <CityList />
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
              input={{
                type: "text",
                placeholder: "請輸入地址"
              }}
            />
          </InputGroup>
        </RowContainer>
      </section>
    </form>
  )
}