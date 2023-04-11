import Image from "next/image";
import PrimaryBtn from "../utils/PrimaryBtn";
import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

const Hero = () => {
  return (
    <div className='h-screen' id='home'>
      <div className='hidden lg:flex'>
        <DesktopHero />
      </div>
      <div className='flex lg:hidden'>
        <MobileHero />
      </div>
    </div>
  );
};

export default Hero;
