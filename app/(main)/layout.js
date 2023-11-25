import Navbar from "@/components/main/navbar/Navbar";
import Footer from "@/components/main/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
