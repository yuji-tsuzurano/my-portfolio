/**
 * Works（実績）セクション
 */
import Image from "next/image";
import Reveal from "@/components/_common/Reveal";
import { works } from "@/mocks/works";

export default function WorksSection() {
  return (
    <section id="works" className="section container mx-auto px-6 py-20">
      <div>
        <Reveal once>
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Works</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((w, idx) => (
            <Reveal
              key={w.href}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              once
              delayMs={idx * 120}
            >
              <a href={w.href} target="_blank" rel="noreferrer">
                <div className="relative h-56">
                  <Image
                    src={w.image}
                    alt={w.imageAlt}
                    fill
                    unoptimized
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/75 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    {w.title}
                  </h3>
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                    {w.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
