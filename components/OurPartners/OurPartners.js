import Image from "next/image";
import partner1 from "../../public/assets/partner1.jpg";
import partner2 from "../../public/assets/partner2.png";
import partner3 from "../../public/assets/partner3.jpg";
import styles from "./OurPartners.module.css";

const OurPartners = () => {
    return (
        <section className={`min-h-screen grid place-content-center bg-white px-2 md:px-10 py-10 ${styles.OurPartners}`} id="partners">
            <div>
                <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center mb-5">Nos Partenaires</h1>
                <p data-aos="zoom-in" data-aos-duration="1000" className="text-center text-gray-600 mb-10">
                    Chez BH FERMETURE, nous collaborons avec des partenaires de confiance pour garantir des services de qualité
                    et des solutions innovantes dans le domaine de la serrurerie et de la métallerie. Ces collaborations nous permettent de vous offrir des produits performants, durables et à la pointe de la technologie. Ensemble, nous renforçons la sécurité de vos biens et de vos espaces.
                </p>
                <div data-aos="zoom-in" data-aos-duration="1000" className="flex justify-center gap-20 flex-wrap">
                    <Image src={partner1} alt="Partner 1" />
                    <Image src={partner2} alt="Partner 2" />
                    <Image src={partner3} alt="Partner 3" />
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
