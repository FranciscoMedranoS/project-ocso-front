import { Provider } from "@/entities";
import { Input, Button } from "@nextui-org/react";
import updateProvider from "@/actions/providers/update";
import DeleteProviderButton from "./DeleteButton";
import DeleteProvider from "./DeleteProvider";

export default function FormUpdateProvider({provider}: {provider: Provider}) {
    const {providerId} = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId);

    return (
        <>
            <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-md px-10 py-10 mr-20 ml-10 items-center justify-center">
                <Input className= "max-w-[250px]" defaultValue={provider.providerName} label="Nombre" placeholder="Pecsi" name="providerName"></Input>
                <Input className= "max-w-[250px]" defaultValue={provider.providerEmail} label="Correo electróncio" placeholder="bussine@gmail.com" name="providerEmail"></Input>
                <Input className= "max-w-[250px]" defaultValue={provider.providerPhoneNumber} label="Número" placeholder="442xxxxx" name="providerPhoneNumber"></Input>
                <Button color="primary" type="submit">Actualizar proveedor</Button>
                
                <DeleteProvider>
                <h1 className="text-white text-4xl text-center">¿Estas seguro de eliminar al proveedor <b>{provider.providerName}</b>?</h1>
                    <DeleteProviderButton providerId={providerId}/>
                </DeleteProvider>
            </form>
        </>
    )
}