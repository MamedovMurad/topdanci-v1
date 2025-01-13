import Banner from "@/components/banner";
import Filter from "@/components/filter";
import ProductsContainer from "@/containers/product";
import { FunctionComponent } from "react";

interface ProductsPageProps {
    
}
 
const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
    return (   <main>
        <Banner isOpen={false} />
  
        <section >
          <div className="container mx-auto mt-5  ">
            <Filter/>
            <div className=" mb-20 mt-5  ">
             
    
        <ProductsContainer/>
     
           
  
            </div>
          </div>
        </section>
      </main> );
}
 
export default ProductsPage;