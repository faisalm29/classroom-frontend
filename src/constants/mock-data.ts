import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    description:
      "Foundational concepts in programming, algorithms, and computational thinking.",
    department: "Computer Science",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Calculus II",
    code: "MATH201",
    description:
      "Advanced integration techniques, series, and applications of calculus.",
    department: "Mathematics",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Physics I: Mechanics",
    code: "PHY150",
    description:
      "Classical mechanics covering motion, forces, energy, and momentum.",
    department: "Physics",
    createdAt: new Date().toISOString(),
  },
];
