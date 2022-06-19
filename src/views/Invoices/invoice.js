import Axios from "axios"

const createInvoice = async(data) =>(
   await Axios.post(`${process.env.VUE_APP_API}/invoice-create` ,data)
)
const InvoiceOperations = () =>{
    return{createInvoice}
}
export default InvoiceOperations