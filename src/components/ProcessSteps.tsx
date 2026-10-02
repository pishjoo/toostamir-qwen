import { IconPhone, IconSearch, IconFlask, IconClipboard, IconWrench, IconCheck } from "./icons";

/** فرآیند شش‌مرحله‌ای تعمیر در توس تعمیر */
const steps = [
  { t: "تماس", d: "با تلفن یا پیام، دستگاه و علائم خرابی را برای ما بگویید.", i: <IconPhone size={20} /> },
  { t: "بررسی اولیه", d: "در تماس اول راهنمایی می‌شوید که مشکل احتمالاً سخت‌افزاری است یا با تنظیم ساده حل می‌شود.", i: <IconSearch size={20} /> },
  { t: "عیب‌یابی تخصصی", d: "دستگاه در کارگاه با ابزار استاندارد تست و عیب‌یابی دقیق می‌شود.", i: <IconFlask size={20} /> },
  { t: "اعلام برآورد و تأیید شما", d: "پیش از شروع تعمیر، علت و برآورد هزینه اعلام می‌شود؛ کار فقط با تأیید شما آغاز می‌شود.", i: <IconClipboard size={20} /> },
  { t: "تعمیر", d: "تعمیر با قطعات مناسب و در حد امکان با حفظ قطعات اصلی سالم انجام می‌شود.", i: <IconWrench size={20} /> },
  { t: "تست نهایی و تحویل", d: "دستگاه در شرایط واقعی کارکرد تست و پس از اطمینان از رفع عیب تحویل داده می‌شود.", i: <IconCheck size={20} /> },
];

export function ProcessSteps() {
  return (
    <div className="steps">
      {steps.map((s) => (
        <article className="step" key={s.t}>
          <span className="step__num" aria-hidden="true" />
          <h3>
            {s.i} {s.t}
          </h3>
          <p>{s.d}</p>
        </article>
      ))}
    </div>
  );
}
