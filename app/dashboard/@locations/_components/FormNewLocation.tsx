import { Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { Button } from "@nextui-org/react";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager, Location } from "@/entities";


export default async function FormNewLocation({ store }: { store: string | string[] | undefined }) {
    if (store) return null
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
            tags: ["dashboard:locations", "dashboard:locations:managers"]
        }
    })
    const datalocations: Location[] = await responseLocations.json()
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Teinda</h1>
            <Input label="Nombre de tienda" placeholder="Ocso Juriquilla" name="locationName" />
            <Input label="Dirección" placeholder=" Avenida de la luz" name="locationAddress" />
            <Input label="Latitud" placeholder="120" name="LocationLat" />
            <Input label="Longitud" placeholder="20" name="LocationLng" />
            <SelectManager manager={dataManagers} locations={datalocations} />
            <Button type="submit" color="primary">Subir</Button>
        </form>
    )
}