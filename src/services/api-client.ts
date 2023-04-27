import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "adfdcd0ab7e44017b2f019176fc89567",
  },
});
