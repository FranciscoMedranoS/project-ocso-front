import deleteProvider from "@/actions/providers/delete"
import { Button } from "@nextui-org/react"
export default function DeleteProviderButton({providerId}: {providerId: string} ){
    const deleteProvidersById = deleteProvider.bind(null, providerId)
    return (
        <form action={deleteProvidersById} className="flex ">
            <Button className="w-full" color="danger" type="submit">Estoy seguro</Button>
        </form>
    )
}