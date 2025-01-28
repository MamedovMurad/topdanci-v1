"use client"

import { FunctionComponent } from "react";

import Empty from "./_components/empty";


interface MyProductsProps {

}

const MyProducts: FunctionComponent<MyProductsProps> = () => {
  return (
<div className=" px-5 lg:px-0">
 <Empty text="Hazırda aktiv elanınız yoxdur" button />
</div>);
}

export default MyProducts;