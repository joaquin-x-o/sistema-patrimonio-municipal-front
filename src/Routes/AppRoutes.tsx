import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DepartmentManagement from "../pages/DepartmentManagement";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* INICIO */}
            <Route path="/" element={<Dashboard />} />

            {/* GESTION DE AREAS */}
            <Route path="/area/gestion-areas" element={<DepartmentManagement />} />

            {/* REDIRECCION A INICIO*/}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};