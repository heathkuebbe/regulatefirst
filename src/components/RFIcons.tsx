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
// -----------------------------
// Practice Icons
// -----------------------------

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 17L31 24L20 31V17Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeadphonesIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path
        d="M12 24a12 12 0 0 1 24 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <rect
        x="9"
        y="24"
        width="6"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="33"
        y="24"
        width="6"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function SunriseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path
        d="M14 30a10 10 0 0 1 20 0"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M8 34H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path d="M24 8V14" stroke="currentColor" strokeWidth="2" />
      <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" />
      <path d="M34 14L30 18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function SunsetIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path
        d="M14 30a10 10 0 0 0 20 0"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M8 34H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path d="M24 8V14" stroke="currentColor" strokeWidth="2" />
      <path d="M18 18L14 14" stroke="currentColor" strokeWidth="2" />
      <path d="M30 18L34 14" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect
        x="9"
        y="11"
        width="30"
        height="28"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M9 19H39"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M16 8V15M32 8V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path
        d="M15 17c-3 2-5 6-5 10h6v8H8v-7c0-7 3-12 7-15Z"
        fill="currentColor"
      />

      <path
        d="M33 17c-3 2-5 6-5 10h6v8h-8v-7c0-7 3-12 7-15Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PhaseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="8" r="2.5" fill="currentColor" />
      <circle cx="24" cy="16" r="2.5" fill="currentColor" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
      <circle cx="24" cy="32" r="2.5" fill="currentColor" />
      <circle cx="24" cy="40" r="2.5" fill="currentColor" />
    </svg>
  );
}

// -----------------------------
// Bigger Picture Icons
// -----------------------------

export function RegulatePathIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function StrengthenIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 38V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 24C17 22 13 17 13 11C20 11 24 16 24 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 28C32 26 36 21 36 15C29 15 24 20 24 28Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 38H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ConnectIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle
        cx="18"
        cy="24"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="30"
        cy="24"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M21 24H27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AwakenIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path
        d="M10 34H38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 30C17 24 20 21 24 21C28 21 31 24 33 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M24 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 16L18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 16L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 26H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 26H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}