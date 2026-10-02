export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** تبدیل عدد به فارسی */
export function fa(n: number | string): string {
  const map = "۰۱۲۳۴۵۶۷۸۹";
  return String(n).replace(/\d/g, (d) => map[+d]);
}
