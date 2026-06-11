import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-content flex-col items-start
                     justify-center px-6 md:px-10 lg:px-12 pt-16">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-rose mb-4">
        404 · Not found
      </p>
      <h1 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.1]
                     text-[clamp(2rem,5vw,3.4rem)] max-w-[20ch] mb-6">
        This route never <span className="volt-gradient">acked</span>.
      </h1>
      <p className="text-fog text-[15px] leading-[1.8] max-w-[52ch] mb-8">
        The page you requested does not exist. Nothing was dropped silently,
        it was just never here.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-[6px] bg-volt px-5 py-2.5
                   font-mono text-[13px] font-medium text-ground shadow-cta
                   hover:bg-volt-strong transition-colors duration-200"
      >
        Back to the homepage
      </Link>
    </main>
  );
}
