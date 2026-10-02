import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export const STATUS_LABEL: Record<Project['data']['status'], string> = {
  active: '持续开发',
  maintained: '维护中',
  completed: '已完成',
  archived: '已归档',
};

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      a.data.order - b.data.order ||
      b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export function projectUrl(project: Project): string {
  return `/projects/${project.id}/`;
}
