import deleteProduct from "@/actions/products/delete";
import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";

export default function DeleteProduct({productId}:{productId: string}){
    const deleteProductById = deleteProduct.bind(null,productId)
    return(
        <form action={deleteProductById}>
            <Button color="danger" type="submit"><LuTrash/></Button>
        </form>
    )
}