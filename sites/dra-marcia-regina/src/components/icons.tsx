type P = { className?: string };
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function WhatsAppIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.75} className={className} aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function StarIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}

export function MapPinIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
      <path d="M7 7h10v10M7 17 17 7" />
    </svg>
  );
}

export function PlusIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
      <path d="M5 12h14M12 5v14" />
    </svg>
  );
}

export function MinusIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
      <path d="M5 12h14" />
    </svg>
  );
}
