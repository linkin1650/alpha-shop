import { useState, createContext } from "react";

export const FormContext = createContext("")

export function FormProvider({ children }) {
  const [formContent, setFormContent] = useState({})
  const [shippingType, setShippingType] = useState("shipping-standard")

  function handleFormChange(e, name) {
    setFormContent({
      ...formContent,
      [name]: e.target.value,
    });
  }

  function handleShippingChange(e) {
    const type = e.target.id
    setShippingType(type)
  }

  return (
    <FormContext.Provider value={{ formContent, handleFormChange, shippingType, handleShippingChange }}>
      { children }
      {console.log(formContent)}
    </FormContext.Provider>
  )
}