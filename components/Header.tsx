"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useMemo, useState } from "react";
import { SocialIcon } from "react-social-icons";

const montserrat = Montserrat({ subsets: ["latin"] });
const SOCIAL_ICON_SIZE = 36;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "home", href: "#hero" },
      { label: "about", href: "#about" },
      { label: "projects", href: "#projects" },
      { label: "listen", href: "#embedArtist" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-[#ddd4c6]/10 bg-[#400000]/65 backdrop-blur supports-[backdrop-filter]:bg-[#400000]/55">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -500, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="flex items-center gap-3"
          >
            <Link
              href="#hero"
              className={`${montserrat.className} group hidden sm:inline-flex items-center gap-2`}
              aria-label="Go to top"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-xs font-semibold lowercase tracking-[0.35em] text-[#ddd4c6]/90 transition group-hover:text-[#ddd4c6]">
                girl in red
              </span>
              <span className="h-[1px] w-10 bg-[#ddd4c6]/20 transition group-hover:bg-[#ddd4c6]/40" />
            </Link>

            <div className="flex items-center gap-1">
              <SocialIcon
                url="https://www.youtube.com/@girlinred"
                fgColor="#ddd4c6"
                bgColor="transparent"
                className="opacity-80 transition hover:scale-110 hover:opacity-100"
                style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
              />
              <SocialIcon
                url="https://www.instagram.com/girlinred/"
                fgColor="#ddd4c6"
                bgColor="transparent"
                className="opacity-80 transition hover:scale-110 hover:opacity-100"
                style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
              />
              <SocialIcon
                url="https://www.tiktok.com/@girlinred"
                fgColor="#ddd4c6"
                bgColor="transparent"
                className="opacity-80 transition hover:scale-110 hover:opacity-100"
                style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
              />
              {/* <SocialIcon
                url="https://x.com/_girlinred_"
                fgColor="#ddd4c6"
                bgColor="transparent"
                className="hidden opacity-80 transition hover:scale-110 hover:opacity-100"
                style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
              /> */}
              {/* <SocialIcon
                url="https://www.facebook.com/girlinred/"
                fgColor="#ddd4c6"
                bgColor="transparent"
                className="hidden opacity-80 transition hover:scale-110 hover:opacity-100"
                style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
              /> */}
            </div>
          </motion.div>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                onClick={() => setIsMenuOpen(false)}
                className={`${montserrat.className} rounded-full px-3 py-2 text-xs lowercase tracking-[0.32em] text-[#ddd4c6]/80 transition hover:bg-[#ddd4c6]/10 hover:text-[#ddd4c6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ddd4c6]/40`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="flex items-center gap-2 text-[#ddd4c6]"
          >
            <div className="hidden items-center gap-1 sm:flex">
              <SocialIcon
                className="cursor-pointer"
                fgColor="#ddd4c6"
                bgColor="transparent"
                url="https://open.spotify.com/artist/3uwAm6vQy7kWPS2bciKWx9"
                style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
              />
              <SocialIcon
                className="cursor-pointer"
                fgColor="#ddd4c6"
                bgColor="transparent"
                url="https://music.apple.com/us/artist/girl-in-red/1349818950"
                style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
              />
              <SocialIcon
                className="cursor-pointer"
                fgColor="#ddd4c6"
                bgColor="transparent"
                url="https://soundcloud.com/lyfsuxx"
                style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
              />
            </div>

            <Link
              href="https://us.shopgirlinred.com/"
              target="_blank"
              rel="noreferrer"
              className={`${montserrat.className} hidden rounded-full border border-[#ddd4c6]/20 bg-[#ddd4c6]/0 px-4 py-2 text-xs font-semibold lowercase tracking-[0.32em] text-[#ddd4c6]/90 transition hover:border-[#ddd4c6]/35 hover:bg-[#ddd4c6]/10 md:inline-flex`}
            >
              shop
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-[#ddd4c6]/15 bg-[#ddd4c6]/0 p-2 text-[#ddd4c6]/90 transition hover:border-[#ddd4c6]/30 hover:bg-[#ddd4c6]/10 md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-b border-[#ddd4c6]/10 bg-[#400000]/85 backdrop-blur supports-[backdrop-filter]:bg-[#400000]/70 md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${montserrat.className} flex items-center justify-between rounded-xl border border-[#ddd4c6]/10 bg-[#ddd4c6]/0 px-4 py-3 text-sm lowercase tracking-[0.28em] text-[#ddd4c6]/90 transition hover:bg-[#ddd4c6]/10`}
                  >
                    {item.label}
                    <span className="text-[#ddd4c6]/50" aria-hidden="true">
                      ↳
                    </span>
                  </Link>
                ))}

                <div className="mt-1 grid grid-cols-2 gap-2">
                  <Link
                    href="https://open.spotify.com/artist/3uwAm6vQy7kWPS2bciKWx9"
                    target="_blank"
                    rel="noreferrer"
                    className={`${montserrat.className} rounded-xl border border-[#ddd4c6]/10 bg-[#ddd4c6]/0 px-4 py-3 text-center text-xs lowercase tracking-[0.28em] text-[#ddd4c6]/90 transition hover:bg-[#ddd4c6]/10`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    spotify
                  </Link>
                  <Link
                    href="https://music.apple.com/us/artist/girl-in-red/1349818950"
                    target="_blank"
                    rel="noreferrer"
                    className={`${montserrat.className} rounded-xl border border-[#ddd4c6]/10 bg-[#ddd4c6]/0 px-4 py-3 text-center text-xs lowercase tracking-[0.28em] text-[#ddd4c6]/90 transition hover:bg-[#ddd4c6]/10`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    apple music
                  </Link>
                </div>

                <Link
                  href="https://us.shopgirlinred.com/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className={`${montserrat.className} mt-1 inline-flex items-center justify-center rounded-xl border border-[#ddd4c6]/20 bg-[#ddd4c6]/0 px-4 py-3 text-xs font-semibold lowercase tracking-[0.32em] text-[#ddd4c6]/90 transition hover:border-[#ddd4c6]/35 hover:bg-[#ddd4c6]/10`}
                >
                  shop
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
