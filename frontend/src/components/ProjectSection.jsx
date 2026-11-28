import { ArrowRight } from 'lucide-react'
import ProjectCard from './ProjectCard'

export default function ProjectSection({ title, subtitle, projects }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
          <p className="mt-1 text-slate-600 dark:text-slate-400">{subtitle}</p>
        </div>
        <a
          href="#"
          className="hidden items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-accent-400 sm:inline-flex"
        >
          View all <ArrowRight size={16} />
        </a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}