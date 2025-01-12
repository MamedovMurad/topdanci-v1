import Banner from "@/components/banner";

import ProductsContainer from "@/containers/product";



export default function Home() {
  return (

    <main>
      <Banner />

      <section >
        <div className="container mx-auto  ">
          <div className=" my-20  ">
           
  
      <ProductsContainer/>
   
         

          </div>
        </div>
      </section>
    </main>
  );
}
