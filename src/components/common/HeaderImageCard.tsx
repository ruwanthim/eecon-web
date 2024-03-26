import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function HeaderImageCard({
    image,
    name,
}: {
    image: StaticImport;
    name: string;
}) {
    return (
        <div className="w-full flex flex-row p-8 pl-16">
            <div className="shadow-lg hover:shadow-md text-center flex flex-col justify-center items-center">
                <Image
                    className="w-[200px] hover:scale-125"
                    src={image}
                    alt={name}
                ></Image>
                <div className="p-2">
                    <p className="text-black">{name}</p>
                </div>
            </div>
        </div>
    );
}
