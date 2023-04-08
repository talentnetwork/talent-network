import Image from "next/image";
import Slider from "./slider";

export default function OurTeam({ ourTeam }) {
  return (
    <div data='our team section' className='w-full pt-4 lg:container'>
      <div data='go-bottom-btn' className='w-full text-center'>
        <button className='w-9 md:w-10 xl:w-12 h-9 md:h-10 xl:h-12 rounded-lg bg-primary-400 p-2'>
          <div className='relative w-full h-full'>
            <Image
              src={"/icons/arrow-bottom.svg"}
              fill
              alt={"arrow bottom icon"}
            />
          </div>
        </button>
      </div>
      <div
        data='slider-container'
        className='w-full py-[59px] xl:py-12 px-2 md:px-5 lg:p-0 '
      >
        <Slider ourTeam={ourTeam} />
      </div>
    </div>
  );
}
