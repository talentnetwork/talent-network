import { Poppins } from "next/font/google";
import Footer from "./Footer";
import Navbar from "./Navbar";
export const popnis = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700", "800"],
  variable: "--font-popnnis",
});

export default function Layout({ children }) {
  return (
    <div className={`${popnis.className} dark:bg-bgDark-400`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
