"use client"
import ProductsContainer from "@/containers/product";
import { getUserExpiredProducts } from "@/helper/api/products";
import { FunctionComponent, useEffect, useState } from "react";
import Empty from "../_components/empty";
import PaginationUI from "@/components/ui/pagination";
import { api } from "@/helper/api";
import { notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';
interface ExpiredListPageProps {
    
}
 
const ExpiredListPage: FunctionComponent<ExpiredListPageProps> = () => {
    const [products, setproducts] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    useEffect(() => {
      getUserExpiredProducts().then((data)=>{
        setproducts(data.data.data)
        setpageCount(data?.data?.pagination?.total / 12)
      })
    }, [pageCount]);

function restoreProduct(id:number){
api.post('restore-advert/'+id,'').then((data)=>{
  getUserExpiredProducts().then((data)=>{
    setproducts(data.data.data)
    setpageCount(data?.data?.pagination?.total / 12)

           notifications.show({
                          title: 'Default notification',
                          message: 'Məhsulunuz bərpa edildi',
                        })
  })
})
}
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
          </div>
    </>:
    <Empty text="Hazırda expired elanınız yoxdur"  />
   }
    </div> );
}
 
export default ExpiredListPage;