import { Inter } from "next/font/google";
import { SidebarProvider } from "@/context/SidebarContext";
import { SideBar } from "@/components/dashboard/sidebar/SideBar";
import Header from "@/components/dashboard/Header/Header";
import Footer from "@/components/main/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <Header />
        <div className="h-screen grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <SideBar />
          <div className="overflow-x-hidden">
            <div>
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
