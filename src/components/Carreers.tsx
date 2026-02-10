"use client";
import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  return (
    <section id="careers" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          {/* Texto (esquerda) */}
          <div className="flex flex-col gap-4 order-2 md:order-1 ml-8 md:ml-0">
            <h2 className="text-[32px] font-bold text-black">Careers</h2>

            <p className="text-[20px] font-medium text-[#404040]">
              At Trek Mobi, we are always looking for talented and passionate people to join our team.
            </p>

            <p className="text-[18px] font-normal leading-6 text-[#404040]">
              Whether your expertise is in content{" "}
              <span className="font-bold underline">
                creation, technology, design, or marketing,
              </span>{" "}
              we offer opportunities to grow and make an impact.
            </p>

            <p className="text-[18px] font-normal leading-6 text-[#404040]">
              Check out our job openings below or send us your portfolio and resume.
            </p>

            {/* Botão */}
            <div className="pt-3">
              <Link
                href="#"
                className="inline-flex items-center rounded-full border border-[#08FE08] h-[40px] relative group"
              >
                <span className="px-5 text-black text-[20px] font-semibold">
                  Read More
                </span>
                <span className="h-[40px] w-[40px] rounded-full bg-[#08FE08] grid place-items-center shadow-[0_8px_16px_rgba(8,254,8,0.4)] group-hover:scale-105 transition -ml-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Imagens (direita) */}
          <div className="relative w-full h-[400px] order-1 md:order-2">
            {/* Background decorativo - DEVE FICAR VISÍVEL */}
            <div className="absolute left-0 top-0 w-[70%] h-[70%] pointer-events-none">
              <Image
                src="/website-section-1.png"
                alt=""
                fill
                className="object-contain object-left-top"
              />
            </div>

            {/* Imagem vertical alta (direita) - FICA POR CIMA */}
            <div className="absolute right-0 top-0 w-[45%] h-[100%] rounded-[32px] overflow-hidden z-10">
              <Image
                src="/carrers-2.svg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>

            {/* Imagem horizontal (esquerda/baixo) - FICA POR CIMA */}
            <div className="absolute left-0 bottom-0 w-[52%] h-[45%] rounded-[32px] overflow-hidden z-10">
              <Image
                src="/carrers-1.svg"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}