import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Image from "next/image";
import mariaInRed from "@/images/girlinred.jpg";
import Link from "next/link";
import EmbedArtist from "@/components/EmbedArtist";
import FooterAfterHero from "@/components/FooterAfterHero";
import WorldInRed from "@/components/WorldInRed";


export default function Home() {

  return (
    <div
      id="scroll-root"
      className="bg-[#400000] text-[#ddd4c6] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-pt-[72px] z-0"
    >
      <Header />
      <section id='hero' className="snap-start">
        <Hero />
      </section>

      <section id='about' className="snap-start">
        <About />
      </section>
      
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* <section id="worldInRed" className="snap-start">
        <WorldInRed />
      </section> */}

      <section id='embedArtist' className='snap-start'>
        <EmbedArtist />
      </section>

      <FooterAfterHero
        scrollRootId="scroll-root"
        afterSectionId="hero"
        headerOffsetPx={72}
        avatarSrc={mariaInRed}
      />
    </div>
  );
}

