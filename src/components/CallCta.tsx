import { siteConfig } from "@/lib/config";
import { IconPhone, IconInstagram } from "./icons";

/** بنر تماس — در پایین صفحه‌های خدمات و دسته‌ها */
export function CallCta({
  heading = "برای شروع تعمیر، همین حالا تماس بگیرید",
  text = "دستگاه، مدل و علائم خرابی را پشت تلفن بگویید تا درباره‌ی احتمال علت، نحوه‌ی ارسال یا مراجعه به کارگاه راهنمایی شوید.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <aside className="cta-band" aria-label="تماس با توس تعمیر">
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-band__actions">
        <a className="btn btn--primary" href={siteConfig.phoneHref}>
          <IconPhone size={18} />
          تماس: <span className="ltr-num">{siteConfig.phone}</span>
        </a>
        <a
          className="btn btn--light"
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <IconInstagram size={18} />
          اینستاگرام
        </a>
      </div>
    </aside>
  );
}

/** دکمه‌ی تماس چسبان موبایل */
export function MobileCallBar() {
  return (
    <div className="mobile-callbar" role="region" aria-label="دکمه‌ی تماس سریع">
      <a className="btn btn--primary" href={siteConfig.phoneHref}>
        <IconPhone size={18} />
        تماس فوری
      </a>
      <a
        className="btn btn--ghost"
        href={siteConfig.mapsDirections}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="مسیریابی گوگل مپ به کارگاه توس تعمیر"
      >
        مسیریابی
      </a>
    </div>
  );
}
