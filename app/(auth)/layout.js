import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/main/navbar/Navbar";
import Footer from "@/components/main/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AuthKeeper - Password Manager",
  description: "A Safe & Simple Password Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
