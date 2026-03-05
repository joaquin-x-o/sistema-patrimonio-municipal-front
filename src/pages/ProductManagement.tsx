import { Table } from "../components/ui/Table";
import { Bar } from "../components/ui/BarGraph";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { DepartmentColumnNames } from "../components/features/department/DepartmentColumnNames";
import { useSidebar } from "../components/layout/sidebar/SidebarProvider";
import { DepartmentNameFormat } from "../components/features/department/DepartmentNameFormat";

import { getDept, mockAreasPageOne, mockAreasPageTwo, totalDepartments } from "../mock/departmentsMock";
import Pagination from "../components/ui/Pagination";
import { useState } from "react";
import { ExcelButton } from "../components/ui/ExcelButton";

export default function ProductManagement() {
    const { toggleMenu } = useSidebar();


    const [currentPage, setCurrentPage] = useState(1);

    const currentData = currentPage === 1 ? mockAreasPageOne : mockAreasPageTwo;

    // funcion provisoria
    const handleExportExcel = () => {
        alert("Se descargó el Excel.");
    };

    return (
        <div className="flex flex-col gap-8">
            {/* TITULO */}
            <h1 className="text-xl font-bold text-center uppercase tracking-widest text-primary">
                Gestión de Productos
            </h1>

            {/* GRÁFICO Y ACCIONES RAPIDAS*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/*  numero de productos segun su condicion */}
                <div className="lg:col-span-2">
                    <Card title="Producto">
                        <div className="flex flex-col gap-4 py-4">
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
                        </div>
                    </Card>
                </div>

                {/* acciones rapidas*/}
                <Card title="ACCIONES RÁPIDAS" onFooterClick={() => toggleMenu("productos")}>
                    <div className="flex flex-col gap-3 py-2">
                        <Button variant="primary" className="w-full py-3">
                            Crear nueva área
                        </Button>
                        <Button variant="primary" className="w-full py-3">
                            Editar área
                        </Button>
                        <Button variant="danger" className="w-full py-3">
                            Eliminar área
                        </Button>
                    </div>
                </Card>
            </div>

            {/* SECCIÓN INFERIOR: TABLA DE ÁREAS */}
            <Card title="Áreas" total={totalDepartments}>

                <Table columns={DepartmentColumnNames} data={currentData} />

                <Pagination
                    currentPage={currentPage}
                    totalPages={2}
                    onPageChange={(page) => setCurrentPage(page)}
                />

            </Card>

            {/* BOTON FLOTANTE PARA EXPORTAR EXCEL */}
            <ExcelButton onClick={handleExportExcel}></ExcelButton>

        </div>
    );


}