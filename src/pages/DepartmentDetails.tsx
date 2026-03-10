import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Table } from "../components/ui/Table";
import Pagination from "../components/ui/Pagination";
import { ExcelButton } from "../components/ui/ExcelButton";
import { ProductColumnNames } from "../components/features/products/ProductColumnNames";

import { allMockDepartments } from "../mock/departmentsMock";
import { mockProductsPageOne, mockProductsPageTwo, totalProducts } from "../mock/products/productListMock";

import { SquarePen } from "lucide-react";
import handleExportExcel from "../utils/handleExportExcel";
import { Button } from "../components/ui/Button";
import { DepartmentBadgeStatus } from "../components/features/department/DepartmentBadgeStatus";


function getStatusRoute(status: boolean): string {

    let route = status ? '/area/habilitar' : '/area/deshabilitar';

    return route
}


export default function DepartmentDetails() {

    const { departmentCode } = useParams<{ departmentCode: string }>();;

    const [currentPage, setCurrentPage] = useState(1);

    const currentData = currentPage === 1 ? mockProductsPageOne : mockProductsPageTwo;

    const departmentDetails = allMockDepartments.find(department => department.departmentCode === departmentCode);

    const departmentStatus = departmentDetails?.isActive;

    // control de grid en casos de overflow
    const gridControl = "wrap-break-word min-w-0";

    return (
        <div className="flex flex-col gap-6 relative pb-20">
            {/* TITULO */}
            <h1 className="text-xl font-bold text-center uppercase tracking-widest text-primary">
                Gestión de Áreas
            </h1>

            {/* INFORMACION DE AREA*/}
            <Card title={`${departmentDetails?.name} (${departmentDetails?.departmentCode})`} centerTitle>
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-foreground-muted">
                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Nombre: </span>
                            {departmentDetails?.name}
                        </p>
                        <p>
                            <span className="font-bold text-foreground-muted">Código: </span>
                            {departmentDetails?.departmentCode}
                        </p>
                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Nombre responsable: </span>
                            {departmentDetails?.responsibleName}
                        </p>
                    </div>

                    {/* boton de edicion */}
                    <Button className="absolute bottom-0 right-0 p-2 cursor-pointer" variant="invisible" to="/area/editar"
                    >
                        <SquarePen size={24} strokeWidth={1.5} />
                    </Button>
                </div>
            </Card>

            {/* ESTADO */}
            <Card>
                <div className="flex justify-between items-center text-foreground-muted">
                    <p>
                        <span className="font-bold text-foreground-muted">Estado: </span>
                        <DepartmentBadgeStatus status={departmentStatus ?? false} />
                    </p>
                    <Button className="cursor-pointer" variant="invisible" to={getStatusRoute(departmentStatus ?? false)}>
                        <SquarePen size={24} strokeWidth={1.5} />
                    </Button>
                </div>
            </Card>

            {/* TABLA DE PRODUCTOS DE DICHA AREA*/}
            <Card title="Productos" total={totalProducts}>
                <Table columns={ProductColumnNames} data={currentData} />

                <Pagination
                    currentPage={currentPage}
                    totalPages={2}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </Card>

            {/* BOTON EXCEL */}
            <ExcelButton onClick={handleExportExcel} />
        </div>
    );
}