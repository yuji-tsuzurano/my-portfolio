"use client";
import { createContext, type ReactNode, useContext, useState } from "react";

// モバイルメニューのコンテキストの型
type MobileMenuContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

// コンテキストのデフォルト値（undefined）
// undefinedの場合、Providerの外でuseMobileMenuが呼ばれたことになる
// その場合はエラーを投げるようにする
// これにより、Providerの外でuseMobileMenuが呼ばれることを防ぐ
// （TypeScriptの型システムだけでは防げないため）
const MobileMenuContext = createContext<MobileMenuContextValue | undefined>(
  undefined,
);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  // モバイルメニューの開閉状態
  const [open, setOpen] = useState(false);
  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  // コンテキストの値を取得
  const ctx = useContext(MobileMenuContext);
  if (!ctx)
    throw new Error("useMobileMenu must be used within MobileMenuProvider");
  return ctx;
}
