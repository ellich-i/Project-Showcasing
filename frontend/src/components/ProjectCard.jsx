import { Eye } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { title, description, category, icon: Icon, tech, owner, year, section, academicYear, views } = project

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-md dark:border-slate-800 dark:bg-navy-900 dark:hover:border-accent-500">
      {/* Cover (placeholder muna, totoong cover image mamaya) */}
      <div className="grid h-40 place-items-center bg-brand-50 text-brand-600 dark:bg-navy-950 dark:text-accent-400">
        <Icon size={44} strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Category + academic year */}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 dark:bg-accent-950 dark:text-accent-300">
            {category}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{academicYear}</span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>

        {/* Tech badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Owner + views */}
        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{owner}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {year} · {section}
              </p>
            </div>
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <Eye size={14} /> {views}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}