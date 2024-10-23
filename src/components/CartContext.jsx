import { useState, createContext } from "react";

const initialList = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
];

export const CartContext = createContext([""])

export function CartProvider({ children }) {
  const [list, setList] = useState(initialList);

  function handleMinusClick(id) {
    setList(prevList => 
      prevList.map(item =>
        item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  function handlePlusClick(id) {
    setList(prevList => 
      prevList.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  return (
    <CartContext.Provider 
      value={{ list, handleMinusClick, handlePlusClick }}
    >
      { children }
    </CartContext.Provider>
  );
}