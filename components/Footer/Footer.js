import React from "react";
import { BsInstagram, BsSnapchat, BsTiktok } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={"py-10 bg-[#1C2126] flex flex-col gap-[19px] items-center"}>
            <p className="text-white">© 2024 FERMETURE. Tous droits réservés.</p>
            <section>
                <div className={'flex items-center gap-4'}>
                    <Link href="https://www.tiktok.com/@bhfermeture?_t=8qTrkDFI2kr&_r=1" target="_blank" className={"hover:opacity-90 bg-transparent w-[40px] h-[40px] rounded-full border border-light__gray__color flex items-center justify-center"} type={"button"}>
                        <span className={"text-lg text-white"}>
                            <BsTiktok />
                        </span>
                    </Link>
                    <Link href="https://snapchat.com/t/UHhZcPUr" target="_blank" className={"hover:opacity-90 bg-transparent w-[40px] h-[40px] rounded-full border border-light__gray__color flex items-center justify-center"} type={"button"}>
                        <span className={"text-lg text-white"}>
                            <BsSnapchat />
                        </span>
                    </Link>
                    <Link href="https://www.instagram.com/bhfermeture/profilecard/?igsh=MTNkd2s4c2QwNzhwdg" target="_blank" className={"hover:opacity-90 bg-transparent w-[40px] h-[40px] rounded-full border border-light__gray__color flex items-center justify-center"} type={"button"}>
                        <span className={"text-lg text-white"}>
                            <BsInstagram />
                        </span>
                    </Link>
                </div>
            </section>
        </footer>
    )
}
export default Footer
