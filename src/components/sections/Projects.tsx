import { useEffect, useMemo } from "react";
import { useCassetteSelection } from "@/context/CassetteSelectionContext";
import { aboutCassetteItems } from "@/content/aboutCassettes";
import { sectionFolderForCassette } from "@/content/cassetteSectionMap";
import { getSectionImages } from "@/content/sectionImages";
import { Container } from "@/components/ui/Container";

const IMAGE_ROTATE_MS = 4500;

export function Projects() {
  const { selectedId } = useCassetteSelection();
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
  console.log("🚀 ~ Projects ~ images:", images)

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
    }, IMAGE_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [images]);

  return (
    <section
      id="projects"
      className="scroll-mt-20 "
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
              {images.map((image) => (
                <img key={image} src={image} alt="" />
              ))}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
