import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="transition-colors">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
          06 — GET IN TOUCH
        </p>

        <h2 className="mt-5 text-4xl font-bold text-zinc-900 sm:text-5xl dark:text-white">
          GET IN TOUCH
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-zinc-600 dark:text-zinc-500">
          Thank you for visiting my portfolio. Feel free to reach out to connect
          or learn more about my experience, projects, and work as a software
          engineer.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:ishanmadhuranga99@gmail.com"
            aria-label="Send me an email"
            className="flex items-center gap-2.5 rounded-lg bg-emerald-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-emerald-400 dark:text-black dark:hover:bg-emerald-300"
          >
            <Mail className="h-4 w-4" />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ishan-madhuranga"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="flex items-center gap-2.5 rounded-lg border border-zinc-300 px-5 py-3.5 text-sm text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/30 dark:hover:bg-white/5"
          >
            <FaLinkedinIn className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/IshanMK"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my GitHub profile"
            className="flex items-center gap-2.5 rounded-lg border border-zinc-300 px-5 py-3.5 text-sm text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/30 dark:hover:bg-white/5"
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>ishanmadhuranga99@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Colombo, Sri Lanka</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
