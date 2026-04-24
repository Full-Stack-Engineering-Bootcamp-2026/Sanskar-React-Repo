import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarGroupContent,
    useSidebar
} from "@/components/ui/sidebar/sidebar"
import { FaHouse } from "react-icons/fa6";
import { LuNotepadText } from "react-icons/lu";
import { PiCardsThreeBold } from "react-icons/pi";
import { FaChartPie } from "react-icons/fa";
import { HiOutlineCursorClick } from "react-icons/hi";
import { PiCards } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuBlocks } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "../button";
const sidebarItems = [
    { name: "Dashboard", path: "/", icon: FaHouse },
    { name: "Forms", path: "/forms", icon: LuNotepadText },
    { name: "Cards", path: "/cards", icon: PiCardsThreeBold },
    { name: "Charts", path: "/charts", icon: FaChartPie },
    { name: "Buttons", path: "/buttons", icon: HiOutlineCursorClick },
    { name: "Modals", path: "/modals", icon: PiCards },
    { name: "Tables", path: "/tables", icon: GiHamburgerMenu },
    {
        name: "Pages",
        icon: LuBlocks,
        children: [
            { name: "Login", path: "login" },
            { name: "Create Account", path: "create-account" },
            { name: "Forgot Password", path: "forgot-password" },
            { name: "404", path: "404" },
            { name: "blank", path: "blank" }
        ]
    },
    { name: "Create Account", path: "/create-account", type: "button", suffix: "+" }
]

export function AppSidebar() {
    const { setOpenMobile } = useSidebar();
    const sidebarGrps = sidebarItems.map(item => {
        if (item.children) {
            return (
                <SidebarGroup>
            <Accordion type="single" collapsible>
                <AccordionItem value="pages">
                    <AccordionTrigger className="flex gap-4 items-center">
                        <LuBlocks />
                        <span>Pages</span>
                    </AccordionTrigger>

                    <AccordionContent className="ml-6 mt-2 flex flex-col gap-2 decoration-0">
                        {item.children.map((child) => (
                            <NavLink
                                key={child.path}
                                to={`/${child.path}`}
                                onClick={() => setOpenMobile(false)}
                                className="text-sm hover:text-primary"
                            >
                                {child.name}
                            </NavLink>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </SidebarGroup>
            )
        }
        if (item.type === "button") {
            return <SidebarGroup>
                <NavLink
                    to={item.path}
                    className={({ isActive }) => isActive ? "font-bold scale-110" : ""}
                    onClick={() => setOpenMobile(false)}
                >
                    <SidebarGroupContent className="flex gap-4 items-center">
                        <Button className="flex w-full justify-between h-10" variant={"purple"}>
                            <h1>{item.name}</h1>
                            <h1>{item.suffix}</h1>
                        </Button>
                    </SidebarGroupContent>
                </NavLink>
            </SidebarGroup>
        }
        return <SidebarGroup>
            <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? "font-bold scale-110 duration-300" : ""}
                onClick={() => setOpenMobile(false)}
            >
                <SidebarGroupContent className="flex gap-4 items-center">
                    <item.icon /> <h1>{item.name}</h1>
                </SidebarGroupContent>
            </NavLink>
        </SidebarGroup>
    })

    return (
        <Sidebar>
            <SidebarHeader className="p-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <h1 className="font-inter font-extrabold text-[18px]">Windmill</h1>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="p-3 font-inter font-bold text-[14px] flex flex-col gap-3" >
                {sidebarGrps}
            </SidebarContent>
        </Sidebar>
    )
}