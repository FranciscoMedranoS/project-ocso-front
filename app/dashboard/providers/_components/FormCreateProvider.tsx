import createProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";
export default function FormCreateProvider(){
    return(
        <form action={createProvider} className="flex flex-col gap-2 flex-grow-0">
            <h1 className="text-2xl text-white">Crear Proveedor</h1>
            <Input label="Nombre" placeholder="Pecsi" name="providerName"></Input>
            <Input label="Correo electróncio" placeholder="bussine@gmail.com" name="providerEmail"></Input>
            <Input label="Número" placeholder="442xxxxx" name="providerPhoneNumber"></Input>
            <Button color="primary" type="submit">Crear proveedor</Button>
        </form>
    )
}