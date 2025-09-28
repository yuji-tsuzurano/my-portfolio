/**
 * サイト共通ヘッダー（サーバーコンポーネント）
 * - モバイルメニューの開閉はクライアント側に分離
 */
import { site } from "@/mocks/site";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenuPanel } from "./MobileMenuPanel";
import { MobileMenuProvider } from "./MobileMenuProvider";

export default function Header() {
  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-effect bg-black/50`}
    >
      <MobileMenuProvider>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#home"
            className="text-xl font-bold tracking-wider gradient-text"
          >
            Y.T.
          </a>
          {/* PC ナビゲーション */}
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
          {/* モバイルトリガー */}
          <MobileMenuButton />
        </div>

        {/* モバイルメニュー（ヘッダー直下） */}
        <MobileMenuPanel navLinks={site.navLinks} />
      </MobileMenuProvider>
    </header>
  );
}
