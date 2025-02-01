import { api } from "."


const otpSend = (tel:string|number) => {
    
    return api.post(`otp`,{tel})
}

const login = (tel:string,otp:string|number)=>{
    return api.post("login",{tel,otp})
}
const  getUser = ()=>{
         return api.get(`user`)
}
export {
    otpSend,
    login,
    getUser

   
}