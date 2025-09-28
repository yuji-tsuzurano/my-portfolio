/**
 * 経歴タイムラインのモック
 */
import type { Experience } from "./types";

// 経歴タイムライン情報
export const experiences: Experience[] = [
  {
    company: "ソフトマックス株式会社",
    role: "電子カルテのパッケージ開発",
    stack: "HTML, CSS, JavaScript, VB.NET(.NET WebForm), Oracle",
    details:
      "既存パッケージの保守・運用および機能追加を担当。医療現場の具体的な要望をヒアリングし、要件定義から設計、実装、テストまで一貫して携わりました。レガシーコードを解析し、安定稼働を維持しながら新機能をリリースすることで、製品の信頼性向上に貢献しました。",
    color: "teal",
    startYM: "2019-04",
    endYM: "2023-01",
  },
  {
    company: "ＴＩＰＳシステム株式会社",
    role: "学習支援システムのパッケージ開発",
    stack: "HTML, CSS, Vue.js, TypeScript, C#(.NET MVC), SQLServer, Azure",
    details:
      "フロントエンドではVue.jsとTypeScriptを用いたUI開発に従事。コンポーネント設計や実装、テストを担当し新規アプリ開発に貢献しました。また、C#(.NET MVC)でのAPI開発にも携わり、フロントとバックの連携を意識する事で効率の良い開発に貢献しました。",
    color: "blue",
    startYM: "2023-04",
    endYM: "2024-09",
  },
  {
    company: "ＴＩＰＳシステム株式会社",
    role: "旅行会社予約サイトの刷新",
    stack: "HTML, CSS, JavaScript, C#(.NET RazorPages), PostgreSQL, AWS",
    details:
      "開発メンバーとしてプロジェクト初期から参画。システムの移行方針や実装方針の検討と周知を徹底しプロジェクトの技術リーダーとしてシステム開発からメンバーフォローまでを担当。フロントからサーバー、DBまでフルスタックに携わることでプロジェクトの進行に大きく貢献しました。",
    color: "blue",
    startYM: "2024-10",
    endYM: "present",
  },
];
