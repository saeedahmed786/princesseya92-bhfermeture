import img1 from "../../public/assets/img1.webp";
import img2 from "../../public/assets/img2.jpg";
import img3 from "../../public/assets/img3.jpeg";
import img4 from "../../public/assets/img4.jpg";
import img5 from "../../public/assets/img5.jpg";
import Image from "next/image";
import PictureCarousel from "./PictureCarousel/PictureCarousel";
import TopCarousel from "./PictureCarousel/TopCarousel";


const OurAchievements = () => {
    return (
        <section className="bg-gray-50 py-10" id="achivements">
            <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center mb-5">Nos Réalisations</h1>
            <TopCarousel />
            <div className="my-[40px] md:my-[100px] p-4">
                <PictureCarousel />
            </div>

            <div className="mt-10 flex flex-col gap-4 p-5">
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image data-aos="zoom-in-left" src={img1} alt="PVC Picture" className="w-full" />
                    <div data-aos="zoom-in-right" className="p-4 md:p-10 border bg-gray-800 border-gray-300">
                        {/* <h2 className="text-[30px] md:text-[43px] text-white font-bold">Lorem Ipsium</h2> */}
                        <p className="text-[17px] md:text-[23px] text-white">Nous réalisons la pose et la réparation de serrures pour assurer la sécurité de vos portes, que ce soit pour une installation neuve ou une intervention afin de résoudre un problème de fonctionnement. </p>
                    </div>
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div data-aos="zoom-in-left" className="p-4 md:p-10 border bg-gray-800 border-gray-300 order-1 md:order-0">
                        <p className="text-[17px] md:text-[23px] text-white">Nous installons des coffres-forts pour protéger vos objets de valeur, en assurant une sécurité optimale et une tranquillité d'esprit totale.</p>
                    </div>
                    <Image data-aos="zoom-in-right" src={img2} alt="PVC Picture" className="w-full order-0 md:order-1" />
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image data-aos="zoom-in-left" src={img3} alt="PVC Picture" className="w-full" />
                    <div data-aos="zoom-in-right" className="p-4 md:p-10 border bg-gray-800 border-gray-300">
                        <p className="text-[17px] md:text-[23px] text-white">Nous installons des serrures électroniques et des systèmes de contrôle d'accès avancés pour renforcer la sécurité de vos espaces et contrôler efficacement les accès.</p>
                    </div>
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div data-aos="zoom-in-left" className="p-4 md:p-10 border bg-gray-800 border-gray-300 order-1 md:order-0">
                        <p className="text-[17px] md:text-[23px] text-white">Nous fabriquons, réparons et installons des portes en PVC ou en aluminium pour allier esthétique, durabilité et sécurité à vos espaces.</p>
                    </div>
                    <Image data-aos="zoom-in-right" src={img4} alt="PVC Picture" className="w-full order-0 md:order-1" />
                </div>
                <div data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image data-aos="zoom-in-left" src={img5} alt="PVC Picture" className="w-full" />
                    <div data-aos="zoom-in-right" className="p-4 md:p-10 border bg-gray-800 border-gray-300">
                        <p className="text-[17px] md:text-[23px] text-white">Nous réalisons la réparation de fenêtres en PVC ou en aluminium pour garantir leur bon fonctionnement et améliorer l'isolation de vos espaces. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAchievements;
