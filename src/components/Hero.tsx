"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 pt-8 md:pt-16 pb-12 md:pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/banner-hero.svg"
            alt="Globe illustration"
            width={472}
            height={325}
            priority
            className="mx-auto h-auto w-[280px] md:w-[472px] max-w-full"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 md:mt-8 font-[700] text-[32px] md:text-[48px] leading-[1.2] md:leading-tight px-4 md:px-0"
        >
          Connecting the World Through Content and Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-4 md:mt-4 text-[16px] md:text-[18px] font-normal text-black/70 max-w-[340px] md:max-w-3xl mx-auto leading-relaxed"
        >
          We create websites and apps that inspire, inform, and entertain millions of people in over 100 countries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 md:mt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-4"
        >
          <Button className="h-12 md:h-11 rounded-full px-10 md:px-6 bg-[#08FE08] text-black hover:bg-[#08FE08]/90 text-[16px] md:text-[18px] font-semibold">
            Learn More
          </Button>
          <Button 
            variant="outline" 
            className="h-12 md:h-11 rounded-full px-10 md:px-6 border-black/20 text-black hover:bg-black/5 text-[16px] md:text-[14px] font-semibold"
          >
            Explore Our Apps
          </Button>
        </motion.div>
      </div>
    </section>
  );
}