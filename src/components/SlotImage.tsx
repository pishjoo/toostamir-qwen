import { resolveSlot } from "@/lib/images";

/**
 * اسلات تصویری توس تعمیر — بدون JS سمت کلاینت.
 * - اگر فایل واقعی (webp/avif) در public/images باشد، با <picture>/<img> سمانتیک رندر می‌شود.
 * - اگر تصویر واقعی هنوز آماده نشده باشد، placeholder SVG برنددار همان اسلات نمایش داده می‌شود؛ هرگز «تصویر شکسته» نمی‌بینید.
 * - همه‌ی تصاویر width/height دارند تا CLS صفر بماند.
 * برای جایگزینی کافی است فایل را با همان نام در /public/images بگذارید.
 */

interface SlotImageProps {
  src: string; // مسیر اسلات مثل /images/hero.webp
  alt: string; // متن جایگزین فارسی توصیفی
  width: number;
  height: number;
  label?: string; // برچسب فارسی روی کادر تصویر
  priority?: boolean; // تصویر LCP بالای صفحه: eager + fetchpriority=high
  className?: string;
  sizes?: string;
}

export function SlotImage({
  src,
  alt,
  width,
  height,
  label,
  priority = false,
  className,
  sizes,
}: SlotImageProps) {
  const resolved = resolveSlot(src);
  const wrapper = `img-slot ${className ?? ""}`;
  const ratio = { aspectRatio: `${width} / ${height}` } as const;

  if (!resolved) {
    return (
      <div className={wrapper} style={ratio} role="img" aria-label={alt}>
        <div className="img-slot__ph">
          <IconImage />
          {label ? <strong>{label}</strong> : null}
          <small>{src}</small>
        </div>
      </div>
    );
  }

  if (resolved.type === "svg") {
    // placeholder موقت — هم‌نسبت و برنددار
    return (
      <div className={wrapper} style={ratio}>
        <img
          src={resolved.src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    );
  }

  // فایل واقعی موجود است: picture با AVIF/WebP و fallback
  const base = src.replace(/\.[a-z]+$/, "");
  const avif = resolveSlot(base + ".avif");
  const webp = resolveSlot(base + ".webp");
  const srcSetSizes = sizes ?? "(max-width: 960px) 100vw, 720px";
  const wHalf = Math.round(width / 2);

  return (
    <div className={wrapper} style={ratio}>
      <picture>
        {avif && (
          <source
            type="image/avif"
            srcSet={`${avif.src} ${wHalf}w, ${avif.src} ${width}w, ${avif.src} ${width * 2}w`}
            sizes={srcSetSizes}
          />
        )}
        {webp && (
          <source
            type="image/webp"
            srcSet={`${webp.src} ${wHalf}w, ${webp.src} ${width}w, ${webp.src} ${width * 2}w`}
            sizes={srcSetSizes}
          />
        )}
        <img
          src={resolved.src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
        />
      </picture>
    </div>
  );
}

function IconImage() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.5-3.5L9 20" />
    </svg>
  );
}
