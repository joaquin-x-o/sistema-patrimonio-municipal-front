import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "danger" | "warning" | "success" | "neutral";

interface Props {
    children?: ReactNode;
    variant?: ButtonVariant;
    className?: string;
    icon?: ReactNode;
    to?: string
}

export function Button({ children, variant = "primary", className = "", icon, to }: Props) {

    const baseStyles = "flex items-center justify-center gap-2 px-4 py-2 rounded-md text-lg font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-sm";

    const variantStyles: Record<ButtonVariant, string> = {
        primary: "bg-primary-hover text-foreground hover:opacity-90",
        danger: "bg-danger text-foreground hover:opacity-90",
        warning: "bg-warning text-foreground hover:opacity-90",
        success: "bg-success text-foreground hover:opacity-90",
        neutral: "bg-neutral text-foreground hover:opacity-90",
    };

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses}>
                {icon && <span>{icon}</span>}
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses}>
            {icon && <span>{icon}</span>}
            {children}
        </button>
    );
}