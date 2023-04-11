import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { TbBrandTelegram } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
const Footer = () => {
  return (
    <div>
      <div className=' top-2'>
        {/* desktop */}
        <svg
          className='hidden md:block'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#FFBA52'
            fillOpacity='1'
            d='M0,288L1440,320L1440,320L0,320Z'
          ></path>
        </svg>
        {/* mobile */}

        <svg
          className='md:hidden'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#FFBA52'
            fillOpacity='1'
            d='M0,128L1440,320L1440,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='bg-bgLight-400 dark:text-typoDark-200 dark:stroke-typoDark-200 dark:bg-bgDark-50 w-full h-60 md:h-40'>
        <div className=' flex justify-between flex-col md:flex-row items-center container h-full p-6  md:p-0'>
          <div className='flex items-center justify-between'>
            <IoIosCall className=' px-4 font-normal' size={70} />
            <CgMail className='px-4 font-normal' size={70} />
            <TbBrandTelegram className=' px-4 font-normal' size={70} />
            <TiSocialLinkedin className=' px-4 font-normal' size={70} />
            <BsInstagram className=' px-4 font-normal' size={70} />
          </div>
          <Link href='#nav'>
            <button className='w-12 h-12 rounded-lg bg-primary-400 p-2  md:mt-16 mt-0'>
              <div className='relative w-full h-full'>
                <Image
                  className='rotate-180'
                  src={"/icons/arrow-bottom.svg"}
                  fill
                  alt={"arrow bottom icon"}
                />
              </div>
            </button>
          </Link>
          <div>All rights are reserved for Talentnetwork site.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
