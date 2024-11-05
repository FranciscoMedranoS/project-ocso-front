import { Input } from "@nextui-org/react";
import { updateLocation } from "@/actions/locations/update";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { Button } from "@nextui-org/react";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager, Location } from "@/entities";





export default async function FormNewLocation({ store }: { store: string | string[] | undefined }) {
    if (!store || store == undefined || typeof store == "object") return null
    const updateWithStoreId = updateLocation.bind(null, store)
    const responseManagers = await fetch(`${API_URL}/managers`, {
        headers: {


            ...authHeaders()
        },
        next: {
            tags: ["dashboard:managers"]
        }
    })
    const dataManagers: Manager[] = await responseManagers.json()

    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations"]
        }
    })
    const datalocations: Location[] = await responseLocations.json()
    const foundLocation = datalocations.find((location) => location.locationId == +store)
    let foundManager = dataManagers.find((manager) => manager.managerId == foundLocation?.manager?.managerId)
    return (
        <form action={updateWithStoreId} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
            <Input required = {true} defaultValue={foundLocation?.locationName} label="Nombre de tienda" placeholder="Ocso Juriquilla" name="locationName" />
            <Input required = {true} defaultValue={foundLocation?.locationAddress} label="Dirección" placeholder=" Avenida de la luz" name="locationAddress" />
            <Input required = {true} defaultValue={foundLocation?.locationLatLng[0].toString()} label="Latitud" placeholder="120" name="LocationLat" />
            <Input required = {true} defaultValue={foundLocation?.locationLatLng[1].toString()} label="Longitud" placeholder="20" name="LocationLng" />
            <SelectManager defaultManagers={foundManager?.managerId} manager={dataManagers} locations={datalocations} />
            <Button type="submit" color="primary">Actualizar</Button>
        </form>
    )
}