import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const inter = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "800"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "EECon2024-4th International Conference on Electrical Engineering",
    authors: [
        { name: "EESoc", url: "https://www.eesoc.lk" },
        { name: "Janith Samee", url: "https://janithsamee.me" },
    ],

    description:
        "To share the knowledge to integrate state of the art technologies in different Engineering disciplines for the betterment of fields of Electrical Engineering.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar></NavBar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
