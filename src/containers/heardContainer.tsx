"use client"
import ProductRefreshButton from "@/components/heard"
import { getProductDetail } from "@/helper/api/products"
import { useEffect, useState } from "react"


type Props = {
    id: number
}

export const HeardContainer = (props: Props) => {
    const [isFav, setIsfav] = useState(false)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        getProductDetail(props.id + '').then((data) => {
            setIsfav(data.data.is_favorited)
            setloading(false)
        })
    }, [props.id])

    return (
        <> 
            <ProductRefreshButton loading={loading} id={props.id} isFav={isFav} callBack={() => {
                 setloading(true)
                getProductDetail(props.id + '').then((data) => {
                    setloading(false)
                    setIsfav(data.data.is_favorited)
                })
            }} /></>
    )
}