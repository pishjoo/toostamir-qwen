import Link from "next/link";
import type { Service } from "@/lib/services";
import { IconArrowLeft } from "./icons";

const iconFor: Record<string, React.ReactNode> = {};

export function ServiceCard({ service, icon }: { service: Service; icon?: React.ReactNode }) {
  return (
    <Link href={`/services/${service.slug}/`} className="card">
      {icon ? <span className="card__icon">{icon}</span> : null}
      <h3>{service.shortName}</h3>
      <p>{service.summary}</p>
      <span className="card__more">
        جزئیات تعمیر
        <IconArrowLeft size={16} />
      </span>
    </Link>
  );
}
