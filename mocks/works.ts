/**
 * 実績(Works)のモック
 */
import type { WorkItem } from "./types";

// ポートフォリオ作品情報
export const works: WorkItem[] = [
  {
    title: "Portfolio（Yuji Tsuzuarno）",
    description: "Next.jsで開発したポートフォリオサイト",
    image: "https://placehold.co/600x400/0a0a0a/34d399?text=Portfolio",
    imageAlt: "Portfolio",
    href: "https://github.com/yuji-tsuzurano/my-portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Pages"],
  },
  {
    title: "SNS（Ibasaho）",
    description: "Blazor Serverで開発中の簡易的なSNSアプリ",
    image: "https://placehold.co/600x400/0a0a0a/60a5fa?text=Ibasho",
    imageAlt: "Ibasho",
    href: "https://github.com/yuji-tsuzurano/Ibasho",
    tags: ["Blazor", "C#", "Tailwind CSS", "PostgreSQL"],
  },
];
