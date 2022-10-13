import Donut from "../models/Donut";
import "./DonutList.css";

interface Props {
  donut: Donut;
}

const DonutList = ({ donut }: Props) => {
  return (
    <li className="Donuts">
      <h2>{donut.id}</h2>
      <a href={donut.ref}>{donut.name}</a>
    </li>
  );
};

export default DonutList;
