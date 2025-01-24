import Banner from "@/components/banner";
import Filter from "@/components/filter";
import ProductsContainer from "@/containers/product";
import { FunctionComponent } from "react";

interface ProductsPageProps {
    
}
 
const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
    return (   <main>
        <section className=" hidden md:block">
        <Banner isOpen={false} />
        </section>
  
        <section >
          <div className="container mx-auto md:mt-5  ">
           <div className=" md:block hidden">
           <Filter/>
           </div>
            <div className=" mb-20 md:mt-5   ">
             
    
        <ProductsContainer/>
     
           
  
            </div>
          </div>
        </section>
      </main> );
}
 
export default ProductsPage;