import Banner from "@/components/banner";
import Filter from "@/components/filter";
import ProductsContainer from "@/containers/product";
import { FunctionComponent } from "react";

interface ProductsPageProps {
    
}
 
const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
    return (   <main>
        <section className=" hidden lg:block">
        <Banner isOpen={false} />
        </section>
  
        <section >
          <div className="container mx-auto lg:mt-5  ">
           <div className=" lg:block hidden">
           <Filter/>
           </div>
            <div className=" mb-20 lg:mt-5   ">
             
    
        <ProductsContainer/>
     
           
  
            </div>
          </div>
        </section>
      </main> );
}
 
export default ProductsPage;