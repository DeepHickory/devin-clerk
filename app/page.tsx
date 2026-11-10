import Link from "next/link";
import { appConfig } from "@/app.config";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">{appConfig.description}</p>
      <p className="max-w-xl text-base text-black/60">
        Connecting dogs, cats and other pets that need a home with people who
        want to adopt, and making it easy to support the NGOs that care for
        them.
      </p>
      <Link
        href="/dashboard"
        className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Get early access →
      </Link>
      <p className="text-sm text-black/50">
        Sign up to join the early-access list and see what&apos;s coming next.
      </p>
    </section>
  );
}
