"use client"
import Banner from "@/components/banner";
import Filter from "@/components/filter";
import ProductsContainer from "@/containers/product";
import { getProducts } from "@/helper/api/products";
import { useSearchParams } from "next/navigation";
import { FunctionComponent, Suspense, useEffect, useState } from "react";

interface ProductsPageProps {
    
}
 
const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();
  const search_text = searchParams.get("search-text");


  
  const city = searchParams.get("city");
  const cityName = searchParams.get("city-name");
  useEffect(() => {
    getProducts(search_text||"",city||"").then((data)=>(
      setProducts(data?.data?.data)
    ))
  }, [search_text,city]);
    return (   <main>
        <section className=" hidden lg:block">
        <Banner isOpen={false} 
        defval={(city&&cityName)?{label:cityName,value:city}:undefined} 
        searchVal={search_text}/>
        </section>
  
        <section >
          <div className="container mx-auto lg:mt-5  ">
           <div className=" lg:block hidden">
           <Filter/>
           </div>
            <div className=" mb-20 lg:mt-5   ">
             
    
        <ProductsContainer list={products}/>
     
           
  
            </div>
          </div>
        </section>
      </main> );
}
 


export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductsPage />
    </Suspense>
  );
}