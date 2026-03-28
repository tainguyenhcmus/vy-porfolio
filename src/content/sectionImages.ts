/**
 * Images for Selected work only — folders under `src/content/assets/`.
 * Not used by the About carousel.
 */
const raw = import.meta.glob("./assets/**/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function sectionKeyFromPath(path: string): string | null {
  const m = path.match(/^\.\/assets\/([^/]+)\//);
  return m?.[1] ?? null;
}

function fileSortKey(path: string): string {
  const seg = path.split("/").pop() ?? path;
  return decodeURIComponent(seg);
}

function sectionSortKey(name: string): number {
  const m = name.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

const bySection = new Map<string, { path: string; url: string; sortKey: string }[]>();

for (const [path, url] of Object.entries(raw)) {
  if (!url) continue;
  const section = sectionKeyFromPath(path);
  if (!section || section.startsWith(".")) continue;
  const list = bySection.get(section) ?? [];
  list.push({ path, url, sortKey: fileSortKey(path) });
  bySection.set(section, list);
}

const sortedNames = [...bySection.keys()].sort(
  (a, b) => sectionSortKey(a) - sectionSortKey(b) || a.localeCompare(b),
);

const map: Record<string, string[]> = {};
for (const name of sortedNames) {
  const files = bySection.get(name)!;
  files.sort((a, b) =>
    a.sortKey.localeCompare(b.sortKey, undefined, { numeric: true }),
  );
  map[name] = files.map((f) => f.url);
}

export const sectionImagesByFolder: Readonly<Record<string, string[]>> = map;

export function getSectionImages(folderName: string): string[] {
  return sectionImagesByFolder[folderName] ?? [];
}
