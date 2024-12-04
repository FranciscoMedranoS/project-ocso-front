"use client";
import { Product } from "@/entities";
import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import Link from "next/link";
export default function ProductCard({product}: {product: Product}){
    return(
        <Card className="flex max-w-[350px] pb-10">
            <CardHeader>
                {product.productName}
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>Nombre del producto: <b>{product.productName}</b></p>
                <p>Precio del producto: <b>{product.price}</b></p>
                <p>Proveedor: <Link className="font-bold underline" href={`/dashboard/providers/${product.provider.providerId}`}>{product.provider.providerName}</Link></p>
            </CardBody>
        </Card>
    )
}
