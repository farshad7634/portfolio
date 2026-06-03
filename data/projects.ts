export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "BreastScanNet",
    description: "AI-based breast cancer detection using RASNet.",
    tech: ["Python", "PyTorch", "Computer Vision"],
    link: "https://github.com/farshad7634/BreastScanNet-V2",
    featured: true
  },
  {
    title: "LetterStep",
    description: "0–9 cyclic counter demonstrating state logic.",
    tech: ["Logic Design"],
    featured: false
  },
  {
    title: "Timer",
    description: "Simple stopwatch with start/stop/reset functionality.",
    tech: ["JavaScript"],
    featured: false
  }
];