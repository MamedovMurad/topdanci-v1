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
const getFavProducts = (page="")=>{
    return api.get(`favorites?page=`+page)
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

const addFavorite = (id:number)=>{
    return api.post(`add-favorite/${id}`,"")
}
const deleteFav = (id:number)=>{
    return api.delete("delete-favorite/"+id)
}
export {
    addFavorite,
    getProductWholeSales,
    getEditProduct,
    getProducts,
    getProductDetail,
    getUserActiveProducts,
    getFavProducts,
    getUserPendingProducts,
    getUserExpiredProducts,
    getUserRejectedProducts,
    deleteFav

   
}