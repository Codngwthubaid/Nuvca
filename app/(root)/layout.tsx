import StreamVideoProvider from "@/providers/StreamClientProvider"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NUVCA - Video Conferencing App",
    description: "NUCVA - is a modern video Conferencing application built with Next.js and styled using Tailwind CSS. It leverages multiple packages for enhanced functionality, ensuring a seamless user experience. The app features real-time communication, user authentication, and a scalable architecture.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <StreamVideoProvider>{children}</StreamVideoProvider>
    )
}

export default RootLayout