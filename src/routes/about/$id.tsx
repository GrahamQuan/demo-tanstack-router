import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  return (
    <div>
      <h1>Hello {id}</h1>
      <Link to="/about" className="hover:underline text-sky-500">
        back to about
      </Link>
    </div>
  )
}
