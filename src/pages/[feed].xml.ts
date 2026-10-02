import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { FEATURES, SITE } from '@/config';
import { excerpt, getPosts, postUrl } from '@/utils/posts';

export function getStaticPaths() {
  return FEATURES.rss ? [{ params: { feed: 'rss' } }] : [];
}

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: excerpt(post, 200),
      link: postUrl(post),
      categories: post.data.tags,
    })),
    customData: '<language>zh-CN</language>',
  });
}
