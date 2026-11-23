/**
 * Line-art recycling symbol used as the hero's only graphic element.
 * Three identical bent arrows rotated 120° around the triangle's centroid.
 */
const ARROW =
  "M 228.0 403.7 L 228.0 339.7 L 150.9 339.7 L 170.4 305.8 L 191.2 317.8 L 173.7 236.1 L 94.2 261.8 L 115.0 273.8 L 62.0 365.6 Q 40.0 403.7, 84.0 403.7 Z";

export function RecycleOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 500 444"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      className={className}
    >
      <path d={ARROW} vectorEffect="non-scaling-stroke" />
      <path d={ARROW} transform="rotate(120 250.0 282.5)" vectorEffect="non-scaling-stroke" />
      <path d={ARROW} transform="rotate(240 250.0 282.5)" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
