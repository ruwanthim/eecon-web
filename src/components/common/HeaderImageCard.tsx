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
            <div className="shadow-lg hover:shadow-md text-center flex flex-col justify-center items-center duration-200 ">
                <div className="overflow-hidden ">
                    <Image
                        className="w-[200px] hover:scale-125 transition duration-200 ease-in-out"
                        src={image}
                        alt={name}
                    ></Image>
                </div>
                <div className="p-2">
                    <p className="text-black">{name}</p>
                </div>
            </div>
        </div>
    );
}
