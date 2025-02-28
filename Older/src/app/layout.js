import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NU - Video Calling Application",
  description: "NU - VCA is an advanced video calling application designed to facilitate seamless communication. Developed using Next.js, Tailwind CSS, and other modern npm packages, it offers a responsive and user-friendly interface. This application ensures high-quality video and audio transmission, making it ideal for both personal and professional use. The integration of cutting-edge technologies guarantees a reliable and secure platform for users to connect and interact in real-time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
        <body className={inter.className}>
       
          {children}

        </body>
     
    </html>
  );
}
