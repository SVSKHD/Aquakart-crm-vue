import Axios from "axios";

const createInvoices = async (data) =>
  await Axios.post(`${process.env.VUE_APP_ROOT_API}/invoice`, data);

const loadInvoice = async () =>
  await Axios.get(`${process.env.VUE_APP_ROOT_API}/invoiceload`);

const updateInvoiceData = async (name, data) =>
  await Axios.put(`${process.env.VUE_APP_ROOT_API}/invoice/${name}`, data);

const updateInvoice = async (name) =>
  await Axios.put(`${process.env.VUE_APP_ROOT_API}/invoice/${name}`);

const filterInvoice = async (name) =>
  await Axios.post(`${process.env.VUE_APP_ROOT_API}/invoicefilter`, { name });

const deleteInvoice = async (name) => {
  await Axios.delete(`${process.env.VUE_APP_ROOT_API}/invoice/${name}`);
};

const invoiceCrud = () => {
  return {
    createInvoices,
    loadInvoice,
    filterInvoice,
    updateInvoice,
    updateInvoiceData,
    deleteInvoice,
  };
};

export default invoiceCrud;
