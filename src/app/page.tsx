"use client"
import Banner from "@/components/banner";

import ProductsContainer from "@/containers/product";
import { getProductDetail, getProducts } from "@/helper/api/products";
import { useEffect, useState } from "react";



export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    getProducts().then((data)=>(
      setProducts(data?.data?.data)
    ))
  }, []);
  return (

    <main>
      <Banner />

      <section >
        <div className="container mx-auto  ">
          <div className=" lg:my-20 my-5  ">
           
  
      <ProductsContainer list={products}/>
   
         

          </div>
        </div>
      </section>
    </main>
  );
}
