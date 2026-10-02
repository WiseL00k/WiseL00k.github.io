export interface VideoSource {
  bvid?: string;
  youtube?: string;
  src?: string;
}

export function parseVideo(spec: string): VideoSource {
  const value = spec.trim();
  const bvid = value.match(/(?:^|\/video\/)(BV[0-9A-Za-z]{10})/)?.[1];
  if (bvid) return { bvid };
  const youtube = value.match(/(?:youtu\.be\/|[?&]v=)([\w-]{11})/)?.[1];
  if (youtube) return { youtube };
  if (/^(\/|https?:\/\/)/.test(value)) return { src: value };
  return { youtube: value };
}
