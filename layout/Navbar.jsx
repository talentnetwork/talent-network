import DesktopNav from "@/components/Nav/DesktopNav";
import MobileNav from "@/components/Nav/MobileNav";
import DarkModeButton from "@/components/utils/DarkBtn";
import PrimaryBtn from "@/components/utils/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      id='nav'
      className='pt-4 container text-typoLight-600 dark:text-typoDark-200'
    >
      <div className='hidden md:flex'>
        <DesktopNav />
      </div>
      <div className='flex md:hidden'>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
