import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/context/SidebarContext";
import { SideBar } from "@/components/dashboard/sidebar/SideBar";
import Header from "@/components/dashboard/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <Header />
        <div className="h-screen grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <SideBar />
          <div className="overflow-x-hidden">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
