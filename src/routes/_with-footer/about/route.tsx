import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-footer/about')({
  component: RouteLayout,
})

function RouteLayout() {
  return (
    <div>
      <div className="text-sky-500">About Layout</div>
      <div className="size-[200px] border border-sky-500">
        <Outlet />
      </div>
    </div>
  )
}
