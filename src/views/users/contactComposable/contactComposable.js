import  Axios  from "axios"

const getContacts = async() =>(
  await Axios.post(`${process.env.VUE_APP_ROOT_API}/contactload`)
)

const useContact = () =>{
    return {getContacts}
}

export default useContact