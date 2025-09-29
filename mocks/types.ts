/**
 * モックデータの型定義
 */

// ソーシャルリンク
export interface SocialLink {
  label: string;
  href: string;
  iconClass: string;
}

// ナビゲーションリンク
export interface NavLink {
  label: string;
  href: string;
}

// サイト基本情報
export interface Site {
  heroName: string;
  heroRole: string;
  socials: SocialLink[];
  contactMessage: string;
  navLinks: NavLink[];
}

// プロフィール・経歴情報
export interface About {
  nameJP: string;
  nameKana: string;
  profileText: string;
  passionText: string;
}

// 職務経歴情報
export interface Experience {
  company: string;
  role: string;
  stack: string;
  details: string;
  color: "teal" | "blue";
  /** 期間開始（YYYY-MM） */
  startYM: string;
  /** 期間終了（YYYY-MM または "present"） */
  endYM: string;
}

// スキルカテゴリと項目
export interface SkillItem {
  label: string;
  iconClass: string;
}

// スキルカテゴリと項目
export interface SkillCategory {
  title: string;
  borderColorClass: string;
  items: SkillItem[];
}

// ポートフォリオ作品情報
export interface WorkItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  /** 技術タグ */
  tags?: string[];
}
