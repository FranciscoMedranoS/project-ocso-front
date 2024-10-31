import { Input } from "@nextui-org/react";
import {createLocation} from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";
import { Button } from "@nextui-org/react";


export default async function FormNewLocation({store}:{store:string | string[] | undefined} ){
    if (store) return null
    const token = cookies().get(TOKEN_NAME)?.value
    const responseManagers = await axios.get(`${API_URL}/managers`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocation= await axios.get(`${API_URL}/locations`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return(
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Teinda</h1>
            <Input label="Nombre de tienda" placeholder="Ocso Juriquilla" name="locationName" />
            <Input label="Dirección" placeholder = " Avenida de la luz"name="locationAddress" />
            <Input label="Latitud" placeholder="120" name="LocationLat" />
            <Input label="Longitud" placeholder="20" name="LocationLng" />
            <SelectManager manager={responseManagers.data} locations = {responseLocation.data}/>
            <Button type="submit" color="primary">Subir</Button>
        </form>
    )
}