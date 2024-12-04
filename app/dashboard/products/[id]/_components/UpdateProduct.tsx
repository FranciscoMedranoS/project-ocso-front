import { Product, Provider } from "@/entities";
import updateProduct from "@/actions/products/update";
import { Button, Input } from "@nextui-org/react";
import SelectProvider from "../../_components/SelectProvider";
import { LuCheck } from "react-icons/lu";

export default function UpdateProduct({ product, providers }: { product: Product, providers: Provider[] }) {
    const { productId } = product
    const updateProductById = updateProduct.bind(null, productId)
    return (
        <form action={updateProductById} className="p-10 flex flex-col gap-4">
            <Input label="Nombre" name="productName" defaultValue={product.productName} />
            <Input label="Precio" name="price" defaultValue={String(product.price)} />
            <Input label="Num. de Sellos" name="countSeal" defaultValue={String(product.countSeal)} />
            <SelectProvider providers={providers} defaultProvider={product.provider.providerId} />
            <div className="flex flex-row gap-10 flex-grow-0">
                <Button color="primary" type="submit"><LuCheck size="20" /></Button>
            </div>
        </form>
    )
}