import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

/** Shared shell for short legal pages. */
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="top">
        <div className="bg-[#01341c] text-white">
          <div className="shell pt-16 pb-14 lg:pt-24 lg:pb-20">
            <h1 className="display text-[clamp(2rem,1.2rem+3.4vw,3.5rem)]">
              {title}
            </h1>
          </div>
        </div>
        <div className="shell section-y">
          <div className="max-w-[44rem] space-y-6 leading-relaxed text-[#172823]/85 [&_a]:text-[#0a5c1f] [&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#0a6a22]">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
