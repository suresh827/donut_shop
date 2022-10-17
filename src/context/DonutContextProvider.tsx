import { ReactNode, useState } from "react";
import Donut from "../models/Donut";
import DonutContext from "./DonutContext";

interface Props {
  children: ReactNode;
}

const DonutContextProvider = ({ children }: Props) => {
  const [cartItems, setDonuts] = useState<Donut[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const addToCart = (donut: Donut): void => {
    setDonuts((prev) => [...prev, donut]);
    setCartTotal((prev) => {
      return prev + 1;
    });
  };
  const removeFromCart = (id: number): void => {
    setDonuts((prev) => {
      const index: number = prev.findIndex((donut) => donut.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
    setCartTotal((prev) => {
      return prev - 1;
    });
  };

  return (
    <DonutContext.Provider
      value={{ cartItems, cartTotal, addToCart, removeFromCart }}
    >
      {children}
    </DonutContext.Provider>
  );
};

export default DonutContextProvider;
