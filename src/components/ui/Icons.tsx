import type { SVGProps } from "react";

/** Line icons drawn on a 24px grid with a 1.5px stroke. Decorative by default. */
function Svg({ children, className = "size-6", ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

type P = SVGProps<SVGSVGElement>;

export const PhoneIcon = (p: P) => (
  <Svg {...p}>
    <path d="M5 3.5h3.2l1.6 4.2-2.1 1.5a11 11 0 0 0 7.1 7.1l1.5-2.1 4.2 1.6v3.2a1.5 1.5 0 0 1-1.5 1.5A17 17 0 0 1 3.5 5 1.5 1.5 0 0 1 5 3.5Z" />
  </Svg>
);

export const WhatsAppIcon = ({ className = "size-6", ...rest }: P) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
    <path d="M12 2.2a9.7 9.7 0 0 0-8.3 14.8L2.4 21.6l4.7-1.2A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.8-2.7-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 5 5 0 0 0 1 2.6 11.3 11.3 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.4-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
  </svg>
);

export const MailIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3.5 6 8.5 7 8.5-7" />
  </Svg>
);

export const PinIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
);

export const ShieldIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
    <path d="m8.8 12 2.2 2.2 4.3-4.4" />
  </Svg>
);

export const LeafIcon = (p: P) => (
  <Svg {...p}>
    <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
    <path d="M5 19c3-4 6-6.5 9.5-8.5" />
  </Svg>
);

export const SlidersIcon = (p: P) => (
  <Svg {...p}>
    <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
    <circle cx="16" cy="7" r="2" />
    <circle cx="10" cy="17" r="2" />
  </Svg>
);

export const CogIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
  </Svg>
);

export const TruckIcon = (p: P) => (
  <Svg {...p}>
    <path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7" />
    <circle cx="6.5" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </Svg>
);

export const DocumentIcon = (p: P) => (
  <Svg {...p}>
    <path d="M6 2.8h8l4 4v14.4H6z" />
    <path d="M14 2.8v4h4M9 12h6M9 15.5h6M9 8.5h2" />
  </Svg>
);

export const RecycleIcon = (p: P) => (
  <Svg {...p}>
    <path d="m7.5 8.5 2.7-4.6a2 2 0 0 1 3.5 0l1.6 2.7" />
    <path d="m13.3 6.6 2 .1.1-2" />
    <path d="M18.6 11.5 21 15.8a2 2 0 0 1-1.7 3h-3.4" />
    <path d="m17.3 17.3-1.4 1.5 1.4 1.5" />
    <path d="M9 18.8H4.7a2 2 0 0 1-1.7-3l1.8-3.2" />
    <path d="m3.4 13.9 1.4-1.3 1.6 1" />
  </Svg>
);

export const ChevronIcon = (p: P) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const AwardIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="9" r="5.5" />
    <circle cx="12" cy="9" r="3" />
    <path d="m8.6 13.4-2.1 7.1 3.2-1.4 1.8 2.8 1-6M15.4 13.4l2.1 7.1-3.2-1.4-1.8 2.8-1-6" />
  </Svg>
);

export const LayersIcon = (p: P) => (
  <Svg {...p}>
    <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
    <path d="m3 12 9 4.5 9-4.5" />
    <path d="m3 16.5 9 4.5 9-4.5" />
  </Svg>
);

export const BuildingIcon = (p: P) => (
  <Svg {...p}>
    <path d="M3 21h18M5 21V10h4v11M9 21V4h6v17M15 21V8h4v13" />
    <path d="M11 7h2M11 10h2M11 13h2M11 16h2M6.5 13h1M6.5 16h1M16.5 11h1M16.5 14h1M16.5 17h1" />
  </Svg>
);

export const CalendarCheckIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    <path d="m9 15 2 2 4-4" />
  </Svg>
);

export const UsersIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="3" />
    <path d="M6.5 19.5a5.5 5.5 0 0 1 11 0" />
    <circle cx="5.5" cy="9.5" r="2" />
    <path d="M2.5 17.5a3.5 3.5 0 0 1 3-3.4" />
    <circle cx="18.5" cy="9.5" r="2" />
    <path d="M21.5 17.5a3.5 3.5 0 0 0-3-3.4" />
  </Svg>
);

