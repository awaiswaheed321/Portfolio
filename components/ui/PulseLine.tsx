/**
 * The signature element: an oscilloscope trace with one ECG blip.
 * A dim base line carries a traveling volt segment (CSS dash animation,
 * normalized via pathLength). Static under prefers-reduced-motion.
 */
export default function PulseLine({ className = '' }: { className?: string }) {
  const d =
    'M0 24 H236 L250 24 258 31 270 6 282 38 292 24 H600';

  return (
    <svg
      viewBox="0 0 600 48"
      preserveAspectRatio="none"
      aria-hidden
      className={`block h-12 w-full ${className}`}
    >
      <path d={d} pathLength={600} fill="none" strokeWidth="1.5" className="pulse-base" />
      <path d={d} pathLength={600} fill="none" strokeWidth="1.5" className="pulse-trace" />
    </svg>
  );
}
