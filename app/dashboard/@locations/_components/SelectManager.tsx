"use client"
import { Select, SelectItem } from "@nextui-org/react"
import { Manager } from "@/entities"
import { Location } from "@/entities"

export default function SelectManager({ manager, locations }: { manager: Manager[], locations: Location[] }) {
    const disabledkeys = locations.map((location: Location) => {
        return location.manager?.managerId
    }).filter((managerId) => managerId !== undefined)
    
    return (
        <Select label="Manager" name="manager" disabledKeys={disabledkeys}>
            {manager.map((manager: Manager) => {
                return (
                    <SelectItem 
                        key={manager.managerId} 
                        value={manager.managerId} 
                        textValue={manager.managerFullName} // Agrega textValue aquí
                    >
                        {manager.managerFullName}
                    </SelectItem>
                )
            })}
        </Select>
    )
}
