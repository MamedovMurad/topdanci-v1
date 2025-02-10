import { api } from "."


const getProducts = (search_text="",city="",advert_type="",page="",category="") => {
    return api.get(`adverts?search_text=${search_text}&city=${city}&advert_type=${advert_type}&page=${page}&category=${category}`)
}

const getProductDetail=(id:string)=>{
    return api.get(`advert/${id}`)
}

const getProductWholeSales=(wholesaler_id="",page="")=>{
    return api.get(`adverts?page=${page}&wholesaler_id=${wholesaler_id}`)

}
const getUserActiveProducts = (page="")=>{
    return api.get(`user/active-adverts?page=`+page)
}
const getUserPendingProducts = (page="")=>{
    return api.get(`user/pending-adverts?page${page}`)
}
const getUserExpiredProducts = (page="")=>{
    return api.get(`user/expired-adverts?page${page}`)
}
const getUserRejectedProducts = (page="")=>{
    return api.get(`user/rejected-adverts?page${page}`)
}
const getEditProduct=(id:string)=>{
    return api.get(`edit-advert/${id}`)
}
export {
    getProductWholeSales,
    getEditProduct,
    getProducts,
    getProductDetail,
    getUserActiveProducts,
    getUserPendingProducts,
    getUserExpiredProducts,
    getUserRejectedProducts

   
}