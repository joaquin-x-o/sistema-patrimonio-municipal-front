import { Link } from "react-router-dom";

interface Props {
    label: string;
    to?: string;
    onClick?: () => void
}

export function FooterLink({ label, to, onClick }: Props) {

    const style = "text-sm text-primary-hover font-bold underline transition-all opacity-60 hover:opacity-100 bg-transparent border-none cursor-pointer";

    if (onClick) {
        return (
            <button onClick={onClick} className={style}>
                {label}
            </button>
        );
    }

    if (to) {
        return (
            <Link to={to} className={style}>
                {label}
            </Link>
        );
    }

    return null;
}