import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/main/navbar/Navbar";
import Footer from "@/components/main/footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AuthKeeper - Password Manager",
  description: "A Safe & Simple Password Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className,"grid grid-rows-[auto_1fr_auto] h-screen")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
