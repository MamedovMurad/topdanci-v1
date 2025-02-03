
"use client"
import ProductsContainer from "@/containers/product";
import { getUserRejectedProducts } from "@/helper/api/products";
import { FunctionComponent, useEffect, useState } from "react";
import Empty from "../_components/empty";
import PaginationUI from "@/components/ui/pagination";

interface UnpublishedOnesPageProps {
    
}
 
const UnpublishedOnesPage: FunctionComponent<UnpublishedOnesPageProps> = () => {
    const [products, setproducts] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    useEffect(() => {
      getUserRejectedProducts().then((data)=>{
        setproducts(data.data.data)
        setpageCount(data?.data?.pagination?.total / 12)
        
      })
    }, []);
    return ( <div className=" px-5 lg:px-0">
   {
    products?.length>0?  <>
    <ProductsContainer status="unpublished" list={products}/> 
    <div className="my-12">
            <PaginationUI
           
              pageCount={pageCount}
              isAuth
            />
          </div></>:
    <Empty text="Hazırda unpublished elanınız yoxdur"  />
   }
    </div> );
}
 
export default UnpublishedOnesPage;