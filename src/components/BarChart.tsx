import { formatBRL } from "@/lib/money";

export type BarChartItem = {
  label: string;
  totalCents: number;
};

export function BarChart({ items }: { items: BarChartItem[] }) {
  const max = Math.max(...items.map((i) => i.totalCents), 1);

  return (
    <div className="flex items-end justify-between gap-2 sm:gap-4 h-56 pt-4">
      {items.map((item) => {
        const heightPct = Math.max((item.totalCents / max) * 100, 4);
        return (
          <div
            key={item.label}
            className="flex-1 flex flex-col items-center justify-end h-full gap-2"
          >
            <span className="text-xs sm:text-sm font-bold text-verde-escuro whitespace-nowrap">
              {formatBRL(item.totalCents)}
            </span>
            <div className="w-full flex items-end h-full">
              <div
                className="w-full bg-azul rounded-t-lg transition-all"
                style={{ height: `${heightPct}%` }}
                role="img"
                aria-label={`${item.label}: ${formatBRL(item.totalCents)}`}
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-cinza-escuro/70 text-center">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
