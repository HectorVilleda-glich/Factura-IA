export function formatCurrencyHNL(value: number) {
  return new Intl.NumberFormat("es-HN", {
    style: "currency",
    currency: "HNL",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatDateES(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("es-HN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}
