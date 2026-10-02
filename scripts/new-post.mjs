import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { crc32 } from 'node:zlib';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('用法：npm run new -- "文章标题"');
  process.exit(1);
}

const dir = join(import.meta.dirname, '..', 'src', 'content', 'posts');
const fileName = `${title
  .replace(/[\\/:*?"<>|\s]+/g, '-')
  .replace(/-{2,}/g, '-')
  .replace(/^-|-$/g, '')}.md`;
const file = join(dir, fileName);
if (existsSync(file)) {
  console.error(`文件已存在：src/content/posts/${fileName}`);
  process.exit(1);
}

const used = new Set(
  readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => readFileSync(join(dir, f), 'utf8').match(/^abbrlink:\s*['"]?([^'"\s]+)/m)?.[1])
    .filter(Boolean),
);

let abbrlink = crc32(title).toString(16);
for (let salt = 1; used.has(abbrlink); salt++) abbrlink = crc32(`${title}#${salt}`).toString(16);

const shanghai = new Date(Date.now() + 8 * 3600 * 1000).toISOString().slice(0, 19);

const frontmatter = [
  '---',
  `title: ${JSON.stringify(title)}`,
  `date: ${shanghai}+08:00`,
  'tags: []',
  "description: ''",
  `abbrlink: '${abbrlink}'`,
  'draft: true',
  '---',
  '',
  '',
].join('\n');

writeFileSync(file, frontmatter, 'utf8');
console.log(`已创建 src/content/posts/${fileName}`);
console.log(`发布后的地址：/posts/${abbrlink}.html（写完把 draft 改成 false）`);
