import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { Manager } from '@/entities';

export default async function ManagerCards({ manager }: { manager: Manager }) {
    return (
        <Card className="mx-20 py-2 ">
            <CardHeader>
                <p className="w-full">
                    Nombre: <b>{manager.managerFullName}</b>
                </p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">
                    Email: <b>{manager.managerEmail}</b>
                </p>
                <p className="w-full">
                    Teléfono: <b>{manager.managerPhoneNumber}</b>
                </p>
                {manager.location ? (
                    <>
                        <p>
                            Tienda: <b>{manager.location.locationName}</b>
                        </p>
                        <iframe
                            className="border-2 border-orange-800 rounded-md my-2"
                            width="300"
                            height="200"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA1ecwUo-w3Bi8uc9c7isE-lhIRsmShN6c&q=${manager.location.locationLatLng[0]},${manager.location.locationLatLng[1]}`}>
                        </iframe>
                    </>
                ) : (<p>No tiene tienda</p>)
                }
            </CardBody>
        </Card>
    );
}

