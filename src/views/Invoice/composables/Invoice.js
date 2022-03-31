import Axios from "axios"

const createInvoice = (data) => {
  Axios.post(`http://localhost:8000/crm/invoice` , data) 
 };

const invoiceCrud = () => {
 return {createInvoice} 
};


export default invoiceCrud;
