"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:gap-16 md:grid-cols-2 items-start">
          {/* Conteúdo texto (esquerda) */}
          <div className="flex flex-col gap-4 max-w-[280px] md:max-w-none mx-auto md:mx-0">
            <h1 className="text-[28px] md:text-[48px] font-bold leading-tight text-black">
              About Trek Mobi
            </h1>

            <p className="text-[14px] md:text-[18px] font-normal leading-relaxed text-[#404040]">
              Trek Mobi is a digital media company founded with the mission to
              share engaging and relevant content across the globe.
            </p>

            <p className="text-[14px] md:text-[18px] font-normal leading-relaxed text-[#404040]">
              We started our journey creating websites that deliver information,
              technology news, and curiosity-driven content to diverse
              audiences. Over time, our expertise expanded to developing mobile
              applications for multiple niches — always with the same core
              philosophy: to provide quality, relevant, and enjoyable
              experiences.
            </p>

            <p className="text-[14px] md:text-[18px] font-normal leading-relaxed text-[#404040]">
              Today, Trek Mobi reaches millions of users in more than 100
              countries, delivering trustworthy content and entertainment while
              keeping user experience at the heart of everything we do.
            </p>
          </div>

          {/* Imagem (direita) */}
          <div className="relative aspect-[608/477] w-full overflow-hidden max-w-[280px] md:max-w-none mx-auto md:mx-0">
            <Image
              src="/about-us-1.png"
              alt="About Trek Mobi"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}