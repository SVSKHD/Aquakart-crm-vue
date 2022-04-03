import Axios from "axios";

const createInvoice =async (data) => {
  await Axios.post(`${process.env.VUE_APP_ROOT_API}/invoice`, data);
};

const loadInvoice = async() => (
 await Axios.get(`${process.env.VUE_APP_ROOT_API}/invoiceload`)
)

const updateInvoice = async(name) =>{
  await Axios.put(`${process.env.VUE_APP_ROOT_API}/${name}`)
}

const filterInvoice = async(name) =>(
 await Axios.post(`${process.env.VUE_APP_ROOT_API}/invoicefilter` , {name})
)

const deleteInvoice = async(name) =>{
 await Axios.delete(`${process.env.VUE_APP_ROOT_API}/${name}`)
}

const invoiceCrud =() => {
  return { createInvoice, loadInvoice , filterInvoice , updateInvoice , deleteInvoice};
};

export default invoiceCrud;
