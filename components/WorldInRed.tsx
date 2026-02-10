import Image from "next/image";
import background from "@/public/images/bg.jpg";
import mamashelf from "@/public/images/shelf.png";
import babyshelf from "@/public/images/shelf-m.png";
import logo from "@/public/images/logo.png";

export default function WorldInRed() {
  return (
    <section className="w-full bg-[#400000] pt-24">
      <div
        className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div
          id="logo-wrapper"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center pt-8"
        >
          <div className="backdrop-blur">
            <Image
              src={logo}
              alt="Logo"
              className="h-20 w-20 object-contain"
              priority
            />
          </div>
        </div>
        <div className="mx-auto">

          {/* Mobile / <= 884px */}
          <div className="mx-auto max-w-[530px] [@media(min-width:885px)]:hidden">
            <Image
              src={babyshelf}
              alt="Shelf"
              className="mx-auto h-auto w-full object-contain"
              priority
            />
          </div>

          {/* Desktop / >= 885px */}
          <div className="hidden w-full overflow-hidden [@media(min-width:885px)]:flex justify-center">
            <div className="min-w-[1571px] max-w-[1571px]">
              <Image
                src={mamashelf}
                alt="Shelf"
                className="h-auto w-full object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


