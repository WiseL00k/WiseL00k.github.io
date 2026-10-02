export const SITE = {
  title: 'WiseL00k',
  description: '嵌入式、机器人控制与系统软件的项目和笔记。',
  intro: '写嵌入式和机器人控制，也折腾操作系统、编译器和各种小工具。这里放我做过的项目和学习笔记。',
  motto: 'anything is possible',
  url: 'https://wisel00k.github.io',
  author: 'WiseL00k',
  github: 'https://github.com/WiseL00k',
  lang: 'zh-CN',
  timezone: 'Asia/Shanghai',
  since: 2024,
};

export const NAV = [
  { label: '项目', href: '/projects/' },
  { label: '文章', href: '/posts/' },
  { label: '关于', href: '/about/' },
];

type CommentsProvider = 'giscus' | 'twikoo';

export const FEATURES = {
  search: true,
  rss: true,
  toc: true,
  comments: {
    enabled: false,
    provider: 'giscus' as CommentsProvider,
    giscus: {
      repo: 'WiseL00k/WiseL00k.github.io',
      repoId: '',
      category: '',
      categoryId: '',
    },
    twikoo: {
      envId: 'https://twikoo.twikoo.wisel00k.site/',
      // Keep the client on the same major version as the deployed Twikoo server.
      src: 'https://cdn.jsdelivr.net/npm/twikoo@1.6.45/dist/twikoo.min.js',
    },
  },
  video: { enabled: false },
  analytics: {
    enabled: false,
    umami: { src: '', websiteId: '' },
  },
};
