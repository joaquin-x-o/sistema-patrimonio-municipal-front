import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {

        const mainContent = document.querySelector("main");
        if (mainContent) {
            mainContent.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};