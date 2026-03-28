import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-300/70 bg-page/35 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <a href="#" className="font-semibold text-slate-900">
          {site.name}
        </a>
        <nav className="flex gap-6 text-sm text-slate-600">
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
