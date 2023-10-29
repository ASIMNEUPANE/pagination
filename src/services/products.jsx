import { URLS } from "../constants";
import { instance } from "../utilis/api";

export const list = (limit,page) => {
 return  instance.get(`${URLS.products}?limit=${limit}&page=${page}`);
};
