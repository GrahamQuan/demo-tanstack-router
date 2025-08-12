import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-footer')({
  component: WithFooterComponent,
})

function WithFooterComponent() {
  return (
    <div>
      <div className="p-5 border-2 border-red-500">
        <Outlet />
      </div>
      <footer className="p-5 border-2 border-blue-500">_withFooter</footer>
    </div>
  )
}
