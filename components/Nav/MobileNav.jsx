import Image from "next/image";
import PrimaryBtn from "../utils/PrimaryBtn";

const MobileNav = () => {
  return (
    <div className='w-full flex justify-between items-center'>
      <div>
        <Image
          src='/icons/menu-line-horizontal.svg'
          width={80}
          height={80}
          alt=''
        />
      </div>
      <div>
        <PrimaryBtn text='contract' />
      </div>
    </div>
  );
};

export default MobileNav;
