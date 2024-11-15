import { API_URL } from "@/constants"
import { Manager } from "@/entities"
import { authHeaders } from "@/helpers/authHeaders"
import ManagerCards from "./_components/ManagerCards"

export default async function ManagerPage({ params, }: {
    params: {
        id: string
    }
}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:managers", `dashboard:managers:${params.id}`]
        }
    })
    const data: Manager = await response.json()
    return (
        <ManagerCards manager={data} />
    )
}