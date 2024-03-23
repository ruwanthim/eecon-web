import Button from "@/components/common/Button";
import EventCard from "@/components/common/EventCard";
import HomePageSectionOne from "@/components/page/home/HomePageSectionOne";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Section 00 */}
            <div
                className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-screen "
                style={{
                    backgroundImage: "url(bg_02.jpg)",
                    backgroundSize: "cover", // Add this line
                }}
            >
                <div className="absolute top-1/2 left-1/6  text-start">
                    <h1 className="text-6xl font-bold">EECon 24</h1>
                    <p className="text-base text-lg">
                        International Conference on Electrical Engineering 2024
                    </p>
                    <Button>Register Now</Button>
                </div>
            </div>

            {/* Section 01 */}
            <HomePageSectionOne></HomePageSectionOne>

            {/* Section 02 */}
            <div className="w-full bg-red-500 flex-col justify-center items-center text-center">
                <h2 className="font-bold text-4xl self-center pt-6">
                    UPCOMING EVENTS
                </h2>
                <div className="flex flex-col md:flex-row">
                    <div className="basis-1/2 p-4 pb-0 md:pb-4">
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                    </div>
                    <div className="basis-1/2 p-4 pt-0 md:pt-4">
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                    </div>
                </div>
            </div>
        </main>
    );
}
