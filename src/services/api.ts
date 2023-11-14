import axios from "axios";
const Base_URL_User = "http://localhost:3125/customers";

export const axiosP = axios.create({
  baseURL: Base_URL_User,
});

export const axiosPrivateCustomer = axios.create({
  baseURL: Base_URL_User,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
