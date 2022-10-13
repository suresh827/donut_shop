import axios from "axios";
import DonutMenu from "../models/DonutMenu";

export const getDonutMenu = (): Promise<DonutMenu> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json")
    .then((respone) => {
      return respone.data;
    });
};
