import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const HeaderSlider = () => {

    const picturesArray = [
        {
            picture: "/assets/slide1.jpg",
        },
        {
            picture: "/assets/slide2.jpg",
        }      ,
        {
            picture: "/assets/slide3.jpg",
        }   ,   
        {
            picture: "/assets/slide4.jpg",
        }      
    ]

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    picturesArray?.map((pic, index) => {
                        return (
                            <SwiperSlide key={index} className='mb-[0px]'>
                                <Image src={pic?.picture} alt={pic?.caption} width={400} height={400} className="w-full max-h-[700px] object-cover" />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default HeaderSlider
