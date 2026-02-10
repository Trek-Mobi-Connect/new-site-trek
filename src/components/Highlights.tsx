"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  "50+ Managed Websites",
  "Apps in Multiple Categories",
  "Content in 100+ Countries",
  "Millions of Monthly Users",
];

export default function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white pt-8 md:pt-16 pb-6 md:pb-10 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-[343px] md:max-w-[1280px] rounded-[24px] md:rounded-[100px] bg-black px-8 md:px-[52px] py-10 md:py-6 md:h-[112px]"
      >
        <ul className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center text-white font-semibold text-[18px] leading-snug">
          {items.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
            >
              <span className="whitespace-pre-line">{t}</span>
              {i < items.length - 1 && (
                <Image 
                  src="/rectangle.svg" 
                  alt="" 
                  width={12} 
                  height={12}
                  className="block"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}