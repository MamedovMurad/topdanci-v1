"use client"
import PaginationUI from "@/components/ui/pagination";
import ProductsContainer from "@/containers/product";
import { getProductWholeSales } from "@/helper/api/products";
import { usePathname, useSearchParams } from "next/navigation";
import { useParams } from 'next/navigation';
import { FunctionComponent, Suspense, useEffect, useState } from "react";

interface WholeSaleProps {
  
}

const WholeSale: FunctionComponent<WholeSaleProps> = () => {
        const searchParams = useSearchParams();
        const params = useParams();
        const { id } = params;  
     
        
        const pathName = usePathname();
        console.log(pathName);
        
    const [products, setProducts] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const page = searchParams.get("page");
  
    useEffect(() => {
      
      getProductWholeSales((id&&id+'')||"",page||"").then((data)=>
        {
          setProducts(data?.data?.data)
          setpageCount(data?.data?.pagination?.total / 12)
        }
      )
    }, [id,page]);
    return (<div>
        <div className=" lg:mt-8 mt-5">
        <ProductsContainer list={products} />
    </div>
    <div className="my-4">
        <PaginationUI isAuth pageCount={pageCount}/>
    </div>
    </div>);
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <WholeSale />
    </Suspense>
  );
}