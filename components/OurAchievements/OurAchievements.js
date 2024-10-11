import { FaAward, FaUsers } from "react-icons/fa6";
import before from "../../public/assets/before.jpg";
import after from "../../public/assets/after.jpg";

import img1 from "../../public/assets/img1.jpg";
import img2 from "../../public/assets/img2.jpg";
import img3 from "../../public/assets/img3.jpg";
import img4 from "../../public/assets/img4.jpg";
import img5 from "../../public/assets/img5.jpg";
import Image from "next/image";
import PictureCarousel from "./PictureCarousel/PictureCarousel";


const OurAchievements = () => {
    return (
        <section className="bg-gray-50 py-10" id="achivements">
            <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center mb-5">Nos Réalisations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 md:p-0">
                <div data-aos="zoom-in-right" data-aos-duration="1000" className="text-center rounded-[10px]">
                    <Image data-aos="zoom-in-left" src={before} alt="PVC Picture" className="w-full h-full max-h-[600px] object-cover" />
                    <p className="md:text-[23px] relative text-white bg-black-rgba py-3 mt-[-49px] md:mt-[-58px] z-[1000]">Avant</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className="text-center border-gray-300 rounded-[10px]">
                    <Image data-aos="zoom-in-left" src={after} alt="PVC Picture" className="w-full h-full max-h-[600px] object-cover" />
                    <p className="md:text-[23px] relative text-white bg-black-rgba py-3 mt-[-49px] md:mt-[-58px] z-[1000]">La pose d'un garde corps metallique</p>
                </div>
            </div>
            <div className="my-[40px] md:my-[100px] p-4">
                <h2 className="text-center text-[30px] md:text-[43px] text-black font-bold mb-4">Nos travaux</h2>
                <PictureCarousel />
            </div>

            <div className="mt-10 flex flex-col gap-4 p-5">
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image data-aos="zoom-in-left" src={img1} alt="PVC Picture" className="w-full" />
                    <div data-aos="zoom-in-right" className="p-4 md:p-10 border bg-gray-800 border-gray-300">
                        <h2 className="text-[30px] md:text-[43px] text-white font-bold">Lorem Ipsium</h2>
                        <p className="text-[17px] md:text-[23px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div data-aos="zoom-in-left" className="p-4 md:p-10 border bg-gray-800 border-gray-300 order-1 md:order-0">
                        <h2 className="text-[30px] md:text-[43px] text-white font-bold">Lorem Ipsium</h2>
                        <p className="text-[17px] md:text-[23px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <Image data-aos="zoom-in-right" src={img2} alt="PVC Picture" className="w-full order-0 md:order-1" />
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image data-aos="zoom-in-left" src={img3} alt="PVC Picture" className="w-full" />
                    <div data-aos="zoom-in-right" className="p-4 md:p-10 border bg-gray-800 border-gray-300">
                        <h2 className="text-[30px] md:text-[43px] text-white font-bold">Lorem Ipsium</h2>
                        <p className="text-[17px] md:text-[23px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div data-aos="zoom-in-left" className="p-4 md:p-10 border bg-gray-800 border-gray-300 order-1 md:order-0">
                        <h2 className="text-[30px] md:text-[43px] text-white font-bold">Lorem Ipsium</h2>
                        <p className="text-[17px] md:text-[23px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <Image data-aos="zoom-in-right" src={img4} alt="PVC Picture" className="w-full order-0 md:order-1" />
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image data-aos="zoom-in-left" src={img5} alt="PVC Picture" className="w-full" />
                    <div data-aos="zoom-in-right" className="p-4 md:p-10 border bg-gray-800 border-gray-300">
                        <h2 className="text-[30px] md:text-[43px] text-white font-bold">Lorem Ipsium</h2>
                        <p className="text-[17px] md:text-[23px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAchievements;
