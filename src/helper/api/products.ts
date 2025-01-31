import { api } from "."


const getProducts = (search_text="",city="") => {
    return api.get(`adverts?search_text=${search_text}&city=${city}`)
}

export {
    getProducts,

   
}