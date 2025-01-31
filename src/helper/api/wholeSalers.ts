import { api } from "."


const getWholeSalers = () => {
    return api.get(`wholesalers`)
}

const getWholeSalerDetail = (id:number|string) => {
    return api.get(`wholesaler/${id}`)
}

export {
    getWholeSalers,
    getWholeSalerDetail

   
}