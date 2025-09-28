/**
 * スキルカテゴリと項目のモック
 */
import type { SkillCategory } from "./types";

// スキルカテゴリと項目
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    borderColorClass: "border-emerald-400",
    items: [
      { iconClass: "devicon-html5-plain text-orange-500", label: "HTML" },
      { iconClass: "devicon-css3-plain text-blue-500", label: "CSS" },
      {
        iconClass: "devicon-javascript-plain text-yellow-400",
        label: "JavaScript",
      },
      {
        iconClass: "devicon-typescript-plain text-blue-400",
        label: "TypeScript",
      },
      { iconClass: "devicon-vuejs-plain text-green-500", label: "Vue" },
      { iconClass: "devicon-react-original text-cyan-400", label: "React" },
      { iconClass: "devicon-nextjs-plain text-white", label: "Next.js" },
      {
        iconClass: "devicon-tailwindcss-plain text-teal-400",
        label: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Backend",
    borderColorClass: "border-blue-400",
    items: [
      { iconClass: "devicon-csharp-plain text-purple-500", label: "C#" },
      { iconClass: "devicon-nodejs-plain text-green-400", label: "Node.js" },
    ],
  },
  {
    title: "Database",
    borderColorClass: "border-cyan-400",
    items: [
      { iconClass: "devicon-oracle-original text-red-500", label: "Oracle" },
      {
        iconClass: "devicon-postgresql-plain text-blue-400",
        label: "PostgreSQL",
      },
      {
        iconClass: "devicon-microsoftsqlserver-plain text-red-400",
        label: "SQLServer",
      },
    ],
  },
  {
    title: "Others",
    borderColorClass: "border-gray-400",
    items: [
      { iconClass: "devicon-git-plain text-orange-600", label: "Git" },
      { iconClass: "devicon-github-original text-white", label: "GitHub" },
      { iconClass: "devicon-vscode-plain text-blue-500", label: "VSCode" },
    ],
  },
];
