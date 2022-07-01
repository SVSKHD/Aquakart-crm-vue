import Axios from "axios"

const createInvoice = async(data) =>(
   await Axios.post(`${process.env.VUE_APP_API}/invoice-create` ,data)
)

const individualInvoice =async(data)=>(
    await Axios.get(`${process.env.VUE_APP_API}/individualinvoice/${data}`)
)

const loadInvoices = async() =>(
    await Axios.get(`${process.env.VUE_APP_API}/invoices`)
)

const updateInvoice = async(name , data) =>{
 await Axios.put(`${process.env.VUE_APP_API}/invoice-update/${name}` , data)
}

const InvoiceOperations = () =>{
    return{createInvoice , individualInvoice , loadInvoices , updateInvoice}
}
export default InvoiceOperations