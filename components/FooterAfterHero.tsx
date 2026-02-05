"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  scrollRootId: string;
  afterSectionId: string;
  headerOffsetPx?: number;
  avatarSrc: any;
};

export default function FooterAfterHero({
  scrollRootId,
  afterSectionId,
  headerOffsetPx = 72,
  avatarSrc,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const root = document.getElementById(scrollRootId);
    const afterSection = document.getElementById(afterSectionId);

    if (!root || !afterSection) return;

    const recompute = () => {
      // Use offsetTop/Height because sections are direct children of the scroll root.
      const threshold = afterSection.offsetTop + afterSection.offsetHeight - headerOffsetPx;
      setIsVisible(root.scrollTop >= threshold);
    };

    recompute();
    root.addEventListener("scroll", recompute, { passive: true });
    window.addEventListener("resize", recompute);

    return () => {
      root.removeEventListener("scroll", recompute);
      window.removeEventListener("resize", recompute);
    };
  }, [afterSectionId, headerOffsetPx, scrollRootId]);

  if (!isVisible) return null;

  return (
    <Link href="#hero" aria-label="Back to top">
      <footer className="sticky bottom-5 w-full cursor-pointer pb-8">
        <div className="flex items-center justify-center">
          <Image
            className="h-10 w-10 rounded-full grayscale transition hover:grayscale-0"
            src={avatarSrc}
            alt="Girl in Red"
          />
        </div>
      </footer>
    </Link>
  );
}

