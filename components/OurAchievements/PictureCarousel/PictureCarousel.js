import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const PictureCarousel = () => {

    const picturesArray = [
        {
            picture: "/assets/guardrails1.jpg",
            caption: "Pose de garde corps pour un immeuble",
        },
        {
            picture: "/assets/guardrails2.jpg",
            caption: "Pose de garde corps pour un immeuble",
        },
        {
            picture: "/assets/guardrails3.jpg",
            caption: "Pose de garde corps pour un immeuble",
        },
        {
            picture: "/assets/guardrails4.jpg",
            caption: "Pose de garde corps pour un immeuble",
        },
        {
            picture: "/assets/guardrails5.jpg",
            caption: "Pose de garde corps pour un immeuble",
        },
        {
            picture: "/assets/guardrails6.jpg",
            caption: "Pose de garde corps pour un immeuble",
        },
        {
            picture: "/assets/curtain1.jpg",
            caption: "Pose de rideau métallique",
        },
        {
            picture: "/assets/curtain2.jpg",
            caption: "Pose de rideau métallique",
        },
        {
            picture: "/assets/guardrail-last.jpg",
            caption: "Préparation de garde corps métallique",
        },
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
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    picturesArray?.map((pic, index) => {
                        return (
                            <SwiperSlide className='mb-[50px]'>
                                <Image src={pic?.picture} alt={pic?.caption} width={400} height={400} className="w-full h-[600px]" />
                                <p className="md:text-[19px] text-center relative text-white bg-black-rgba py-2 mt-[-41px] md:mt-[-36px] z-[1000]">{pic?.caption}</p>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default PictureCarousel
