"use client"
import ProductsContainer from "@/containers/product";
import { getUserExpiredProducts } from "@/helper/api/products";
import { FunctionComponent, useEffect, useState } from "react";
import Empty from "../_components/empty";

interface ExpiredListPageProps {
    
}
 
const ExpiredListPage: FunctionComponent<ExpiredListPageProps> = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
      getUserExpiredProducts().then((data)=>{
        setproducts(data.data.data)
        
      })
    }, []);
    return ( <div className=" px-5 lg:px-0">
   {
    products?.length>0?  <ProductsContainer status="expired" list={products}/> :
    <Empty text="Hazırda expired elanınız yoxdur"  />
   }
    </div> );
}
 
export default ExpiredListPage;