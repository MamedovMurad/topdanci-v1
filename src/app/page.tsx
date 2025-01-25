import Banner from "@/components/banner";

import ProductsContainer from "@/containers/product";



export default function Home() {
  return (

    <main>
      <Banner />

      <section >
        <div className="container mx-auto  ">
          <div className=" lg:my-20 my-5  ">
           
  
      <ProductsContainer/>
   
         

          </div>
        </div>
      </section>
    </main>
  );
}
