import axios from "axios";

const url = "http://localhost:3003/user";

export const getUser = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const Ediuser = async (id, fullName) => {
  return await axios.put(`${url}/${id}`, fullName);
};
export const deleteuser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
