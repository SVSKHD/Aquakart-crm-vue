export const loginOperation = async (data) => (
  await fetch(`${process.env.VUE_APP_API}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.parse(JSON.stringify(data)),
  }).then((response)=>{
   return response.json()
  })
)
   

const AuthOperations = () => {
  return { loginOperation };
};
export default AuthOperations;
