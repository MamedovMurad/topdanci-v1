import { api } from "."


const getcategories = () => {
    return api.get(`categories`)
}

const getSubCategories = (id:number)=>{
    return api.get(`subcategories/${id}`)
}
export {
getcategories,
getSubCategories

   
}