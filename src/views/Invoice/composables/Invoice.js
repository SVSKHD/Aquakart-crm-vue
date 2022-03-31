import Axios from "axios";

const createInvoice =async (data) => {
  await Axios.post(`${process.env.VUE_APP_ROOT_API}/invoice`, data);
};

const loadInvoice = async() => {
 await Axios.get(`${process.env.VUE_APP_ROOT_API}/invoiceload`);
};

const updateInvoice = async(name) =>{
  await Axios.put(`${process.env.VUE_APP_ROOT_API}/${name}`)
}

const deleteInvoice = async(name) =>{
 await Axios.delete(`${process.env.VUE_APP_ROOT_API}/${name}`)
}

const invoiceCrud =() => {
  return { createInvoice, loadInvoice , updateInvoice , deleteInvoice};
};

export default invoiceCrud;
