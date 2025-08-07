import { createFileRoute, Link } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const LazyUI = lazy(() => import('@/components/lazy-ui'))

export const Route = createFileRoute('/about/')({
  component: Page,
})

function Page() {
  return (
    <div className="text-center flex flex-col gap-3">
      <h1>About data</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyUI />
      </Suspense>
      <Link
        to="/about/$id"
        params={{ id: '1' }}
        className="hover:underline text-sky-500"
      >
        About 1
      </Link>
    </div>
  )
}
