import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../utils/PrimaryBtn";
import DarkModeButton from "../utils/DarkBtn";

const DesktopNav = () => {
  return (
    <div className='flex justify-between items-center w-full z-50'>
      <div>
        <Image
          alt='logo-header'
          src='/images/logo-header 1.svg'
          width={100}
          height={100}
        />
      </div>
      <div className='flex justify-center items-center'>
        {["home", "our team", "services"].map((name, index) => (
          <Link
            key={index}
            href={`#${name}`}
            className={`text-lg font-medium leading-7 mx-9 pb-2 hover:border-b-4 border-[#4C52EA] transition-all duration-75`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className='flex gap-5 '>
        <DarkModeButton />
        <PrimaryBtn text='contract' />
      </div>
    </div>
  );
};

export default DesktopNav;
