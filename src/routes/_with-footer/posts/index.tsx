import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-footer/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-3">
      <h1>Posts</h1>
      <p>please select a post</p>
    </div>
  )
}
