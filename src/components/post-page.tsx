import { postByIdQueryOptions } from '@/network/todos'
import { useSuspenseQuery } from '@tanstack/react-query'

export default function PostPage({ id }: { id: number }) {
  const { data: post } = useSuspenseQuery(postByIdQueryOptions(id))

  return (
    <div className="p-3 flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
