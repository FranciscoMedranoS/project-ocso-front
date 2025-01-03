import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard ({provider}: {provider: Provider}){
    return (
        <Card className="w-full min-w-[350px] max-w-[350px]">
            <CardHeader>
                {provider.providerName}
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>Correo electrónico:</p>
                <b>{provider.providerEmail}</b>
                <p>Número de teléfono:</p>
                <b>{provider.providerPhoneNumber}</b>
                {
                   provider?.products?.length !== 0? (
                    <p>Tiene <b>{provider?.products?.length} producto{provider.products.length>1 ? "s" : ""}</b></p>
                    ): <p>No tiene productos</p>
                }
            </CardBody>
        </Card>
    )
}