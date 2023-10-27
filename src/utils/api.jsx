import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:3333/api/v1',

  });

  export default instance