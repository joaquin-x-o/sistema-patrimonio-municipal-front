import { Link } from "react-router-dom";

type ButtonVariant = 'primary' | 'danger'

interface Props {
    label: string;
    to: string;
    bgColor?: ButtonVariant;
}

export function QuickActionButton({ label, to, bgColor = 'primary' }: Props) {


    const baseStyles = 'block w-full text-center px-4 py-2 mb-2 rounded transition-colors font-medium';

    // los botones pueden ser azules (primary) o rojos (danger) dependiendo de su contenido
    const variantStyles: Record<ButtonVariant, string> = {
        primary: 'text-foreground bg-primary-hover hover:bg-primary',
        danger: 'text-foreground bg-danger hover:bg-red-700'
    };

    return (
        <Link to={to} className={`${baseStyles} ${variantStyles[bgColor]}`}>
            {label}
        </Link>
    );
}