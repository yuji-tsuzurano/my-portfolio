"use client";
import { useMobileMenu } from "./MobileMenuProvider";

// ナビゲーションリンクの型
type NavLink = { href: string; label: string };

export function MobileMenuPanel({ navLinks }: { navLinks: NavLink[] }) {
  // モバイルメニューの開閉状態
  const { open, setOpen } = useMobileMenu();
  // メニューを閉じる
  const onLinkClick = () => setOpen(false);
  return (
    <div id="mobile-menu" className={`${open ? "" : "hidden"} md:hidden`}>
      {navLinks.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={onLinkClick}
          className="block py-2 px-6 hover:bg-gray-800 transition-colors"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
