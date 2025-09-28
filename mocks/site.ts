/**
 * サイト基本情報とプロフィールのモック
 */
import type { About, Site } from "./types";

// サイト基本情報
export const site: Site = {
  heroName: "Yuji Tsuzurano",
  heroRole: "Full-Stack Web Developer",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/yuji-tsuzurano",
      iconClass: "devicon-github-original",
    },
    {
      label: "X",
      href: "https://x.com/tsuzuranoyuji",
      iconClass: "devicon-twitter-original",
    },
  ],
  contactMessage: "お仕事のご依頼、ご相談などはXのDMにてお待ちしております。",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
  ],
};

// プロフィール・経歴情報
export const about: About = {
  nameJP: "黒葛野 勇志",
  nameKana: "つづらの ゆうじ",
  profileText:
    "フロントエンドからバックエンドまでを一貫して開発できる28歳の現役Webエンジニアです。要件定義から設計・実装・試験・運用保守・チーム開発のプロセス改善まで一貫して担当してきました。今はエンジニア育成もしてます。",
  passionText:
    "「技術で人々の生活をより豊かにする」という想いを胸に日々の開発に取り組んでいます。特に新しい技術がユーザー体験をどう向上させるかに強い関心があり、個人開発ではBlazorやNext.jsなどを積極的に探求しています。チーム開発においては自身が学んだ知識を共有し、メンバーと議論を重ねながらプロダクトを共に成長させるプロセスに最も大きな喜びを感じます。また、技術的な観点だけでなく常にユーザーの視点に立ち「使いやすく、心地よい」最高の体験を提供できるアプリケーションになるよう、こだわりを持って開発しております。",
};
