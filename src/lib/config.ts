/**
 * تنظیمات مرکزی سایت توس تعمیر
 * برای تغییر نام، تلفن، آدرس، دامنه و لینک‌ها فقط همین فایل را ویرایش کنید.
 */

export const siteConfig = {
  name: "توس تعمیر",
  // نام انگلیسی/ترکیبی برند (برای slug ها و متادیتا)
  nameLatin: "Toos Tamir",
  tagline: "تعمیر تخصصی لوازم خانگی، الکترونیک و بردهای الکترونیکی در مشهد",
  description:
    "توس تعمیر؛ مرکز تخصصی تعمیر لوازم خانگی، تعمیر برد الکترونیکی و تجهیزات صوتی و گیمینگ در مشهد. برای تشخیص و هماهنگی تعمیر تماس بگیرید.",

  /**
   * دامنه‌ی نهایی (پروداکشن). تا زمانی که دامنه‌ی واقعی مشخص نشده،
   * مقدار پیش‌فرض localhost استفاده می‌شود و در sitemap / canonical / robots
   * قابل تنظیم است. بعد از خرید دامنه، فقط این خط را تغییر دهید.
   * مثال: https://toostamir.ir
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  phone: "09213624847",
  phoneHref: "tel:+989213624847",
  phoneDisplay: "۰۹۲۱ ۳۶۲ ۴۸۴۷",

  address: {
    short: "مشهد، محمدیه ۱۰، مجتمع تجاری بلور، واحد ۲",
    full: "مشهد، خیابان محمدیه، بلوک ۱۰، مجتمع تجاری بلور، واحد ۲",
    addressLocality: "مشهد",
    addressRegion: "خراسان رضوی",
    addressCountry: "IR",
  },

  instagram: "https://www.instagram.com/toos.tamir/",
  instagramHandle: "@toos.tamir",

  // لینک جستجو/مسیریابی گوگل‌مپ بر اساس آدرس (بدون مختصات ساختگی)
  mapsSearch:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("توس تعمیر مشهد محمدیه ۱۰ مجتمع تجاری بلور"),
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("توس تعمیر مشهد محمدیه ۱۰ مجتمع تجاری بلور"),

  locale: "fa-IR",
  ogLocale: "fa_IR",
} as const;

export type SiteConfig = typeof siteConfig;

/** ساخت URL کاملِ absolute برای canonical، sitemap و متادیتا */
export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
