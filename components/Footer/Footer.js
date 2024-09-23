import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Footer = () => { 
    return (
        <footer className={"py-10 bg-[#1C2126] flex flex-col gap-[19px] items-center"}>
            <p className="text-white">© 2024 FERMETURE. Tous droits réservés.</p>
            <section>
                <div className={'flex items-center gap-4'}>
                    <Link href="https://www.facebook.com/" target="_blank" className={"hover:opacity-90 bg-transparent w-[40px] h-[40px] rounded-full border border-light__gray__color flex items-center justify-center"} type={"button"}>
                        <span className={"text-lg text-white"}>
                            <BsFacebook />
                        </span>
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank" className={"hover:opacity-90 bg-transparent w-[40px] h-[40px] rounded-full border border-light__gray__color flex items-center justify-center"} type={"button"}>
                        <span className={"text-lg text-white"}>
                            <BsTwitter />
                        </span>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" className={"hover:opacity-90 bg-transparent w-[40px] h-[40px] rounded-full border border-light__gray__color flex items-center justify-center"} type={"button"}>
                        <span className={"text-lg text-white"}>
                            <BsInstagram />
                        </span>
                    </Link>
                    <Link href="https://www.linkedin.com/" target="_blank" className={"hover:opacity-90 bg-transparent w-[40px] h-[40px] rounded-full border border-light__gray__color flex items-center justify-center"} type={"button"}>
                        <span className={"text-lg text-white"}>
                            <BsLinkedin />
                        </span>
                    </Link>
                </div>
            </section>
        </footer>
    )
}
export default Footer
