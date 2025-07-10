import { useNavigate, useLocation } from 'react-router-dom'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar"

export default function NavMenu() {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <div className="fixed top-6 left-0 z-50 w-full">
      <Menubar className="mx-auto w-max gap-4 rounded-xl border border-black px-4 py-2 shadow-[5px_5px_0px_black]">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <MenubarMenu key={item.path}>
              <MenubarTrigger
                onClick={() => navigate(item.path)}
                className={`cursor-pointer px-4 py-1.5 rounded-md border-2 font-semibold transition-all
                  ${
                    isActive
                      ? 'bg-yellow-400 border-black shadow-[1px_1px_0px_black]'
                      : 'border-transparent hover:bg-yellow-300'
                  }`}
              >
                {item.label}
              </MenubarTrigger>
            </MenubarMenu>
          )
        })}
      </Menubar>
    </div>
  )
}
