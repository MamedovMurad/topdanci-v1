import { api } from "."


const otpSend = (tel:string|number) => {
    
    return api.post(`otp`,{tel})
}

export {
    otpSend,

   
}