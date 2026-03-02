import { Search } from "lucide-react";

interface Props {
    placeholder: string;
    className?: string; // opcional para establecer diferentes tamaños desde el componente padre
}


export default function Searchbar({ placeholder, className }: Props) {
    return (
        <div className={`relative flex items-center ${className}`}>
            <Search className="absolute left-4 text-gray-400" size={20} />
            <input
                type="text"
                placeholder={placeholder}
                className="w-full bg-surface-muted text-gray-700 placeholder:text-foreground-mute rounded-full py-2.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-sidebar transition-all"
            />
        </div>
    );


}

