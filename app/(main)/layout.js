import Navbar from "@/components/main/navbar/Navbar";
import Footer from "@/components/main/footer/Footer";
import { GetServerSession } from "@/utils/Sessions";

export default async function RootLayout({ children }) {
  await GetServerSession()
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
