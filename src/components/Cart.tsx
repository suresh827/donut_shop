import { useContext } from "react";
import DonutContext from "../context/DonutContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, cartTotal } = useContext(DonutContext);
  return (
    <div className="Cart">
      <ul>
        {cartItems.map((donut) => (
          <p>{donut.name} --- 1$ </p>
        ))}
      </ul>
      <h1>Cart Total: {cartTotal}</h1>
    </div>
  );
};

export default Cart;
