// React
import { useContext, createContext, useState, useEffect } from "react";

export const OrderContext = createContext(null);

const OrderContextPrivider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // go through the cart and update
    let allTotal = 0;
    for (let item of cart) {
      allTotal += item.price * item.quantity;
    }

    setTotal(allTotal);
  }, [cart]);

  return (
    <OrderContext.Provider value={{ cart, setCart }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextPrivider;
