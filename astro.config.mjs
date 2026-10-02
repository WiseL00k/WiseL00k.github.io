// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import imgAttr from 'satteri-imgattr';
import callouts from 'satteri-callouts';
import { SITE } from './src/config.ts';

export default defineConfig({
  site: SITE.url,
  build: { format: 'preserve' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: satteri({
      // Smart quotes and dashes would rewrite flags like `--force` in prose.
      features: { smartPunctuation: false },
      hastPlugins: [
        imgAttr({
          defaults: { loading: 'lazy', decoding: 'async', referrerPolicy: 'no-referrer' },
        }),
        callouts({
          theme: 'github',
          callouts: {
            note: { title: '说明' },
            tip: { title: '提示' },
            important: { title: '重要' },
            warning: { title: '注意' },
            caution: { title: '警告' },
          },
        }),
      ],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
