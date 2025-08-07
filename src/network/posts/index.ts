import { queryOptions } from '@tanstack/react-query'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

// function wait(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }

export async function getPostList(): Promise<Post[]> {
  // await wait(5000)
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data
}

export async function getPostById(id: number): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  )
  const data = await response.json()
  return data
}

export const postListQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn: getPostList,
})

export const postByIdQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ['posts', id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  })
