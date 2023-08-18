import Image from "next/image";
import {Swiper,SwiperSlide} from "@abasb75/swiperjs/react";
import { Navigation, Pagination  } from '@abasb75/swiperjs';

import '@abasb75/swiperjs/css';
import '@abasb75/swiperjs/css/pagination'


import Title from "../general/title";
import Intro from "./intro";
import { useRef, useState } from "react";
import Link from "next/link";
import { workSamples } from "../OurTeam/ourteam";

function WorkSamples(){

    const [selectedIndex,setSelectedIndex] = useState(0);
    const [swiper,setSwiper] = useState(null);
    

    const nextBtn = useRef(null);
    const prevBtn = useRef(null);

    const goToNextSlide = ()=>{
        nextBtn.current.click();
    }

    const goToPrevSlide = ()=>{
        prevBtn.current.click();
    }

    const goSlide = (slideIndex) =>{
        if(swiper){
            swiper.slideTo(slideIndex);
        }
    }

    

    if(!workSamples || !workSamples.data){
        return <></>
    }
    
   
    return (<div data="work-samples" className="w-full py-12 container ">
       
        <header className="flex" onClick={()=>clickable()}>
            <Title>Work Sample</Title>
        </header>
        <main className="work-samples ">
            <div data="data work info" className="flex mt-[65px] mb-8 lg:mb-5">
                <h3 className="h-8  relative before:absolute before:left-0 before:content-normal before:top-5 before:z-0 before:h-2 before:w-full  before:bg-secondary-200">
                    <Link href={workSamples.data[selectedIndex].url} className="z-10 relative leading-8 font-[800] text-2xl">{workSamples.data[selectedIndex].title}</Link>
                </h3>
            </div>    
                        
            <Intro title={'about'} text={workSamples.data[selectedIndex].about} />
            <Intro title={'tecnology'} text={workSamples.data[selectedIndex].technology} />
            <div className="position-relative pb-8 mt-[64px] h-[30vw]">
                <div className="w-full h-full inline ">
                    <Swiper
                    
                    modules={[Navigation]} 
                    spaceBetween={0}
                    slidesPerView={1}
                    activeLastSlideClass={false}
                    breakpoints={{
                        1024:{
                            slidesPerView:'auto',
                            activeLastSlideClass:true,
                        }
                    }}
                    className="h-full"
                    navigation={{
                        prevEl: prevBtn.current,
                        nextEl: nextBtn.current,
                    }}
                    allowTouchMove={false}
                    
                    rewind={true}
                    onSlideChange={({activeIndex})=>setSelectedIndex(activeIndex)}
                    onInit={swiper=>setSwiper(swiper)}
                    onSwiper={swiper=>setSwiper(swiper)}
                    >
                        {workSamples.data.map((work,index)=>{
                           
                            return (<SwiperSlide key={index}>
                                <div className="w-full p-3 cursor-pointer flex" onClick={()=>{}}>
                                    <div className="relative pt-[50%] w-full shadow-[2px_6px_12px_rgba(0,0,0,0.16)] rounded-lg overflow-hidden align-middle">
                                        <Image src={work.work_img} alt={work.title} fill />
                                    </div>
                                </div>
                            </SwiperSlide>);
                        })}
                    </Swiper>
                </div>
                
                    <button ref={prevBtn} className="hidden">prev</button>
                    <button ref={nextBtn} className="hidden">next</button>
                </div>
                        
                <div className="flex justify-center mt-8 ">
                        
                    <button onClick={()=>goToPrevSlide()} className=" w-7 md:w-10 h-7 md:h-10 "><div className="relative w-full h-full"><i className="icon-slider-prev text-4xl"></i></div></button>
                    <ul className="flex gap-2  transition-[3s_all] h-7 md:h-10 items-center">
                        {workSamples.data.map((work,index)=>{
                            return (<li 
                                key={index} 
                                onClick={ ()=>goSlide(index) }
                                className={`buttet ${
                                index===selectedIndex?'w-12 bg-primary-400 dark:bg-secondary-600':'w-3 bg-primary-200 dark:bg-secondary-400'
                                } h-3 rounded-full  cursor-pointer `}></li>);
                         })}
                    </ul>
                    <button onClick={()=>goToNextSlide()} className="w-7 md:w-10 h-7 md:h-10 "><div className="relative w-full h-full"><i className="icon-slider-next text-4xl"></i></div></button>
                    
                </div>
        </main>
    </div>);
}


export default WorkSamples;