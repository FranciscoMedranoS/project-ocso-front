"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Location } from "@/entities";

export async function updateLocation(store: string, formData: FormData): Promise<void> {
    let location: any = {};
    let locationLatLng = [0, 0];

    for (const key of formData.keys()) {
        const value = formData.get(key);
        if (value) {
            if (key === "LocationLat") {
                locationLatLng[0] = +value;
            } else if (key === "LocationLng") {
                locationLatLng[1] = +value;
            } else {
                location[key] = value;
            }
        }
    }
    location.locationLatLng = locationLatLng;
    const response = await fetch(`${API_URL}/locations/${store}`,
        {
            method: "PATCH",
            body: JSON.stringify(location),
            headers: {
                'content-type': 'application/json',
                ...authHeaders()
            }
        },
    );
    const { locationId }: Location = await response.json()
    if (response.status == 200) {
        revalidateTag("dashboard:locations")
        revalidateTag(`dashboard:locations: ${store}`)
        redirect(`/dashboard?store=${locationId}`)
    }

}
