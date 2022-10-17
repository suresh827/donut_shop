import axios from "axios";
import Donut from "../models/Donut";
import DonutMenu from "../models/DonutMenu";

export const getDonutMenu = (): Promise<DonutMenu> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json")
    .then((respone) => {
      return respone.data;
    });
};

export const getDonutById = (id: string): Promise<Donut> => {
  return axios
    .get(
      `https://grandcircusco.github.io/demo-apis/donuts/${encodeURIComponent(
        id
      )}.json`
    )
    .then((response) => {
      return response.data;
    });
};
