export default function EventCard() {
    return (
        <div className="bg-white w-full flex mt-4">
            <div className="flex-none p-4 text-white bg-blue-950 w-26">
                {" "}
                02 <br />
                MARCH{" "}
            </div>
            <div className="flex-1 p-4 text-black text-left">
                <p className="font-bold text-medium">REGISTRATION</p>
                <div className="flex text-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>

                    <p className="ml-2 mr-4">9.00 AM - 10.00 AM</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>

                    <p className="ml-2">Seminar Room</p>
                </div>
            </div>
        </div>
    );
}
