import Image from "next/image";
import background from "@/public/images/bg.jpg";
import mamashelf from "@/public/images/shelf.png";
import babyshelf from "@/public/images/shelf-m.png";
import logo from "@/public/images/logo.png";
import binder from "@/public/images/binder.png";
import goldbinder from "@/public/images/binder-gold.png";
import Link from "next/link";


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
            <div className="relative">
              <Image
                src={babyshelf}
                alt="Shelf"
                className="mx-auto h-auto w-full object-contain"
                priority
              />

              {/* Gold Binder / Hemingway */}
              <div className="pointer-events-none absolute left-[25.5%] top-[24.9%] z-10 -translate-x-1/2 w-[47.74%]">
                <Image
                  src={goldbinder}
                  alt="Gold Binder ~ Hemingway"
                  className="h-auto w-full object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[30.8%]">
                  <Link href="https://girlinred.lnk.to/Hemingway" className="pointer-events-auto cursor-pointer">
                    <span className="inline-flex h-[39px] w-[142px] text-[13px] items-center justify-center uppercase truncate text-center  font-semibold tracking-[0.16em] text-[#400000] drop-shadow-[0_1px_6px_rgba(0,0,0,0.25)]">
                      Hemingway
                    </span>
                  </Link>
                </div>
              </div>


              {/* Binder / I'm Doing It Again, Baby! */}
              <div className="pointer-events-none absolute left-[25.5%] top-[31.9%] z-10 h-[61px] w-[253px] -translate-x-1/2">
                <Image
                  src={binder}
                  alt="Binder ~ I'm Doing It Again, Baby!"
                  width={253}
                  height={61}
                  className="h-[61.36px] w-[253.86px] object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[78px]">
                  <span className="flex h-[39px] w-[142px] items-center justify-center overflow-hidden px-1 text-center text-[13px] text-pretty font-semibold uppercase text-[#ddd4c6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    I'm Doing It
                    <br />
                    Again, Baby!
                  </span>
                </div>
              </div>

              {/* Binder / Videos */}
              <div className="pointer-events-none absolute left-[25.5%] top-[38.3%] z-10 h-[61px] w-[253px] -translate-x-1/2">
                <Image
                  src={binder}
                  alt="Binder ~ Videos"
                  width={253}
                  height={61}
                  className="h-[61.36px] w-[253.86px] object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[84px]">
                  <span className="flex h-[39px] w-[142px] items-center justify-center overflow-hidden px-1 text-center tracking-[0.16em] text-[13px] text-pretty font-semibold uppercase text-[#ddd4c6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    Videos
                  </span>
                </div>
              </div>


              {/* Binder / if i could make it go quiet */}
              <div className="pointer-events-none absolute left-[25.5%] top-[47.6%] z-10 h-[61px] w-[253px] -translate-x-1/2">
                <Image
                  src={binder}
                  alt="Binder ~ if i could make it go quiet"
                  width={253}
                  height={61}
                  className="h-[61.36px] w-[253.86px] object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[78px]">
                  <span className="flex h-[39px] w-[142px] items-center justify-center overflow-hidden px-1 text-center text-[13px] text-pretty font-semibold text-[#ddd4c6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    if i could make it
                    <br />
                    it go quiet
                  </span>
                </div>
              </div>

              {/* Binder / Listen */}
              <div className="pointer-events-none absolute left-[25.3%] top-[54.1%] z-10 h-[61px] w-[253px] -translate-x-1/2">
                <Image
                  src={binder}
                  alt="Binder ~ Listen"
                  width={253}
                  height={61}
                  className="h-[61.36px] w-[253.86px] object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[78px]">
                  <span className="flex h-[39px] w-[142px] tracking-[0.16em] uppercase items-center justify-center overflow-hidden px-1 text-center text-[13px] text-pretty font-semibold text-[#ddd4c6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    Listen
                  </span>
                </div>
              </div>


              {/* Binder / Store */}
              <div className="pointer-events-none absolute left-[25.5%] top-[76.6%] z-10 h-[61px] w-[253px] -translate-x-1/2">
                <Image
                  src={binder}
                  alt="Binder ~ Store"
                  width={253}
                  height={61}
                  className="h-[61.36px] w-[253.86px] object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[91px]">
                  <span className="flex h-[39px] w-[142px] tracking-[0.16em] items-center justify-center overflow-hidden px-1 text-center text-[13px] text-pretty font-semibold uppercase text-[#ddd4c6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    Store
                  </span>
                </div>
              </div>

              {/* Binder / Tour */}
              <div className="pointer-events-none absolute left-[75.3%] top-[25.1%]  z-10 h-[61px] w-[253px] -translate-x-1/2">
                <Image
                  src={binder}
                  alt="Binder ~ Tour"
                  width={253}
                  height={61}
                  className="h-[61.36px] w-[253.86px] object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[88px]">
                  <span className="flex h-[39px] w-[142px] items-center justify-center overflow-hidden px-1 text-center tracking-[0.16em] text-[13px] text-pretty font-semibold uppercase text-[#ddd4c6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    Tour
                  </span>
                </div>
              </div>

              {/* Binder / Newsletter */}
              <div className="pointer-events-none absolute left-[75.3%] top-[31.5%] z-10 h-[61px] w-[253px] -translate-x-1/2">
                <Image
                  src={binder}
                  alt="Binder ~ Newsletter"
                  width={253}
                  height={61}
                  className="h-[61.36px] w-[253.86px] object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[84px]">
                  <span className="flex h-[39px] w-[142px] items-center justify-center overflow-hidden px-1 text-center tracking-[0.16em] text-[13px] text-pretty font-semibold uppercase text-[#ddd4c6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    Newsletter
                  </span>
                </div>
              </div>

              {/* Binder / Socials */}
              <div className="pointer-events-none absolute left-[74.5%] top-[54.3%] z-10 h-[61px] w-[253px] -translate-x-1/2">
                <Image
                  src={binder}
                  alt="Binder ~ Socials"
                  width={253}
                  height={61}
                  className="h-[61.36px] w-[253.86px] object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[88px]">
                  <span className="flex h-[39px] w-[142px] items-center tracking-[0.16em] justify-center overflow-hidden px-1 text-center text-[13px] text-pretty font-semibold uppercase text-[#ddd4c6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    Socials
                  </span>
                </div>
              </div>

              {/* Binder / Discord */}
              <div className="pointer-events-none absolute left-[74.5%] top-[60.8%] z-10 h-[61px] w-[253px] -translate-x-1/2">
                <Image
                  src={binder}
                  alt="Binder ~ Discord"
                  width={253}
                  height={61}
                  className="h-[61.36px] w-[253.86px] object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[88px]">
                  <span className="flex h-[39px] w-[142px] tracking-[0.16em] items-center justify-center overflow-hidden px-1 text-center text-[13px] text-pretty font-semibold uppercase text-[#ddd4c6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    Discord
                  </span>
                </div>
              </div>

              {/* Binder / Medallion */}
              <div className="pointer-events-none absolute left-[74.5%] top-[67.4%] z-10 h-[61px] w-[253px] -translate-x-1/2">
                <Image
                  src={binder}
                  alt="Binder ~ Medallion"
                  width={253}
                  height={61}
                  className="h-[61.36px] w-[253.86px] object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[88px]">
                  <span className="flex h-[39px] w-[142px] tracking-[0.16em] items-center justify-center overflow-hidden px-1 text-center text-[13px] text-pretty font-semibold uppercase text-[#ddd4c6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    Medallion
                  </span>
                </div>
              </div>

            </div>
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


