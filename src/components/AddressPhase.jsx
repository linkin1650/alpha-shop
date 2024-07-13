import styles from "../styles/Address.module.scss"

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
              <select required>
                <option value="">請選擇縣市</option>
                <option value="KLU">基隆市</option>
                <option value="TPH">新北市</option>
                <option value="TPE">臺北市</option>
                <option value="TYC">桃園市</option>
                <option value="HSH">新竹縣</option>
                <option value="HSC">新竹市</option>
                <option value="MAC">苗栗市</option>
                <option value="MAL">苗栗縣</option>
                <option value="TXG">臺中市</option>
                <option value="CWH">彰化縣</option>
                <option value="CWS">彰化市</option>
                <option value="NTC">南投市</option>
                <option value="NTO">南投縣</option>
                <option value="YLH">雲林縣</option>
                <option value="CHY">嘉義縣</option>
                <option value="CYI">嘉義市</option>
                <option value="TNN">臺南市</option>
                <option value="KHH">高雄市</option>
                <option value="IUH">屏東縣</option>
                <option value="PTS">屏東市</option>
                <option value="ILN">宜蘭縣</option>
                <option value="ILC">宜蘭市</option>
                <option value="HWA">花蓮縣</option>
                <option value="HWC">花蓮市</option>
                <option value="TTC">臺東市</option>
                <option value="TTT">臺東縣</option>
                <option value="PEH">澎湖縣</option>
                <option value="KMN">金門縣</option>
                <option value="LNN">連江縣</option>
              </select>
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