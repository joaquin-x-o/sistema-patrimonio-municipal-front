import type { ReactNode } from "react";
import { FooterLink } from "./FooterLink";

interface Props {
    title: string;
    children: ReactNode;

    footerLinkTo?: string;
    footerLinkLabel?: string;
    onFooterClick?: () => void;
}

export function Card({ title, children, footerLinkTo, footerLinkLabel = "Ver todos", onFooterClick }: Props) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full">
            {/* titulo */}
            <div className="p-4 border-b border-slate-200">
                <h2 className="text-foreground-muted font-bold uppercase text-sm tracking-wide">
                    {title}
                </h2>
            </div>

            {/* contenido */}
            <div className="p-5 flex-1">
                {children}
            </div>

            {/* el footer solo se renderizara si existe realmente una accion al darle click */}
            {(footerLinkTo || onFooterClick) && (
                <div className="p-3 border-t border-slate-50 flex justify-center">
                    <FooterLink
                        label={footerLinkLabel}
                        to={footerLinkTo}
                        onClick={onFooterClick}
                    />
                </div>
            )}
        </div>
    );
}