import { Link } from '@tanstack/react-router'

export default function NotFound() {
  return (
    <div>
      <p>Page not found</p>
      <Link to="/">Back to home</Link>
    </div>
  )
}
