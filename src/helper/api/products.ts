import { api } from "."


const getProducts = (search_text="",city="",advert_type="",page="",category="") => {
    return api.get(`adverts?search_text=${search_text}&city=${city}&advert_type=${advert_type}&page=${page}&category=${category}`)
}

const getProductDetail=(id:string)=>{
    return api.get(`advert/${id}`)
}


const getUserActiveProducts = ()=>{
    return api.get(`user/active-adverts`)
}
const getUserPendingProducts = ()=>{
    return api.get(`user/pending-adverts`)
}
const getUserExpiredProducts = ()=>{
    return api.get(`user/expired-adverts`)
}
const getUserRejectedProducts = ()=>{
    return api.get(`user/rejected-adverts`)
}
export {
    getProducts,
    getProductDetail,
    getUserActiveProducts,
    getUserPendingProducts,
    getUserExpiredProducts,
    getUserRejectedProducts

   
}