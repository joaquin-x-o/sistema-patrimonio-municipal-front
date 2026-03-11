import { useState } from "react";
import { Card } from "../components/ui/Card";
import { Table } from "../components/ui/Table";
import Pagination from "../components/ui/Pagination";
import { ExcelButton } from "../components/ui/ExcelButton";


import handleExportExcel from "../utils/handleExportExcel";


import { RetirementHistoryColumnNames } from "../components/features/retirementHistory/RetirementHistoryColumnName";
import { retirementDatabaseMock } from "../mock/reports/productsRetirementMock";


export default function RetirementReport() {

    const [currentPage, setCurrentPage] = useState(1);

    const retirementReport = retirementDatabaseMock ?? [];


    // control de grid en casos de overflow
    //const gridControl = "wrap-break-word min-w-0";

    return (
        <div className="flex flex-col gap-6 relative pb-20">
            {/* TITULO */}
            <h1 className="text-xl font-bold text-center uppercase tracking-widest text-primary">
                Gestión de Reportes
            </h1>

            {/* NUMERO DE BAJAS EN EL AÑO */}
            <Card title="Reporte de productos dados de baja" centerTitle>
                <div className="flex justify-between items-center text-foreground-muted">
                    <p>
                        <span className="font-bold text-foreground-muted">Productos dados de baja este año (2026): </span>
                        {retirementReport.length}
                    </p>
                </div>
            </Card>

            {/* NUMERO DE BAJAS TOTALES */}
            <Card>
                <div className="flex justify-between items-center text-foreground-muted">
                    <p>
                        <span className="font-bold text-foreground-muted">Productos dados de baja en total: </span>
                        {retirementReport.length}
                    </p>
                </div>
            </Card>


            <Card title="Historial de bajas" total={retirementReport.length}>
                <Table columns={RetirementHistoryColumnNames} data={retirementReport} />

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