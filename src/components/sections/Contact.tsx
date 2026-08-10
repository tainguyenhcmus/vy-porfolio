import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Contact
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-slate-600">
          Open to collaborations and freelance. Say hello.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="text-sky-700 hover:text-sky-800"
          >
            {site.email}
          </a>
          <span className="hidden text-slate-400 sm:inline" aria-hidden>
            ·
          </span>
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
