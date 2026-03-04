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

  const { isExpanded } = useSidebar();

  return (
    <nav className={`bg-primary h-screen transition-all duration-300 flex flex-col shadow-xl ${isExpanded ? "w-72" : "w-20"}`}>
      {children}
    </nav>
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