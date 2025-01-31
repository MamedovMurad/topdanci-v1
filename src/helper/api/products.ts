import { api } from "."


const getProducts = (search_text="",city="",advert_type="",page="",category="") => {
    return api.get(`adverts?search_text=${search_text}&city=${city}&advert_type=${advert_type}&page=${page}&category=${category}`)
}

const getProductDetail=(id:string)=>{
    return api.get(`advert/${id}`)
}

export {
    getProducts,
    getProductDetail

   
}