import Image from "next/image";
import headerImg from "../../public/assets/header.png"
import HeaderSlider from "./HeaderSlider";

const Hero = () => {
    return (
        <>
            <div className="bg-[#F3EFE0] grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-black md:px-6 md:py-20" id="home">
                <div data-aos="fade-right" data-aos-duration="2000" className="order-1 md:order-0 px-6 py-6 md:px-0 md:py-0">
                    <h1 className="mb-5">Bienvenue chez BH FERMETURE</h1>
                    <p className="text-lg">
                        Services professionnels de serrurerie, de menuiserie métallique PVC et aluminium. Offrant un savoir-faire de haute qualité pour tous vos besoins en matière de sécurité et de ferronnerie. Contactez-nous pour un devis !
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className="order-0 md:order-1">
                    <HeaderSlider />
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="2000" className="mt-[30px] px-6 py-10 md:py-20">
                <h1 className="mb-5">Pour les dépannages d'urgence</h1>
                <p className="text-lg">
                    Besoin de réaliser des travaux de menuiserie en aluminium ou PVC, ou d'un dépannage en urgence en serrurerie ? Nos artisans se tiennent à votre disposition sept jours sur sept pour vous offrir des solutions de qualité, adaptées à vos besoins.
                </p>
                <div className="mt-10">
                    <a href="tel: 0749441729" className="bg-gray-800 p-4 px-10 rounded-[8px] text-white text-[23px] font-bold">0749441729</a>
                </div>
            </div>
        </>
    );
};

export default Hero;
