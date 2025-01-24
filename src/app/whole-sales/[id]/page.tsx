import ProductCard from "@/components/Card/productCard";
import ProductsContainer from "@/containers/product";
import { FunctionComponent } from "react";

interface WholeSaleProps {

}

const WholeSale: FunctionComponent<WholeSaleProps> = () => {
    return (<div className=" md:mt-8 mt-5">
        <ProductsContainer/>
    </div>);
}

export default WholeSale;