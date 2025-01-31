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
    "image": {
        "src": string,
        "alt": string
    }
}