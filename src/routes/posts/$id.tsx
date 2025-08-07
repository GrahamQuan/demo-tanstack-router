import PostPage from '@/components/post-page'
import { postByIdQueryOptions } from '@/network/posts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$id')({
  loader: ({ context: { queryClient }, params: { id } }) =>
    queryClient.ensureQueryData(postByIdQueryOptions(Number(id))),
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  return (
    <div className="p-3">
      <PostPage id={Number(id)} />
    </div>
  )
}
