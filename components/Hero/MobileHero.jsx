import Image from "next/image";
import PrimaryBtn from "../utils/PrimaryBtn";

const MobileHero = () => {
  return (
    <>
      {" "}
      <div className='flex flex-col  container '>
        <div className='h-80 flex flex-col items-center justify-around'>
          <h1 className='text-typoLight-400 dark:text-typoDark-200 font-extrabold text-3xl relative z-40 shadow-[0px-4px-10px-rgba(0,0,0,0.08)]'>
            powerful digital agency
            <svg
              className='absolute top-14 -left-2'
              width='350'
              height='50'
              viewBox='0 0 350 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M349 49C326.751 31.7435 308.29 24.3717 257.867 12.3089C194.838 -2.76963 47.0831 -2.76963 1 12.3089'
                stroke='#C3C5F8'
                strokeWidth='2'
              />
            </svg>
          </h1>

          <h2 className='text-typoLight-400 dark:text-typoDark-200 text-lg font-medium w-[347px] text-center'>
            We improve your brand and make it successful. Make progress faster
            with{" "}
            <span className='text-primary-400  text-2xl font-medium'>
              Talentnetwork
            </span>
          </h2>
          <button className='bg-primary-400 dark:bg-primary-50 rounded-lg w-44 md:w-32 h-16 text-typoDark-200 dark:text-typoLight-600 shadow-[1px_4px_16px_rgba(118,71,235,0.2)] dark:shadow-[2px_4px_16px_rgba(195,197,248,0.3)] leading-7 text-lg font-medium z-40 shadow-[1px-2px-10px-rgba(195,197,248,0.5)]'>
            Get Started
          </button>
        </div>
        <div className='flex justify-center items-center z-40 mt-10'>
          <Image src='/images/Group 4.svg' width={180} height={180} alt='Group' />
        </div>
      </div>
      <Image
        className=' z-0'
        src={"/images/vecteezy_abstract-wavy-stri 2.svg"}
        fill
        alt="vecteezy_abstract"
      />
      {/* <div className='absolute left-[170px] top-[273px] bg-[#FFC56F] blur-[50px] opacity-25 w-[400px] h-[400px] z-0'></div>
      <div className='absolute left-[48px] top-[-67px] bg-[#C3C5F8] blur-[50px] opacity-20 w-[300px] h-[300px] z-0'></div> */}
      {/*  */}
      <svg
        className='absolute left-28 top-56'
        width='22'
        height='23'
        viewBox='0 0 22 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          y='16.2669'
          width='20'
          height='9.88235'
          transform='rotate(-48 0 16.2669)'
          fill='#4C52EA'
        />
      </svg>
      <svg
        className='absolute left-72 top-[292px]'
        width='26'
        height='24'
        viewBox='0 0 26 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M25.1301 0.288287L14.5161 23.05L0.110925 2.47718L25.1301 0.288287Z'
          fill='#FFC56F'
        />
      </svg>
      <svg
        className='absolute right-28 top-[472.1px]'
        width='23'
        height='23'
        viewBox='0 0 23 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='7.65039'
          y='0.422638'
          width='21'
          height='9.88235'
          transform='rotate(44 7.65039 0.422638)'
          fill='#FFC56F'
        />
      </svg>
      <svg
        className='absolute right-[700px] top-[420px]'
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.775599 0.401093L24.6611 8.16197L5.99725 24.967L0.775599 0.401093Z'
          fill='#4C52EA'
        />
      </svg>
      <svg
        className='absolute left-[69px] top-[870px]'
        width='23'
        height='14'
        viewBox='0 0 23 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          y='3.90405'
          width='21'
          height='9.88235'
          transform='rotate(-10 0 3.90405)'
          fill='#FFC56F'
        />
      </svg>
      <svg
        className='absolute right-[120px] top-[840px]'
        width='26'
        height='24'
        viewBox='0 0 26 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.0776 23.6093L0.61546 3.81858L25.4858 0.32328L16.0776 23.6093Z'
          fill='#4C52EA'
        />
      </svg>
    </>
  );
};

export default MobileHero;
