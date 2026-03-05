import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    value: string | number;
    icon: ReactNode;
    bgColor: string;
    to: string
}

export function SummaryCard({ title, value, icon, bgColor, to }: Props) {

    const cardContent = (
        <div className={`${bgColor} rounded-xl p-6 text-white flex justify-between items-center shadow-lg transition-transform hover:scale-[1.02] overflow-x-hidden cursor-pointer`}>
            <div className="flex flex-col min-w-0 flex-1">
                <span className="text-sm font-bold uppercase tracking-wider opacity-100 truncate">
                    {title}
                </span>

                <span className="text-4xl md:text-5xl font-extrabold mt-2 break-all leading-tight">
                    ({value})
                </span>
            </div>

            <div className="opacity-75 shrink-0 ml-4">
                {icon}
            </div>
        </div>
    )

    return (
        <Link to={to}>
            {cardContent}
        </Link>
    );

}