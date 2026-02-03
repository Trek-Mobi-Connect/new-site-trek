"use client";
import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  return (
    <section id="careers" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          {/* Texto (esquerda) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] font-bold text-black">Work With Us</h2>

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

            {/* Botões */}
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="#"
                className="bg-[#08FE08] px-6 py-2 rounded-full text-[16px] font-semibold text-black shadow-[0_8px_16px_rgba(8,254,8,0.4)] hover:scale-105 transition"
              >
                Apply Now
              </Link>
              <Link
                href="#"
                className="border border-black px-6 py-2 rounded-full text-[16px] font-semibold text-black hover:bg-black hover:text-white transition"
              >
                Job Board
              </Link>
            </div>
          </div>

          {/* Imagens (direita) */}
          <div className="relative w-full h-[400px]">
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