// import { Container } from "@/components/ui/Container";
import { AboutScrollGallery } from "@/components/sections/AboutScrollGallery";

export function About() {
  return (
    <section id="about" className="">
      {/* <Container>
        <h2 className="text-2xl font-semibold text-slate-900">About</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Replace this with your story: focus, stack, and what you like building.
          Keep it scannable — visitors decide in seconds.
        </p>
      </Container> */}
      <div className="w-full">
        <AboutScrollGallery />
      </div>
    </section>
  );
}
