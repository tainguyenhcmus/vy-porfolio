import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import heroBackground from "@/assets/cassettes/Hero.png";

export function Hero() {
  return (
    <section className="relative -mt-14 border-b border-stone-300 pt-14">
      <div className="relative w-full bg-page">
        <img
          src={heroBackground}
          alt=""
          className="pointer-events-none block w-full max-w-full h-auto select-none"
          decoding="async"
          draggable={false}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-page/88 via-page/75 to-page/55"
          aria-hidden
        />
        <Container className="absolute inset-0 z-10 flex flex-col justify-center py-16 sm:py-24 lg:py-28">
          <p className="text-sm font-medium uppercase tracking-wide text-sky-600">
            Portfolio
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-slate-600">
            {site.title}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-500"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-400 px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-600"
            >
              Contact
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
