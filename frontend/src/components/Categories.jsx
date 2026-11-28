import {
  Globe, Smartphone, Monitor, Gamepad2, Bot, BrainCircuit, Network,
  ShieldCheck, Cpu, Database, FlaskConical, PenTool, Boxes,
} from 'lucide-react'

// Sample counts lang. Totoong bilang galing sa database mamaya.
const categories = [
  { name: 'Web Development', icon: Globe, count: 24 },
  { name: 'Mobile Application', icon: Smartphone, count: 18 },
  { name: 'Desktop Application', icon: Monitor, count: 9 },
  { name: 'Game Development', icon: Gamepad2, count: 11 },
  { name: 'Artificial Intelligence', icon: Bot, count: 7 },
  { name: 'Machine Learning', icon: BrainCircuit, count: 5 },
  { name: 'Networking', icon: Network, count: 6 },
  { name: 'Cybersecurity', icon: ShieldCheck, count: 8 },
  { name: 'Hardware / IoT', icon: Cpu, count: 12 },
  { name: 'Database Systems', icon: Database, count: 14 },
  { name: 'Research', icon: FlaskConical, count: 10 },
  { name: 'UI/UX Design', icon: PenTool, count: 13 },
  { name: 'Other IT Projects', icon: Boxes, count: 4 },
]

export default function Categories() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-navy-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Browse by Category</h2>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Find projects by the kind of system or app they are.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map(({ name, icon: Icon, count }) => (
            <a
              key={name}
              href="#"
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-brand-400 dark:border-slate-800 dark:hover:border-accent-500"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 dark:bg-slate-800 dark:text-accent-400">
                <Icon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">
                  {name}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{count} projects</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}