import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);

    if (nextDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const links = [
    ["Experience", "#experience"],
    ["Publications", "#publications"],
    ["Education", "#education"],
    ["Projects", "#projects"],
    ["Certifications", "#certifications"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0b0f0e]/90">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
        >
          Ishan Madhuranga
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
            >
              {name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25M12 18.75V21M4.22 4.22l1.59 1.59M18.19 18.19l1.59 1.59M3 12h2.25M18.75 12H21M4.22 19.78l1.59-1.59M18.19 5.81l1.59-1.59M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>

          <a
            href="/Ishan_Madhuranga_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-emerald-500/40 px-4 py-2 text-sm text-emerald-600 transition hover:bg-emerald-500 hover:text-white dark:border-emerald-400/40 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-black"
          >
            View CV
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 dark:border-white/10 dark:text-zinc-400"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-zinc-700 dark:text-zinc-300"
            aria-label="Open navigation"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-6 dark:border-white/10 dark:bg-[#0b0f0e] md:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="text-zinc-600 transition hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
              >
                {name}
              </a>
            ))}

            <a
              href="/Ishan_Madhuranga_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-600 dark:text-emerald-400"
            >
              View CV →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
