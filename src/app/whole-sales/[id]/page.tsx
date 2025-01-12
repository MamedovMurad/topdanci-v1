import ProductCard from "@/components/Card/productCard";
import ProductsContainer from "@/containers/product";
import { FunctionComponent } from "react";

interface WholeSaleProps {

}

const WholeSale: FunctionComponent<WholeSaleProps> = () => {
    return (<div className=" mt-8">
        <ProductsContainer/>
    </div>);
}

export default WholeSale;