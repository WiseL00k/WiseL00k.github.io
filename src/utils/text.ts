const CJK = /[\u3400-\u9fff\uf900-\ufaff]/g;

export function markdownToText(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}#{1,6}\s+.*$/gm, ' ')
    .replace(/^\s{0,3}>\s?(\[![^\]]*\][+-]?)?/gm, '')
    .replace(/^\s*([-*+]|\d+\.)\s+/gm, '')
    .replace(/[*_~`|]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncate(text: string, max: number): string {
  const chars = [...text];
  return chars.length > max ? `${chars.slice(0, max).join('').trimEnd()}…` : text;
}

export function readingMinutes(md = ''): number {
  const codeLines = (md.match(/```[\s\S]*?```/g) ?? []).reduce(
    (n, block) => n + Math.max(0, block.split('\n').length - 2),
    0,
  );
  const prose = markdownToText(md);
  const cjk = prose.match(CJK)?.length ?? 0;
  const words = prose.replace(CJK, ' ').match(/[A-Za-z0-9]+(?:['.-][A-Za-z0-9]+)*/g)?.length ?? 0;
  return Math.max(1, Math.round(cjk / 400 + words / 200 + codeLines / 60));
}

export function transitionName(prefix: string, key: string): string {
  if (/^[\w-]+$/.test(key)) return `${prefix}-${key}`;
  let hash = 5381;
  for (const ch of key) hash = ((hash << 5) + hash + ch.codePointAt(0)!) >>> 0;
  return `${prefix}-${hash.toString(36)}`;
}
