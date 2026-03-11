import { SummaryCard } from "../components/ui/SummaryCard";
import { Card } from "../components/ui/Card";
import { Bar } from "../components/ui/BarGraph";
import { useSidebar } from "../components/layout/sidebar/SidebarProvider";
import { Table } from "../components/ui/Table";
import { Button } from "../components/ui/Button";
import { ProductColumnNames } from "../components/features/products/ProductColumnNames";

import { mockProductsPageOne, totalProducts } from "../mock/products/productListMock";
import { getDept } from "../mock/departmentsMock";

import { Package, AlertTriangle, FileDown } from "lucide-react";
import { DepartmentNameFormat } from "../components/features/department/DepartmentNameFormat";
import { currentYearReports } from "../mock/reports/productsRetirementMock";


export default function Dashboard() {
    const { isExpanded, setIsExpanded } = useSidebar();

    const currentRetirementReports = currentYearReports

    return (
        <div className="flex flex-col gap-8 md:px-6 lg:px-5 py-4" >
            {/* RESUMEN PRINCIPAL */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <SummaryCard
                    title="Total Productos"
                    value={totalProducts}
                    icon={<Package size={70} strokeWidth={1.5} />}
                    bgColor="bg-primary-hover"
                    to="/producto/gestion-productos"
                />

                <SummaryCard
                    title="Pendientes Revisión"
                    value="20"
                    icon={<AlertTriangle size={70} strokeWidth={1.5} />}
                    bgColor="bg-warning"
                    to="producto/pendientes-revision"
                />

                <SummaryCard
                    title="Bajas del Año"
                    value={currentRetirementReports}
                    icon={<FileDown size={70} strokeWidth={1.5} />}
                    bgColor="bg-danger"
                    to="/gestion-reportes/bajas"
                />
            </div>


            {/* GRAFICO AREAS Y ACCIONES RAPIDAS*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    {/* grafico de gestion de areas */}
                    <Card title="GESTIÓN DE ÁREAS" footerLinkTo="/area/gestion-areas">
                        <Bar label={
                            <DepartmentNameFormat
                                departmentCode={getDept("B2").departmentCode}
                                name={getDept("B2").name}
                            />
                        } value={842} max={1000} />
                        <Bar label={
                            <DepartmentNameFormat
                                departmentCode={getDept("C4").departmentCode}
                                name={getDept("C4").name}
                            />
                        } value={654} max={1000} />
                        <Bar label={
                            <DepartmentNameFormat
                                departmentCode={getDept("T1").departmentCode}
                                name={getDept("T1").name}
                            />
                        } value={480} max={1000} />
                    </Card>
                </div>

                {/* botones de acciones rapidas generales*/}
                <div>
                    <Card title="ACCIONES RÁPIDAS" onFooterClick={() => setIsExpanded(!isExpanded)} >
                        <div className="flex flex-col gap-3 py-2">
                            <Button variant="primary" to="/producto/crear" className="w-full py-3">
                                Crear producto
                            </Button>
                            <Button variant="primary" to="/producto/editar-estado" className="w-full py-3">
                                Modificar estado de producto
                            </Button>
                            <Button variant="primary" to="/producto/transferir" className="w-full py-3">
                                Transferir producto
                            </Button>
                        </div>

                    </Card>
                </div>
            </div>

            {/* TABLA DE PRODUCTOS */}
            <div>
                <Card title="ÚLTIMOS PRODUCTOS" footerLinkTo="/producto/gestion-productos">
                    <Table columns={ProductColumnNames} data={mockProductsPageOne}></Table>
                </Card>
            </div>

        </div >
    );
}