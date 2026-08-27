function Education() {
  return (
    <section
      id="education"
      className="border-t border-zinc-200 transition-colors dark:border-white/5"
    >
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14">
          <p className="mb-3 font-mono text-sm text-emerald-600 dark:text-emerald-400">
            03 — EDUCATION
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Education
          </h2>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-colors sm:p-10 dark:border-white/10 dark:bg-white/2 dark:shadow-none">
          <div className="flex flex-col justify-between gap-8 sm:flex-row">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">
                Bachelor's Degree
              </p>

              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                BSc (Hons) in Engineering
              </h3>

              <p className="mt-2 text-base font-medium text-emerald-600 dark:text-emerald-400">
                Specialization: Computer Engineering
              </p>

              <p className="mt-4 text-base font-medium text-zinc-700 dark:text-zinc-300">
                University of Peradeniya
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Peradeniya, Sri Lanka
              </p>

              <p className="mt-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                CGPA:&nbsp;
                <span className="text-zinc-900 dark:text-zinc-200">
                  3.65 / 4.0
                </span>
              </p>
            </div>

            <div className="sm:text-right">
              <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
                2020 — 2024
              </p>

              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-600">
                Graduated
              </p>
            </div>
          </div>

          <div className="my-8 border-t border-zinc-200 dark:border-white/10" />

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">
                Academic Focus
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-500">
                Computer engineering, software development, computer systems,
                embedded systems, cybersecurity, networking, databases, and
                software engineering.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">
                Relevant Areas
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Software Engineering",
                  "Databases",
                  "Embedded Systems",
                  "Cybersecurity",
                  "Software Development",
                  "Computer Architecture",
                  "Operating Systems",
                  "Machine Learning",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-600 dark:border-white/10 dark:bg-white/3 dark:text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
