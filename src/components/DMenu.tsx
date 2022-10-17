import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Donut from "../models/Donut";
import { getDonutMenu } from "../service/DonutService";
import "./DMenu.css";
import DonutList from "./DonutList";

const DMenu = () => {
  const [donuts, setDonuts] = useState<Donut[]>([]);
  useEffect(() => {
    getDonutMenu().then((response) => {
      console.log(response);
      setDonuts(response.results);
    });
  });
  return (
    <div className="DMenu">
      <Link to="donut/cart">Show Cart</Link>
      <ul>
        {donuts.map((donut) => (
          <DonutList donut={donut} key={donut.id} />
        ))}
      </ul>
    </div>
  );
};

export default DMenu;
