"use client"
import Banner from "@/components/banner";
import {Filter} from "@/components/filter";
import PaginationUI from "@/components/ui/pagination";
import ProductsContainer from "@/containers/product";
import { getProducts } from "@/helper/api/products";
import { useSearchParams } from "next/navigation";
import { FunctionComponent, Suspense, useEffect, useState } from "react";

interface ProductsPageProps {

}

const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const searchParams = useSearchParams();
  const search_text = searchParams.get("search-text");
  const type = searchParams.get("advert_type");
  const page = searchParams.get("page");
  const category = searchParams.get("category");


  const city = searchParams.get("city");
  const cityName = searchParams.get("city-name");
  useEffect(() => {
    getProducts(search_text || "", city || "", type || "", page || "", category || "")
      .then((data) => {
        setProducts(data?.data?.data)
        setpageCount(data?.data?.pagination?.total / 12)
      })
  }, [search_text, city, type, page, category]);
  return (<main>
    <section className=" hidden lg:block">
      <Banner isOpen={false}
        defval={(city && cityName) ? { label: cityName, value: city } : undefined}
        searchVal={search_text}
        category={category} />
    </section>

    <section >
      <div className="container mx-auto lg:mt-5  ">
        <div className=" lg:block hidden">
          <Filter defval={(city && cityName) ? { label: cityName, value: city } : undefined}
            searchVal={search_text} 
            category={category}/>
        </div>
        <div className=" mb-20 lg:mt-5   ">


          <ProductsContainer list={products} />


          <div className="mt-12">
            <PaginationUI
              pageCount={pageCount}
              defval={(city && cityName) ? { label: cityName, value: city } : undefined}
              searchVal={search_text} type={type || ""}
              start={(page ? Number(page) - 1 : 0)} 
              category={category}/>
          </div>
        </div>
      </div>
    </section>
  </main>);
}



export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductsPage />
    </Suspense>
  );
}