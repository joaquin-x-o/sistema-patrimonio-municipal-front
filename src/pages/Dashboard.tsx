import { Package, AlertTriangle, FileDown } from "lucide-react";
import { SummaryCard } from "../components/ui/SummaryCard";
import { Card } from "../components/ui/Card";
import { Bar } from "../components/ui/BarGraph";
import { useSidebar } from "../components/layout/sidebar/SidebarProvider";
import { QuickActionButton } from "../components/ui/QuickActionButton";
import { Table } from "../components/ui/Table";
import { ProductCell } from "../components/features/products/ProductCell";
import { mockProductsPageOne } from "../mock/productsMock";



export default function Dashboard() {
    const { isExpanded, setIsExpanded } = useSidebar();

    return (
        <div className="flex flex-col gap-8 md:px-6 lg:px-5 py-4" >
            {/* RESUMEN PRINCIPAL */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <SummaryCard
                    title="Total Productos"
                    value="26.304"
                    icon={<Package size={70} strokeWidth={1.5} />}
                    bgColor="bg-primary-hover"
                />

                <SummaryCard
                    title="Pendientes Revisión"
                    value="20"
                    icon={<AlertTriangle size={70} strokeWidth={1.5} />}
                    bgColor="bg-warning"
                />

                <SummaryCard
                    title="Bajas del Año"
                    value="0"
                    icon={<FileDown size={70} strokeWidth={1.5} />}
                    bgColor="bg-danger"
                />
            </div>


            {/* GRAFICO AREAS Y ACCIONES RAPIDAS*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    {/* grafico de gestion de areas */}
                    <Card title="GESTIÓN DE ÁREAS" footerLinkTo="/gestion-areas">
                        <Bar label="Patrimonio" value={842} max={1000} />
                        <Bar label="Cultura" value={654} max={1000} />
                        <Bar label="Tránsito" value={480} max={1000} />
                    </Card>
                </div>

                {/* botones de acciones rapidas generales*/}
                <div>
                    <Card title="ACCIONES RÁPIDAS" onFooterClick={() => setIsExpanded(!isExpanded)} >
                        <QuickActionButton
                            label="Crear nuevo producto"
                            to="/producto/crear"
                        />

                        <QuickActionButton
                            label="Modificar estado de producto"
                            to="/producto/editar-estado"
                        />

                        <QuickActionButton
                            label="Transferir producto"
                            to="/producto/transferir"
                        />

                    </Card>
                </div>
            </div>

            {/* TABLA DE PRODUCTOS */}
            <div>
                <Card title="ÚLTIMOS PRODUCTOS" footerLinkTo="/producto/gestion-productos">
                    <Table columns={ProductCell} data={mockProductsPageOne}></Table>
                </Card>
            </div>

        </div >
    );
}