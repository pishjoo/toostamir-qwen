/**
 * نمونه‌کارهای توس تعمیر
 * توجه: عنوان‌ها و توضیحات زیر «الگو» هستند. تصاویر و جزئیات واقعی هر پروژه
 * باید توسط خود کسب‌وکار وارد شود (عکس قبل/بعد از کارگاه). تا آن زمان،
 * این موارد به‌صورت اسلات تصویر با placeholder نمایش داده می‌شوند.
 */

export interface PortfolioItem {
  slug: string;
  title: string;
  device: string; // نوع دستگاه
  category: string; // برچسب دسته
  problem: string; // شرح مشکل (عمومی و بدون ادعای ساختگی)
  work: string; // کاری که انجام شده
  imageBefore: string;
  imageAfter: string;
  altBefore: string;
  altAfter: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "washing-machine-board",
    title: "تعمیر برد لباسشویی با سوختن رله",
    device: "ماشین لباسشویی",
    category: "تعمیر برد",
    problem:
      "دستگاه روشن می‌شد اما در مرحله‌ی شست‌وشو، المنت حرارتی وارد مدار نمی‌شد و برنامه روی خطا متوقف می‌شد.",
    work: "عیب‌یابی برد با لوپ و تستر، پیدا کردن رله‌ی معیوب و مسیر سوخته، تعویض قطعه و ترمیم ترک‌مسیر، تست کامل روی دستگاه.",
    imageBefore: "/images/portfolio/washing-board-before.webp",
    imageAfter: "/images/portfolio/washing-board-after.webp",
    altBefore: "برد آسیب‌دیده ماشین لباسشویی قبل از تعمیر در توس تعمیر",
    altAfter: "برد ماشین لباسشویی پس از تعمیر و بازسازی مسیر در توس تعمیر",
  },
  {
    slug: "refrigerator-defrost",
    title: "رفع یخ‌زدگی نوفراست یخچال ساید‌بای‌ساید",
    device: "یخچال فریزر",
    category: "لوازم خانگی",
    problem:
      "فریزر برفک زیاد داشت و سرما به یخچال پایین نمی‌رسید؛ فن اواپراتور پشت یخ گیر کرده بود.",
    work: "باز کردن پنل، رفع علت یخ‌زدگی با تست المنت defrost و bimetal، تمیزکاری مسیر هوا و تست دمای دو محفظه پس از تعمیر.",
    imageBefore: "/images/portfolio/fridge-defrost-before.webp",
    imageAfter: "/images/portfolio/fridge-defrost-after.webp",
    altBefore: "یخ‌زدگی پشت پنل فریزر قبل از تعمیر در توس تعمیر",
    altAfter: "مسیر هوای فریزر پس از رفع یخ‌زدگی و تعمیر در توس تعمیر",
  },
  {
    slug: "ps5-controller-drift",
    title: "رفع دریفت دسته DualSense",
    device: "دسته بازی پلی‌استیشن",
    category: "گیمینگ",
    problem:
      "در بازی، دوربین و کاراکتر بدون دست‌زدن به استیک حرکت می‌کردند و کالیبراسیون نرم‌افزاری جواب نداد.",
    work: "تعویض ماژول استیک آنالوگ با قطعه سالم، تمیزکاری داخلی و تست عملکرد استیک‌ها در بازی.",
    imageBefore: "/images/portfolio/controller-before.webp",
    imageAfter: "/images/portfolio/controller-after.webp",
    altBefore: "باز شدن دسته DualSense برای تعویض استیک در توس تعمیر",
    altAfter: "دسته DualSense پس از تعویض ماژول استیک و مونتاژ مجدد",
  },
  {
    slug: "speaker-woofer-recone",
    title: "ری‌کوئیش ووفر بانکن حرفه‌ای",
    device: "سیستم صوتی",
    category: "صوتی",
    problem:
      "صدای بلندگو در فرکانس‌های پایین خِرخِر داشت و لبه‌ی لاستیکی ووفر پارگی داشت.",
    work: "تعویض لبه (surround) با مواد هم‌مشخصات کارخانه، تست امپدانس و گوش‌دادن عملی با منبع صوتی استاندارد.",
    imageBefore: "/images/portfolio/woofer-before.webp",
    imageAfter: "/images/portfolio/woofer-after.webp",
    altBefore: "لبه پارگی‌شده ووفر بانکن قبل از ری‌کوئیش در توس تعمیر",
    altAfter: "ووفر بانکن پس از تعویض لبه و بازسازی در توس تعمیر",
  },
  {
    slug: "powerbank-cells",
    title: "احیای پاوربانک با افت ظرفیت",
    device: "پاوربانک",
    category: "الکترونیک",
    problem:
      "پاوربانک پس از چند سال، شارژ را خیلی زود از دست می‌داد و هنگام کار گرم می‌شد.",
    work: "تست ظرفیت و مقاومت داخلی سلول‌ها، تعویض سلول‌های فرسوده با سلول سالم هم‌مشخصات و بررسی مدار محافظ پیش از تحویل.",
    imageBefore: "/images/portfolio/powerbank-before.webp",
    imageAfter: "/images/portfolio/powerbank-after.webp",
    altBefore: "داخل پاوربانک و سلول‌های فرسوده قبل از تعویض در توس تعمیر",
    altAfter: "پاوربانک پس از تعویض سلول‌ها و بست‌شدن در توس تعمیر",
  },
  {
    slug: "wall-boiler-hydroblock",
    title: "رفع نشتی هیدرولیک پکیج دیواری",
    device: "پکیج دیواری",
    category: "لوازم خانگی",
    problem:
      "فشار آب مدار مرتباً افت می‌کرد و زیر پکیج لکه‌ی رطوبت دیده می‌شد.",
    work: "سر‌به‌سر بررسی مدار آب، پیدا کردن نقطه‌ی نشتی از اتصالات و واشرها، تعویض قطعه‌ی معیوب و تست فشار پس از تعمیر.",
    imageBefore: "/images/portfolio/boiler-before.webp",
    imageAfter: "/images/portfolio/boiler-after.webp",
    altBefore: "مدار هیدرولیک پکیج دیواری هنگام عیب‌یابی نشتی در توس تعمیر",
    altAfter: "پکیج دیواری پس از رفع نشتی و بست‌شدن در توس تعمیر",
  },
];
