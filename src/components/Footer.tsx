import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { publishedServices, categories } from "@/lib/services";
import { IconPhone, IconMapPin, IconInstagram } from "./icons";

export function Footer() {
  const appliance = publishedServices().filter((s) => s.category === "home-appliance");
  const electronics = publishedServices().filter(
    (s) => s.category === "electronics" || s.category === "board"
  );

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <span className="footer-brand">{siteConfig.name}</span>
            <p style={{ fontSize: "0.9rem", maxWidth: "30ch" }}>{siteConfig.tagline}</p>
            <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
              این وب‌سایت صرفاً جهت معرفی خدمات و هماهنگی تعمیر است؛ ما نمایندگی رسمی هیچ برندی
              نیستیم.
            </p>
          </div>

          <nav aria-label="ناوبری فوتر — صفحه‌ها">
            <h3>صفحه‌ها</h3>
            <ul>
              <li><Link href="/">خانه</Link></li>
              <li><Link href="/services/">همه‌ی خدمات</Link></li>
              <li><Link href={`/services/category/${categories["home-appliance"].slug}/`}>{categories["home-appliance"].title}</Link></li>
              <li><Link href={`/services/category/${categories.board.slug}/`}>{categories.board.title}</Link></li>
              <li><Link href={`/services/category/${categories.electronics.slug}/`}>{categories.electronics.title}</Link></li>
              <li><Link href="/portfolio/">نمونه‌کارها</Link></li>
              <li><Link href="/blog/">راهنمای تعمیرات</Link></li>
              <li><Link href="/about/">درباره توس تعمیر</Link></li>
              <li><Link href="/contact/">تماس و آدرس</Link></li>
            </ul>
          </nav>

          <nav aria-label="ناوبری فوتر — خدمات پرطرفدار">
            <h3>خدمات پرتکرار</h3>
            <ul>
              {appliance.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`}>{s.name}</Link>
                </li>
              ))}
              {electronics.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3>اطلاعات تماس</h3>
            <ul style={{ gap: "0.9rem" }}>
              <li style={{ display: "flex", gap: "0.6rem" }}>
                <IconPhone size={18} />
                <a className="ltr-num" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              </li>
              <li style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <IconMapPin size={18} />
                <span>{siteConfig.address.short}</span>
              </li>
              <li style={{ display: "flex", gap: "0.6rem" }}>
                <IconInstagram size={18} />
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer nofollow">
                  اینستاگرام توس تعمیر
                </a>
              </li>
              <li style={{ display: "flex", gap: "0.6rem" }}>
                <IconMapPin size={18} />
                <a href={siteConfig.mapsDirections} target="_blank" rel="noopener noreferrer">
                  مسیریابی به کارگاه
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} توس تعمیر — تمام حقوق محفوظ است.</span>
          <span>مشهد، محمدیه ۱۰، مجتمع تجاری بلور، واحد ۲</span>
        </div>
      </div>
    </footer>
  );
}
