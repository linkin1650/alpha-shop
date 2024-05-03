import { RowContainer, InputGroup, Input} from "./AddressPhase"

export default function CreditCardPhase () {
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
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
                type: "text",
                placeholder: "John Doe"
              }}
            />
          </InputGroup>
        </RowContainer>
          <InputGroup
            size={{
              lg: "4",
              sm: "s2",
            }}
            label={"卡號"}
          >
            <Input 
              input={{
                type: "text",
                placeholder: "1111 2222 3333 4444"
              }}
            />
          </InputGroup>
        <RowContainer>
          <InputGroup
            size={{
              lg: "3",
              sm: "s3",
            }}
            label={"有效期限"}
          >
            <Input 
              input={{
                type: "text",
                placeholder: "MM/YY"
              }}
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
              input={{
                type: "text",
                placeholder: "123"
              }}
            />
          </InputGroup>
        </RowContainer>
      </section>
    </form>
  )
}