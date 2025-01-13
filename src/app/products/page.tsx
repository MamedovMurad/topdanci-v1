import Banner from "@/components/banner";
import ProductsContainer from "@/containers/product";
import { FunctionComponent } from "react";

interface ProductsPageProps {
    
}
 
const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
    return (   <main>
        <Banner isOpen={false} />
  
        <section >
          <div className="container mx-auto  ">
            <div className=" my-20  ">
             
    
        <ProductsContainer/>
     
           
  
            </div>
          </div>
        </section>
      </main> );
}
 
export default ProductsPage;