import { postListQueryOptions } from '@/network/posts'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'

export default function PostsSider() {
  const postsQuery = useSuspenseQuery(postListQueryOptions)
  const posts = postsQuery.data

  return (
    <div className="w-[300px] border-r border-slate-500 p-3 h-[calc(100vh-64px)] overflow-y-auto sticky top-0 no-scrollbar">
      <ul className="w-full flex flex-col gap-2">
        {posts.map((post) => (
          <li key={post.id} className="w-full">
            <Link
              to={'/posts/$id'}
              params={{ id: post.id.toString() }}
              title={post.title}
              className="hover:text-sky-500 hover:underline line-clamp-1"
              activeProps={{
                className: 'text-sky-500',
              }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
