import { UserRound } from "lucide-react";
import Searchbar from "../../ui/Searchbar";

export default function Topbar() {
    return (
        <header className="h-[88px] bg-white border-b border-muted flex items-center px-8 gap-10 shrink-0">

            {/* margen izquierdo */}
            <div className="w-10" shrink-0></div>

            {/* barra de busqueda */}
            <div className="flex-1 flex justify-center">
                <Searchbar placeholder="Buscar producto por su nombre o código..." className="flex-1 max-w-2xl min-w-[150px]" />
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