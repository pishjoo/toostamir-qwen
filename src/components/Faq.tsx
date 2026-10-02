import { IconChevronDown } from "./icons";
import type { FaqItem } from "@/lib/services";

/** آکاردئون FAQ بر پایه‌ی details/summary — بدون JS، قابل دسترس با کیبورد */
export function Faq({ items, title = "پرسش‌های پرتکرار" }: { items: FaqItem[]; title?: string }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="faq-h" className="section--tight">
      <div className="section-head">
        <h2 id="faq-h">{title}</h2>
        <p className="muted">
          پاسخ این پرسش‌ها راهنمای عمومی است؛ برای اطمینان از سیاست‌های دقیق هزینه و گارانتی، هنگام
          تماس سؤال بپرسید.
        </p>
      </div>
      <div className="faq-list">
        {items.map((f, i) => (
          <details className="faq-item" key={i}>
            <summary>
              <span>{f.q}</span>
              <IconChevronDown className="chev" />
            </summary>
            <div className="faq-item__body">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
