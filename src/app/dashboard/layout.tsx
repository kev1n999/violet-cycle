import { AppSidebar } from "@/src/components/dashboard/sidebar";
import { Particles } from "@/src/components/ui/particles";
import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Particles className="relative min-h-screen bg-violet-100">
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </Particles>
  )
}
