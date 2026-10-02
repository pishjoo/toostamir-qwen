import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildMeta, webpageLd, breadcrumbLd, localBusinessLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SlotImage } from "@/components/SlotImage";
import { CallCta } from "@/components/CallCta";
import { JsonLd } from "@/components/JsonLd";
import { IconCheck, IconWrench, IconCpu, IconGamepad } from "@/components/icons";

export const metadata = buildMeta({
  title: "درباره توس تعمیر",
  description:
    "توس تعمیر یک کارگاه تخصصی تعمیر لوازم خانگی، الکترونیک و برد در مشهد است؛ رویه‌ی کار، اصول شفافیت و حوزه‌ی خدمات ما را بشناسید.",
  path: "/about/",
});

const crumbs = [
  { name: "خانه", path: "/" },
  { name: "درباره ما", path: "/about/" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessLd(),
          webpageLd({ name: "درباره توس تعمیر", path: "/about/", description: metadata.description! }),
          breadcrumbLd(crumbs),
        ]}
      />
      <div className="container">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="section--tight" aria-labelledby="a-h1">
        <div className="container split split--image">
          <div>
            <span className="eyebrow">درباره ما</span>
            <h1 id="a-h1">توس تعمیر؛ کارگاه تخصصی تعمیر در مشهد</h1>
            <p style={{ marginTop: "1rem" }}>
              توس تعمیر یک کارگاه مستقل تعمیرات در مشهد است که روی سه حوزه تمرکز کرده: لوازم خانگی،
              بردهای الکترونیکی و تجهیزات الکترونیکی صوتی و گیمینگ. فلسفه‌ی کار ما ساده است: اول علت
              را پیدا کن، بعد هزینه بده.
            </p>
            <p style={{ marginTop: ".9rem" }}>
              خیلی از دستگاه‌هایی که به‌عنوان «خراب و غیرقابل‌استفاده» کنار گذاشته می‌شوند، در واقع یک
              قطعه‌ی کوچک معیوب — اغلب روی برد کنترل — دارند. تعمیر همان قطعه هم ارزان‌تر است، هم
              محیط‌زیستی‌تر، هم دستگاه اصلی شما را حفظ می‌کند.
            </p>
            <p style={{ marginTop: ".9rem" }}>
              ما نمایندگی رسمی هیچ برندی نیستیم و چنین ادعایی نمی‌کنیم؛ کار ما تعمیر تخصصی با ابزار
              عیب‌یابی استاندارد است و صادقانه می‌گوییم چه چیزی ارزش تعمیر دارد و چه چیزی ندارد.
            </p>
          </div>
          <SlotImage
            src="/images/workshop.webp"
            alt="نمای داخلی کارگاه توس تعمیر مشهد با میز عیب‌یابی برد الکترونیکی"
            width={1200}
            height={800}
            label="کارگاه و فرآیند تعمیر"
            sizes="(max-width: 960px) 92vw, 540px"
          />
        </div>
      </section>

      <section
        className="section--tight"
        style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
        aria-labelledby="pr-h"
      >
        <div className="container">
          <h2 id="pr-h" style={{ marginBottom: "1.4rem" }}>اصولی که روشن کار می‌کنیم</h2>
          <div className="grid-cards grid-cards--3">
            <div className="card">
              <span className="card__icon"><IconCheck /></span>
              <h3>شفافیت پیش از شروع</h3>
              <p>علت خرابی و برآورد هزینه قبل از تعمیر اعلام می‌شود؛ کار بدون تأیید شما آغاز نمی‌گردد.</p>
            </div>
            <div className="card">
              <span className="card__icon"><IconCpu /></span>
              <h3>تشخیص به‌جای حدس</h3>
              <p>عیب‌یابی مرحله‌ای با لوپ، مولتی‌متر و تستر؛ هدف، پیدا کردن علت اصلی است نه تعویض قطعات سالم.</p>
            </div>
            <div className="card">
              <span className="card__icon"><IconWrench /></span>
              <h3>راهنمایی صادقانه</h3>
              <p>اگر تعمیر توجیه اقتصادی نداشته باشد، همان‌جا می‌گوییم تا تصمیم درست بگیرید.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight" aria-labelledby="scope-h">
        <div className="container two-col">
          <div>
            <h2 id="scope-h">حوزه‌ی فعالیت</h2>
            <ul className="checklist" style={{ marginTop: "1rem" }}>
              <li>
                <IconWrench size={18} />{" "}
                <Link href="/services/category/home-appliance-repair/">تعمیر لوازم خانگی</Link>:
                لباسشویی، ظرفشویی، یخچال و فریزر، ماکروویو، سرخ‌کن و هواپز، پکیج دیواری، اتو و سشوار.
              </li>
              <li>
                <IconCpu size={18} />{" "}
                <Link href="/services/category/electronic-board-repair/">تعمیر بردهای الکترونیکی</Link>{" "}
                لوازم خانگی و دستگاه‌های مختلف.
              </li>
              <li>
                <IconGamepad size={18} />{" "}
                <Link href="/services/category/electronics-repair/">تجهیزات الکترونیکی</Link>:
                پاوربانک، هدفون و هدست، اسپیکر و سیستم صوتی، پلی‌استیشن و دسته بازی.
              </li>
            </ul>
          </div>
          <div className="feature-box feature-box--tint">
            <h2 style={{ fontSize: "1.2rem" }}>نام، آدرس و تلفن (NAP)</h2>
            <p style={{ fontSize: ".95rem", marginTop: ".6rem" }}>
              برای اعتماد مشتریان و سازگاری با پروفایل گوگل، این اطلاعات در همه‌ی صفحه‌ها یکسان است:
            </p>
            <ul style={{ marginTop: ".7rem", fontSize: ".95rem" }}>
              <li><strong>{siteConfig.name}</strong></li>
              <li>{siteConfig.address.short}</li>
              <li>
                تلفن:{" "}
                <a className="ltr-num" href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </li>
              <li>
                اینستاگرام:{" "}
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer nofollow">
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: "var(--space-fluid)" }}>
        <CallCta />
      </div>
    </>
  );
}
