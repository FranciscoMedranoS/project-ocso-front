import Image from "next/image";

export default function AuthLayouyt({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="bg-orange-200 w-screen h-screen overflow-hidden grid">
            <div className="place-content-center place-self-center placed-item-center text-center">
                <div className="flex flex-col items-center bottom-10 relative">
                    <Image
                        src="/Oxxo_Logo.png"
                        alt="Logo de Ocso"
                        width={250}
                        height={0} />
                </div>
                {children}
            </div>
        </div>
    )
}