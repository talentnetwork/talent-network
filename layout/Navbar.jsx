import DesktopNav from "@/components/Nav/DesktopNav";
import MobileNav from "@/components/Nav/MobileNav";
import PrimaryBtn from "@/components/utils/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='pt-4 container'>
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
