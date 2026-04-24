// import { Button } from "./button"
import { ModeToggle } from "./ModeToggle"
import { FiBell } from "react-icons/fi";
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem, } from "./dropdown-menu";
import { SidebarTrigger } from "./sidebar/sidebar";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 bg-sidebar sticky top-0 z-50 h-12 items-center">
      <div className="md:hidden">
      <SidebarTrigger/>
      </div>
      <div className="flex flex-1 justify-center">
        <input type="search" placeholder="Search" className=" border w-full max-w-md rounded-lg pl-3" />
      </div>
      <div className="flex items-center  gap-6 ">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:cursor-pointer" asChild>
            <FiBell />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              Messages
            </DropdownMenuItem>
            <DropdownMenuItem>
              Sales
            </DropdownMenuItem>
            <DropdownMenuItem>
              Alert
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="hover:cursor-pointer">
            <img className="size-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


      </div>

    </nav>
  )
}

export default Navbar