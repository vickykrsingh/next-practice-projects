import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/client-comp/Navbar";
import CommonContextLayout from "@/context/CommonContextLayout";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CommonContextLayout>
          <Navbar />
          {children}
          <Toaster/>
        </CommonContextLayout>
      </body>
    </html>
  );
}
