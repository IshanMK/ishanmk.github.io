function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-zinc-200 transition-colors duration-300 dark:border-white/10"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-emerald-500/4 blur-3xl dark:bg-emerald-500/6" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-6xl items-center gap-14 px-6 py-32 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Software Engineer
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
            Ishan Madhuranga
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl dark:text-zinc-400">
            Software Engineer with professional experience in modern web
            development, specializing in frontend and backend technologies, and
            a strong academic foundation in Computer Engineering. I also bring
            hands-on experience in machine learning and deep learning through
            academic and research projects.
          </p>

          <div className="mt-10 flex flex-col gap-5 border-l border-emerald-500/40 pl-5 dark:border-emerald-400/40">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-600">
                Currently
              </p>

              <p className="mt-1 text-base text-zinc-700 dark:text-zinc-300">
                Software Engineer at &nbsp;
                <span className="font-medium text-zinc-900 dark:text-white">
                  Sysco LABS
                </span>
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-600">
                Education
              </p>

              <p className="mt-1 text-base text-zinc-700 dark:text-zinc-300">
                BSc (Hons) in Engineering
              </p>

              <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
                Specializing in Computer Engineering
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                University of Peradeniya
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#experience"
              className="text-sm font-medium text-zinc-800 transition hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-400"
            >
              Experience
              <span className="ml-2 text-zinc-400 dark:text-zinc-600">
                &darr;
              </span>
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-zinc-800 transition hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-400"
            >
              University Projects
              <span className="ml-2 text-zinc-400 dark:text-zinc-600">
                &darr;
              </span>
            </a>

            <a
              href="/Ishan_Madhuranga_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-emerald-500/50 hover:text-emerald-600 dark:border-white/15 dark:text-zinc-300 dark:hover:border-emerald-400/50 dark:hover:text-emerald-400"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl border border-emerald-500/10 dark:border-emerald-400/10" />

            <div className="relative h-72 w-56 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:shadow-none">
              <img
                src="/profile.jpg"
                alt="Ishan Madhuranga"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
