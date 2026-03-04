import { useEffect, useState } from "react";

interface Props {
    label: string;
    value: number;
    max: number;
}

export function Bar({ label, value, max }: Props) {
    // calculo porcentaje
    const percentage = Math.round((value / max) * 100);

    // animacion barra

    const [animatedWidth, setAnimatedWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedWidth(percentage);
        }, 100);

        return () => clearTimeout(timer);
    }, [percentage]);

    return (
        <div className="flex items-center gap-4 mb-4 mx-5 last:mb-0">
            {/* label */}
            <div className="w-24 text-s, text-foreground-muted truncate">
                {label}
            </div>

            {/* barra */}
            <div className="flex-1 h-6 flex items-center">
                <div
                    className="h-full bg-primary-hover transition-all duration-1000 ease-out"
                    style={{ width: `${animatedWidth}%` }}
                ></div>
            </div>

            {/* valor que representa la barra */}
            <div className="w-10 text-right text-m text-slate-900">
                {value}
            </div>
        </div>
    );
}