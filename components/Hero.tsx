"use client"

import { Montserrat } from 'next/font/google'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import marie from "@/images/girlinred.jpg";
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ["latin"] });


function Hero() {
 const [text, count] = useTypewriter({
    words: ["Songwriter","Storyteller", "Activist", "Queer"],
    loop: true,
    delaySpeed: 1000
 })
    return (
        <div className="relative h-screen box-border pt-[72px] flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Link href='/' className="relative z-[70]">
            <Image 
                src={marie}
                alt='Marie Ulven Ringheim'
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                priority
            />
            </Link>
            <div className="relative z-[70]">
                <div className={montserrat.className}>
                    <h1 className="text-sm lowercase text-[#ddd4c6] pb-2 tracking-[12px]">girl in red</h1>
                
                    <h2 className="relative z-[70] text-4xl lg:text-6xl font-semibold tracking-[6px] scroll-px-10 pt-8">
                        <span>{text}</span>
                        <Cursor cursorColor="#F01E2C"/>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Hero;