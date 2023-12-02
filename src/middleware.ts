import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ja'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'ja',

  localePrefix: 'as-needed',

  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(ja|en)/:path*']
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};