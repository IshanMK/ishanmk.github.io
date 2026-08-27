function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React",
    "Tailwind CSS",
    "FastAPI",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "TensorFlow",
    "Keras",
    "Docker",
    "AWS",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="skills"
      className="border-t border-zinc-200 transition-colors dark:border-white/5"
    >
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-12">
          <p className="mb-3 font-mono text-sm text-emerald-600 dark:text-emerald-400">
            06 — SKILLS
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Technical Skills
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-500">
            Technologies and tools I have worked with across my academic
            projects and professional experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-emerald-500/40 hover:text-emerald-600 dark:border-white/10 dark:bg-white/2 dark:text-zinc-400 dark:hover:border-emerald-400/30 dark:hover:text-emerald-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
