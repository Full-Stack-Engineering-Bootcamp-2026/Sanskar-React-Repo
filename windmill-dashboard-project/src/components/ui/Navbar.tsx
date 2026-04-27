// import { Button } from "./button"
import { ModeToggle } from "./ModeToggle"
import { FiBell } from "react-icons/fi";
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem, } from "./dropdown-menu";
import { SidebarTrigger } from "./sidebar/sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const pages = [
    { name: "Dashboard", path: "/" },
    { name: "Forms", path: "/forms" },
    { name: "Cards", path: "/cards" },
    { name: "Charts", path: "/charts" },
    { name: "Buttons", path: "/buttons" },
    { name: "Modals", path: "/modals" },
    { name: "Tables", path: "/tables" },
    { name: "Login", path: "/login" },
    { name: "Create Account", path: "/create-account" },
    { name: "Forgot Password", path: "/forgot-password" },
    { name: "404", path: "/404" },
    { name: "Blank", path: "/blank" }
  ]
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const q = query.toLowerCase().trim();

      const matchingRoute = pages.find(page =>
        page.name.toLowerCase().includes(q)
      )

      if (matchingRoute) {
        navigate(matchingRoute.path);
      } else {
        navigate("/404");
      }
      setQuery("");
    }
  }
  return (
    <nav className="flex justify-between px-4 bg-sidebar sticky top-0 z-50 h-12 items-center">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="flex flex-1 justify-center">
        <input value={query} name="search" onKeyDown={handleKeyDown} onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Search" className=" border w-full max-w-md rounded-lg pl-3" />
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