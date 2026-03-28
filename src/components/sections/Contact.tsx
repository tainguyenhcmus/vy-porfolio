import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-4 max-w-xl text-slate-600">
          Open to collaborations and freelance. Say hello.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="text-sky-700 hover:text-sky-800"
          >
            {site.email}
          </a>
          <span className="text-slate-500">·</span>
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-slate-900"
          >
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-slate-900"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}
