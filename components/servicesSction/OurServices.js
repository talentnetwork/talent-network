import Image from "next/image";



const OurServices = ({info}) => {
    return (
        <div className="relative mb-10 md:flex ">
            <div className="relative flex justify-center mr-5 mb-5 ">
                <div className="w-[88px] h-[88px] bg-primary-400 rounded-[25px] "></div>
                <div className="absolute top-3 "> 
                    <Image width={85} height={85} className="rounded-[25px]"  src={info.img}/>
                </div>
            </div>
            <div className="text-center md:text-left">
                <h4>{info.title} </h4>
                <p className="w-[300px] md:w-[400px]" >
                 {info.dis}
                </p>
            </div>
        </div>
    );
};

export default OurServices;