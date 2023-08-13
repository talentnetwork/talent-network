import Image from "next/image";
import PrimaryBtn from "../utils/PrimaryBtn";

const DesktopHero = () => {
  return (
    <>
      {" "}
      <div className='flex flex-col  container '>
        <div className='h-80 flex flex-col items-center justify-around'>
          <h1 className='text-typoLight-400 dark:text-typoDark-200 font-extrabold text-6xl relative z-50 shadow-[0px-4px-10px-rgba(0,0,0,0.08)] mt-10'>
            powerful digital agency
            <svg
              className='absolute top-14 -left-2'
              width='844'
              height='50'
              viewBox='0 0 844 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M843 48.75C789.167 31.5833 744.5 24.25 622.5 12.25C470 -2.75 112.5 -2.75 1 12.25'
                stroke='#C3C5F8'
                strokeWidth='2'
              />
            </svg>
          </h1>

          <h2 className='text-typoLight-400 dark:text-typoDark-200 text-2xl font-medium w-[591px] text-center'>
            We improve your brand and make it successful. Make progress faster
            with{" "}
            <span className='text-primary-400  text-2xl font-medium'>
              Talentnetwork
            </span>
          </h2>
          <PrimaryBtn text='Get Started' />
        </div>
        <div className='flex justify-between z-50'>
          <Image src={'/images/Group 4.svg'} width={300} height={300} alt='' />
          <Image src={'/images/Group 2.svg'} width={300} height={300} className='mt-40' alt='' />
          <Image src={'/images/Group 1.svg'} width={300} height={300} alt='' />
        </div>
      </div>
      <Image
        className='absolute left-0 top-[170px] z-0'
        src={"/images/vecteezy_abstract-wavy-stri 2.svg"}
        width={1900}
        height={10}
        alt="vactezy"
      />
      <div className='absolute right-0 top-52 bg-[#FFC56F] blur-[140px] opacity-30 w-[800px] h-[800px] z-auto'></div>
      <div className='absolute left-1/3 top-[-297px] bg-[#888CF1] blur-[160px] opacity-10 w-[800px] h-[800px] z-auto'></div>
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
          width='21'
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
      
     
    </>
  );
};

export default DesktopHero;
