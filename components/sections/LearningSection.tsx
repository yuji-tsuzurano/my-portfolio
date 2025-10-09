"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { learnings } from "@/mocks/learnings";

export default function LearningSection() {
  // 展開状態
  const [expanded, setExpanded] = useState(false);
  // 2行分のみ常時表示（どの画面幅でも）
  const rowCount = 2;
  // SSR対応: デフォルト3列、マウント後に再計算
  const [cols, setCols] = useState(3);
  // 最大表示数
  const maxVisible = cols * rowCount;
  /**
   * 各ブレークポイントによる列数を取得
   */
  const getCols = useCallback(() => {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return 2;
    return 3;
  }, []);
  /**
   * 画面リサイズ時に列数を更新
   */
  useEffect(() => {
    const updateCols = () => setCols(getCols());
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, [getCols]);

  return (
    <section id="learning" className="section container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="gradient-text">Learning</span>
      </h2>
      <div className="relative">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 overflow-hidden"
          style={{
            maxHeight: expanded
              ? "none"
              : `calc((100vw - 3rem) / ${cols} * 0.75 * ${rowCount} + ${24 * (rowCount - 1)}px + 60px * ${rowCount})`,
          }}
        >
          {(expanded ? learnings : learnings.slice(0, maxVisible)).map((l) => (
            <div
              key={l.id}
              className="glass-effect rounded-lg p-4 flex flex-col items-center"
            >
              <div className="w-full aspect-[4/3] relative mb-3">
                <Image
                  src={l.image}
                  alt={l.title}
                  fill
                  className="object-cover rounded brightness-75"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
              </div>
              <p className="text-sm text-slate-200 text-center">{l.title}</p>
            </div>
          ))}
        </div>
        {learnings.length > maxVisible && (
          <div className="flex justify-end mt-2">
            <button
              type="button"
              className="bg-none border-none p-0 m-0 cursor-pointer text-emerald-400 hover:text-emerald-300 font-semibold select-none inline-flex items-center gap-1 pr-2 hover:underline focus:outline-none"
              onClick={() => setExpanded((v) => !v)}
              aria-label={expanded ? "閉じる＜" : "もっと見る＞"}
            >
              {expanded ? "閉じる＜" : "もっと見る＞"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
