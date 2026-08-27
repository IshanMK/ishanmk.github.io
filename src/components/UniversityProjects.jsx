import { BookOpen, FileText, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Machine Learning Based Enhanced Remote Power Analysis Attacks",
    type: "Final Year Project",
    period: "Oct 2024 — Sep 2025",
    description:
      "A machine learning-based approach for enhancing the analysis and detection of remote power analysis attacks using power consumption traces.",
    highlights: [
      "Developed machine learning models to identify patterns associated with remote power analysis attacks.",
      "Processed and analyzed large-scale power consumption traces for profiling and attack scenarios.",
      "Experimented with multiple machine learning techniques to improve the effectiveness of remote power analysis attacks.",
      "Conducted experiments and evaluated model performance using appropriate classification metrics.",
      "Published the research at an IEEE conference.",
    ],
    technologies: ["Python", "AISY Framework", "TensorFlow"],
    github:
      "https://github.com/cepdnaclk/e18-4yp-RPA-attacks-using-Machine-Learning-Algorithms",
    projectPage:
      "https://projects.ce.pdn.ac.lk/4yp/e18/RPA-attacks-using-Machine-Learning-Algorithms/",
    publication: "https://ieeexplore.ieee.org/document/10963016",
  },

  {
    title: "Smart Safety Helmet for Large-Scale Construction Sites",
    type: "Group Project",
    period: "Oct 2022 — Jan 2023",
    description:
      "An embedded systems project designed to improve worker safety and enable construction site managers to monitor workers and identify potential hazards in real time.",
    highlights: [
      "Developed a web-based application for construction site managers to monitor workers and manage site safety.",
      "Implemented an interactive site map to visualize construction site information and highlight designated danger zones using different colors.",
      "Developed the entire web application as my primary contribution to the project.",
      "Integrated the web application with the project's backend services and data sources.",
    ],
    technologies: ["React.js", "Firebase", "Node.js", "Vercel"],
    github: "https://github.com/cepdnaclk/e18-3yp-smart-safety-helmet",
    projectPage: "https://projects.ce.pdn.ac.lk/3yp/e18/smart-safety-helmet/",
    website: "https://e18-3yp-smart-safety-helmet.vercel.app/",
  },
  {
    title: "Postgraduate Student Management System",
    type: "Group Project",
    period: "Nov 2021 — Mar 2022",
    description:
      "A web-based application developed to manage and track the academic programs and activities of postgraduate students in the Department of Computer Engineering.",
    highlights: [
      "Developed an Automatic Event Management System to manage important academic events and deadlines.",
      "Implemented an automated notification mechanism to notify students two weeks before upcoming deadlines.",
      "Developed backend functionalities for managing postgraduate student academic information and events.",
      "Contributed to the integration of frontend and backend components of the system.",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github:
      "https://github.com/IshanMK/e18-co227-postgraduate-student-management-system",
    projectPage:
      "https://projects.ce.pdn.ac.lk/co227/e18/Postgraduate-Student-Management-System/",
  },
];

function UniversityProjects() {
  return (
    <section
      id="projects"
      className="border-y border-zinc-200 bg-zinc-50/60 transition-colors dark:border-white/5 dark:bg-white/1.5"
    >
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-emerald-600 dark:text-emerald-400">
            04 — ACADEMIC PROJECTS
          </p>

          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-white">
            Academic Work
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-500">
            Selected projects completed during my university studies,
            demonstrating my experience with software development,
            problem-solving, and practical application of technology.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-colors hover:border-zinc-300 sm:p-10 dark:border-white/10 dark:bg-black/20 dark:shadow-none dark:hover:border-white/20"
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex min-w-0 items-start gap-5">
                    <span className="shrink-0 font-mono text-sm text-zinc-400 dark:text-zinc-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {project.type}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <span className="shrink-0 text-right font-mono text-xs text-zinc-500 dark:text-zinc-600">
                    {project.period}
                  </span>
                </div>

                <p className="max-w-3xl leading-7 text-zinc-600 dark:text-zinc-500">
                  {project.description}
                </p>

                <ul className="max-w-3xl space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-500"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/70" />

                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-600 dark:border-white/10 dark:bg-white/3 dark:text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <div className="group/github relative">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
                        >
                          <FaGithub className="h-4 w-4" />
                        </a>

                        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md bg-zinc-900 px-2.5 py-1.5 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/github:opacity-100 dark:bg-white dark:text-zinc-900">
                          View on GitHub
                        </span>
                      </div>
                    )}

                    {project.projectPage && (
                      <div className="group/project relative">
                        <a
                          href={project.projectPage}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View project page for ${project.title}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
                        >
                          <FileText className="h-4 w-4" />
                        </a>

                        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md bg-zinc-900 px-2.5 py-1.5 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/project:opacity-100 dark:bg-white dark:text-zinc-900">
                          View Project Page
                        </span>
                      </div>
                    )}

                    {project.website && (
                      <div className="group/website relative">
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit website for ${project.title}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
                        >
                          <Globe className="h-4 w-4" />
                        </a>

                        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md bg-zinc-900 px-2.5 py-1.5 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/website:opacity-100 dark:bg-white dark:text-zinc-900">
                          Visit Website
                        </span>
                      </div>
                    )}

                    {project.publication && (
                      <div className="group/publication relative">
                        <a
                          href={project.publication}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View publication for ${project.title}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
                        >
                          <BookOpen className="h-4 w-4" />
                        </a>

                        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md bg-zinc-900 px-2.5 py-1.5 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/publication:opacity-100 dark:bg-white dark:text-zinc-900">
                          View Publication
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UniversityProjects;
