import { use } from 'react'

// Create a stable Promise outside the component to avoid re-creating on every render
// const delay = new Promise<string>((resolve) => {
//   setTimeout(() => resolve('Big Component Loaded!'), 3000)
// })

async function fetchData(): Promise<{ title: string; userId: number }> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  return data
}

const dataPromise = fetchData()

export default function LazyUI() {
  const { title, userId } = use(dataPromise)

  return (
    <div className="text-red-500">
      {title}: {userId}
    </div>
  )
}
