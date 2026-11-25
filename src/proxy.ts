import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Old-site redirects.
 *
 * The domain previously hosted SKV's old website (/about/, /services/,
 * service pages, uploads, etc.). Any URL that isn't a page on this site is
 * permanently (301) redirected to the homepage in a single hop, so old links
 * and search results land somewhere useful and pass their ranking to "/".
 *
 * When you add a new page, add its path to PAGES or it will redirect home.
 */
const PAGES = new Set(["/", "/privacy-policy", "/terms-of-use"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const path =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.replace(/\/+$/, "")
      : pathname;

  if (PAGES.has(path)) {
    // Real page: normalise a trailing slash ourselves, since the built-in
    // trailing-slash redirect is disabled (skipTrailingSlashRedirect) so old
    // URLs like /about/ don't take two hops to reach the homepage.
    if (path !== pathname) {
      // Built from a plain URL: NextURL.clone() would re-add the slash.
      const url = new URL(path + request.nextUrl.search, request.url);
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url), 301);
}

export const config = {
  matcher: [
    // Everything except Next.js internals and this site's own static files.
    "/((?!_next/|robots\\.txt$|sitemap\\.xml$|icon\\.png$|og-image\\.jpg$).*)",
  ],
};
