import axios from "axios";
const Base_URL_User = "http://localhost:3125/customers";

const axiosP = axios.create({
  baseURL: Base_URL_User,
});

const axiosPrivateCustomer = axios.create({
  baseURL: Base_URL_User,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
export { axiosPrivateCustomer, axiosP };
