import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className=' top-2'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#FFBA52'
            fill-opacity='1'
            d='M0,288L1440,320L1440,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='bg-bgLight-200 w-full h-40'>
        <div className=' flex justify-between items-center container h-full'>
          <div className='flex items-center justify-between'>
            <Image
              className='mx-4'
              src={"/icons/call.svg"}
              width={50}
              height={50}
              alt={"arrow bottom icon"}
            />
            <Image
              className='mx-4'
              src={"/icons/gmail.svg"}
              width={50}
              height={50}
              alt={"arrow bottom icon"}
            />
            <Image
              className='mx-4'
              src={"/icons/telegram.svg"}
              width={50}
              height={50}
              alt={"arrow bottom icon"}
            />
            <Image
              className='mx-4'
              src={"/icons/linkedln.svg"}
              width={50}
              height={50}
              alt={"arrow bottom icon"}
            />
            <Image
              className='mx-4'
              src={"/icons/instagram.svg"}
              width={50}
              height={50}
              alt={"arrow bottom icon"}
            />
          </div>
          <Link href='#'>
            <button className='w-9 md:w-10 xl:w-12 h-9 md:h-10 xl:h-12 rounded-lg bg-primary-400 p-2 mt-16'>
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
          <div>All rights are reserved for Talentnetwork.ir site.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
