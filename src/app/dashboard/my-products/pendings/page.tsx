"use client"
import ProductsContainer from "@/containers/product";
import { FunctionComponent, Suspense, useEffect, useState } from "react";
import Empty from "../_components/empty";
import { getUserPendingProducts } from "@/helper/api/products";
import PaginationUI from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

interface PendingsPageProps {
    
}
 
const PendingsPage: FunctionComponent<PendingsPageProps> = () => {
      const searchParams = useSearchParams();
      const page = searchParams.get("page");
    const [products, setproducts] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    useEffect(() => {
      getUserPendingProducts().then((data)=>{
        setproducts(data.data.data)
        setpageCount(data?.data?.pagination?.total / 12)
      })
    }, [page]);
    return ( <div className=" px-5 lg:px-0">
   {
    products?.length>0?  <>
    <ProductsContainer status="pending" list={products}/> 
    <div className="my-12">
            <PaginationUI
           
              pageCount={pageCount}
              isAuth
            />
          </div>
    </>:
    <Empty text="Hazırda pending elanınız yoxdur"  />
   }
    </div> );
}
 
export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PendingsPage />
    </Suspense>
  );
}