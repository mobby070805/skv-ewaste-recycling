/** Phones: section label with short lime rules either side. */
export function MobileLabel({ children }: { children: string }) {
  return (
    <p className="flex items-center justify-center gap-3 text-[0.95rem] font-extrabold tracking-[0.01em] text-[#0d4a22] uppercase">
      <span aria-hidden="true" className="h-[2px] w-9 bg-[#8ccf34]" />
      {children}
      <span aria-hidden="true" className="h-[2px] w-9 bg-[#8ccf34]" />
    </p>
  );
}
