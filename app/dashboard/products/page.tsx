import { API_URL } from "@/constants"
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FilteredCard from "./_components/FilteredCard";
const ProductsPage = async () => {
    const response = await fetch(`${API_URL}/products`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:products"]
        }
    })
    const products: Product[] = await response.json()
    return (
        <div className="h-[90vh] w-full">
            <div className="w-3/12">
                <FilteredCard products={products} />
            </div>
        </div>
    )
};

export default ProductsPage;