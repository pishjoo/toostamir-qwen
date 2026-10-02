import Link from "next/link";

export interface Crumb {
  name: string;
  path: string;
}

/** Breadcrumb سمانتیک + متناظر با JSON-LD */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="مسیر صفحه">
      <ol>
        {items.map((c, i) =>
          i === items.length - 1 ? (
            <li key={c.path} aria-current="page">
              {c.name}
            </li>
          ) : (
            <li key={c.path}>
              <Link href={c.path}>{c.name}</Link>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}
