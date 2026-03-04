import { type ReactNode } from "react";
import { SidebarItem } from "./SidebarItem";
import { SidebarTrigger } from "./SidebarTrigger";
import { SidebarContent } from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarDangerButton } from "./SideBarDangerButton";
import { SidebarMenu } from "./SidebarMenu";
import { useSidebar } from "./SidebarProvider";


// PROPS
interface Props {
  children: ReactNode;
}

// COMPONENTE PRINCIPAL 
export default function Sidebar({ children }: Props) {
  const { isExpanded, setIsExpanded } = useSidebar();

  return (
    <>
      {/* OVERLAY: Fondo oscuro (Solo móvil) */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <nav
        className={`
          bg-primary h-screen flex flex-col shadow-xl transition-all duration-300 ease-in-out
          
          /* MÓVIL */
          fixed z-50 top-0 left-0 w-72
          ${isExpanded ? "translate-x-0" : "-translate-x-full"}
          
          /* DESKTOP */
          md:relative md:translate-x-0
          ${isExpanded ? "md:w-72" : "md:w-20"}
        `}
      >
        {children}
      </nav>
    </>
  );
}

// Sub-componentes
Sidebar.Header = SidebarHeader;
Sidebar.Menu = SidebarMenu;
Sidebar.Item = SidebarItem;
Sidebar.Trigger = SidebarTrigger;
Sidebar.Content = SidebarContent;
Sidebar.DangerButton = SidebarDangerButton;
Sidebar.Footer = SidebarFooter;