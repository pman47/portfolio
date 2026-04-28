export const METRIC_PATTERNS: string[] = [
  "1,300+ production routers",
  "1,300+ routers",
  "500+ GB/day",
  "10K+ events/day",
  "500K+ datapoints/day",
  "370+ users",
  "40+ modules",
  "3.9 to 4.8 stars",
  "3.9 → 4.8",
  "20 hours monthly",
  "20 hours/month",
  "1+ min",
  "<1s",
  "around 27s",
  "under 1s",
  "every 2 minutes",
  "every 15 minutes",
  "6 months",
  "3 brands",
  "5-level",
  "3.5+ years",
  "40%",
  "3x",
  "4.8★",
];

const sortedPatterns = [...METRIC_PATTERNS].sort((a, b) => b.length - a.length);

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const splitRegex = new RegExp(
  `(${sortedPatterns.map(escapeRegex).join("|")})`,
  "g",
);

export interface Segment {
  text: string;
  isChip: boolean;
}

export function splitIntoSegments(text: string): Segment[] {
  return text.split(splitRegex).map((p) => ({
    text: p,
    isChip: METRIC_PATTERNS.includes(p),
  }));
}
