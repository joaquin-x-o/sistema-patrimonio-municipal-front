import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Table } from "../components/ui/Table";
import Pagination from "../components/ui/Pagination";
import { ExcelButton } from "../components/ui/ExcelButton";


import handleExportExcel from "../utils/handleExportExcel";

import { transferDatabaseMock } from "../mock/reports/productsMovementMock";
import { getProduct } from "../mock/products/productDetailsMock";
import { MovementHistoryColumnNames } from "../components/features/movementHistory/MovementHistoryColumnNames";



export default function MovementReport() {

    const { productCode } = useParams<{ productCode: string }>();;

    const [currentPage, setCurrentPage] = useState(1);

    const productDetails = getProduct(productCode);

    const movementReport = transferDatabaseMock[Number(productCode)] ?? [];


    // control de grid en casos de overflow
    const gridControl = "wrap-break-word min-w-0";

    return (
        <div className="flex flex-col gap-6 relative pb-20">
            {/* TITULO */}
            <h1 className="text-xl font-bold text-center uppercase tracking-widest text-primary">
                Gestión de Reportes
            </h1>

            {/* INFORMACION DEL PRODUCTO SELECCIONADO*/}
            <Card title="Reporte de traslado" centerTitle>
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

            {/* NUMERO DE TRASLADOS */}
            <Card>
                <div className="flex justify-between items-center text-foreground-muted">
                    <p>
                        <span className="font-bold text-foreground-muted">Número de traslados: </span>
                        {movementReport.length}
                    </p>
                </div>
            </Card>

            {/* UBICACION*/}
            <Card>
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-foreground-muted">
                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Ubicación actual: </span>
                            {`${movementReport[0].destinationDepartment.name} (${movementReport[0].destinationDepartment.departmentCode})`}
                        </p>
                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Ubicación previa: </span>
                            {`${movementReport[0].originDepartment.name} (${movementReport[0].originDepartment.departmentCode})`}
                        </p>
                    </div>
                </div>

            </Card>


            <Card title="Historial de traslados" total={movementReport.length}>
                <Table columns={MovementHistoryColumnNames} data={movementReport} />

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