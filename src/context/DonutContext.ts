import { createContext } from "react";
import Donut from "../models/Donut";

interface DonutContextModel {
  cartItems: Donut[];
  cartTotal: number;
  addToCart: (donut: Donut) => void;
  removeFromCart: (id: number) => void;
}

const defaultValues: DonutContextModel = {
  cartItems: [],
  cartTotal: 0,
  addToCart: () => {},
  removeFromCart: () => {},
};

const DonutContext = createContext(defaultValues);

export default DonutContext;
