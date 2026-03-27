import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: RootNotFound,
})

function RootNotFound() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
          Page Not Found
        </p>
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">404</h1>
        <p className="text-neutral-600">
          The page you requested does not exist or has moved.
        </p>
      </div>
    </main>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <Link
          to="/NORCagent"
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-orange-600 px-8 py-5 text-base font-bold tracking-wide text-white shadow-[0_8px_32px_rgba(234,88,12,0.6)] ring-4 ring-orange-500/30 transition-all hover:scale-105 hover:bg-orange-500 hover:shadow-[0_12px_40px_rgba(234,88,12,0.75)] active:scale-95 active:bg-orange-700"
        >
          <span className="text-xl">💬</span>
          AskNORC
        </Link>
        {import.meta.env.DEV ? (
          <TanStackRouterDevtools position="bottom-right" />
        ) : null}
        <Scripts />
      </body>
    </html>
  )
}
