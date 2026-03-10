import { useState } from "react";

import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { CircleQuestionMarkIcon } from "lucide-react";
import { ModalSearchList } from "../components/ui/ModalSearchList";

import { productListMaintanceReportMock } from "../mock/reports/productsMaintenanceMock";
import { productListTransferReportMock } from "../mock/reports/productsMovementMock";

import type { ProductLightResponse } from "../interfaces/productResponse";
import { ProductSearchListFormat } from "../components/features/products/ProductSearchListFormat";

export default function ReportManagement() {

    const navigate = useNavigate();

    // estados para manejar los inputs y modales de los primeros dos reportes
    const [maintenanceCode, setMaintenanceCode] = useState("");
    const [transferCode, setTransferCode] = useState("");

    const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
    const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);


    // funciones para navegar hacia la ruta indicada
    const handleMaintenanceInput = (e: React.FormEvent) => {
        e.preventDefault();

        const code = maintenanceCode.trim();
        if (code) navigate(`/producto/${code}`);
    };

    const handleTransferInput = (e: React.FormEvent) => {
        e.preventDefault();

        const code = transferCode.trim();
        if (code) navigate(`/producto/${code}`);
    };

    return (
        <div className="flex flex-col gap-8">
            {/* TITULO */}
            <h1 className="text-xl font-bold text-center uppercase tracking-widest text-primary">
                Gestión de Reportes
            </h1>

            {/* REPORTES DISPONIBLES*/}
            <div className="grid grid-cols-1 gap-6">

                {/* Mantenimiento*/}
                <Card title="Reporte de mantenimiento">
                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-foreground-muted">
                            Escriba el código del producto al que quiere ver su reporte:
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <form onSubmit={handleMaintenanceInput} className="flex flex-wrap items-center gap-4">
                                <div className="w-64">
                                    <Input
                                        id="input-mantenimiento"
                                        type="text"
                                        placeholder="Ej: 101"
                                        value={maintenanceCode}
                                        onChange={(e) => setMaintenanceCode(e.target.value)}
                                    />
                                </div>

                                <Button
                                    variant="invisible"
                                    className="p-2 text-sm"
                                    onClick={() => setIsMaintenanceModalOpen(true)}
                                    aria-label="Buscar producto"
                                >
                                    Ver productos <CircleQuestionMarkIcon size={20} />
                                </Button>

                                <div className="flex flex-wrap items-center gap-4">
                                    <Button
                                        variant="neutral"
                                        className="text-sm py-2"
                                        onClick={() => setMaintenanceCode("")}
                                        disabled={!maintenanceCode}
                                    >
                                        Cancelar
                                    </Button>

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="text-sm py-2"
                                        disabled={!maintenanceCode}
                                    >
                                        Ver reporte
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>

                {/* Traslado */}
                <Card title="Reporte de traslados">
                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-foreground-muted">
                            Escriba el código del producto al que quiere ver su reporte:
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <form onSubmit={handleTransferInput} className="flex flex-wrap items-center gap-4">
                                <div className="w-64">
                                    <Input
                                        id="input-taslado"
                                        type="text"
                                        placeholder="Ej: 101"
                                        value={transferCode}
                                        onChange={(e) => setTransferCode(e.target.value)}
                                    />
                                </div>

                                <Button
                                    variant="invisible"
                                    className="p-2 text-sm"
                                    onClick={() => setIsTransferModalOpen(true)}
                                    aria-label="Buscar producto"
                                >
                                    Ver productos <CircleQuestionMarkIcon size={20} />
                                </Button>

                                <div className="flex flex-wrap items-center gap-4">
                                    <Button
                                        variant="neutral"
                                        className="text-sm py-2"
                                        onClick={() => setTransferCode("")}
                                        disabled={!transferCode}
                                    >
                                        Cancelar
                                    </Button>

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="text-sm py-2"
                                        disabled={!transferCode}
                                    >
                                        Ver reporte
                                    </Button>
                                </div>
                            </form>


                        </div>
                    </div>
                </Card>

                {/* PRODUCTOS DADOS DE BAJA */}
                <Card title="Reporte de productos dados de baja">
                    <div className="flex flex-row gap-5">
                        <Button className="text-sm" to="/reportes/productos-baja"> Ver reporte </Button>
                    </div>
                </Card>
            </div >


            {/* MODAL PARA MANTENIMIENTO */}
            <ModalSearchList<ProductLightResponse>
                isOpen={isMaintenanceModalOpen}
                onClose={() => setIsMaintenanceModalOpen(false)}
                title="Seleccionar producto para ver su reporte"
                items={productListMaintanceReportMock}
                getKey={(product) => product.productCode}
                getSearchText={(product) => `${product.name} ${product.productCode}`}
                onSelect={(product) => setMaintenanceCode(product.productCode.toString())
                }
            >
                {(product: ProductLightResponse) => <ProductSearchListFormat product={product} />}
            </ModalSearchList>

            {/* MODAL PARA TRASLADOS */}
            <ModalSearchList<ProductLightResponse>
                isOpen={isTransferModalOpen}
                onClose={() => setIsTransferModalOpen(false)}
                title="Seleccionar producto para ver su reporte"
                items={productListTransferReportMock}
                getKey={(product) => product.productCode}
                getSearchText={(product) => `${product.name} ${product.productCode}`}
                onSelect={(product) =>
                    setTransferCode(product.productCode.toString())
                }
            >
                {(product: ProductLightResponse) => <ProductSearchListFormat product={product} />}
            </ModalSearchList>

        </div >
    );


}