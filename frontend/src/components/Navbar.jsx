import { useState } from 'react'
import { Terminal, Search, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = ['Home', 'Explore Projects', 'Students', 'Technologies', 'About']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-navy-950/90">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
            <Terminal size={18} />
          </span>
          IT Showcase Hub
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-accent-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Search size={18} />
          </button>

          <ThemeToggle />

          <a
            href="#"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 sm:inline-block"
          >
            Login
          </a>
          <a
            href="#"
            className="hidden rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 sm:inline-block"
          >
            Register
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 px-4 py-3 dark:border-slate-800 lg:hidden">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="flex gap-2 pt-2">
              <a href="#" className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-center text-sm font-medium dark:border-slate-700">
                Login
              </a>
              <a href="#" className="flex-1 rounded-lg bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white">
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}