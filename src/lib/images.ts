import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const PUBLIC = "public";

/** تبدیل مسیر اسلات به فایل واقعی موجود (اولویت: webp > avif > svg fallback) */
export function resolveSlot(srcPath: string): { src: string; type: "webp" | "avif" | "svg" } | null {
  const rel = srcPath.replace(/^\//, ""); // images/hero.webp
  const base = join(PUBLIC, rel).replace(/\.webp$/, "");
  if (existsSync(base + ".webp")) return { src: srcPath, type: "webp" };
  if (existsSync(base + ".avif")) return { src: "/" + base.slice(PUBLIC.length + 1) + ".avif", type: "avif" };
  if (existsSync(base + ".svg")) return { src: "/" + base.slice(PUBLIC.length + 1) + ".svg", type: "svg" };
  return null;
}

export function listImageSlots(dir = join(PUBLIC, "images")): string[] {
  const out: string[] = [];
  const walk = (d: string) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(webp|avif|svg)$/.test(e.name)) out.push("/" + p.slice(PUBLIC.length + 1));
    }
  };
  if (existsSync(dir)) walk(dir);
  return out.sort();
}
