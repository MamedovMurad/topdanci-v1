import { api } from "."


const getCities = () => {
    return api.get(`cities`)
}

const getUnits = ()=>{
    return api.get(`units`)
}
const fileUpload = (body:any)=>{
    return api.postWithFormData('file-upload-temporary',body)
}
export {
    getCities,
    getUnits,
    fileUpload

   
}