/**
 * スクロールで表示するリビール用ラッパー
 */
"use client";
import { useEffect, useRef, useState } from "react";

// コンポーネントのプロパティの型
type RevealProps = {
  // 子要素
  children: React.ReactNode;
  // 追加のCSSクラス
  className?: string;
  // 一度だけアニメーションを実行するか（デフォルト: true）
  once?: boolean;
  // アニメーションの遅延時間（ミリ秒）
  delayMs?: number;
  // IntersectionObserverに渡すrootMargin（デフォルト: "0px 0px -10% 0px"）
  rootMargin?: string;
};

export default function Reveal({
  children,
  className,
  once = true,
  delayMs,
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  // 要素の参照と表示状態の管理
  const ref = useRef<HTMLDivElement | null>(null);
  // 表示状態
  const [visible, setVisible] = useState(false);
  /**
   * IntersectionObserverを使って要素の表示状態を監視
   * onceがtrueの場合、最初に表示されたときにのみアニメーションを実行
   * onceがfalseの場合、要素が表示されるたびにアニメーションを実行
   */
  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { root: null, rootMargin, threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className ?? ""}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
