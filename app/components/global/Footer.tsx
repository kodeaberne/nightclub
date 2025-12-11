import Image from "next/image";
import logo from "@/public/footer/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative flex justify-between w-screen h-200 font-medium bg-cover bg-center bg-[url('/footer/footerbg.webp')] before:absolute before:inset-0 before:bg-black/85 before:z-0">
      <div className="relative z-10 flex flex-col justify-around py-10 items-center w-screen h-full">
        <Image src={logo} alt="Logo" width={228} height={54} className="w-56 h-auto mb-18"/>
        <section className="flex flex-col items-center gap-2 mb-6">
            <h1 className="text-2xl text-pink uppercase">Location</h1>
            <p className="text-lg">Kompagnistræde 278</p>
            <p className="text-lg">1265 København K</p>
        </section>
        <section className="flex flex-col items-center gap-2 mb-10">
            <h1 className="text-2xl text-pink uppercase">Opening Hours</h1>
            <p className="text-lg">WED - THU 10:30 PM TO 3 AM</p>
            <p className="text-lg">SAT - SUN: 11 PM TO 5 AM</p>
        </section>
        <section className="flex flex-col items-center gap-6 mb-12">
            <h1 className="text-lg">Stay Connected With Us</h1>
            <div className="flex items-center gap-4">
                <FaFacebookF className="border border-white p-2 w-12 h-12"/>
                <FaSnapchatGhost className="border border-white p-2 w-12 h-12"/>
                <FaInstagram className="border border-white p-2 w-12 h-12"/>
            </div>
        </section>
        <section className="flex flex-col items-center gap-4 mb-4">
            <p className="text-base">Night Club PSD Template</p>
            <p className="text-base">All rights reserved</p>
        </section>
        <section className="flex items-center gap-4">
            <p className="text-base">Copyright © NightClub</p>        
        </section>
      </div>
    </footer>
  );
}