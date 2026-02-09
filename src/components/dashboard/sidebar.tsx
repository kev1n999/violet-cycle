// components/app-sidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-6 bg-violet-100">
        <h1 className="text-2xl text-violet-500 font-extrabold">Violet Cycle Dashboard</h1>
      </SidebarHeader>
      <div className="bg-violet-400 min-h-0.5"></div>
      <SidebarContent className="bg-violet-100">
        <SidebarGroup>
          {/* Items */}
          <ul className="flex flex-col">
            <NavItem href="/dashboard" content="Dashboard"/>
            <NavItem href="/dashboard/settings" content="Settings" />
            <NavItem href="/dashboard/about" content="About"/>
          </ul>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-violet-200">
        <SidebarMenu>
          <SidebarGroup>
            <SidebarMenuButton className="bg-violet-100 cursor-pointer transition-colors hover:bg-violet-300">
              <User2 className="text-violet-500"/> <p className="text-violet-500">Username</p>
            </SidebarMenuButton>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

import { useSidebar } from "@/src/components/ui/sidebar"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { NavItem } from "../navitem"
import { User2 } from "lucide-react"

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar()

  return <button onClick={toggleSidebar}>Toggle Sidebar</button>
}
