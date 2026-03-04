import { Menu, UserRound } from "lucide-react";
import Searchbar from "../../ui/Searchbar";
import { useSidebar } from "../sidebar/SidebarProvider";

export default function Topbar() {

    const { setIsExpanded } = useSidebar();

    return (
        <header className="h-[88px] bg-white border-b border-muted flex items-center justify-between px-4 md:px-8 gap-4 shrink-0">

            <div className="w-10 shrink-0 flex items-center">
                {/* MOVIL */}
                <button
                    onClick={() => setIsExpanded(true)}
                    className="md:hidden p-2 text-primary rounded-md"
                >
                    <Menu size={24} />
                </button>

                {/* DESKTOP */}
                <div className="hidden md:block w-full h-full"></div>
            </div>

            {/* barra de busqueda */}
            <div className="flex-1 flex justify-center">
                <Searchbar placeholder="Buscar producto..." className="w-full max-w-[220px] sm:max-w-md md:max-w-2xl" />
            </div>

            {/* icono de usuario */}
            <div className="w-10 flex justify-end shrink-0">
                <button className="group w-10 h-10 rounded-full border-2 border-primary bg-transparent flex items-center justify-center hover:bg-primary cursor-pointer transition-all duration-100">
                    <UserRound
                        size={20}
                        className="text-primary group-hover:text-white transition-colors duration-100"
                    />
                </button>
            </div>

        </header>
    );
}