import { useSidebar } from "./Sidebar";

interface Props {
    logoSrc: string;
    title: string;
    subtitle: string;
}

export function SidebarHeader({ logoSrc, title, subtitle }: Props) {
    const { isExpanded } = useSidebar();

    return (
        // contenedor principal
        <div className="flex items-center min-h-[88px] border-b border-primary-hover shrink-0">

            {/* Logo */}
            <div className="w-19 mr-0 flex items-center justify-center shrink-0">
                <div className="w-11 h-11 flex items-center justify-center overflow-hidden">
                    <img
                        src={logoSrc}
                        alt={subtitle}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Titulos */}
            <div
                className={`flex flex-col items-start overflow-hidden transition-all duration-300 ${isExpanded ? "w-auto opacity-100 pr-6" : "w-0 opacity-0 pr-0"
                    }`}
            >
                <span className="text-white text-[17px] font-semibold leading-tight whitespace-nowrap">
                    {title}
                </span>
                <span className="text-gray-300 text-xs mt-0.5 whitespace-nowrap">
                    {subtitle}
                </span>
            </div>

        </div>
    );
}