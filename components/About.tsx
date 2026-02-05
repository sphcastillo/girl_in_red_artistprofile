"use client";

import girlinred from "@/images/onKeyboard.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });



function About() {
  return (
    <section className={`${montserrat.className} relative box-border min-h-[100svh] pt-[72px]`}>
      <div className="mx-auto flex max-w-6xl flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 min-h-[calc(100svh-72px)]">
        <motion.div
          className="relative grid items-center gap-10 md:grid-cols-2 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9 }}
        >
          <header className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#ddd4c6]/70">
              about
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[0.08em] text-[#ddd4c6] sm:text-4xl">
              Where it{" "}
              <span className="underline decoration-[#ddd4c6]/35 underline-offset-4">
                all
              </span>{" "}
              started
            </h3>
          </header>

          <motion.div
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[#ddd4c6]/5 blur-2xl" />
            <Image
              src={girlinred}
              alt="Marie Ulven Ringheim on a keyboard"
              priority
              className="relative aspect-square w-full rounded-3xl object-cover shadow-2xl ring-1 ring-[#ddd4c6]/20"
            />
          </motion.div>

          <motion.div
            initial={{ x: 24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="rounded-3xl border border-[#ddd4c6]/10 bg-[#ddd4c6]/[0.03] p-6 shadow-[0_0_0_1px_rgba(221,212,198,0.04)] backdrop-blur sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddd4c6]/60">
                Horten, Norway • 1999
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#ddd4c6]/80 sm:text-lg">
                Marie Ulven Ringheim was born in Horten, Norway on February 16,
                1999. She grew up in a small town she once described as “quiet
                and kinda boring”, with her sisters and divorced parents.
                Before music, her big obsession was fingerboarding — a sport
                where you “ride” a tiny skateboard with your fingers. She first
                released Norwegian songs on SoundCloud under “Lydia X”, then
                coined the name “girl in red” after a crush looked especially
                pretty in a red sweater.
              </p>

              <div className="hidden mt-6  flex-wrap gap-2">
                {[
                  "songwriter",
                  "alt-pop",
                  "queer stories",
                  "DIY roots",
                  "Norway",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#ddd4c6]/15 bg-[#ddd4c6]/[0.04] px-3 py-1 text-xs lowercase tracking-[0.22em] text-[#ddd4c6]/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="hidden mt-6 rounded-2xl border border-[#F01E2C]/20 bg-[#F01E2C]/[0.06] p-4">
                <p className="text-sm leading-relaxed text-[#ddd4c6]/85">
                  <span className="font-semibold text-[#ddd4c6]">
                    Fun fact:
                  </span>{" "}
                  you can still find old fingerboarding battle videos online.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;