"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import fellInLoveinOct from "@/images/fellinloveinoct.jpg";
import makeitGoQuiet from "@/images/ificouldmakeitgoquiet.png";
import doingitAgainBABY from "@/images/imdoingitagainbaby.png";
import chapter1 from "@/images/chapter1.jpg";
import chapter2 from "@/images/chapter2.jpg";
import badIDEA from "@/images/bigidea.png";
import watchYouSleep from "@/images/watchYouSleep.jpg";
import beYourGirlfriend from "@/images/beYourGirlfriend.jpeg";
import Image from "next/image";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const music =  [
    {
        id: 0,
        title: "I'm Doing It Again Baby!",
        image: doingitAgainBABY,
        alt: "I'm Doing It Again Baby!",

    },
    {
        id: 1,
        title: "if i could make it go quiet",
        image: makeitGoQuiet,
        alt: "if i could make it go quiet",
    },
    {
        id: 2,  
        title: "bad idea!",
        image: badIDEA,
        alt: "bad idea!",
    },
    {
        id: 3,
        title: "chapter 2",
        image: chapter2,
        alt: "chapter 2",
    },
    {
        id: 4,
        title: "watch you sleep.",
        image: watchYouSleep,
        alt: "watch you sleep.",
    },
    {
        id: 5,
        title: "we fell in love in october",
        image: fellInLoveinOct,
        alt: "we fell in love in october",
    },
    {
        id: 6,
        title: "chapter 1",
        image: chapter1,
        alt: "chapter 1",
    },
    {
        id: 7,
        title: "i wanna be your girlfriend",
        image: beYourGirlfriend,
        alt: "i wanna be your girlfriend",
    }
]

function Projects() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [...music, music[0]]; // clone first slide for seamless loop

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior) => {
    const el = scrollRef.current;
    if (!el) return;
    const width = el.clientWidth;
    if (!width) return;
    el.scrollTo({ left: index * width, behavior });
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        scrollToIndex(next, "smooth");

        if (next === music.length) {
          window.setTimeout(() => {
            scrollToIndex(0, "auto");
          }, 550);
          return 0;
        }

        return next;
      });
    }, 4000);

    return () => window.clearInterval(id);
  }, [scrollToIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const width = el.clientWidth;
      if (!width) return;
      const rawIndex = Math.round(el.scrollLeft / width);
      const normalized = rawIndex >= music.length ? 0 : rawIndex;
      setActiveIndex(normalized);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5}}
        className="relative h-screen xl:h-[110vh] w-full overflow-hidden"
    >
        <div className="pointer-events-none absolute left-0 top-[28%] h-[520px] w-full -skew-y-12 bg-[#D1001F]/60" />

        <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6 pt-24 sm:px-10">
          <header className={`${montserrat.className} mb-6`}>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#ddd4c6]/70">
              music
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[0.08em] text-[#ddd4c6] sm:text-4xl">
              Albums & singles
            </h3>
          </header>

          <div
            ref={scrollRef}
            className="relative -mx-6 flex w-[calc(100%+3rem)] overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth px-6 pb-14 sm:-mx-10 sm:w-[calc(100%+5rem)] sm:px-10"
            aria-label="Music carousel"
          >
            {slides.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="min-w-full flex-shrink-0 snap-center flex justify-center"
              >
                <div className="mx-auto flex h-[calc(100svh-240px)] max-w-4xl flex-col items-center justify-center gap-6 text-center">
                  <Link href="/" aria-label={item.title}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="group relative w-[260px] overflow-hidden rounded-3xl border border-[#ddd4c6]/15 bg-[#ddd4c6]/[0.03] shadow-2xl ring-1 ring-[#ddd4c6]/10 backdrop-blur sm:w-[380px] xl:w-[420px]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#400000]/35" />
                      <Image
                        src={item.image}
                        alt={item.alt}
                        priority={idx === 0}
                        className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-[320px] xl:h-[400px]"
                      />
                    </motion.div>
                  </Link>

                  <div className={montserrat.className}>
                    <h4 className="text-xl font-semibold tracking-[0.06em] text-[#ddd4c6] sm:text-2xl">
                      {item.title}
                    </h4>
                    <p className="hidden mt-2 text-xs uppercase tracking-[0.32em] text-[#ddd4c6]/60">
                      {activeIndex + 1} / {music.length}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative -mt-10 flex items-center justify-center gap-2">
            {music.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to item ${idx + 1}`}
                onClick={() => {
                  setActiveIndex(idx);
                  scrollToIndex(idx, "smooth");
                }}
                className={[
                  "h-2.5 w-2.5 rounded-full border transition",
                  idx === activeIndex
                    ? "border-[#ddd4c6]/70 bg-[#ddd4c6]/70"
                    : "border-[#ddd4c6]/25 bg-transparent hover:border-[#ddd4c6]/45",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
    </motion.section>
  );
}

export default Projects;