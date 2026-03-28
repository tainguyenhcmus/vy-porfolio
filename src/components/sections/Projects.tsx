import { useEffect, useMemo, useState } from "react";
import { useCassetteSelection } from "@/context/CassetteSelectionContext";
import { aboutCassetteItems } from "@/content/aboutCassettes";
import { sectionFolderForCassette } from "@/content/cassetteSectionMap";
import { getSectionImages } from "@/content/sectionImages";
import { resolveCassetteWork } from "@/content/cassetteWork";
import { Container } from "@/components/ui/Container";

const IMAGE_ROTATE_MS = 4500;

export function Projects() {
  const { selectedId, setSelectedId } = useCassetteSelection();
  const selected = aboutCassetteItems.find((c) => c.id === selectedId) || aboutCassetteItems[0]; //default to first item
  const selectedIndex = selected
    ? aboutCassetteItems.findIndex((c) => c.id === selected.id)
    : -1;

  const sectionFolder =
    selected && selectedIndex >= 0
      ? sectionFolderForCassette(selected.id, selectedIndex)
      : null;

  const images = useMemo(
    () => (sectionFolder ? getSectionImages(sectionFolder) : []),
    [sectionFolder],
  );

  const work =
    selected && sectionFolder
      ? resolveCassetteWork(sectionFolder, selected.title)
      : null;
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(0);
  }, [selectedId]);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setImgIndex((i) => (i + 1) % images.length);
    }, IMAGE_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [images]);

  const currentSrc = images[imgIndex] ?? images[0];

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-stone-300 bg-stone-200/35 py-20 sm:py-24"
    >
      <Container>

        <div className="mt-10 rounded-xl border border-stone-300 bg-page/90 p-8 shadow-sm sm:p-10">
          {!selected ? (
            <p className="text-slate-600">
              No cassette selected yet. Click one in the gallery above to load its
              section here.
            </p>
          ) : (
            <>
              {currentSrc ? (
                <div className="relative mb-8 overflow-hidden rounded-lg bg-stone-200/80">
                  <img
                    key={currentSrc}
                    src={currentSrc}
                    alt={work?.heading ?? selected.title}
                    className="aspect-video w-full object-contain"
                  />
                  {images.length > 1 ? (
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                      {images.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 w-1.5 rounded-full transition-colors ${
                            i === imgIndex ? "bg-sky-600" : "bg-stone-400/80"
                          }`}
                          aria-hidden
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}

              <p className="text-xs font-medium uppercase tracking-wide text-sky-700">
                {selected.subtitle}
                {images.length > 0
                  ? ` · ${images.length} image${images.length === 1 ? "" : "s"}`
                  : ""}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                {work?.heading}
              </h3>
              <p className="mt-4 whitespace-pre-line text-slate-600">{work?.body}</p>
              <button
                type="button"
                className="mt-8 text-sm font-medium text-sky-700 underline-offset-2 hover:text-sky-800 hover:underline"
                onClick={() => setSelectedId(null)}
              >
                Clear selection
              </button>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
