export type IAdvert = {
    "id": number,
    "slug": string,
    "advert_type": "buyer"|"seller",
    "title": string,
    "price": string,
    "city": string,
    "date": string,
    "min_order": string,
    "is_premium": number,
    "is_wholesaler": number,
    is_favorited:boolean;
    adverts_count:string|number;
    user_tel:string;
    user_name:string;
    views_count:number;
    detail_info:string;
    similar_adverts:IAdvert[]
    "image": {
        "src": string,
        "alt": string
    },
    category:{
        name:string
    }
    images:{
        "src": string,
        "alt": string
    }[]
}