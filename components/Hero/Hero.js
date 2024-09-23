import Image from "next/image";
import headerImg from "../../public/assets/header.png"

const Hero = () => {
    return (
        <div className="bg-[#F3EFE0] grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-black px-6 py-10 md:py-20" id="home">
            <div data-aos="fade-right" data-aos-duration="2000" className="order-1 md:order-0">
                <h1 className="mb-5">Bienvenue chez BH FERMETURE</h1>
                <p className="text-lg">
                    Services professionnels de serrurerie, de menuiserie métallique PVC et aluminium. Offrant un savoir-faire de haute qualité pour tous vos besoins en matière de sécurité et de ferronnerie. Contactez-nous pour un devis !
                </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="flex justify-end order-0 md:order-1">
                <Image src={headerImg} alt="PVC Locksmith Services" className="w-full" />
            </div>
        </div>
    );
};

export default Hero;
