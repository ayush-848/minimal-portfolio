import { useNavigate } from 'react-router-dom'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar"

export default function NavMenu() {
  const navigate = useNavigate()

  return (
    <div className="fixed top-6 left-0 z-50 w-full">
      <Menubar className="mx-auto w-max gap-4 rounded-xl border border-black px-4 py-2 shadow-[5px_5px_0px_black]">
        {/* HOME */}
        <MenubarMenu>
          <MenubarTrigger onClick={() => navigate('/')}>Home</MenubarTrigger>
        </MenubarMenu>

        {/* PROJECTS */}
        <MenubarMenu>
          <MenubarTrigger onClick={() => navigate('/projects')}>Projects</MenubarTrigger>
        </MenubarMenu>

        {/* RESUME */}
        <MenubarMenu>
          <MenubarTrigger onClick={() => navigate('/resume')}>Resume</MenubarTrigger>
        </MenubarMenu>

        {/* CONTACT */}
        <MenubarMenu>
          <MenubarTrigger onClick={() => navigate('/contact')}>Contact</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
