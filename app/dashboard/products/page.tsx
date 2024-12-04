import createProduct from "@/actions/products/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";


const ProductsPage = async () => {
  const responseProviders = await fetch(`${API_URL}/provider`,{
    headers:{
      ...authHeaders(),
    }
  })
  const providers = await (await responseProviders).json()
  return (
    <form className="px-10 justify-center pt-10" action={createProduct}>
    <div className="flex flex-col px-10 rounded-md py-10 bg-orange-400 gap-6">
      <h1 className="text-white text-2xl font-bold">Crear Producto</h1>
      <Input label="Nombre" name="productName" />
      <Input label="Precio" endContent={<LuDollarSign size="20"/>} name="price" />
      <Input label="Num. de Sellos" name="countSeal" />
      <SelectProvider providers={providers}/>
      <Button color="primary" type="submit">Crear Producto</Button>
    </div>
  </form>
  )
};
 
export default ProductsPage;