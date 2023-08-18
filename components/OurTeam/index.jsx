import Image from "next/image";
import Slider from "./slider";

export default function OurTeam() {
  return (
    <div
      id='our team'
      data='our team section'
      className='w-full mt-24 pt-4 pb-[120px] lg:container relative'
    >
      <div className='bottom-8 left-[100px] absolute'>
        <Image
          src={"/images/bg-shape-1.svg"}
          width={22}
          height={23}
          alt={"bg-shape"}
        />
      </div>
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
        <Slider  />
      </div>
    </div>
  );
}

// export default function OurTeam({ ourTeam }) {
//   return (
//     <div data='our team section' className='w-full pt-4 lg:container'>
//       <div data='go-bottom-btn' className='w-full text-center'>
//         <button className='w-9 md:w-10 xl:w-12 h-9 md:h-10 xl:h-12 rounded-lg bg-primary-400 p-2'>
//           <div className='relative w-full h-full'>
//             <Image
//               src={"/icons/arrow-bottom.svg"}
//               fill
//               alt={"arrow bottom icon"}
//             />
//           </div>
//         </button>
//       </div>
//       <div
//         data='slider-container'
//         className='w-full py-[59px] xl:py-12 px-2 md:px-5 lg:p-0 '
//       >
//         <Slider ourTeam={ourTeam} />
//       </div>
//     </div>
//   );
// }
