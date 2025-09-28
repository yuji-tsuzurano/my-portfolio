/**
 * 日付ユーティリティ（数値計算のみ）
 */

export type YearMonth = `${number}-${number}`;

export function parseYM(ym: YearMonth): { year: number; month: number } {
  const [y, m] = ym.split("-").map((v) => Number(v));
  if (!y || !m || m < 1 || m > 12) throw new Error(`Invalid YearMonth: ${ym}`);
  return { year: y, month: m };
}

export function nowYM(): { year: number; month: number } {
  const d = new Date();
  return { year: d.getFullYear(), month: d.getMonth() + 1 };
}

export function ymToIndex(ym: YearMonth): number {
  const { year, month } = parseYM(ym);
  return year * 12 + (month - 1);
}

/**
 * 月差（半開区間）。
 * - end 未指定（present）は「今月を含めない」= endIndex は今月の月インデックス
 * - end 指定時はその月を含める（+1）
 */
export function monthsDiff(start: YearMonth, end?: YearMonth): number {
  const s = ymToIndex(start);
  let e: number;
  if (end) {
    e = ymToIndex(end) + 1; // end を含める
  } else {
    const n = nowYM();
    e = n.year * 12 + (n.month - 1); // 今月を含めない
  }
  return Math.max(0, e - s);
}

export function toYearsMonths(totalMonths: number): {
  years: number;
  months: number;
  monthsTotal: number;
} {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return { years, months, monthsTotal: totalMonths };
}

export function formatYMJP(ym: YearMonth): string {
  const { year, month } = parseYM(ym);
  return `${year}年${month}月`;
}

export function diffYearsMonths(start: YearMonth, end?: YearMonth) {
  return toYearsMonths(monthsDiff(start, end));
}

export interface RangeYM {
  startYM: YearMonth;
  endYM: YearMonth | "present";
}

/**
 * 重複をマージして総月数を返す（present は今月を含めない）
 */
export function sumExperienceDuration(ranges: RangeYM[]): {
  years: number;
  months: number;
  monthsTotal: number;
} {
  if (!ranges.length) return { years: 0, months: 0, monthsTotal: 0 };

  // 半開区間 [s, e) へ正規化
  const norm = ranges
    .map((r) => {
      const s = ymToIndex(r.startYM);
      const e =
        r.endYM === "present"
          ? (() => {
              const n = nowYM();
              return n.year * 12 + (n.month - 1); // 今月を含めない
            })()
          : ymToIndex(r.endYM as YearMonth) + 1; // end を含める
      return { s, e };
    })
    .filter(({ s, e }) => e > s)
    .sort((a, b) => a.s - b.s);

  if (!norm.length) return { years: 0, months: 0, monthsTotal: 0 };

  const merged: Array<{ s: number; e: number }> = [];
  for (const cur of norm) {
    const last = merged[merged.length - 1];
    if (!last || cur.s > last.e) {
      merged.push({ ...cur });
    } else {
      last.e = Math.max(last.e, cur.e);
    }
  }

  const total = merged.reduce((acc, r) => acc + (r.e - r.s), 0);
  return toYearsMonths(total);
}
