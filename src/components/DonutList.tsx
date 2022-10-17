import Donut from "../models/Donut";
import "./DonutList.css";
import { Link } from "react-router-dom";

interface Props {
  donut: Donut;
}

const DonutList = ({ donut }: Props) => {
  return (
    <li className="Donuts">
      <h2>{donut.id}</h2>
      <Link to={`/donut/${encodeURIComponent(donut.id)}`}>
        <a href={donut.ref}>{donut.name}</a>
      </Link>
    </li>
  );
};

export default DonutList;
