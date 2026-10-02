import { getCollection, type CollectionEntry } from 'astro:content';
import { markdownToText, truncate } from './text';

export type Post = CollectionEntry<'posts'>;

const MORE = /<!--\s*more\s*-->/i;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postSlug(post: Post): string {
  return post.data.abbrlink ?? post.id;
}

export function postUrl(post: Post): string {
  return `/posts/${postSlug(post)}.html`;
}

export function tagUrl(tag: string): string {
  return `/tags/${encodeURIComponent(tag)}/`;
}

export function excerpt(post: Post, max = 120): string {
  const description = post.data.description?.trim();
  if (description) return description;
  const body = post.body ?? '';
  const lead = MORE.test(body) ? markdownToText(body.split(MORE)[0]) : '';
  return truncate(lead || markdownToText(body), max);
}

export function getTags(posts: Post[]): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, 'zh-CN'));
}
