import Image from 'next/image'
import React from 'react'
import lockImg from "../../public/assets/lock.jpg"

const Locksmithing = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-10">
            <div className="mx-auto">
                <div className='bg-white shadow-lg rounded-lg p-8'>
                    <h1 className="mb-6 text-center">Nos Services de Serrurerie</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div data-aos="zoom-in" data-aos-duration="1000" className="overflow-hidden rounded-lg">
                            <Image src={lockImg} alt="Locksmithing" className="w-full h-full object-cover" />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1000">
                            <ul className="list-disc space-y-4 text-gray-700 pl-5">
                                <li>Réparer et installer des serrures sur les portes</li>
                                <li>Ouvrir des portes verrouillées si vous êtes coincés dehors</li>
                                <li>Conseiller sur la sécurité de votre domicile ou de votre entreprise</li>
                                <li>Installer des coffres-forts pour protéger vos objets de valeur</li>
                                <li>Installer des systèmes de contrôle d'accès</li>
                                <li>Réaliser des travaux de serrurerie sur des portes de garage</li>
                                <li>Fournir des services d'urgence 24h/24 et 7j/7 pour les situations urgentes</li>
                                <li>Installer des serrures électroniques et des systèmes de contrôle d'accès avancés</li>
                                <li>Réparer et remplacer des serrures endommagées suite à une effraction</li>
                                <li>Réaliser des travaux de serrurerie sur des portes blindées</li>
                                <li>Installer des barres de sécurité pour renforcer la protection des portes et fenêtres</li>
                                <li>Réaliser des travaux de serrurerie sur des volets roulants et des grilles de sécurité</li>
                                <li>Installation de serrures de sécurité sur les portails et les grilles pour une protection renforcée</li>
                                <li>Réparation et remplacement des serrures sur les portails et les grilles endommagées</li>
                                <li>Installation de verrous supplémentaires pour une sécurité accrue sur les portails et les grilles</li>
                                <li>Installation de garde-corps de fenêtre pour assurer la sécurité et la protection contre les chutes</li>
                                <li>Réalisation de travaux de réparation et d'entretien sur les portails, les grilles et les garde-corps</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-center mt-[60px]'>
                        <a href='#contact' className='capitalize bg-gray-800 text-center font-semibold rounded-[10px] p-4 text-white text-[23px] block w-full max-w-[300px]'>obtenir un devis</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Locksmithing
