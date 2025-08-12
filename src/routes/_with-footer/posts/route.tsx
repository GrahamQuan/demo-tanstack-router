import { postListQueryOptions } from '@/network/posts'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import PostsSider from '@/components/posts-sider'
import { Suspense } from 'react'

export const Route = createFileRoute('/_with-footer/posts')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postListQueryOptions),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex gap-3">
      <Suspense fallback={<div>Loading...</div>}>
        <PostsSider />
      </Suspense>
      <Outlet />
    </div>
  )
}
