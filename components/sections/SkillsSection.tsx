/**
 * Skills（スキル）セクション
 */
import Reveal from "@/components/_common/Reveal";
import { skillCategories } from "@/mocks/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="section container mx-auto px-6 py-20">
      <div>
        <Reveal once>
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Skills</span>
          </h2>
        </Reveal>

        {skillCategories.map((cat, idx) => (
          <Reveal key={cat.title} className="mb-16" once delayMs={idx * 120}>
            <h3
              className={`text-2xl font-bold text-slate-200 mb-6 pl-4 border-l-4 ${cat.borderColorClass}`}
            >
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-8">
              {cat.items.map((s) => (
                <div
                  key={s.label}
                  className="w-36 h-36 flex flex-col items-center justify-center p-4 glass-effect rounded-lg hover:-translate-y-2 transition-transform duration-300"
                >
                  <i className={`${s.iconClass} text-5xl mb-2`} />
                  <h3 className="font-bold text-center">{s.label}</h3>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
