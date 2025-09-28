/**
 * Contact（連絡先）セクション
 */
import Reveal from "@/components/_common/Reveal";
import { site } from "@/mocks/site";

export default function ContactSection() {
  return (
    <section id="contact" className="section container mx-auto px-6 py-20">
      <div>
        <Reveal once>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Contact</span>
          </h2>
        </Reveal>
        <Reveal once delayMs={120}>
          <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
            {site.contactMessage}
          </p>
        </Reveal>
        <Reveal once delayMs={240}>
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
      </div>
    </section>
  );
}
