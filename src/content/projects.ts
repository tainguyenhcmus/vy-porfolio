export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  imageSrc?: string;
};

/** Replace with your real work; keep this file as the single source of truth. */
export const projects: Project[] = [
  {
    title: "Sample project",
    description:
      "One-line pitch. What problem it solved and what you shipped.",
    tags: ["React", "TypeScript", "API"],
    href: "#",
  },
  {
    title: "Another highlight",
    description: "Short case study blurb. Metrics or outcomes if you have them.",
    tags: ["Design", "UX"],
    href: "#",
  },
];
