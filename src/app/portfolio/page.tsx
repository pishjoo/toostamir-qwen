import { buildMeta, webpageLd, breadcrumbLd } from "@/lib/seo";
import { portfolioItems } from "@/lib/portfolio";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SlotImage } from "@/components/SlotImage";
import { CallCta } from "@/components/CallCta";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/config";

export const metadata = buildMeta({
  title: "نمونه‌کارهای تعمیر — قبل و بعد",
  description:
    "پرونده‌های نمونه‌ی تعمیر در توس تعمیر مشهد: برد لباسشویی، نوفراست یخچال، دریفت دسته بازی، ری‌کوئیش بانکن، احیای پاوربانک و نشتی پکیج؛ با توضیح مشکل و کار انجام‌شده.",
  path: "/portfolio/",
});

const crumbs = [
  { name: "خانه", path: "/" },
  { name: "نمونه‌کارها", path: "/portfolio/" },
];

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageLd({ name: "نمونه‌کارها", path: "/portfolio/", description: metadata.description! }),
          breadcrumbLd(crumbs),
        ]}
      />
      <div className="container">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="section--tight" aria-labelledby="p-h1">
        <div className="container">
          <span className="eyebrow">نمونه‌کارها</span>
          <h1 id="p-h1">پرونده‌های تعمیر در توس تعمیر</h1>
          <p className="muted" style={{ marginTop: ".7rem", maxWidth: "60ch" }}>
            هر پرونده شامل شرح مشکل و کاری است که انجام شده. تصاویر «قبل و بعد» اسلات آماده دارند و
            با گذاشتن عکس‌های واقعی کارگاه در پوشه‌ی <code dir="ltr">/public/images/portfolio/</code>{" "}
            به‌صورت خودکار جایگزین می‌شوند.
          </p>
        </div>
      </section>

      <section className="section--tight" style={{ paddingTop: "1rem" }} aria-label="فهرست پروژه‌ها">
        <div className="container">
          <div className="grid-cards grid-cards--3">
            {portfolioItems.map((it) => (
              <article className="case-card" key={it.slug}>
                <div className="case-card__media">
                  <div style={{ position: "relative" }}>
                    <span className="ba-label">قبل</span>
                    <SlotImage src={it.imageBefore} alt={it.altBefore} width={800} height={600} />
                  </div>
                  <div style={{ position: "relative" }}>
                    <span className="ba-label">بعد</span>
                    <SlotImage src={it.imageAfter} alt={it.altAfter} width={800} height={600} />
                  </div>
                </div>
                <div className="case-card__body">
                  <span className="tag">{it.category}</span>
                  <h2 style={{ fontSize: "1.08rem" }}>{it.title}</h2>
                  <p className="muted" style={{ fontSize: ".9rem" }}>
                    <strong style={{ color: "var(--navy-900)" }}>مشکل: </strong>
                    {it.problem}
                  </p>
                  <p className="muted" style={{ fontSize: ".9rem" }}>
                    <strong style={{ color: "var(--navy-900)" }}>کار انجام‌شده: </strong>
                    {it.work}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div
        className="container"
        style={{ paddingBottom: "var(--space-fluid)", paddingTop: "2rem" }}
      >
        <CallCta
          heading="دستگاه شما هم چنین مشکلی دارد؟"
          text={`شرح علائم را هنگام تماس بگویید (${siteConfig.phoneDisplay})؛ پس از عیب‌یابی، برآورد هزینه اعلام و فقط با تأیید شما تعمیر شروع می‌شود.`}
        />
      </div>
    </>
  );
}
