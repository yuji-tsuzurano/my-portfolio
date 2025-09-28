"use client";

import { useMobileMenu } from "./MobileMenuProvider";

export function MobileMenuButton() {
  const { open, setOpen } = useMobileMenu();
  return (
    <button
      type="button"
      aria-label={open ? "メニューを閉じる" : "メニューを開く"}
      aria-controls="mobile-menu"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      className="md:hidden focus:outline-none text-slate-200 hover:text-emerald-400 transition-colors"
    >
      {open ? (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
}
