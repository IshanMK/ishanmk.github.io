const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    organization: "Amazon Web Services",
    year: "2026",
    type: "Professional Certification",
    link: "YOUR_AWS_CREDENTIAL_URL",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="border-y border-zinc-200 bg-zinc-50/60 transition-colors dark:border-white/5 dark:bg-white/1.5"
    >
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14">
          <p className="mb-3 font-mono text-sm text-emerald-600 dark:text-emerald-400">
            05 — CERTIFICATIONS
          </p>

          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-white">
            Certifications
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-500">
            Professional certifications, technical training, and academic
            achievements that reflect my continued learning and development.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <div
              key={certification.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-zinc-300 dark:border-white/10 dark:bg-black/20 dark:shadow-none dark:hover:border-white/20"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                  {certification.type}
                </p>

                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-600">
                  {certification.year}
                </p>
              </div>

              <h3 className="mt-4 font-semibold leading-6 text-zinc-900 dark:text-white">
                {certification.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                {certification.organization}
              </p>

              <a
                href={certification.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-sm text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                View Credential ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
