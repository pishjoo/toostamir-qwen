import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getService, publishedServices, categories } from "@/lib/services";
import { buildMeta, webpageLd, breadcrumbLd, serviceLd, faqLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SlotImage } from "@/components/SlotImage";
import { Faq } from "@/components/Faq";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CallCta } from "@/components/CallCta";
import { JsonLd } from "@/components/JsonLd";
import { IconCheck, IconSearch, IconFlask, IconArrowLeft } from "@/components/icons";
import { siteConfig } from "@/lib/config";

export function generateStaticParams() {
  return publishedServices().map((s) => ({ service: s.slug }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata | undefined {
  const svc = getService(params.service);
  if (!svc) return undefined;
  return buildMeta({
    title: svc.name,
    description: `${svc.summary} عیب‌یابی تخصصی، اعلام برآورد پیش از تعمیر — توس تعمیر مشهد.`,
    path: `/services/${svc.slug}/`,
    image: svc.image,
  });
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const svc = getService(params.service);
  if (!svc) notFound();
  const cat = categories[svc.category];
  const related = svc.related.map(getService).filter(Boolean);
  const crumbs = [
    { name: "خانه", path: "/" },
    { name: "خدمات", path: "/services/" },
    { name: cat.title, path: `/services/category/${cat.slug}/` },
    { name: svc.shortName, path: `/services/${svc.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={[
          webpageLd({ name: svc.name, path: `/services/${svc.slug}/`, description: svc.summary }),
          serviceLd({ name: svc.name, description: svc.summary, path: `/services/${svc.slug}/` }),
          breadcrumbLd(crumbs),
          faqLd(svc.faqs),
        ]}
      />
      <div className="container">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* سرصفحه‌ی خدمت */}
      <section className="section--tight" aria-labelledby="svc-h1">
        <div className="container split split--image">
          <div>
            <span className="eyebrow">{cat.title}</span>
            <h1 id="svc-h1">{svc.name}</h1>
            {svc.intro.map((p, i) => (
              <p key={i} style={{ marginTop: ".9rem" }}>{p}</p>
            ))}
            <div style={{ display: "flex", gap: ".7rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <a className="btn btn--primary" href={siteConfig.phoneHref}>
                تماس برای عیب‌یابی — <span className="ltr-num">{siteConfig.phone}</span>
              </a>
              <Link className="btn btn--ghost" href={`/services/category/${cat.slug}/`}>
                همه‌ی {cat.title}
              </Link>
            </div>
          </div>
          <SlotImage
            src={svc.image}
            alt={svc.imageAlt}
            width={800}
            height={600}
            label={svc.shortName}
            sizes="(max-width: 960px) 92vw, 520px"
          />
        </div>
      </section>

      {/* پوشش خدمات + علائم */}
      <section className="section--tight" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} aria-labelledby="covers-h">
        <div className="container two-col">
          <div>
            <h2 id="covers-h">این خدمت چه مواردی را شامل می‌شود؟</h2>
            <ul className="checklist" style={{ marginTop: "1rem" }}>
              {svc.covers.map((c) => (
                <li key={c}><IconCheck size={18} /> {c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 id="sym-h" style={{ marginBottom: "1rem" }}>علائمی که مشتریان معمولاً گزارش می‌دهند</h2>
            <ul className="checklist">
              {svc.symptoms.map((c) => (
                <li key={c}><IconSearch size={18} /> {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* علل احتمالی + چه زمانی تخصصی */}
      <section className="section--tight" aria-labelledby="causes-h">
        <div className="container two-col">
          <div className="feature-box">
            <h2 id="causes-h">علل احتمالی خرابی</h2>
            <p className="muted" style={{ fontSize: ".88rem", margin: ".4rem 0 .9rem" }}>
              این موارد «احتمال» هستند؛ علت دقیق فقط با عیب‌یابی روی دستگاه مشخص می‌شود.
            </p>
            <ul className="checklist">
              {svc.causes.map((c) => (
                <li key={c}><IconFlask size={18} /> {c}</li>
              ))}
            </ul>
          </div>
          <div className="feature-box feature-box--tint">
            <h2>چه زمانی مراجعه به تعمیرگاه تخصصی لازم است؟</h2>
            <ul className="checklist" style={{ marginTop: ".9rem" }}>
              {svc.whenPro.map((c) => (
                <li key={c}><IconCheck size={18} /> {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* فرآیند */}
      <section className="section--tight" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} aria-labelledby="proc-h">
        <div className="container">
          <h2 id="proc-h" style={{ marginBottom: "1.4rem" }}>فرآیند تشخیص و تعمیر</h2>
          <ProcessSteps />
        </div>
      </section>

      {/* FAQ */}
      <div className="container">
        <Faq items={svc.faqs} title={`پرسش‌های پرتکرار — ${svc.shortName}`} />
      </div>

      {/* خدمات مرتبط */}
      <section className="section--tight" aria-labelledby="rel-h" style={{ paddingBottom: "var(--space-fluid)" }}>
        <div className="container">
          <h2 id="rel-h" style={{ marginBottom: "1.2rem" }}>خدمات مرتبط</h2>
          <div className="related-links" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))" }}>
            {related.map((r) => (
              <Link key={r!.slug} href={`/services/${r!.slug}/`}>
                <IconArrowLeft size={16} />
                {r!.name}
              </Link>
            ))}
            <Link href="/blog/">
              <IconArrowLeft size={16} />
              راهنمای تعمیرات (مقالات)
            </Link>
          </div>
          <div style={{ marginTop: "var(--space-fluid)" }}>
            <CallCta
              heading={`برای تعمیر ${svc.shortName} در مشهد تماس بگیرید`}
              text={`مدل دستگاه و علائم خرابی را هنگام تماس بگویید (${siteConfig.phoneDisplay}) تا درباره‌ی احتمال علت و نحوه‌ی عیب‌یابی راهنمایی شوید.`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
