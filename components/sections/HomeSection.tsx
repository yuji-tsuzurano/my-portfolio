/**
 * Hero（ホーム）セクション
 */
import Reveal from "@/components/_common/Reveal";
import { site } from "@/mocks/site";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="section flex items-center justify-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>
      <Reveal className="z-10" once>
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-4">
          <span className="gradient-text">{site.heroName}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          {site.heroRole}
        </p>
        <div className="flex justify-center space-x-6">
          {site.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-transform duration-300 transform hover:scale-125"
              aria-label={s.label}
            >
              <i className={`${s.iconClass} text-3xl`} />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
