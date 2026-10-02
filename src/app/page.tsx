import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { publishedServices, categories, servicesByCategory } from "@/lib/services";
import { portfolioItems } from "@/lib/portfolio";
import { articles } from "@/lib/articles";
import { buildMeta, localBusinessLd, websiteLd, webpageLd, faqLd } from "@/lib/seo";
import { SlotImage } from "@/components/SlotImage";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Faq } from "@/components/Faq";
import { CallCta } from "@/components/CallCta";
import { JsonLd } from "@/components/JsonLd";
import {
  IconWrench,
  IconCpu,
  IconGamepad,
  IconSpeaker,
  IconShield,
  IconSearch,
  IconClock,
  IconPhone,
  IconMapPin,
  IconInstagram,
  IconCheck,
  IconExternal,
} from "@/components/icons";

export const metadata = buildMeta({
  title: "تعمیر لوازم خانگی و برد الکترونیکی در مشهد",
  description:
    "توس تعمیر در مشهد: تعمیر تخصصی لباسشویی، ظرفشویی، یخچال و فریزر، ماکروویو، پکیج دیواری، تعمیر برد الکترونیکی، هدفون، اسپیکر و دسته بازی. برای تشخیص و هماهنگی تماس بگیرید.",
  path: "/",
});

const homeFaqs = [
  {
    q: "چه دستگاه‌هایی در توس تعمیر پذیرفته می‌شوند؟",
    a: "لوازم خانگی مثل لباسشویی، ظرفشویی، یخچال و فریزر، ماکروویو، سرخ‌کن و هواپز، پکیج دیواری، اتو و سشوار؛ بردهای الکترونیکی این دستگاه‌ها؛ و تجهیزات الکترونیکی شامل پاوربانک، هدفون و هدست، اسپیکر و سیستم صوتی، پلی‌استیشن و دسته بازی. اگر دستگاه شما در این فهرست نیست، پیش از مراجعه تماس بگیرید تا امکان‌سنجی شود.",
  },
  {
    q: "تعمیر برد الکترونیکی شامل چه مواردی است؟",
    a: "عیب‌یابی مرحله‌ای برد شامل بازدید با ذره‌بین، تست مدار تغذیه، بررسی قطعات قدرت مثل رله و TRIAC، تعویض قطعات SMD معیوب و ترمیم مسیرهای چاپی آسیب‌دیده است. پس از تعمیر، برد روی دستگاه در شرایط واقعی تست می‌شود.",
  },
  {
    q: "برای هماهنگی تعمیر چگونه تماس بگیرم؟",
    a: `کافی است با شماره ${siteConfig.phoneDisplay} تماس بگیرید، نوع دستگاه و علائم خرابی را بگویید و درباره‌ی آوردن دستگاه به کارگاه یا عیب‌یابی اولیه راهنمایی شوید.`,
  },
  {
    q: "آدرس تعمیرگاه کجاست؟",
    a: `${siteConfig.address.short}. از صفحه‌ی «تماس و آدرس» می‌توانید لینک مسیریابی گوگل‌مپ را باز کنید.`,
  },
  {
    q: "آیا قبل از تعمیر هزینه اعلام می‌شود؟",
    a: "بله؛ رویه‌ی ما این است که ابتدا عیب‌یابی انجام و علت مشخص شود، سپس برآورد هزینه به شما اعلام گردد و تعمیر تنها پس از تأیید شما شروع شود. جزئیات دقیق سیاست هزینه‌ی عیب‌یابی و گارانتی قطعه‌ی تعمیرشده را هنگام تماس بپرسید و تأیید بگیرید.",
  },
];

