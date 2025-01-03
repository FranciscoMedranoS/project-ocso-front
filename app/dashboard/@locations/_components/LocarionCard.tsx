import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default async function LocationCard({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;
  const response= await fetch(`${API_URL}/locations/${store}`, {
    headers: {
      ...authHeaders()
    },
    next:{
      tags: ["dashboard:locations", `dashboard:locations:${store}`]
    }
  });
const data = await response.json()
  return (
    <Card>
      <CardHeader>
        <b className="w-full">{data.locationName}</b>
      </CardHeader>
      <Divider></Divider>
      <CardBody className="flex flex-col w-full items-center">
        <p className="w-full">
          Manager:
          <Link href={{ pathname: `dashboard/managers/${data.manager?.managerId }` }}>
            <b> {data.manager?.managerFullName}</b>
          </Link>
        </p>
        <p className="w-full">
          Dirección: <b>{data.locationAddress}</b>
        </p>
        <iframe
          width="300"
          height="200"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA1ecwUo-w3Bi8uc9c7isE-lhIRsmShN6c&q=${data.locationLatLng[0]}, ${data.locationLatLng[1]}`}>
        </iframe>
      </CardBody>
    </Card>
  );
}