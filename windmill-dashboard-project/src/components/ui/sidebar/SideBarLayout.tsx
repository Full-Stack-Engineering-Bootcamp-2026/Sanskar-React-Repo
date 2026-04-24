import { SidebarProvider } from "@/components/ui/sidebar/sidebar"
import { AppSidebar } from "@/components/ui/sidebar/app-sidebar"
import Navbar from "../Navbar"
import { Outlet } from "react-router-dom"

export default function SideBarLayout() {

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}