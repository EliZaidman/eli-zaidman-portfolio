// Utility to load project markdown via Vite's glob
export const projectsGlob = import.meta.glob('../content/projects/*.md', { eager: true });
export function getAllProjects() {
  return Object.entries(projectsGlob)
    .map(([path, mod]: any) => {
      const slug = path.split('/').pop().replace('.md','');
      const data = mod.frontmatter ?? {};
      return { slug, ...data, Content: mod.default };
    })
    .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
export function getProjectBySlug(slug) {
  const entry = Object.entries(projectsGlob).find(([p]) => p.endsWith(`${slug}.md`));
  if (!entry) return null;
  const [, mod]: any = entry;
  const data = mod.frontmatter ?? {};
  return { slug, ...data, Content: mod.default };
}
