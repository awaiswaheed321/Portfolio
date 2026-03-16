interface SectionHeadingProps {
  /** e.g. "02 / EXPERIENCE" */
  label: string;
  /** e.g. "Work Experience" */
  title: string;
  /** Optional one-liner below the title */
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      {/* Numbered accent label */}
      <p
        className="text-xs font-semibold tracking-[0.1em] uppercase
                   text-[var(--accent)] mb-3"
      >
        {label}
      </p>

      {/* Main heading */}
      <h2
        className="text-3xl font-bold tracking-tight
                   text-[var(--text-primary)]"
      >
        {title}
      </h2>

      {/* Optional descriptor */}
      {description && (
        <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-xl">
          {description}
        </p>
      )}

      {/* Teal accent bar */}
      <div className="mt-3 w-10 h-[3px] bg-[var(--accent)] rounded-full" />
    </div>
  );
}
