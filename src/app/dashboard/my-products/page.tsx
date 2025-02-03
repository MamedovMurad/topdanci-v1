"use client"

import { FunctionComponent, useEffect, useState } from "react";

import Empty from "./_components/empty";
import { getUserActiveProducts } from "@/helper/api/products";
import ProductsContainer from "@/containers/product";
import PaginationUI from "@/components/ui/pagination";
import { api } from "@/helper/api";
import { notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';


interface MyProductsProps {

}

const MyProducts: FunctionComponent<MyProductsProps> = () => {
  const [products, setproducts] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  useEffect(() => {
    getUserActiveProducts().then((data) => {
      setproducts(data.data.data)
      setpageCount(data?.data?.pagination?.total / 12)

    })
  }, [pageCount,]);

  function deleteProduct(id:number){
    api.delete('delete-advert/'+id).then((data)=>{
      getUserActiveProducts().then((data) => {
        setproducts(data.data.data)
        setpageCount(data?.data?.pagination?.total / 12)
  
      })
      
         notifications.show({
                      title: 'Default notification',
                      message: 'Məhsulunuz hesabı bitmişlər listinə daxil edildi',
                    })
    })

  }
  return (
    <div className=" px-5 lg:px-0">
      {
        products?.length > 0 ? <div><ProductsContainer list={products} status="active" callBack={deleteProduct} />
          <div className="my-12">
            <PaginationUI
           
              pageCount={pageCount}
              isAuth
            />
          </div>
        </div>
          : <Empty text="Hazırda aktiv elanınız yoxdur" button />
      }

    </div>);
}

export default MyProducts;