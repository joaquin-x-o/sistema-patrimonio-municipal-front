import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Table } from "../components/ui/Table";
import Pagination from "../components/ui/Pagination";
import { ExcelButton } from "../components/ui/ExcelButton";


import handleExportExcel from "../utils/handleExportExcel";

import { getProduct } from "../mock/products/productDetailsMock";
import { maintenanceDatabaseMock } from "../mock/reports/productsMaintenanceMock";
import { MaintenanceHistoryColumnNames } from "../components/features/maintenanceHistory/MaintenanceHistoryColumnNames";


export default function MaintenanceReport() {

    const { productCode } = useParams<{ productCode: string }>();;

    const [currentPage, setCurrentPage] = useState(1);

    const productDetails = getProduct(productCode);

    const maintenanceReport = maintenanceDatabaseMock[Number(productCode)] ?? [];


    // control de grid en casos de overflow
    const gridControl = "wrap-break-word min-w-0";

    return (
        <div className="flex flex-col gap-6 relative pb-20">
            {/* TITULO */}
            <h1 className="text-xl font-bold text-center uppercase tracking-widest text-primary">
                Gestión de Reportes
            </h1>

            {/* INFORMACION DEL PRODUCTO SELECCIONADO*/}
            <Card title="Reporte de mantenimiento" centerTitle>
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-foreground-muted">
                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Producto: </span>
                            {productDetails?.name}
                        </p>
                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Código: </span>
                            {productDetails?.productCode}
                        </p>
                    </div>
                </div>
            </Card>

            {/* NUMERO DE ARREGLOS */}
            <Card>
                <div className="flex justify-between items-center text-foreground-muted">
                    <p>
                        <span className="font-bold text-foreground-muted">Arreglos totales: </span>
                        {maintenanceReport.length}
                    </p>
                </div>
            </Card>

            {/* ULTIMO MANTENIMIENTO HECHO*/}
            <Card>
                <div className="relative">
                    <div className="grid grid-cols-1 gap-y-4 gap-x-8 text-foreground-muted">
                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Último mantenimiento: </span>
                            {maintenanceReport[0].repairDate}
                        </p>
                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Motivo: </span>
                            {maintenanceReport[0].breakdownReason}
                        </p>
                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Reparación: </span>
                            {maintenanceReport[0].repairDescription}
                        </p>
                    </div>
                </div>

            </Card>


            <Card title="Historial de mantenimiento" total={maintenanceReport.length}>
                <Table columns={MaintenanceHistoryColumnNames} data={maintenanceReport} />

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