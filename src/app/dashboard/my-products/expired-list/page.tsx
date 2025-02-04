"use client"
import ProductsContainer from "@/containers/product";
import { getUserExpiredProducts } from "@/helper/api/products";
import { FunctionComponent, Suspense, useEffect, useState } from "react";
import Empty from "../_components/empty";
import PaginationUI from "@/components/ui/pagination";
import { api } from "@/helper/api";
import { notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';
import DeleteModal from "@/components/modal/deleteModal";
import ModalMantine from "@/components/modal";
import { useSearchParams } from "next/navigation";
interface ExpiredListPageProps {
    
}
 
const ExpiredListPage: FunctionComponent<ExpiredListPageProps> = () => {
    const searchParams = useSearchParams();
    const [products, setproducts] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const page = searchParams.get("page");
    const [open, setopen] = useState(false);
    useEffect(() => {
      getUserExpiredProducts(page||"").then((data)=>{
        setproducts(data.data.data)
        setpageCount(data?.data?.pagination?.total / 12)
      })
    }, [page]);

function restoreProduct(id:number){
api.post('restore-advert/'+id,'').then((data)=>{
  getUserExpiredProducts().then((data)=>{
    setproducts(data.data.data)
    setpageCount(data?.data?.pagination?.total / 12)

   setopen(true)
  })
})
}


useEffect(() => {
  let timeout:any;
  if (open) {
    timeout = setTimeout(() => {
      setopen(false);
    }, 3000);
  }

  // Cleanup function
  return () => clearTimeout(timeout);
}, [open]);


    return ( 
    <div className=" px-5 lg:px-0">
   {
    products?.length>0?   <>
    
    <ProductsContainer status="expired" list={products} callBack={restoreProduct} /> 
    <div className="my-12">
            <PaginationUI
              pageCount={pageCount}
              isAuth
            />
           <ModalMantine isOpen={open} closeModal={()=>setopen(false)} modalBody={ <DeleteModal title="Bərpa edildi" text="Məhsulunuz bərpa edildi" closeModal={()=>setopen(false)}/>}/>
          </div>
    </>:
    <Empty text="Hazırda expired elanınız yoxdur"  />
   }
    </div> );
}
 
export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ExpiredListPage />
    </Suspense>
  );
}