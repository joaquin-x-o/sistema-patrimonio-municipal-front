import { useState } from "react";

import { Table } from "../components/ui/Table";
import { Bar } from "../components/ui/BarGraph";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useSidebar } from "../components/layout/sidebar/SidebarProvider";
import { ExcelButton } from "../components/ui/ExcelButton";
import { ProductColumnNames } from "../components/features/products/ProductColumnNames";
import Pagination from "../components/ui/Pagination";

import { mockProductsPageOne, mockProductsPageTwo, totalProducts } from "../mock/products/productListMock";
import { conditionTranslations } from "../utils/productDictionaries";


export default function ProductManagement() {
    const { toggleMenu } = useSidebar();


    const [currentPage, setCurrentPage] = useState(1);

    const currentData = currentPage === 1 ? mockProductsPageOne : mockProductsPageTwo;

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

            {/* GRAFICO Y ACCIONES RAPIDAS*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/*  numero de productos segun su condicion */}
                <div className="lg:col-span-2">
                    <Card title="Productos según su condición">
                        <div className="flex flex-col gap-3 py-2">
                            <Bar
                                label={conditionTranslations["NEW"]}
                                value={20}
                                max={20}
                            />
                            <Bar
                                label={conditionTranslations["EXCELLENT"]}
                                value={16}
                                max={20}
                            />
                            <Bar
                                label={conditionTranslations["GOOD"]}
                                value={12}
                                max={20}
                            />
                            <Bar
                                label={conditionTranslations["REGULAR"]}
                                value={8}
                                max={20}
                            />
                            <Bar
                                label={conditionTranslations["BAD"]}
                                value={5}
                                max={20}
                            />
                        </div>
                    </Card>
                </div>

                {/* acciones rapidas*/}
                <Card title="ACCIONES RÁPIDAS" onFooterClick={() => toggleMenu("areas")} >
                    <div className="flex flex-col gap-3 py-2">
                        <Button variant="primary" to="/producto/crear" className="w-full py-3">
                            Crear producto
                        </Button>
                        <Button variant="primary" to="/producto/editar-estado" className="w-full py-3">
                            Modificar estado de producto
                        </Button>
                        <Button variant="danger" to="/producto/dar-de-baja" className="w-full py-3">
                            Dar de baja
                        </Button>
                    </div>
                </Card>
            </div>

            {/* SECCION INFERIOR: TABLA DE PRODUCTOS */}
            <Card title="Productos" total={totalProducts}>

                <Table columns={ProductColumnNames} data={currentData} />

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