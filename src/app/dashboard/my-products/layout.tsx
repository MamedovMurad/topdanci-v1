
"use client"
import Submenu from "@/components/submenu";
import React, { FunctionComponent, ReactNode } from "react";
import Categories from "./_components/categories";
import ProductsContainer from "@/containers/product";

interface ActiveListProps {
    children:any
}
 
const MyListLayout: FunctionComponent<ActiveListProps> = ({children}) => {
    return (     <section className=" mb-16">
        <Submenu activeElem="products" />
        <div className=" mt-[30px]">
          <Categories />
        </div>
        <div className=" mt-6">
        {React.cloneElement(children, {
        onClick: () => console.log("click"),
      })}
          {/* <Empty text="Hazırda aktiv elanınız yoxdur" button={empty.button} /> */}
          {/* <ProductsContainer /> */}
        </div>
  
      </section>);
}
 
export default MyListLayout;