import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DonutContext from "../context/DonutContext";
import Donut from "../models/Donut";
import { getDonutById } from "../service/DonutService";
import "./Details.css";

const Details = () => {
  const id = useParams().id;
  const [donut, setDonut] = useState<Donut | null>(null);
  useEffect(() => {
    getDonutById(id!).then((response) => {
      setDonut(response);
    });
  }, []);
  const { cartItems, addToCart, removeFromCart } = useContext(DonutContext);
  return (
    <div className="Details">
      {donut ? <h1>{donut.name}</h1> : <p>loading...</p>}
      {donut ? <img src={donut.photo} alt={donut.name}></img> : <p>loading</p>}
      {donut ? (
        <button onClick={() => addToCart(donut)}>addToCart</button>
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default Details;
