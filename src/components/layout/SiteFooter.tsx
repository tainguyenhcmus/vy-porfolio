import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-300 py-10 text-center text-sm text-slate-600">
      <Container>
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Vite + React.
        </p>
      </Container>
    </footer>
  );
}
