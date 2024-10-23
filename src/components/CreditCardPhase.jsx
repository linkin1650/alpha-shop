import { RowContainer, InputGroup, Input} from "./AddressPhase"
import styles from "../styles/CreditCardPhase.module.scss"
import { FormContext } from "./FormContext"
import { useContext } from "react"

export default function CreditCardPhase ({ stepPhase }) {
  const { handleFormChange } = useContext(FormContext)

  return (
    <form style={{display: stepPhase === 3 ? "flex" : "none"}} className="col col-12" data-phase="credit-card">
      <h3 className={styles["form-title"]}>付款資訊</h3>
      <section className={`${styles["form-body"]} col col-12`}>
        <RowContainer>
          <InputGroup
            size={{
              lg: "4",
              sm: "full",
            }}
            label={"持卡人姓名"}
          >
            <Input 
              input={{
                name: "name-on-credit-card",
                type: "text",
                placeholder: "John Doe"
              }}
              onChange={(e) => handleFormChange(e, "name-on-credit-card")}
            />
          </InputGroup>
        </RowContainer>
        <RowContainer>
          <InputGroup
            size={{
              lg: "4",
              sm: "s2",
            }}
            label={"卡號"}
          >
            <Input 
              name="card-number"
              input={{
                type: "text",
                placeholder: "1111 2222 3333 4444"
              }}
              onChange={(e) => handleFormChange(e, "card-number")}
            />
          </InputGroup>
        </RowContainer>
        <RowContainer>
          <InputGroup
            size={{
              lg: "3",
              sm: "s3",
            }}
            label={"有效期限"}
          >
            <Input 
              name="exp-date"
              input={{
                type: "text",
                placeholder: "MM/YY"
              }}
              onChange={(e) => handleFormChange(e, "exp-date")}
            />
          </InputGroup>
          <InputGroup
            size={{
              lg: "3",
              sm: "s3",
            }}
            label={"CVC / CCV"}
          >
            <Input 
              name="CVC/CCV"
              input={{
                type: "text",
                placeholder: "123"
              }}
              onChange={(e) => handleFormChange(e, "CVC/CCV")}
            />
          </InputGroup>
        </RowContainer>
      </section>
    </form>
  )
}