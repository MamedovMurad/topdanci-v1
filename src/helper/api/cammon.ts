import { api } from "."


const getCities = () => {
    return api.get(`cities`)
}

export {
    getCities,

   
}