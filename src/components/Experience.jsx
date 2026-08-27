const experience = [
  {
    company: "Sysco LABS",
    position: "Software Engineer",
    employmentType: "Full-time",
    period: "Oct 2024 — Present",
    location: "Colombo, Sri Lanka",
    description:
      "Working on software applications and contributing to the development, maintenance, and improvement of production systems.",
    responsibilities: [
      "Contributing to the development of a data integration and onboarding platform to incorporate data from acquired companies into internal systems.",
      "Collaborating with the team to build dashboards that support onboarding workflows.",
      "Supporting the development of workflow-driven interfaces for validation and onboarding actions.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "FastAPI",
      "PostgreSQL",
      "Git",
      "AWS",
      "Terraform",
      "Docker",
    ],
  },

  {
    company: "IroneOne Technologies",
    position: "Software Engineer (AI/ML) Intern",
    employmentType: "Internship",
    period: "Aug 2023 — Jan 2024",
    location: "Colombo, Sri Lanka",
    description:
      "Worked as part of a machine learning and software development team, gaining practical experience in developing and applying machine learning solutions.",
    responsibilities: [
      "Developed and optimized time series machine learning models using deep learning, hyperparameter tuning, and ensemble methods.",
      "Automated and streamlined model training pipelines for efficient, scalable cloud deployment.",
      "Researched novel algorithms and implemented model explainability using SHAP to improve accuracy and transparency.",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Snowflake",
      "Git",
      "AWS SageMaker",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-zinc-200 bg-zinc-50/60 transition-colors dark:border-white/5 dark:bg-white/1.5"
    >
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-emerald-600 dark:text-emerald-400">
            01 — EXPERIENCE
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Professional Experience
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-500">
            A selection of my professional roles and the experience I have
            gained working on real-world software and technology.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-1.75 top-2 hidden w-px bg-zinc-200 md:block dark:bg-white/10" />

          <div className="space-y-16">
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.position}`}
                className="relative md:pl-12"
              >
                <div className="absolute left-0 top-1.5 hidden h-3.75 w-3.75 rounded-full border-2 border-emerald-500 bg-zinc-50 md:block dark:border-emerald-400 dark:bg-[#0b0f0e]" />

                <div className="grid gap-6 lg:grid-cols-[190px_1fr]">
                  <div className="hidden lg:block">
                    <p className="font-mono text-sm leading-6 text-emerald-600 dark:text-emerald-400">
                      {job.period}
                    </p>

                    <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {job.employmentType}
                    </p>

                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-600">
                      {job.location}
                    </p>
                  </div>

                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 lg:hidden">
                      <span className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
                        {job.period}
                      </span>

                      <span className="text-zinc-300 dark:text-zinc-700">
                        •
                      </span>

                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {job.employmentType}
                      </span>

                      <span className="text-zinc-300 dark:text-zinc-700">
                        •
                      </span>

                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {job.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                      {job.position}
                    </h3>

                    <p className="mt-1 text-base font-medium text-zinc-700 dark:text-zinc-300">
                      {job.company}
                    </p>

                    <p className="mt-5 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-500">
                      {job.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {job.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-500"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 border-t border-zinc-200 pt-5 dark:border-white/10">
                      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-600">
                        Technologies
                      </p>

                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {job.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-400"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
