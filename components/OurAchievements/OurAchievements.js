import { SiGoogletasks } from "react-icons/si";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import { FaAward, FaUsers } from "react-icons/fa6";
import img1 from "../../public/assets/img1.jpeg";
import img2 from "../../public/assets/img2.jpeg";
import img3 from "../../public/assets/img3.jpg";
import img4 from "../../public/assets/img4.webp";
import img5 from "../../public/assets/img5.jpeg";
import Image from "next/image";

const OurAchievements = () => {
    return (
        <section className="bg-gray-50 py-10" id="achivements">
            <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center mb-5">Nos Réalisations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 md:p-0 max-w-5xl mx-auto">
                <div data-aos="zoom-in-right" data-aos-duration="1000" className="text-center flex items-center flex-col gap-2 p-10 border bg-[#9f75d7] border-gray-300 rounded-[10px]">
                    <SiGoogletasks className="text-[60px] text-black" />
                    <h2 className="text-[43px] text-black font-bold">500+</h2>
                    <p className="text-[23px] text-black">Projets terminés</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className="text-center flex items-center flex-col gap-2 p-10 border bg-[#f0c30c] border-gray-300 rounded-[10px]">
                    <MdOutlineSentimentSatisfied className="text-[60px] text-black" />
                    <h2 className="text-[43px] text-black font-bold">300+</h2>
                    <p className="text-[23px] text-black">Clients satisfaits</p>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="1000" className="text-center flex items-center flex-col gap-2 p-10 border bg-[#f0c30c] border-gray-300 rounded-[10px]">
                    <FaUsers className="text-[60px] text-[#000]" />
                    <h2 className="text-[43px] text-black font-bold">20</h2>
                    <p className="text-[23px] text-black">Notre équipe</p>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="1000" className="text-center flex items-center flex-col gap-2 p-10 border bg-[#9f75d7] border-gray-300 rounded-[10px]">
                    <FaAward className="text-[60px] text-[#000]" />
                    <h2 className="text-[43px] text-black font-bold">10+</h2>
                    <p className="text-[23px] text-black">Prix ​gagnés</p>
                </div>
            </div>


            <div className="mt-10 flex flex-col gap-4 p-5">
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image data-aos="zoom-in-left" src={img1} alt="PVC Picture" className="w-full" />
                    <div data-aos="zoom-in-right" className="p-10 border bg-gray-800 border-gray-300">
                        <h2 className="text-[43px] text-white font-bold">Lorem Ipsium</h2>
                        <p className="text-[23px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div data-aos="zoom-in-left" className="p-10 border bg-gray-800 border-gray-300">
                        <h2 className="text-[43px] text-white font-bold">Lorem Ipsium</h2>
                        <p className="text-[23px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <Image data-aos="zoom-in-right" src={img2} alt="PVC Picture" className="w-full" />
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image data-aos="zoom-in-left" src={img3} alt="PVC Picture" className="w-full" />
                    <div data-aos="zoom-in-right" className="p-10 border bg-gray-800 border-gray-300">
                        <h2 className="text-[43px] text-white font-bold">Lorem Ipsium</h2>
                        <p className="text-[23px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div data-aos="zoom-in-left" className="p-10 border bg-gray-800 border-gray-300">
                        <h2 className="text-[43px] text-white font-bold">Lorem Ipsium</h2>
                        <p className="text-[23px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <Image data-aos="zoom-in-right" src={img4} alt="PVC Picture" className="w-full" />
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image data-aos="zoom-in-left" src={img5} alt="PVC Picture" className="w-full" />
                    <div data-aos="zoom-in-right" className="p-10 border bg-gray-800 border-gray-300">
                        <h2 className="text-[43px] text-white font-bold">Lorem Ipsium</h2>
                        <p className="text-[23px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAchievements;
