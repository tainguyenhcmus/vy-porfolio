import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import heroBackground from "@/assets/cassettes/Hero.png";

export function Hero() {
  return (
    <section className="relative -mt-14 flex min-h-[min(72vh,36rem)] items-center border-b border-stone-300 pt-14">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-page/88 via-page/75 to-page/55"
        aria-hidden
      />
      <Container className="relative w-full py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-wide text-sky-600">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-600">{site.title}</p>
        <div className="mt-10 flex flex-wrap gap-4">
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
    </section>
  );
}
