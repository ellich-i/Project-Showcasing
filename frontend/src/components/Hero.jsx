import { Search, ArrowRight, Globe, Smartphone, Cpu } from 'lucide-react'

// Fake data muna. Papalitan natin ito ng totoong data galing sa backend mamaya.
const stats = [
  { value: '120+', label: 'Projects' },
  { value: '80+', label: 'Student developers' },
  { value: '25+', label: 'Technologies' },
]

const previews = [
  { icon: Globe, title: 'Barangay Portal', tags: ['React', 'Node.js'] },
  { icon: Smartphone, title: 'StudyBuddy App', tags: ['Flutter', 'Firebase'] },
  { icon: Cpu, title: 'Smart Plant Monitor', tags: ['Arduino', 'IoT'] },
]

export default function Hero() {
  return (
    <section className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        {/* Left side: text */}
        <div>
          <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-accent-900 dark:bg-accent-950 dark:text-accent-300">
            BSIT Student Project Showcase
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Where BSIT Ideas Become{' '}
            <span className="text-brand-600 dark:text-accent-400">Real Projects.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Discover student-built systems, applications, games, research, and
            innovations. Explore projects, learn new technologies, and showcase
            what you can build.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex max-w-xl items-center gap-2 rounded-xl border border-slate-300 bg-white p-2 dark:border-slate-700 dark:bg-navy-900">
            <Search size={18} className="ml-2 shrink-0 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects, developers, technologies..."
              className="w-full bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
            />
            <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
              Search
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Explore Projects <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Showcase Your Project
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-slate-900 dark:text-white">
                  {s.value}
                </dt>
                <dd className="text-xs text-slate-500 dark:text-slate-400">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right side: project previews */}
        <div className="relative">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-navy-900">
            {/* Fake window bar */}
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="ml-3 text-xs text-slate-400">showcase.bsit.dev</span>
            </div>

            <div className="space-y-3">
              {previews.map((p) => (
                <div
                  key={p.title}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-brand-400 dark:border-slate-800 dark:hover:border-accent-500"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 dark:bg-slate-800 dark:text-accent-400">
                    <p.icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-slate-900 dark:text-white">
                      {p.title}
                    </p>
                    <div className="mt-1 flex gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}