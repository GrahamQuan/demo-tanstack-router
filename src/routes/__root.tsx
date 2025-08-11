import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { QueryClient } from '@tanstack/react-query'

import Header from '../components/Header'
import NotFound from '@/components/not-found'
import TopLoadingBar from '@/components/top-loading-bar'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return (
    <>
      <TopLoadingBar />
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  )
}
