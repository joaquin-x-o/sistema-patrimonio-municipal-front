import { createContext, useContext, useState, type ReactNode } from "react";
import { SidebarItem } from "./SidebarItem";
import { SidebarTrigger } from "./SidebarTrigger";
import { SidebarContent } from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarDangerButton } from "./SideBarDangerButton";
import { SidebarMenu } from "./SidebarMenu";

interface SidebarContextType {
  openMenu: string | null;
  toggleMenu: (name: string) => void;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

// CONTEXTO
const SidebarContext = createContext<SidebarContextType | null>(null);

// CUSTOM HOOK
export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within Sidebar");
  }

  return context;
};

// PROPS
interface Props {
  children: ReactNode;
}

// COMPONENTE PRINCIPAL 
export default function Sidebar({ children }: Props) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // function para determinar si el menú está abierto o no
  const toggleMenu = (name: string) => {
    if (!isExpanded) {
      setIsExpanded(true);
      setOpenMenu(name);
      return;
    }
    setOpenMenu(prev => prev === name ? null : name);
  };

  //
  return (
    <SidebarContext.Provider value={{ openMenu, toggleMenu, isExpanded, setIsExpanded }}>
      {/* render solo del navbar */}
      <nav className={`bg-sidebar h-screen transition-all duration-300 flex flex-col shadow-xl ${isExpanded ? "w-72" : "w-20"}`}>
        {children}
      </nav>
    </SidebarContext.Provider>
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