/**
 * About（プロフィール・経歴）セクション
 */
import Reveal from "@/components/_common/Reveal";
import { experiences } from "@/mocks/experiences";
import { about } from "@/mocks/site";
import type { YearMonth } from "@/utils/date";
import {
  diffYearsMonths,
  formatYMJP,
  sumExperienceDuration,
} from "@/utils/date";

export default function AboutSection() {
  return (
    <section id="about" className="section container mx-auto px-6 py-20">
      <div>
        <Reveal once>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </Reveal>

        <Reveal className="text-center mb-12" once>
          <h3 className="text-3xl font-bold">
            {about.nameJP}
            <span className="text-lg ml-2 text-slate-400">
              ({about.nameKana})
            </span>
          </h3>
          <p className="text-slate-300 mt-2">
            {(() => {
              const total = sumExperienceDuration(
                experiences.map((e) => ({
                  startYM: e.startYM as YearMonth,
                  endYM:
                    e.endYM === "present" ? "present" : (e.endYM as YearMonth),
                })),
              );
              return total.months > 0
                ? `Web Developer / ${total.years} years ${total.months} months`
                : `Web Developer / ${total.years} years`;
            })()}
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20">
          <div className="w-full lg:w-2/3 space-y-6">
            <Reveal className="p-6 glass-effect rounded-lg" once>
              <h4 className="text-xl font-bold gradient-text">プロフィール</h4>
              <p className="text-slate-300 mt-2">{about.profileText}</p>
            </Reveal>
            <Reveal className="p-6 glass-effect rounded-lg" once>
              <h4 className="text-xl font-bold gradient-text">開発への想い</h4>
              <p className="text-slate-300 mt-2">{about.passionText}</p>
            </Reveal>
          </div>
        </div>

        <Reveal once>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            経歴
          </h3>
        </Reveal>

        <div className="relative max-w-3xl mx-auto pl-8">
          <div className="absolute left-3 top-1 h-full border-l-2 border-gray-700/50" />
          {experiences.map((e, i) => {
            const dur =
              e.endYM === "present"
                ? diffYearsMonths(e.startYM as YearMonth)
                : diffYearsMonths(e.startYM as YearMonth, e.endYM as YearMonth);
            const durationJp = (() => {
              const { years, months } = dur;
              if (years === 0 && months === 0) return "0か月";
              if (years === 0) return `${months}か月`;
              if (months === 0) return `${years}年`;
              return `${years}年${months}か月`;
            })();
            const periodStr =
              e.endYM === "present"
                ? `${formatYMJP(e.startYM as YearMonth)} - 現在（${durationJp}）`
                : `${formatYMJP(e.startYM as YearMonth)} - ${formatYMJP(e.endYM as YearMonth)}（${durationJp}）`;
            return (
              <Reveal
                key={`${e.company}-${e.startYM}-${e.endYM}`}
                className="mb-12 relative"
                once
                delayMs={i * 120}
              >
                <div
                  className={`absolute left-[-2.1rem] top-1 w-6 h-6 rounded-full border-4 border-[#0a0a0a] shadow ${
                    e.color === "teal" ? "bg-teal-500" : "bg-blue-500"
                  }`}
                />
                <div className="p-6 glass-effect rounded-lg">
                  <p
                    className={`text-sm font-semibold ${e.color === "teal" ? "text-teal-400" : "text-blue-400"}`}
                  >
                    {periodStr}
                  </p>
                  <h4 className="text-xl font-bold mt-1">{e.company}</h4>
                  <p className="text-md text-slate-300 mt-1">{e.role}</p>
                  <p className="text-sm text-slate-300">{e.stack}</p>
                  <p className="text-slate-400 mt-2">{e.details}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
