import Image from 'next/image'
import React from 'react'
import pvcImg from "../../public/assets/pvc.jpg"

const PVCAndAluminum = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-10">
            <div className="mx-auto">
                <div className='bg-white shadow-lg rounded-lg p-8'>
                    <h1 className="text-center mb-6">Nos Services de Métallerie en Aluminium et PVC</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div data-aos="zoom-in" data-aos-duration="1000">
                            <ul className="list-disc space-y-4 text-gray-700 pl-5">
                                <li>Fabrication, réparation et installation de structures métalliques</li>
                                <li>Fabrication, réparation et installation de portes en PVC ou en aluminium</li>
                                <li>Travaux sur les serrures, clés et systèmes de sécurité</li>
                                <li>Travaux sur des éléments de menuiserie métallique</li>
                                <li>Conception et installation de systèmes de sécurité avancés</li>
                                <li>Réparation de fenêtres en PVC ou en aluminium</li>
                                <li>Installation de portails et clôtures métalliques</li>
                                <li>Maintenance préventive des équipements de sécurité</li>
                                <li>Installation de serrures électroniques et de systèmes de contrôle d'accès</li>
                                <li>Réalisation de travaux de dépannage en cas d'urgence</li>
                                <li>Conseils en matière de sécurité et de choix des matériaux</li>
                                <li>Personnalisation de structures métalliques selon les besoins du client</li>
                                <li>Fabrication, dépannage et installation de rideau métallique</li>
                            </ul>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1000" className="overflow-hidden rounded-lg">
                            <Image src={pvcImg} alt="Aluminum and PVC Metalwork" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PVCAndAluminum