export default function HomePage() {
  const featured = ["washing-machine-repair", "refrigerator-repair", "electronic-board-repair", "wall-boiler-repair", "game-controller-repair", "headphone-repair"]
    .map((slug) => publishedServices().find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          localBusinessLd(),
          websiteLd(),
          webpageLd({
            name: `${siteConfig.name} — ${siteConfig.tagline}`,
            path: "/",
            description: siteConfig.description,
          }),
          faqLd(homeFaqs),
        ]}
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">
              <IconWrench size={14} /> تعمیرگاه تخصصی در مشهد
            </span>
            <h1 id="hero-h">
              تعمیر لوازم خانگی و{" "}
              <span className="accent">برد الکترونیکی</span>، با تشخیص دقیق
            </h1>
            <p className="hero__lead">
              از لباسشویی و یخچال تا پکیج دیواری، هدفون، اسپیکر و دسته بازی؛ در توس تعمیر اول علت
              خرابی پیدا می‌شود، بعد هزینه اعلام می‌گردد و فقط با تأیید شما تعمیر آغاز می‌شود.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href={siteConfig.phoneHref}>
                <IconPhone size={18} />
                تماس برای شروع تعمیر
              </a>
              <Link className="btn btn--ghost" style={{ color: "#dbeaf3", borderColor: "#2c496b" }} href="/services/">
                مشاهده‌ی خدمات
              </Link>
            </div>
            <div className="hero__trust">
              <span><IconCheck size={16} /> عیب‌یابی مرحله‌ای با ابزار تخصصی</span>
              <span><IconCheck size={16} /> اعلام برآورد پیش از تعمیر</span>
              <span><IconCheck size={16} /> تمرکز روی تعمیر، نه تعویض بی‌دلیل</span>
            </div>
          </div>
          <SlotImage
            src="/images/hero.webp"
            alt="کارگاه تعمیر لوازم خانگی و برد الکترونیکی توس تعمیر در مشهد"
            width={1200}
            height={900}
            label="تصویر اصلی — نمای کارگاه یا میز تعمیر"
            priority
            sizes="(max-width: 900px) 92vw, 560px"
          />
        </div>
      </section>

      {/* دسته‌بندی خدمات */}
      <section className="section" aria-labelledby="cats-h">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">دسته‌بندی خدمات</span>
            <h2 id="cats-h">سه حوزه‌ی اصلی کاری توس تعمیر</h2>
            <p className="muted">
              هر دسته صفحه‌ی اختصاصی با توضیح علائم، علل احتمالی و فرآیند تعمیر دارد.
            </p>
          </div>
          <div className="grid-cards grid-cards--3">
            <Link href={`/services/category/${categories["home-appliance"].slug}/`} className="card">
              <span className="card__icon"><IconWrench /></span>
              <h3>{categories["home-appliance"].title}</h3>
              <p>{categories["home-appliance"].description}</p>
              <span className="card__more">خدمات این دسته</span>
            </Link>
            <Link href={`/services/category/${categories.board.slug}/`} className="card">
              <span className="card__icon"><IconCpu /></span>
              <h3>{categories.board.title}</h3>
              <p>{categories.board.description}</p>
              <span className="card__more">فرآیند عیب‌یابی برد</span>
            </Link>
            <Link href={`/services/category/${categories.electronics.slug}/`} className="card">
              <span className="card__icon"><IconGamepad /></span>
              <h3>{categories.electronics.title}</h3>
              <p>{categories.electronics.description}</p>
              <span className="card__more">لیست تجهیزات</span>
            </Link>
          </div>
        </div>
      </section>

      {/* خدمات منتخب */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} aria-labelledby="feat-h">
        <div className="container">
          <div className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "none", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow">خدمات پرتقاضا</span>
              <h2 id="feat-h">پرارجاع‌ترین تعمیراتی که انجام می‌دهیم</h2>
            </div>
            <Link className="btn btn--ghost btn--sm" href="/services/">همه‌ی ۱۶ خدمت</Link>
          </div>
          <div className="grid-cards grid-cards--3">
            {featured.map((s) => (
              <ServiceCard key={s!.slug} service={s!} icon={<IconWrench />} />
            ))}
          </div>
        </div>
      </section>

      {/* چرا توس تعمیر */}
      <section className="section" aria-labelledby="why-h">
        <div className="container">
          <div className="split split--image">
            <div>
              <span className="eyebrow">چرا توس تعمیر</span>
              <h2 id="why-h">تفاوت میان «قطعه عوض کردن» و «عیب را پیدا کردن»</h2>
              <div className="grid-cards" style={{ marginTop: "1.6rem", gridTemplateColumns: "1fr" }}>
                <div className="feature-box" style={{ display: "flex", gap: "1rem" }}>
                  <span className="card__icon"><IconSearch /></span>
                  <div>
                    <h3 style={{ fontSize: "1.05rem" }}>تشخیص، قبل از هزینه</h3>
                    <p className="muted" style={{ fontSize: ".93rem" }}>
                      با ابزار عیب‌یابی، علت اصلی پیدا می‌شود؛ چون تعویض کورِ قطعات سالم، هم وقت و هم بودجه‌ی شما را می‌سوزاند.
                    </p>
                  </div>
                </div>
                <div className="feature-box" style={{ display: "flex", gap: "1rem" }}>
                  <span className="card__icon"><IconClipboard /></span>
                  <div>
                    <h3 style={{ fontSize: "1.05rem" }}>برآورد شفاف پیش از شروع کار</h3>
                    <p className="muted" style={{ fontSize: ".93rem" }}>
                      پس از تشخیص، هزینه تقریبی اعلام می‌شود و تعمیر فقط با تأیید شما انجام می‌گیرد.
                    </p>
                  </div>
                </div>
                <div className="feature-box" style={{ display: "flex", gap: "1rem" }}>
                  <span className="card__icon"><IconCpu /></span>
                  <div>
                    <h3 style={{ fontSize: "1.05rem" }}>تعمیر برد در همان کارگاه</h3>
                    <p className="muted" style={{ fontSize: ".93rem" }}>
                      خیلی از تعمیرگاه‌ها برد را بیرون می‌فرستند؛ در توس تعمیر عیب‌یابی و تعمیر برد الکترونیکی بخشی از کار روزمره‌ی ماست.
                    </p>
                  </div>
                </div>
                <div className="feature-box" style={{ display: "flex", gap: "1rem" }}>
                  <span className="card__icon"><IconShield /></span>
                  <div>
                    <h3 style={{ fontSize: "1.05rem" }}>راهنمایی صادقانه: تعمیر یا نه</h3>
                    <p className="muted" style={{ fontSize: ".93rem" }}>
                      اگر هزینه‌ی تعمیر توجیه نداشته باشد، همان‌جا صادقانه گفته می‌شود تا تصمیم درست بگیرید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SlotImage
                src="/images/workshop.webp"
                alt="میز کار و ابزار عیب‌یابی در کارگاه توس تعمیر مشهد"
                width={1200}
                height={800}
                label="کارگاه، تکنسین و فرآیند تعمیر"
                sizes="(max-width: 960px) 92vw, 560px"
              />
              <div className="feature-box feature-box--tint" style={{ marginTop: "1rem" }}>
                <p style={{ margin: 0, fontSize: ".92rem" }}>
                  توجه: توس تعمیر یک کارگاه مستقل است و نمایندگی رسمی هیچ برند لوازم خانگی محسوب
                  نمی‌شود. ادعای گارانتی خاص یا زمان تحویل تضمینی نمی‌کنیم؛ جزئیات را هنگام
                  عیب‌یابی بپرسید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* فرآیند */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} aria-labelledby="proc-h">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">فرآیند تعمیر</span>
            <h2 id="proc-h">از تماس تا تحویل، شش مرحله‌ی روشن</h2>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* نمونه‌کارها */}
      <section className="section" aria-labelledby="port-h">
        <div className="container">
          <div className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "none", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow">نمونه‌کارها</span>
              <h2 id="port-h">چند پرونده‌ی تعمیر، با عکس قبل و بعد</h2>
              <p className="muted">
                تصاویر این بخش اسلات آماده دارند؛ با افزودن عکس‌های واقعی کارگاه در پوشه‌ی
                <code dir="ltr"> /public/images/portfolio/</code> جایگزین می‌شوند.
              </p>
            </div>
            <Link className="btn btn--ghost btn--sm" href="/portfolio/">همه‌ی نمونه‌کارها</Link>
          </div>
          <div className="grid-cards grid-cards--3">
            {portfolioItems.slice(0, 3).map((it) => (
              <article className="case-card" key={it.slug}>
                <div className="case-card__media">
                  <SlotImage src={it.imageBefore} alt={it.altBefore} width={800} height={600} label="قبل" />
                  <SlotImage src={it.imageAfter} alt={it.altAfter} width={800} height={600} label="بعد" />
                </div>
                <div className="case-card__body">
                  <span className="tag">{it.category}</span>
                  <h3 style={{ fontSize: "1.05rem" }}>{it.title}</h3>
                  <p className="muted" style={{ fontSize: ".9rem" }}>{it.problem}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* مقالات */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }} aria-labelledby="blog-h">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">راهنمای تعمیرات</span>
            <h2 id="blog-h">بخوانید، قبل از اینکه هزینه بدهید</h2>
          </div>
          <div className="grid-cards grid-cards--3">
            {articles.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}/`} className="card">
                <span className="card__icon"><IconClipboard /></span>
                <h3 style={{ fontSize: "1.05rem" }}>{a.title}</h3>
                <p>{a.description}</p>
                <span className="card__more">ادامه‌ی مطلب</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="container">
        <Faq items={homeFaqs} title="پرسش‌های پرتکرار مشتریان" />
      </div>

      {/* لوکیشن + اینستاگرام */}
      <section className="section--tight" aria-labelledby="loc-h" style={{ paddingBottom: "var(--space-fluid)" }}>
        <div className="container">
          <div className="split split--sidebar">
            <div>
              <span className="eyebrow"><IconMapPin size={14} /> مکان و تماس</span>
              <h2 id="loc-h">ما را در مشهد پیدا کنید</h2>
              <div className="grid-cards" style={{ marginTop: "1.4rem" }}>
                <div className="contact-tile">
                  <span className="contact-tile__icon"><IconPhone /></span>
                  <div>
                    <h3>تلفن هماهنگی تعمیر</h3>
                    <a className="ltr-num" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
                  </div>
                </div>
                <div className="contact-tile">
                  <span className="contact-tile__icon"><IconMapPin /></span>
                  <div>
                    <h3>آدرس کارگاه</h3>
                    <p>{siteConfig.address.short}</p>
                    <a href={siteConfig.mapsDirections} target="_blank" rel="noopener noreferrer">
                      باز کردن در گوگل‌مپ <IconExternal size={14} />
                    </a>
                  </div>
                </div>
                <div className="contact-tile">
                  <span className="contact-tile__icon"><IconInstagram /></span>
                  <div>
                    <h3>اینستاگرام</h3>
                    <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer nofollow">
                      {siteConfig.instagramHandle} — نمونه تعمیرها و پشت‌صحنه‌ی کارگاه
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <SlotImage
              src="/images/appliance-repair.webp"
              alt="نمای بیرونی مجتمع تجاری بلور محل کارگاه توس تعمیر در مشهد"
              width={800}
              height={600}
              label="اسلات تصویر محل کسب‌وکار"
              sizes="(max-width: 960px) 92vw, 380px"
            />
          </div>
          <div style={{ marginTop: "var(--space-fluid)" }}>
            <CallCta />
          </div>
        </div>
      </section>
    </>
  );
}
