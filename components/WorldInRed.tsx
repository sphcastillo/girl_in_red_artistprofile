import Image from "next/image";
import background from "@/public/images/bg.jpg";
import mamashelf from "@/public/images/shelf.png";
import babyshelf from "@/public/images/shelf-m.png";

export default function WorldInRed() {
  return (
    <section className="w-full bg-[#400000] pt-12">
      <div
        className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          {/* Mobile / <= 884px */}
          <div className="mx-auto w-full [@media(min-width:885px)]:hidden">
            <Image
              src={babyshelf}
              alt="Shelf"
              className="mx-auto h-auto w-full max-w-[884px]"
              priority
            />
          </div>

          {/* Desktop / >= 885px */}
          <div className="hidden w-full [@media(min-width:885px)]:block">
            <Image src={mamashelf} alt="Shelf" className="mx-auto h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}


