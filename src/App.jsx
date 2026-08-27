import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import UniversityProjects from "./components/UniversityProjects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Publications from "./components/Publications";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-[#0b0f0e] dark:text-zinc-100">
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Publications />
        <Education />
        <UniversityProjects />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-zinc-200 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ishan Madhuranga</p>

          <p>Personal Website</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
