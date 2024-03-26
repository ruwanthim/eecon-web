import HeaderCard from "@/components/common/HeaderCard";
import HeaderImageCard from "@/components/common/HeaderImageCard";
import Image from "next/image";

export default function Committee() {
    return (
        <div className="w-full bg-white text-black bg-gray-100">
            <div
                className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72 "
                style={{
                    backgroundImage: "url(bg_02.jpg)",
                    backgroundSize: "cover", // Add this line
                }}
            >
                <div className="pt-36 left-1/6  text-start">
                    <h1 className="text-4xl sm:text-6xl font-bold ">
                        Committee
                    </h1>
                </div>
            </div>

            <HeaderCard text={"Honorary Chair"}></HeaderCard>
            <HeaderImageCard></HeaderImageCard>

            <div className="flex flex-col sm:flex-row">
                <div className="basis-1/2">
                    <HeaderCard text={"Program Chair"}></HeaderCard>
                    <HeaderImageCard></HeaderImageCard>
                </div>
                <div className="basis-1/2">
                    <HeaderCard text={"Program Co-Chair"}></HeaderCard>
                    <HeaderImageCard></HeaderImageCard>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="basis-1/2">
                    <HeaderCard text={"Publication Chair"}></HeaderCard>
                    <HeaderImageCard></HeaderImageCard>
                </div>
                <div className="basis-1/2">
                    <HeaderCard text={"Publication Co-Chair"}></HeaderCard>
                    <HeaderImageCard></HeaderImageCard>
                </div>
            </div>

            <HeaderCard text={"Publicity Chairs"}></HeaderCard>
            <HeaderImageCard></HeaderImageCard>
            <HeaderCard text={"Registration/Financial Chair"}></HeaderCard>
            <HeaderImageCard></HeaderImageCard>

            <div className="flex flex-col sm:flex-row">
                <div className="basis-1/2">
                    <HeaderCard text={"Local Organizing Chair"}></HeaderCard>
                    <HeaderImageCard></HeaderImageCard>
                </div>
                <div className="basis-1/2">
                    <HeaderCard text={"Local Organizing Co-Chair"}></HeaderCard>
                    <HeaderImageCard></HeaderImageCard>
                </div>
            </div>
            <HeaderCard text={"Conference Secretary"}></HeaderCard>
            <HeaderImageCard></HeaderImageCard>
            <HeaderCard text={"Awards Chair"}></HeaderCard>
            <HeaderImageCard></HeaderImageCard>
        </div>
    );
}
