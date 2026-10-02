import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "./config";

/** ساخت متادیتای یکتا برای هر صفحه */
export function buildMeta(opts: {
  title: string; // عنوان فارسی صفحه (بدون نام برند؛ اضافه می‌شود)
  description: string;
  path: string; // مسیر نسبی مثل /services/...
  image?: string;
}): Metadata {
  const full = `${opts.title} | ${siteConfig.name}`;
  const url = absoluteUrl(opts.path);
  return {
    title: full,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: full,
      description: opts.description,
      url,
      type: "website",
      locale: siteConfig.ogLocale,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl(opts.image ?? "/images/og-cover.webp"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${opts.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description: opts.description,
      images: [absoluteUrl(opts.image ?? "/images/og-cover.webp")],
    },
  };
}

/** LocalBusiness (HomeAndConstructionBusiness نزدیک‌ترین نوع دقیق به تعمیرگاه لوازم خانگی نیست؛
 * از HomeAndConstructionBusiness استفاده نمی‌کنیم؛ نوع LocalBusiness با additionalType مناسب.) */
export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#business"),
    name: siteConfig.name,
    alternateName: siteConfig.nameLatin,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    telephone: "+989213624847",
    image: absoluteUrl("/images/logo.svg"),
    logo: absoluteUrl("/images/logo.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.short,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: "مشهد",
    },
    sameAs: [siteConfig.instagram],
    priceRange: undefined as undefined, // بدون ادعای قیمت — عمداً حذف شده
    knowsAbout: [
      "تعمیر لوازم خانگی",
      "تعمیر برد الکترونیکی",
      "تعمیر لباسشویی",
      "تعمیر یخچال و فریزر",
      "تعمیر پکیج دیواری",
      "تعمیر دسته بازی و تجهیزات صوتی",
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: absoluteUrl("/"),
    name: siteConfig.name,
    inLanguage: "fa-IR",
    publisher: { "@id": absoluteUrl("/#business") },
  };
}

export function webpageLd(opts: { name: string; path: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(opts.path),
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: "fa-IR",
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#business") },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function serviceLd(opts: {
  name: string;
  description: string;
  path: string;
  areaPath?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": absoluteUrl("/#business") },
    serviceType: opts.name,
    areaServed: { "@type": "City", name: "مشهد" },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleLd(opts: {
  title: string;
  description: string;
  path: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.path),
    datePublished: opts.date,
    dateModified: opts.date,
    inLanguage: "fa-IR",
    author: { "@id": absoluteUrl("/#business") },
    publisher: { "@id": absoluteUrl("/#business") },
  };
}
