"use client"
import { Select, SelectItem } from "@nextui-org/react"
import { Manager } from "@/entities"
import { Location } from "@/entities"

interface SelectManagerProps{
    manager:Manager[],
    locations: Location[],
    defaultManagers?: string;
}
export default function SelectManager({ manager, locations, defaultManagers }: SelectManagerProps) {
    const disabledkeys = locations.map((location: Location) => {
        if(location.manager?.managerId != defaultManagers) return location.manager?.managerId
    }).filter((managerId) => managerId !== undefined)
   
    
    return (
        <Select defaultSelectedKeys={defaultManagers != undefined ? [defaultManagers] : []} label="Manager" name="manager" disabledKeys={disabledkeys}>
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
