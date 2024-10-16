import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const TopCarousel = () => {

    const picturesArray = [
        {
            picture: "/assets/before.jpg",
            caption: "Avant pose d'un garde corps metallique",
        },
        {
            picture: "/assets/after.jpg",
            caption: "Après pose d'un garde corps metallique",
        }      
    ]

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    picturesArray?.map((pic, index) => {
                        return (
                            <SwiperSlide key={index} className='mb-[50px]'>
                                <Image src={pic?.picture} alt={pic?.caption} width={400} height={400} className="w-full max-h-[700px] object-cover" />
                                <p className="md:text-[19px] text-center relative text-white bg-black-rgba py-2 mt-[-41px] md:mt-[-43px] z-[1000]">{pic?.caption}</p>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default TopCarousel
