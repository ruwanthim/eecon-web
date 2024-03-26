import Image from "next/image";
import IMG_JR_LUCUS from "../../assets/persons/prof_jr_lucus.png";

export default function HeaderImageCard() {
    return (
        <div className="w-full flex flex-row p-8 pl-16">
            <div className="shadow-lg hover:shadow-md text-center">
                <Image
                    className="w-[200px] hover:scale-125"
                    src={IMG_JR_LUCUS}
                    alt="Prof. J.R. Lucas"
                ></Image>
                <p className="text-black">Prof. J.R. Lucas</p>
            </div>
        </div>
    );
}
