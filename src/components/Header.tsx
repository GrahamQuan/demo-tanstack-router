import { NAV_ITEMS_LIST } from '@/constants/data'
import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold flex gap-3 items-center">
          {NAV_ITEMS_LIST.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