export const ClipboardCheckIcon = (p: P) => (
  <Svg {...p}>
    <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
    <path d="M9 4.5V3.5h6v1M9 4.5v1.5h6V4.5" />
    <path d="m9 13 2 2 4-4" />
  </Svg>
);

export const MagnetIcon = (p: P) => (
  <Svg {...p}>
    <path d="M5 4h4.5v8a2.5 2.5 0 0 0 5 0V4H19v8a7 7 0 0 1-14 0V4Z" />
    <path d="M5 8h4.5M14.5 8H19" />
  </Svg>
);

export const DriveEraseIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="4" width="17" height="16" rx="2" />
    <circle cx="12" cy="11" r="4" />
    <circle cx="12" cy="11" r="0.6" />
    <path d="M7 17.5h2.5M15 17.5h2" />
  </Svg>
);

export const ShredIcon = (p: P) => (
  <Svg {...p}>
    <path d="M7 10V3.5h10V10" />
    <rect x="3.5" y="10" width="17" height="4.5" rx="1" />
    <path d="M7 14.5v6M10 14.5v4M14 14.5v5M17 14.5v3.5" />
  </Svg>
);

export const LaptopIcon = (p: P) => (
  <Svg {...p}>
    <rect x="4.5" y="5" width="15" height="10.5" rx="1.2" />
    <path d="M2.5 18.5h19l-1.5-3H4Z" />
  </Svg>
);

export const ServerIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="4" width="17" height="7" rx="1.5" />
    <rect x="3.5" y="13" width="17" height="7" rx="1.5" />
    <path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" />
  </Svg>
);

export const RouterIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="13" width="18" height="6.5" rx="1.5" />
    <path d="M7 16.25h.01M10.5 16.25h.01M7.5 13 6 7M16.5 13 18 7" />
    <path d="M9.5 6.5a3.6 3.6 0 0 1 5 0M7.8 4.6a6 6 0 0 1 8.4 0" />
  </Svg>
);

export const PrinterIcon = (p: P) => (
  <Svg {...p}>
    <path d="M7 8.5V3.5h10v5" />
    <rect x="3.5" y="8.5" width="17" height="8" rx="1.5" />
    <path d="M7 14h10v6.5H7z" />
    <path d="M16.5 11.5h.01" />
  </Svg>
);

export const ChipIcon = (p: P) => (
  <Svg {...p}>
    <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="0.6" />
    <path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3" />
  </Svg>
);

export const RackIcon = (p: P) => (
  <Svg {...p}>
    <rect x="5" y="2.8" width="14" height="18.4" rx="1.5" />
    <path d="M5 8h14M5 13h14M5 18h14M8 5.4h.01M8 10.5h.01M8 15.5h.01M11 5.4h5M11 10.5h5M11 15.5h5" />
  </Svg>
);

export const ToolsIcon = (p: P) => (
  <Svg {...p}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />
  </Svg>
);

export const BankIcon = (p: P) => (
  <Svg {...p}>
    <path d="M3 9.5 12 4l9 5.5H3Z" />
    <path d="M5 9.5v8M9.5 9.5v8M14.5 9.5v8M19 9.5v8M3.5 17.5h17M2.5 20.5h19" />
  </Svg>
);

export const FactoryIcon = (p: P) => (
  <Svg {...p}>
    <path d="M3 20.5V11l5 3.2V11l5 3.2V11l5 3.2V4h3v16.5H3Z" />
    <path d="M7 17.5h2M11.5 17.5h2M16 17.5h2" />
  </Svg>
);

export const GraduationIcon = (p: P) => (
  <Svg {...p}>
    <path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z" />
    <path d="M6.5 11.6v4.4c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3v-4.4M21.5 9.5v5" />
  </Svg>
);

export const GovernmentIcon = (p: P) => (
  <Svg {...p}>
    <path d="M7 9.5a5 5 0 0 1 10 0M12 2.5v2" />
    <path d="M4.5 9.5h15M6 9.5v8M10 9.5v8M14 9.5v8M18 9.5v8M4 17.5h16M3 20.5h18" />
  </Svg>
);
