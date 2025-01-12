import LabelHeader from "@/components/label";
import ProductsContainer from "@/containers/product";
import { FunctionComponent } from "react";

interface FavoritesProps {
    
}
 
const Favorites: FunctionComponent<FavoritesProps> = () => {
    return (<main>
        <LabelHeader title="Seçilmişlər"/>

        <section>
        <div className="container mx-auto mb-20">
            <ProductsContainer/>
            </div>
        </section>
    </main>  );
}
 
export default Favorites;