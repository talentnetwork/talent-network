import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../utils/PrimaryBtn";

const DesktopNav = () => {
  return (
    <div className='flex justify-between items-center w-full'>
      <div>
        <Image src='/images/logo-header 1.svg' width={100} height={100} />
      </div>
      <div className=''>
        {["home", "our team", "services"].map((name, index) => (
          <Link
            key={index}
            href='#'
            className={`text-typoLight-400 text-lg font-medium leading-7 mx-9 pb-2 hover:border-b-4 border-[#4C52EA] transition-all duration-75`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div>
        <PrimaryBtn />
      </div>
    </div>
  );
};

export default DesktopNav;
