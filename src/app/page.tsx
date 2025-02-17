"use client"
import Banner from "@/components/banner";
import Filter from "@/components/filter";
import PaginationUI from "@/components/ui/pagination";

import ProductsContainer from "@/containers/product";
import { getProductDetail, getProducts } from "@/helper/api/products";
import { useEffect, useState } from "react";



export default function Home() {
  const [products, setProducts] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    getProducts().then((data)=>
      {
        setProducts(data?.data?.data)
        setpageCount(data?.data?.pagination?.total / 12)
        setloading(false)
      }
    )
  }, []);
  return (

    <main>
      <Banner />

      <section >
        <div className="container mx-auto  ">
          <div className=" lg:my-6 my-5  ">
          <div className=" lg:block hidden mb-6 ">
           <Filter/>
           </div>
  
      <ProductsContainer list={products} loading={loading} callBack={()=>getProducts().then((data)=>
      {
        setProducts(data?.data?.data)
        setpageCount(data?.data?.pagination?.total / 12)
        setloading(false)
      }
    )}/>
   
         

          </div>
        </div>
        <div className="my-12">
            <PaginationUI
            pageCount={pageCount}
            
            />
          </div>
      </section>
    </main>
  );
}
