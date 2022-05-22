import Axios from "axios";

const getContacts = async () =>
  await Axios.get(`${process.env.VUE_APP_ROOT_API}/contactload`);

const createContactAPI = async (data) =>
  await Axios.post(`${process.env.VUE_APP_ROOT_API}/contact`, data);

const deleteContact = async (name) =>
  await Axios.delete(`${process.env.VUE_APP_ROOT_API}/contactdelete/${name}`);

const useContact = () => {
  return { getContacts, createContactAPI, deleteContact };
};

export default useContact;
