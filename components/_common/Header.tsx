/**
 * サイト共通ヘッダー
 */
import { site } from "@/mocks/site";

export default function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-effect"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold tracking-wider gradient-text"
        >
          Y.T.
        </a>
        <nav className="hidden md:flex space-x-8">
          {site.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        {/* サーバコンポーネントのためモバイルメニューのJSは省略 */}
        <button
          type="button"
          aria-hidden
          className="md:hidden opacity-50 cursor-default"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
