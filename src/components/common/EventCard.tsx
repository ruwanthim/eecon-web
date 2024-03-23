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
                <div className="flex text-center align-center">
                    <svg
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12 6V12"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M16.24 16.24L12 12"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="ml-2 mr-4">9.00 AM - 10.00 AM</p>
                    <svg
                        width="16px"
                        height="16px"
                        viewBox="-0.5 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 11.3201C3 8.93312 3.94822 6.64394 5.63605 4.95612C7.32387 3.26829 9.61305 2.32007 12 2.32007C14.3869 2.32007 16.6762 3.26829 18.364 4.95612C20.0518 6.64394 21 8.93312 21 11.3201"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M3 11.3201C3 17.4201 9.76 22.3201 12 22.3201C14.24 22.3201 21 17.4201 21 11.3201"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12 15.3201C14.2091 15.3201 16 13.5292 16 11.3201C16 9.11093 14.2091 7.32007 12 7.32007C9.79086 7.32007 8 9.11093 8 11.3201C8 13.5292 9.79086 15.3201 12 15.3201Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="ml-2">Seminar Room</p>
                </div>
            </div>
        </div>
    );
}
