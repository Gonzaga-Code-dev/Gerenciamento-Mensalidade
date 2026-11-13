type P = { className?: string };
const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function WhatsAppIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}
export function PinIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
export function StarIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5z" />
    </svg>
  );
}
export function ClockIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}
export function ChatIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <path d="M4.5 18.5l1.2-3.6A7.5 7.5 0 1 1 9 18.6l-4.5-.1z" />
    </svg>
  );
}
export function SearchIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5 5" />
    </svg>
  );
}
export function ClipboardIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
      <path d="M9 4.5h6v2.5H9zM8.5 11h7M8.5 14.5h7M8.5 18h4" />
    </svg>
  );
}
export function CalendarIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4M9 14.5l2 2 4-4" />
    </svg>
  );
}
export function LeafIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z" />
      <path d="M5 19l7-7" />
    </svg>
  );
}
export function DropIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <path d="M12 3.5s6 6.4 6 10.5a6 6 0 0 1-12 0c0-4.1 6-10.5 6-10.5z" />
    </svg>
  );
}
export function StrandsIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <path d="M7 20c0-6 3-8 3-16M12 20c0-6 2-9 2-16M17 20c0-5-2-8-1-16" />
    </svg>
  );
}
export function SparkIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4M7 7l2 2M15 15l2 2M17 7l-2 2M9 15l-2 2" />
    </svg>
  );
}
export function UserIcon({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" {...line} className={className} aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" />
    </svg>
  );
}
