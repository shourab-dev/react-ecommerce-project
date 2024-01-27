import axios from "axios";

export const getApiData = async (url, params = null) => {
  let res = await axios.get(`https://fakestoreapi.com/${url}`, {params});
  let data =  res.data;
  return data;
};
