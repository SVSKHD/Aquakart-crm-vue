import Axios from "axios"
const createTransit = async(data)=>(
    await Axios.post(`${process.env.VUE_APP_API}/transit/executed`, data)
)
const updateTransit =async(area , data) =>(
  await Axios.put(`${process.env.VUE_APP_API}//transit/paymentStatus/${area}` , data)
)
const getTransits = async() =>(
    await Axios.get(`${process.env.VUE_APP_API}/transits`)
)

const TransitServices = () =>{
    return{createTransit , updateTransit , getTransits}
}
export default TransitServices