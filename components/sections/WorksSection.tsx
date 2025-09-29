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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {works.map((w, idx) => (
            <Reveal key={w.href} once delayMs={idx * 120}>
              <div className="group works-card h-full flex flex-col overflow-hidden rounded-lg glass-effect hover:-translate-y-1 transition-transform duration-300">
                <div className="relative">
                  <div className="relative aspect-video">
                    <Image
                      src={w.image}
                      alt={w.imageAlt}
                      fill
                      unoptimized
                      className="works-img object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="works-body p-5 flex flex-col grow">
                  <h3 className="works-title text-xl font-bold mb-3">
                    {w.title}
                  </h3>
                  {w.tags && w.tags.length > 0 && (
                    <div className="works-tags flex flex-wrap content-start gap-2 mb-3 overflow-hidden h-14">
                      {w.tags.map((t) => (
                        <span
                          key={t}
                          className="works-tag inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="works-desc text-slate-300/90 text-sm mb-4 line-clamp-2 min-h-10">
                    {w.description}
                  </p>
                  <a
                    className="works-link mt-auto inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${w.title} の詳細を見る`}
                  >
                    詳細を見る
                    <svg
                      className="external-icon w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M18 13V19A2 2 0 0 1 16 21H6A2 2 0 0 1 4 19V9A2 2 0 0 1 6 7H12" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
