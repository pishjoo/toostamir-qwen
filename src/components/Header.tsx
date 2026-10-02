import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { BrandLink } from "./Logo";
import { IconPhone, IconMenu, IconX } from "./icons";

const nav = [
  { href: "/", label: "خانه" },
  { href: "/services/", label: "خدمات" },
  { href: "/portfolio/", label: "نمونه‌کارها" },
  { href: "/blog/", label: "راهنمای تعمیرات" },
  { href: "/about/", label: "درباره ما" },
  { href: "/contact/", label: "تماس و آدرس" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandLink />
        <nav aria-label="ناوبری اصلی" className="nav-desktop">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="btn btn--primary btn--sm header-call"
            href={siteConfig.phoneHref}
            aria-label={`تماس تلفنی با ${siteConfig.name}: ${siteConfig.phoneDisplay}`}
          >
            <IconPhone size={17} />
            تماس: <span className="ltr-num">{siteConfig.phone}</span>
          </a>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}

/** منوی موبایل با <details> — کاملاً کاربردی بدون JavaScript */
function MobileNav({ items }: { items: { href: string; label: string }[] }) {
  return (
    <details className="mobile-nav">
      <summary className="nav-toggle" aria-label="باز کردن منو">
        <span className="ico-open">
          <IconMenu />
        </span>
        <span className="ico-close">
          <IconX />
        </span>
      </summary>
      <div className="nav-panel container">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <a className="btn btn--primary" href={siteConfig.phoneHref}>
          <IconPhone size={18} />
          تماس تلفنی — <span className="ltr-num">{siteConfig.phone}</span>
        </a>
      </div>
    </details>
  );
}
