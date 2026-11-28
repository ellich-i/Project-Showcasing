import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection'
import Categories from './components/Categories'
import { projects } from './data/mockData'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-50/60 text-slate-900 dark:bg-navy-950 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ProjectSection
          title="Featured Projects"
          subtitle="Hand-picked by the admins."
          projects={projects.slice(0, 3)}
        />
        <Categories />
      </main>
    </div>
  )
}