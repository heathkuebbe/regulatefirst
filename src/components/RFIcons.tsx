type IconProps = {
  className?: string;
};

export function EnergyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M8 29c7-11 16-15 28-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 35c8-9 17-12 30-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 22c5-6 11-9 20-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AwarenessIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M6 24s7-10 18-10 18 10 18 10-7 10-18 10S6 24 6 24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function RegulationIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

export function ConnectionIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="18" cy="24" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="24" r="9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ReadIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 16c7-3 14-3 22 1v30c-8-4-15-4-22-1V16Z" />
      <path d="M54 16c-7-3-14-3-22 1v30c8-4 15-4 22-1V16Z" />
      <path d="M32 17v30" />
    </svg>
  );
}

export function ListenIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 35V29c0-9 7-17 16-17s16 8 16 17v6" />

      <rect
        x="10"
        y="30"
        width="10"
        height="20"
        rx="5"
      />

      <rect
        x="44"
        y="30"
        width="10"
        height="20"
        rx="5"
      />
    </svg>
  );
}