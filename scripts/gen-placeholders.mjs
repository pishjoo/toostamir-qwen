/**
 * تولید placeholder های SVG موقت برای همه‌ی اسلات‌های تصویری
 * این فایل‌ها با قرار دادن نسخه‌های واقعی (webp) در همان مسیرها، بی‌اثر می‌شوند
 * چون SlotImage از <img loading=lazy> استفاده می‌کند و فایل svg فقط fallback است.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const slots = [
  ["hero.webp", 1200, 900, "تصویر اصلی — کارگاه تعمیر"],
  ["appliance-repair.webp", 800, 600, "تعمیر لوازم خانگی"],
  ["pcb-repair.webp", 800, 600, "تعمیر برد الکترونیکی"],
  ["gaming-repair.webp", 800, 600, "تعمیر تجهیزات گیمینگ"],
  ["audio-repair.webp", 800, 600, "تعمیر سیستم صوتی"],
  ["workshop.webp", 1200, 800, "کارگاه و تکنسین"],
  ["washing-machine-repair.webp", 800, 600, "تعمیر لباسشویی"],
  ["dishwasher-repair.webp", 800, 600, "تعمیر ظرفشویی"],
  ["refrigerator-repair.webp", 800, 600, "تعمیر یخچال و فریزر"],
  ["microwave-repair.webp", 800, 600, "تعمیر مایکروویو"],
  ["air-fryer-repair.webp", 800, 600, "تعمیر هواپز"],
  ["wall-boiler-repair.webp", 800, 600, "تعمیر پکیج دیواری"],
  ["iron-repair.webp", 800, 600, "تعمیر اتو"],
  ["hair-dryer-repair.webp", 800, 600, "تعمیر سشوار"],
  ["power-bank-repair.webp", 800, 600, "تعمیر پاوربانک"],
  ["headphone-repair.webp", 800, 600, "تعمیر هدفون"],
  ["controller-repair.webp", 800, 600, "تعمیر دسته بازی"],
  ["og-cover.webp", 1200, 630, "کارت اشتراک شبکه‌های اجتماعی"],
  ["logo.svg", 48, 48, null],
];
const portfolio = [
  ["washing-board-before.webp",800,600],["washing-board-after.webp",800,600],
  ["fridge-defrost-before.webp",800,600],["fridge-defrost-after.webp",800,600],
  ["controller-before.webp",800,600],["controller-after.webp",800,600],
  ["woofer-before.webp",800,600],["woofer-after.webp",800,600],
  ["powerbank-before.webp",800,600],["powerbank-after.webp",800,600],
  ["boiler-before.webp",800,600],["boiler-after.webp",800,600],
];

function ph(w,h,label){
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<rect width="100%" height="100%" fill="#16283D"/>
<g stroke="#7BE0E8" stroke-opacity="0.12"><path d="M0 40H${w}" stroke-width="1"/>${Array.from({length:Math.floor(h/40)},(_,i)=>`<path d="M0 ${i*40}H${w}"/><path d="M${i*40} 0V${h}"/>`).join("")}</g>
<text x="50%" y="46%" text-anchor="middle" font-family="Tahoma,sans-serif" font-size="${Math.max(14,Math.round(w/34))}" fill="#7BE0E8">${label||"Toos Tamir"}</text>
<text x="50%" y="56%" text-anchor="middle" font-family="monospace" font-size="${Math.max(10,Math.round(w/60))}" fill="#5b7d95">image slot — ${w}x${h}</text>
</svg>`;
}

for(const [f,w,h,label] of slots){
  const p=join("public/images",f);
  mkdirSync(dirname(p),{recursive:true});
  if(f==="logo.svg"){
    writeFileSync(p,`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect x="2" y="2" width="44" height="44" rx="12" fill="#101C2C"/><path d="M14 17h20M24 17v14" stroke="#36B8C9" stroke-width="3.4" stroke-linecap="round"/><circle cx="24" cy="33.5" r="2.6" fill="#7BE0E8"/></svg>`);
  } else {
    writeFileSync(p.replace(/\.webp$/,".svg"), ph(w,h,label));
  }
}
for(const [f,w,h] of portfolio){
  const p=join("public/images/portfolio",f.replace(/\.webp$/,".svg"));
  mkdirSync(dirname(p),{recursive:true});
  writeFileSync(p, ph(w,h,"نمونه‌کار"));
}
console.log("placeholder svgs written");
