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

  useEffect(() => {
    
    getProducts().then((data)=>
      {
        setProducts(data?.data?.data)
        setpageCount(data?.data?.pagination?.total / 12)
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
  
      <ProductsContainer list={products}/>
   
         

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
