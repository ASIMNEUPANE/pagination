import { URLS } from "../constants";
import instance from "../utils/api";

export const list = ()=>{
    return instance.get(URLS.products)

}