import StreamVideoProvider from "@/providers/StreamClientProvider"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <StreamVideoProvider>{children}</StreamVideoProvider>
    )
}

export default RootLayout