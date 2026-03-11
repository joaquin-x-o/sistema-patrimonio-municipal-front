import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DepartmentManagement from "../pages/DepartmentManagement";
import ProductManagement from "../pages/ProductManagement";
import DepartmentDetails from "../pages/DepartmentDetails";
import ProductDetails from "../pages/ProductDetails";
import ReportManagement from "../pages/ReportManagement";
import MovementReport from "../pages/MovementReport";
import MaintenanceReport from "../pages/MaintenanceReport";
import RetirementReport from "../pages/RetirementReport";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* INICIO */}
            <Route path="/" element={<Dashboard />} />

            {/* GESTION DE AREAS */}
            <Route path="/area/gestion-areas" element={<DepartmentManagement />} />

            {/* GESTION DE PRODUCTOS */}
            <Route path="/producto/gestion-productos" element={<ProductManagement />} />

            {/* GESTION DE REPORTES */}
            <Route path="reportes/gestion-reportes" element={<ReportManagement />} />

            {/* DETALLES DE UN AREA */}
            <Route path="/area/:departmentCode" element={<DepartmentDetails />} />

            {/* DETALLES DE UN PRODUCTO*/}
            <Route path="/producto/:productCode" element={<ProductDetails />} />

            {/* REPORTE DE TRASLADOS */}
            <Route path="/gestion-reportes/traslados/:productCode" element={<MovementReport />} />

            {/* REPORTE DE TRASLADOS */}
            <Route path="/gestion-reportes/mantenimiento/:productCode" element={<MaintenanceReport />} />

            {/* REPORTE DE BAJAS */}
            <Route path="/gestion-reportes/bajas" element={<RetirementReport />} />

            {/* REDIRECCION A INICIO EN CASO DE RUTA DESCONOCIDA*/}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};