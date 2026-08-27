import { BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Machine Learning Based Enhanced Remote Power Analysis Attacks",
    venue: "IEEE",
    year: "2025",
    description:
      "Research on enhancing remote power analysis attacks using machine learning techniques to improve the analysis of power consumption traces.",
    highlights: [
      "Investigated remote power analysis attacks and their applicability to machine learning-based analysis.",
      "Analyzed large-scale power consumption traces for profiling and attack scenarios.",
      "Applied machine learning techniques to identify patterns within power consumption traces.",
      "Evaluated different machine learning approaches to improve the effectiveness of remote power analysis attacks.",
      "Presented and published the research at an IEEE conference.",
    ],
    technologies: ["Python", "AISY Framework", "TensorFlow"],
    link: "https://ieeexplore.ieee.org/document/10963016",
  },
];

function Publications() {
  return (
    <section
      id="publications"
      className="border-t border-zinc-200 transition-colors dark:border-white/5"
    >
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14">
          <p className="mb-3 font-mono text-sm text-emerald-600 dark:text-emerald-400">
            02 — RESEARCH & PUBLICATIONS
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Research & Publications
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-500">
            Research work and publications developed during my academic studies,
            with a focus on cybersecurity and machine learning.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-colors hover:border-zinc-300 sm:p-10 dark:border-white/10 dark:bg-black/20 dark:shadow-none dark:hover:border-white/20"
            >
              <div className="flex flex-col gap-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {publication.venue}
                    </p>

                    <h3 className="mt-2 max-w-4xl text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                      {publication.title}
                    </h3>
                  </div>

                  <span className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-600">
                    {publication.year}
                  </span>
                </div>

                <p className="max-w-3xl leading-7 text-zinc-600 dark:text-zinc-500">
                  {publication.description}
                </p>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">
                    Research Highlights
                  </p>

                  <ul className="mt-4 max-w-3xl space-y-2.5">
                    {publication.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-500"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/70" />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                  <div className="flex flex-wrap gap-2">
                    {publication.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-600 dark:border-white/10 dark:bg-white/3 dark:text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="group relative shrink-0">
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View publication: ${publication.title}`}
                      className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-sm font-medium text-emerald-600 transition hover:border-emerald-500/50 hover:bg-emerald-500/10 dark:border-emerald-400/20 dark:bg-emerald-400/5 dark:text-emerald-400 dark:hover:border-emerald-400/40 dark:hover:bg-emerald-400/10"
                    >
                      <BookOpen className="h-4 w-4" />

                      <span>Published</span>

                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-zinc-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:text-zinc-900">
                      View Publication
                    </span>
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

export default Publications;
