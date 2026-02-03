"use client";
import Image from "next/image";

export default function Websites() {
  return (
    <section id="websites" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl px-8 py-10 grid gap-10 md:grid-cols-2">
          {/* Texto */}
          <div>
            <h2 className="text-[36px] font-[700] text-black">Websites</h2>

            <p className="mt-4 text-[18px] font-[500] text-black">
              We manage over 50 websites, all developed, maintained, and operated entirely by our team.
            </p>

            <div className="mt-4 space-y-4 text-[16px] font-[400] leading-relaxed text-[#1A1A1A]">
              <p>
                Our content reaches more than 100 countries and millions of users every month. We focus on
                producing high-quality, viral, and engaging articles that resonate with audiences worldwide.
              </p>
              <p>
                At Trek Mobi, monetization is fair and transparent. We ensure ads do not compromise navigation
                speed or user experience, keeping our platforms honest, fluid, and accessible to everyone.
              </p>
            </div>
          </div>

          {/* Imagens */}
          <div className="relative">
            {/* grid verde decorativa */}
            <Image
              src="/website-section-1.png"
              alt=""
              width={520}
              height={420}
              className="absolute right-0 top-0 w-[520px] h-auto pointer-events-none select-none"
              priority
            />
            {/* mockups/prints */}
            <Image
              src="/website-section-2.png"
              alt="Websites preview"
              width={560}
              height={380}
              className="relative z-10 mx-auto w-[560px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}