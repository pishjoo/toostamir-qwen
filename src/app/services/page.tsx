import Link from "next/link";
import { buildMeta, webpageLd, breadcrumbLd } from "@/lib/seo";
import { categories, publishedServices } from "@/lib/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { CallCta } from "@/components/CallCta";
import { JsonLd } from "@/components/JsonLd";
import { IconWrench, IconCpu, IconGamepad } from "@/components/icons";
import { siteConfig } from "@/lib/config";

export const metadata = buildMeta({
  title: "لیست خدمات تعمیر در مشهد",
  description:
    "همه‌ی خدمات توس تعمیر در یک نگاه: تعمیر لوازم خانگی (لباسشویی، ظرفشویی، یخچال، ماکروویو، هواپز، پکیج، اتو، سشوار)، تعمیر برد الکترونیکی و تعمیر تجهیزات صوتی و گیمینگ در مشهد.",
  path: "/services/",
});

const crumbs = [
  { name: "خانه", path: "/" },
  { name: "خدمات", path: "/services/" },
];

export default function ServicesIndexPage() {
  const cats = [
    { key: "home-appliance" as const, icon: <IconWrench /> },
    { key: "board" as const, icon: <IconCpu /> },
    { key: "electronics" as const, icon: <IconGamepad /> },
  ];

  return (
    <>
      <JsonLd data={[webpageLd({ name: "خدمات توس تعمیر", path: "/services/", description: metadata.description! }), breadcrumbLd(crumbs)]} />
      <div className="container">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="section--tight" aria-labelledby="h1">
        <div className="container">
          <h1 id="h1">خدمات تعمیر توس تعمیر در مشهد</h1>
          <p className="muted" style={{ marginTop: ".6rem", maxWidth: "52ch" }}>
            سه دسته‌ی اصلی خدمات و {publishedServices().length} خدمت اختصاصی؛ برای هر خدمت، صفحه‌ای
            مستقل با علائم رایج، علل احتمالی و فرآیند عیب‌یابی وجود دارد.
          </p>
        </div>
      </section>

      {cats.map(({ key, icon }) => {
        const cat = categories[key];
        const list = publishedServices().filter((s) => s.category === key);
        return (
          <section key={key} className="section--tight" aria-labelledby={`cat-${key}`} style={{ paddingTop: "1rem" }}>
            <div className="container">
              <div className="section-head" style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                <span className="card__icon">{icon}</span>
                <div style={{ flexGrow: 1 }}>
                  <h2 id={`cat-${key}`}>
                    <Link href={`/services/category/${cat.slug}/`}>{cat.title}</Link>
                  </h2>
                  <p className="muted" style={{ fontSize: ".93rem" }}>{cat.description}</p>
                </div>
                <Link className="btn btn--ghost btn--sm" href={`/services/category/${cat.slug}/`}>صفحه‌ی اصلی دسته</Link>
              </div>
              <div className="grid-cards grid-cards--4">
                {list.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <div className="container" style={{ paddingBottom: "var(--space-fluid)" }}>
        <CallCta
          heading="خدمت خود را پیدا نکردید؟"
          text={`اگر دستگاه شما در فهرست نیست، با ${siteConfig.phoneDisplay} تماس بگیرید؛ بسیاری از تجهیزات الکترونیکی پس از بررسی امکان‌سنجی پذیرفته می‌شوند.`}
        />
      </div>
    </>
  );
}
