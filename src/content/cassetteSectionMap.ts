/**
 * Maps an About cassette (from `src/assets/cassettes/`) to a Projects image folder
 * under `src/content/assets/`.
 *
 * Default: 1st cassette in About order → `cassette-1`, 2nd → `cassette-2`, …
 * Override when order or names don’t match:
 * `{ "image-copy-3": "cassette-5" }`
 */
export const cassetteSectionFolderOverride: Partial<Record<string, string>> = {};

export function sectionFolderForCassette(
  cassetteId: string,
  orderIndexZeroBased: number,
): string {
  return (
    cassetteSectionFolderOverride[cassetteId] ??
    `cassette-${orderIndexZeroBased + 1}`
  );
}
