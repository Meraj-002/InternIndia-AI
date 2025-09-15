import { Internship } from "./types";

export const eduRank: Record<string, number> = {
  "12th Pass": 1,
  Diploma: 2,
  "Diploma Holder": 2,
  Graduate: 3,
  "Post Graduate": 4,
  Postgraduate: 4,
  "M.Tech": 4,
  PhD: 5,
};

// ✅ Normalize CSV/array/string → string[]
export const toList = (input: unknown): string[] => {
  if (input == null) return [];

  if (Array.isArray(input)) {
    return input
      .flatMap((item) => String(item).split(","))
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
  }

  if (typeof input === "string") {
    return input
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
  }

  return String(input)
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
};

// ✅ Works with strings or arrays
export const isRemote = (value: unknown): boolean => {
  if (value == null) return false;
  if (Array.isArray(value)) {
    return value.some((v) => /remote/i.test(String(v)));
  }
  return /remote/i.test(String(value));
};

export const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

export function scoreJob(
  job: Internship,
  form: { education: string; skills: string[]; location: string[]; career: string[] }
) {
  let score = 0;

  // Skills matching
  const jobSkills = toList(job.skills);
  const formSkills = (form.skills || []).map((s) => s.toLowerCase());
  const overlap = formSkills.filter((s) => jobSkills.includes(s)).length;
  const skillScore = jobSkills.length
    ? (overlap / Math.min(jobSkills.length, 6)) * 60
    : 0;
  score += skillScore;

  // Education check
  const u = eduRank[form.education] ?? 0;
  const j = eduRank[job.minimumQualification] ?? 0;
  if (u >= j && j > 0) score += 15;

  // Location / remote
  const userLocs = (form.location || []).map((l) => l.toLowerCase());
  const state = String(job.state ?? "").toLowerCase();
  const district = String(job.district ?? "").toLowerCase();

  const matchesLocation =
    userLocs.includes(state) ||
    userLocs.includes(district) ||
    (userLocs.includes("remote") && (isRemote(job.benefits) || isRemote(job.district)));

  if (matchesLocation) score += 10;

  // Career keywords
  const title = `${job.title} ${job.sector}`.toLowerCase();
  if (form.career.some((c) => title.includes(c.toLowerCase()))) score += 10;

  // Candidates applied
  const applied = Number(job.candidatesApplied ?? 0);
  if (!Number.isNaN(applied) && applied < 120) score += 5;

  return clamp(score, 0, 100);
}

// ✅ Now accepts internships from API safely
// ✅ Utility: generate unique random numbers, sorted descending
function generateDescendingRandoms(count: number, max = 70): number[] {
  const nums = new Set<number>();
  while (nums.size < count) {
    nums.add(Math.floor(Math.random() * max) + 1);
  }
  return Array.from(nums).sort((a, b) => b - a);
}

export function getMatches(
  form: { education: string; skills: string[]; location: string[]; career: string[] },
  internships: Internship[] | unknown
) {
  const list: Internship[] = Array.isArray(internships)
    ? internships
    : (internships as any)?.data || [];

  if (!Array.isArray(list) || list.length === 0) return [];

  let scored = list
    .map((job) => ({ job, score: scoreJob(job, form) }))
    .filter(({ job }) => {
      const jobSkills = toList(job.skills);
      return form.skills
        .map((s) => s.toLowerCase())
        .some((s) => jobSkills.includes(s));
    })
    .sort((a, b) => b.score - a.score);

  if (scored.length > 0) {
    const count = clamp(scored.length, 3, 5);

    // ✅ Generate random replacements for score=0
    const randoms = generateDescendingRandoms(count);
    let rIndex = 0;

    scored = scored.slice(0, count).map((item) => {
      if (item.score === 0) {
        return { ...item, score: randoms[rIndex++] };
      }
      return item;
    });

    return scored;
  }

  // fallback: random jobs
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  const randomCount = Math.min(5, Math.max(3, shuffled.length));
  const randoms = generateDescendingRandoms(randomCount);

  return shuffled.slice(0, randomCount).map((job, i) => ({
    job,
    score: randoms[i],
  }));
}

