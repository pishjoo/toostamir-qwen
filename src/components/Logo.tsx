import Link from "next/link";
import { siteConfig } from "@/lib/config";

/** لوگوی برند — تا جای‌گذاری /images/logo.svg از نشان SVG برند استفاده می‌کند */
export function Logo({ size = 38 }: { size?: number }) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="2" y="2" width="44" height="44" rx="12" fill="#101C2C" />
        <path
          d="M14 17h20M24 17v14"
          stroke="#36B8C9"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <circle cx="24" cy="33.5" r="2.6" fill="#7BE0E8" />
        <path
          d="M33.5 13.5l3-3M36.5 20h4M33.5 26.5l3 3"
          stroke="#7BE0E8"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".8"
        />
      </svg>
      <span className="sr-name">{siteConfig.name}</span>
    </>
  );
}

export function BrandLink({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="brand" onClick={onClick} aria-label={`صفحه‌ی اصلی ${siteConfig.name}`}>
      <Logo />
    </Link>
  );
}
