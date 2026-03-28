import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { CassetteSelectionProvider } from "@/context/CassetteSelectionContext";

export default function App() {
  return (
    <div className="min-h-screen bg-page text-slate-800 antialiased">
      <CassetteSelectionProvider>
        <SiteHeader />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <SiteFooter />
      </CassetteSelectionProvider>
    </div>
  );
}
