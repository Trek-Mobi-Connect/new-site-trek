"use client";
import Image from "next/image";
import Link from "next/link";

export default function Apps() {
  return (
    <section id="apps" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl px-8 py-10 grid gap-10 md:grid-cols-2">
          {/* Texto (esquerda) */}
          <div>
            <h2 className="text-[36px] font-[700] text-black">Apps</h2>

            <p className="mt-4 text-[18px] font-[500] text-black">
              Beyond our websites, we have developed a wide range of mobile applications covering various topics and functionalities.
            </p>

            <div className="mt-4 space-y-4 text-[16px] font-[400] leading-relaxed text-[#1A1A1A]">
              <p>
                Each app is built with the same principles: delivering quality, relevance, and a touch of fun. From informative tools to
                entertainment-focused experiences, our apps aim to make users lives easier, more informed, and more enjoyable.
              </p>
            </div>

            {/* Explore our apps */}
            <div className="mt-6">
              <p className="text-[16px] font-[500] text-black mb-3">
                Explore our apps here:
              </p>
              <div className="flex items-center gap-3">
                <Link href="#" target="_blank">
                  <Image
                    src="/apple-store.png"
                    alt="Download on App Store"
                    width={120}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                </Link>
                <Link href="#" target="_blank">
                  <Image
                    src="/play-store.png"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Imagens (direita) */}
          <div className="relative min-h-[380px]">
            {/* globo verde de fundo */}
            <Image
              src="/app-section-1.png"
              alt=""
              fill
              className="object-contain pointer-events-none select-none -left-10 top-[-40px]"
              sizes="(min-width: 768px) 560px, 100vw"
            />

            {/* mockup dos apps */}
            <Image
              src="/app-section-2.png"
              alt="Apps preview"
              width={560}
              height={380}
              className="relative z-10 mx-auto mt-6 w-[520px] max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}