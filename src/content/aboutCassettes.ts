const raw = import.meta.glob("../assets/cassettes/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function fileName(path: string): string {
  const seg = path.split("/").pop() ?? path;
  return decodeURIComponent(seg);
}

export type AboutCassetteItem = {
  id: string;
  src: string;
  title: string;
  subtitle: string;
};

function slugFromFileBase(base: string, index: number): string {
  const slug = base
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return slug || `cassette-${index}`;
}

const rawItems: AboutCassetteItem[] = Object.entries(raw)
  .filter(([, src]) => src)
  .filter(([path]) => !/^hero\.png$/i.test(fileName(path)))
  .sort(([a], [b]) =>
    fileName(a).localeCompare(fileName(b), undefined, { numeric: true }),
  )
  .map(([path], index) => {
    const name = fileName(path).replace(/\.png$/i, "");
    const id = slugFromFileBase(name, index);
    return {
      id,
      src: raw[path] as string,
      title: name.replace(/\b\w/g, (c) => c.toUpperCase()),
      subtitle: `Cassette ${index + 1}`,
    };
  });

const seen = new Set<string>();
export const aboutCassetteItems: AboutCassetteItem[] = rawItems.map((item) => {
  let { id } = item;
  if (seen.has(id)) {
    let n = 2;
    while (seen.has(`${id}-${n}`)) n += 1;
    id = `${id}-${n}`;
  }
  seen.add(id);
  return { ...item, id };
});
