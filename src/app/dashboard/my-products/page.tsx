import Submenu from "@/components/submenu";
import { FunctionComponent } from "react";
import Categories from "./_components/categories";
import Empty from "./_components/empty";

interface MyProductsProps {

}

const MyProducts: FunctionComponent<MyProductsProps> = () => {
  return (<section className=" mb-16">
    <Submenu activeElem="products" />
    <div className=" mt-[30px]">
      <Categories />
    </div>
    <div className=" mt-6">
      <Empty text="Hazırda aktiv elanınız yoxdur" button />
    </div>

  </section>);
}

export default MyProducts;