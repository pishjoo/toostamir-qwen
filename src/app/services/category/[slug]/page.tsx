import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, getService, servicesByCategory } from "@/lib/services";
import type { ServiceCategory } from "@/lib/services";
import { buildMeta, webpageLd, breadcrumbLd, localBusinessLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SlotImage } from "@/components/SlotImage";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CallCta } from "@/components/CallCta";
import { JsonLd } from "@/components/JsonLd";
import { IconCheck } from "@/components/icons";
import { siteConfig } from "@/lib/config";


export function generateMetadata({ params }: { params: { slug: string } }): Metadata | undefined {
  const catKey = (Object.keys(categories) as ServiceCategory[]).find(
    (k) => categories[k].slug === params.slug
  );
  if (!catKey) return undefined;
  const cat = categories[catKey];
  return buildMeta({
    title: `${cat.title} در مشهد`,
    description: cat.description,
    path: `/services/category/${cat.slug}/`,
    image: cat.image,
  });
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const catKey = (Object.keys(categories) as ServiceCategory[]).find(
    (k) => categories[k].slug === params.slug
  );
  if (!catKey) notFound();
  const cat = categories[catKey];
  const list = servicesByCategory(catKey);
  const crumbs = [
    { name: "خانه", path: "/" },
    { name: "خدمات", path: "/services/" },
    { name: cat.title, path: `/services/category/${cat.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={[
          localBusinessLd(),
          webpageLd({ name: cat.title, path: `/services/category/${cat.slug}/`, description: cat.description }),
          breadcrumbLd(crumbs),
        ]}
      />
      <div className="container">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="section--tight" aria-labelledby="cat-h1">
        <div className="container split split--image">
          <div>
            <span className="eyebrow">دسته‌ی خدمات</span>
            <h1 id="cat-h1">{cat.title} در مشهد</h1>
            <p className="muted" style={{ marginTop: ".8rem" }}>{cat.description}</p>
            <p style={{ marginTop: "1rem" }}>
              در توس تعمیر، هر دستگاه ابتدا عیب‌یابی می‌شود؛ علت و برآورد هزینه پیش از شروع تعمیر به
              شما اعلام می‌گردد و فقط با تأیید شما کار آغاز می‌شود. برای هماهنگی با{" "}
              <a href={siteConfig.phoneHref} className="ltr-num">{siteConfig.phoneDisplay}</a> تماس بگیرید.
            </p>
            <div style={{ display: "flex", gap: ".7rem", flexWrap: "wrap", marginTop: "1.4rem" }}>
              <CallCtaMini />
            </div>
          </div>
          <SlotImage
            src={cat.image}
            alt={`${cat.title} — ${cat.description.slice(0, 60)}…`}
            width={800}
            height={600}
            label={cat.title}
            sizes="(max-width: 960px) 92vw, 520px"
          />
        </div>
      </section>

      <section className="section--tight" aria-labelledby="cat-list-h" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <h2 id="cat-list-h" style={{ marginBottom: "1.4rem" }}>خدمات این دسته</h2>
          <div className="grid-cards grid-cards--3">
            {list.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight" aria-labelledby="cat-when-h">
        <div className="container two-col">
          <div className="feature-box">
            <h2 id="cat-when-h" style={{ fontSize: "1.3rem", marginBottom: ".8rem" }}>چه زمانی تعمیر تخصصی لازم است؟</h2>
            <ul className="checklist">
              <li><IconCheck size={18} /> دستگاه بوی سوختگی، دود یا جرقه دارد؛ فوراً از برق بکشید.</li>
              <li><IconCheck size={18} /> بررسی‌های ساده (برق، شیر آب، فیلتر) انجام شده و عیب باقی است.</li>
              <li><IconCheck size={18} /> خطای نمایشگر تکرار می‌شود یا دستگاه وسط برنامه می‌خوابد.</li>
              <li><IconCheck size={18} /> صدای غیرعادی مکانیکی هنگام کارکرد شنیده می‌شود.</li>
              <li><IconCheck size={18} /> بدنه‌ی فلزی دستگاه برق‌گیر است؛ استفاده را متوقف کنید.</li>
            </ul>
          </div>
          <div className="feature-box feature-box--tint">
            <h2 style={{ fontSize: "1.3rem", marginBottom: ".8rem" }}>رویه‌ی کار ما</h2>
            <p style={{ fontSize: ".95rem" }}>
              تحویل دستگاه بدون فاکتور یا ثبت انجام نمی‌شود؛ هنگام مراجعه، مدل دستگاه و کد خطا را
              یادداشت کنید تا عیب‌یابی سریع‌تر شود. اگر دستگاه قبلاً توسط فرد دیگری باز شده باشد،
              حتماً بگویید — این اطلاعات در تشخیص اثر زیادی دارد.
            </p>
            <p style={{ fontSize: ".95rem", marginTop: ".8rem" }}>
              برای دریافت راهنمایی اولیه یا هماهنگی عیب‌یابی، همین حالا تماس بگیرید:{" "}
              <a href={siteConfig.phoneHref} className="ltr-num">{siteConfig.phone}</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section--tight" aria-labelledby="cat-proc-h" style={{ paddingBottom: "var(--space-fluid)" }}>
        <div className="container">
          <h2 id="cat-proc-h" style={{ marginBottom: "1.4rem" }}>مراحل تعمیر در توس تعمیر</h2>
          <ProcessSteps />
          <div style={{ marginTop: "var(--space-fluid)" }}>
            <CallCta />
          </div>
        </div>
      </section>
    </>
  );
}

function CallCtaMini() {
  return (
    <>
      <a className="btn btn--primary" href={siteConfig.phoneHref}>تماس برای عیب‌یابی</a>
      <Link className="btn btn--ghost" href="/portfolio/">نمونه‌کارها را ببینید</Link>
    </>
  );
}
