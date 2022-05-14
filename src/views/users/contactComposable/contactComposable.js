import Axios from "axios";

const getContacts = async () =>
  await Axios.get(`${process.env.VUE_APP_ROOT_API}/contactload`);

const createContactAPI = async (data) =>
  await Axios.post(`${process.env.VUE_APP_ROOT_API}/contact`, data);

const useContact = () => {
  return { getContacts, createContactAPI };
};

export default useContact;
