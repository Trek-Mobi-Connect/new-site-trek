"use client";
import Image from "next/image";
import Link from "next/link";

const apps = [
  {
    name: "Leafie",
    description: "Take photos to identify any plant.",
    image: "leafie",
  },
  {
    name: "Nomix",
    description: "Trace the roots of your family name around the world.",
    image: "nomix",
  },
  {
    name: "Bible Flow",
    description: "Daily capsules of inspiration, history, and faith.",
    image: "bible-flow",
  },
  {
    name: "Social Guru",
    description: "Discover, guess and reveal who might be visiting your profile… just for fun.",
    image: "social-guru",
  },
  {
    name: "Past Quest",
    description: "Discover who you were in past lives.",
    image: "past-quest",
  },
  {
    name: "Phantomize",
    description: "Record discreet appearances as real flagrant fossem.",
    image: "phantomize",
  },
  {
    name: "Astrovia",
    description: "Tarot & Horoscope in One Place.",
    image: "astrovia",
  },
  {
    name: "Vita Press",
    description: "Health and wellness news.",
    image: "app-img",
  },
  {
    name: "Mind Spark",
    description: "Brain training and memory games.",
    image: "app-img",
  },
  {
    name: "Eco Track",
    description: "Track your carbon footprint.",
    image: "app-img",
  },
  {
    name: "Style Hub",
    description: "Fashion trends and outfit ideas.",
    image: "app-img",
  },
  {
    name: "Fit Journey",
    description: "Personal fitness tracker and coach.",
    image: "app-img",
  },
];

export default function AppsList() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Grid de apps */}
        <div className="flex flex-col gap-8">
          {/* Linha 1 - 6 apps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {apps.slice(0, 6).map((app) => (
              <div key={app.name} className="flex flex-col gap-2.5">
                {/* Imagem do app */}
                <div className="aspect-square border border-[#DCDCDC] rounded-[48px] overflow-hidden relative">
                  <Image
                    src={`/${app.image}.png`}
                    alt={app.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col gap-3 p-3">
                  {/* Título e descrição */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[20px] font-semibold text-[#1A1A1A]">
                      {app.name}
                    </h3>
                    <p className="text-[16px] font-normal text-[#404040]">
                      {app.description}
                    </p>
                  </div>

                  {/* Botão Download */}
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-2 border border-[#00B709] rounded-full text-[16px] font-semibold text-[#00B709] hover:bg-[#00B709] hover:text-white transition"
                  >
                    Download
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Linha 2 - 6 apps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {apps.slice(6, 12).map((app) => (
              <div key={app.name} className="flex flex-col gap-2.5">
                {/* Imagem do app */}
                <div className="aspect-square border border-[#DCDCDC] rounded-[48px] overflow-hidden relative">
                  <Image
                    src={`/${app.image}.png`}
                    alt={app.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col gap-3 p-3">
                  {/* Título e descrição */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[20px] font-semibold text-[#1A1A1A]">
                      {app.name}
                    </h3>
                    <p className="text-[16px] font-normal text-[#404040]">
                      {app.description}
                    </p>
                  </div>

                  {/* Botão Download */}
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-2 border border-[#00B709] rounded-full text-[16px] font-semibold text-[#00B709] hover:bg-[#00B709] hover:text-white transition"
                  >
                    Download
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}