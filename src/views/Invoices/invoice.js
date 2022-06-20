import Axios from "axios"

const createInvoice = async(data) =>(
   await Axios.post(`${process.env.VUE_APP_API}/invoice-create` ,data)
)

const individualInvoice =async(data)=>(
    await Axios.get(`${process.env.VUE_APP_API}/individualinvoice/${data}`)
)
const InvoiceOperations = () =>{
    return{createInvoice , individualInvoice}
}
export default InvoiceOperations