import Image from "next/image";
import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination  } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'

import Title from "../general/title";
import Intro from "./intro";
import { useRef, useState } from "react";

function WorkSamples({workSamples}){

    const [swiper,setSwiper] = useState(null);

    const nextBtn = useRef(null);
    const prevBtn = useRef(null);

    const goToNextSlide = ()=>{
        nextBtn.current.click();
    }

    const goToPrevSlide = ()=>{
        prevBtn.current.click();
    }

    if(!workSamples || !workSamples.content){
        return <></>
    }
    return (<div data="work-samples" className="w-full py-8 container ">

        <header className="flex" onClick={()=>clickable()}>
            <Title>Work Samples</Title>
        </header>
        <main className="work-samples">
            <div data="data work info" className="flex mt-[65px] mb-8 lg:mb-5">
                <h3 className="h-8  relative before:absolute before:left-0 before:content-normal before:top-5 before:z-0 before:h-2 before:w-full  before:bg-secondary-200">
                    <span className="z-10 relative leading-8 font-[800] text-2xl">Siblearn.dev</span>
                </h3>
            </div>                
            <Intro title={'about'} text={`<p>The siblearn.dev site is one of the examples of the sites we visited, with the highest design quality, fast uploading, and codes with good order and quality, which is a site that organizes bootcamps about blockchain. </p>
                <p>This project also supports pwa or web app and can be added to the home screen of Android and iOS phones without installation, just like the native application.</p>`} />
            <Intro title={'tecnology'} text={`<p>Frontend: html css (BootStrap) JS (Jquery)</p>
                <p>Backend : Laravel Framework</p>
                <p>DataBase: MySQL</p>
                <p>Server : Linux Ubuntu</p>`} />
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={'auto'}
                            className="h-full"
                            navigation={{
                                prevEl: prevBtn.current,
                                nextEl: nextBtn.current,
                            }}
                            onSwiper={setSwiper}
                            pagination={{
                                clickable:true
                            }}
                            allowTouchMove={false}
                            >
                            <SwiperSlide>
                                <div className="w-full p-3 cursor-pointer" onClick={()=>{}}>
                                    <div className="relative pt-[50%] w-full shadow-[2px_6px_12px_rgba(0,0,0,0.16)] rounded-lg overflow-hidden ">
                                        <Image src={'/images/default-work-samples.png'} alt={'work samples'} fill />
                                    </div>
                                </div>   
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full p-3 cursor-pointer" onClick={()=>{}}>
                                    <div className="relative pt-[50%] w-full shadow-[2px_6px_12px_rgba(0,0,0,0.16)] rounded-lg overflow-hidden ">
                                        <Image src={'/images/default-work-samples.png'} alt={'work samples'} fill />
                                    </div>
                                </div>   
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full p-3">
                                    <div className="relative pt-[50%] w-full shadow-[2px_6px_12px_rgba(0,0,0,0.16)] rounded-lg overflow-hidden ">
                                        <Image src={'/images/default-work-samples.png'} alt={'work samples'} fill />
                                    </div>
                                </div>   
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full p-3">
                                    <div className="relative pt-[50%] w-full shadow-[2px_6px_12px_rgba(0,0,0,0.16)] rounded-lg overflow-hidden ">
                                        <Image src={'/images/default-work-samples.png'} alt={'work samples'} fill />
                                    </div>
                                </div>   
                            </SwiperSlide>
                        </Swiper>
                    <div>
                        <button ref={prevBtn} className="hidden">prev</button>
                        <button ref={nextBtn} className="hidden">next</button>
                        <button onClick={()=>goToPrevSlide()}>PREV</button>
                        <button onClick={()=>goToNextSlide()}>NEXT</button>
                    </div>
        </main>
    </div>);
}


export default WorkSamples;