import { SiGoogletasks } from "react-icons/si";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import { FaAward } from "react-icons/fa6";

const OurAchievements = () => {
    return (
        <section className="bg-gray-50 py-10" id="achivements">
            <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center mb-5">Nos Réalisations</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5 md:p-0 max-w-5xl mx-auto">
                <div data-aos="zoom-in-right" data-aos-duration="1000" className="text-center flex items-center flex-col gap-2 p-10 border bg-white border-gray-300 rounded-[10px]">
                    <SiGoogletasks className="text-[60px] text-green-500" />
                    <h2 className="text-[43px] font-bold">500+</h2>
                    <p className="text-[23px]">Projets terminés</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className="text-center flex items-center flex-col gap-2 p-10 border bg-white border-gray-300 rounded-[10px]">
                    <MdOutlineSentimentSatisfied className="text-[60px] text-yellow-500" />
                    <h2 className="text-[43px] font-bold">300+</h2>
                    <p className="text-[23px]">Clients satisfaits</p>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="1000" className="text-center flex items-center flex-col gap-2 p-10 border bg-white border-gray-300 rounded-[10px]">
                    <FaAward className="text-[60px] text-[#DFCA4E]" />
                    <h2 className="text-[43px] font-bold">10+</h2>
                    <p className="text-[23px]">Prix ​gagnés</p>
                </div>
            </div>
        </section>
    );
};

export default OurAchievements;
