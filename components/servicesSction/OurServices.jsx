import Image from "next/image";



const OurServices = ({info}) => {
    return (
        <div className={info.flag?" mb-10 md:flex lg:ml-28 ":" mb-10 md:flex "}>
            <div className="relative flex justify-center mr-5 mb-5 ">
                <div className={info.flag?"w-[88px] h-[88px] bg-[#FFC56F] rounded-[25px]":"w-[88px] h-[88px] bg-primary-400 rounded-[25px] "}></div>
                <div className="absolute top-3  md:right-0 "> 
                    <Image alt={info.title} width={85} height={85} className="rounded-[25px]"  src={info.img}/>
                </div>
            </div>
            <div className=" text-center md:text-left md:ml-5">
                <h4 className="w-[300px] font-bold text-xs ">{info.title}</h4>
               <p className=" text-xs  w-[300px]">
                {info.dis}
               </p>
            </div>
         </div>
    );
};

export default OurServices;