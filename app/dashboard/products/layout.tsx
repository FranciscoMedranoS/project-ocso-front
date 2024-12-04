import { API_URL } from "@/constants"
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FilteredCard from "./_components/FilteredCard";
import { ReactNode } from "react";
const LayoutProducts = async ({children}:{children:ReactNode}) => {
  const responseProducts = await fetch(`${API_URL}/products`, { 
    headers:{
      ...authHeaders()
    },
    next:{
      tags: ["dashboard:products"]
    }
  })
  const products: Product[] = await responseProducts.json() 
  const responseProviders = await fetch(`${API_URL}/provider`, {
    headers:{
      ...authHeaders()
    },
    next:{
      tags: ["dashboard:providers"]
    }
  })
  const providers = await responseProviders.json()
  return (
    <div className="h-[90vh] w-full flex flex-row">
      <div className="w-3/12">
        <FilteredCard products={products} providers={providers}/>
      </div>
      <div className="w-9/12">
        {children}
      </div>
    </div>
  )
};
export default LayoutProducts;