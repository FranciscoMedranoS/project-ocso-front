import { API_URL } from "@/constants"
import { Manager } from "@/entities"
import { authHeaders } from "@/helpers/authHeaders"
import ManagerCards from "./_components/ManagerCards"
import DeleteManagerButton from "./_components/DeleteManagerButtoxn"

export default async function ManagerPage({
    params,
  }: {
    params: {
      id: string;
    };
  }) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
      headers: {
        ...authHeaders(),
      },
      next: {
        tags: ["dashboard:managers", `dashboard:managers:${params.id}`],
      },
    });
    const data: Manager = await response.json();
    return (
      <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
        <ManagerCards manager={data} />
        <div className="bg-gray-50 rounded-md px-10 py-2">
          <DeleteManagerButton managerId={data.managerId}/>
        </div>
      </div>
    );
  }