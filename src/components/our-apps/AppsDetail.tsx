"use client";
import Image from "next/image";
import Link from "next/link";

const allApps = [
  { name: "Leafie", description: "Take photos to identify any plant.", image: "leafie" },
  { name: "Nomix", description: "Trace the roots of your family name around the world.", image: "nomix" },
  { name: "Bible Flow", description: "Daily capsules of inspiration, history, and faith.", image: "bible-flow" },
  { name: "Social Guru", description: "Discover, guess and reveal who might be visiting your profile… just for fun.", image: "social-guru" },
  { name: "Past Quest", description: "Discover who you were in past lives.", image: "past-quest" },
  { name: "Phantomize", description: "Record discreet appearances as real flagrant fossem.", image: "phantomize" },
  { name: "Astrovia", description: "Tarot & Horoscope in One Place.", image: "astrovia" },
  { name: "Vita Press", description: "Health and wellness news.", image: "app-img" },
  { name: "Mind Spark", description: "Brain training and memory games.", image: "app-img" },
  { name: "Eco Track", description: "Track your carbon footprint.", image: "app-img" },
  { name: "Style Hub", description: "Fashion trends and outfit ideas.", image: "app-img" },
  { name: "Fit Journey", description: "Personal fitness tracker and coach.", image: "app-img" },
];

/* Linha 2 começa do meio pra criar o efeito de cruzamento */
const row2Apps = [...allApps.slice(6), ...allApps.slice(0, 6)];

function AppCard({ app }: { app: { name: string; description: string; image: string } }) {
  return (
    <div className="flex flex-col gap-2.5 w-[180px] md:w-[200px] shrink-0">
      <div className="aspect-square border border-[#DCDCDC] rounded-[48px] overflow-hidden relative">
        <Image
          src={`/${app.image}.png`}
          alt={app.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 p-3">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[18px] font-semibold text-[#1A1A1A] leading-tight">
            {app.name}
          </h3>
          <p className="text-[14px] font-normal text-[#404040] leading-snug line-clamp-2">
            {app.description}
          </p>
        </div>

        <Link
          href="#"
          className="inline-flex items-center justify-center px-5 py-2 border border-[#00B709] rounded-full text-[14px] font-semibold text-[#00B709] hover:bg-[#00B709] hover:text-white transition"
        >
          Download
        </Link>
      </div>
    </div>
  );
}

export default function AppsList() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-8">

          {/* Linha 1 — scroll pra esquerda (todos os apps) */}
          <div className="apps-marquee-wrapper">
            <div className="apps-row-left inline-flex gap-8">
              {[0, 1].map((copy) => (
                <div key={copy} className="inline-flex gap-8 shrink-0">
                  {allApps.map((app, i) => (
                    <AppCard key={`${copy}-${i}`} app={app} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Linha 2 — scroll pra direita (mesmos apps, ordem deslocada) */}
          <div className="apps-marquee-wrapper">
            <div className="apps-row-right inline-flex gap-8">
              {[0, 1].map((copy) => (
                <div key={copy} className="inline-flex gap-8 shrink-0">
                  {row2Apps.map((app, i) => (
                    <AppCard key={`${copy}-${i}`} app={app} />
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .apps-marquee-wrapper {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          overflow: hidden;
        }
        @keyframes apps-scroll-left {
          0% { transform: translateX(0) translateZ(0); }
          100% { transform: translateX(-50%) translateZ(0); }
        }
        @keyframes apps-scroll-right {
          0% { transform: translateX(-50%) translateZ(0); }
          100% { transform: translateX(0) translateZ(0); }
        }
        .apps-row-left {
          animation: apps-scroll-left 40s linear infinite;
          will-change: transform;
        }
        .apps-row-right {
          animation: apps-scroll-right 40s linear infinite;
          will-change: transform;
        }
        .apps-row-left:hover,
        .apps-row-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}