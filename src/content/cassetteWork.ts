/**
 * Copy for “Selected work” when a cassette is chosen in About.
 * Keys = folder names under `src/content/assets/`, e.g. `cassette-1`, `cassette-2`.
 */
export type CassetteWorkContent = {
  /** Optional override; defaults to the cassette title from About */
  heading?: string;
  /** Main body — plain text; you can switch to MDX later */
  body: string;
};

const placeholderBody =
  "Add your story for this cassette in src/content/cassetteWork.ts (see `cassetteWorkById`).";

export const cassetteWorkById: Partial<Record<string, CassetteWorkContent>> = {
  // Example:
  // "cassette-1": { heading: "Project A", body: "What you built, stack, outcomes…" },
};

export function resolveCassetteWork(
  id: string,
  fallbackTitle: string,
): CassetteWorkContent {
  const entry = cassetteWorkById[id];
  return {
    heading: entry?.heading ?? fallbackTitle,
    body: entry?.body ?? placeholderBody,
  };
}
