
import { useParams } from "react-router-dom";
import { Card } from "../components/ui/Card";


import { getProduct } from "../mock/products/productDetailsMock";

import { AlertTriangle, SquarePen } from "lucide-react";

import { Button } from "../components/ui/Button";

import { ProductBadgeStatus } from "../components/features/products/ProductBadgeStatus";
import { categoryTranslations, conditionTranslations } from "../utils/productDictionaries";
import { ProductCategory, ProductCondition, ProductStatus } from "../types/product.type";
import { FooterLink } from "../components/ui/FooterLink";
import { useState } from "react";



// desplegar opciones para modificar el estado del producto segun el tipo de estado que tenga
function getStatusOptions(productCode: string, productStatus: ProductStatus) {

    let options: { label: string; to: string; variant?: "danger" | "warning" | "primary" | "success" | "neutral" | "invisible" }[] = [];

    switch (productStatus) {
        case ProductStatus.ACTIVE:
            options = [
                { label: "Marcar en revisión", to: `/producto/${productCode}/revision`, },
                { label: "Marcar en desuso", to: `/producto/${productCode}/desuso` },
                { label: "Marcar como extraviado", to: `/producto/${productCode}/extraviado` },
                { label: "Dar de baja", to: `/producto/${productCode}/baja`, variant: "danger" }
            ];
            break;

        case ProductStatus.IN_REVIEW:
            options = [
                { label: "Aprobar revisión", to: `/producto/${productCode}/aprobar-revision` },
                { label: "Marcar en desuso", to: `/producto/${productCode}/desuso` },
                { label: "Marcar como extraviado", to: `/producto/${productCode}/extraviado` },
                { label: "Dar de baja", to: `/producto/${productCode}/dar-de-baja`, variant: "danger" }
            ];
            break;

        case ProductStatus.UNUSABLE:
            options = [
                { label: "Marcar como reparado", to: `/producto/${productCode}/reparado` },
                { label: "Dar de baja", to: `/producto/${productCode}/dar-de-baja`, variant: "danger" }
            ];
            break;

        case ProductStatus.LOST:
            options = [
                { label: "Marcar como encontrado", to: `/producto/${productCode}/encontrado` },
                { label: "Dar de baja", to: `/producto/${productCode}/dar-de-baja`, variant: "danger" }
            ];
            break;

        case ProductStatus.RETIRED:
            options = [
                { label: "Habilitar", to: `/producto/${productCode}/habilitar` },
            ];
            break;

        default:
            options = [
                { label: "No hay acciones disponibles", to: "#" }
            ];
    };

    return (
        <div className="flex flex-row gap-5 mt-4">
            {options.map((option, index) => (
                <Button
                    key={index}
                    to={option.to}
                    variant={option.variant || "primary"}
                    className="text-sm"
                >
                    < span >{option.label}</span>
                </Button >
            ))
            }
        </div >
    );
}


export default function ProductDetails() {

    const { productCode } = useParams<{ productCode: string }>();;

    const productDetails = getProduct(productCode);

    const productStatus = productDetails?.status ?? ProductStatus.ACTIVE
    const productCategory = productDetails?.category ?? ProductCategory.OTHER;
    const productCondition = productDetails?.physicalCondition ?? ProductCondition.NEW;

    const needsCheckReview = productDetails?.needsCheckReview;

    // si el estado es En revision o En Desuso, se obtendrá su motivo
    let productReason = "";

    if (productStatus === ProductStatus.IN_REVIEW) {
        productReason = productDetails?.pendingReviewReason ?? "Motivo de revisión no especificado.";

    } else if (productStatus === ProductStatus.UNUSABLE) {
        productReason = productDetails?.unusableReason as string ?? "Motivo de desuso no especificado.";
    }

    // flag para determinar si el producto tiene un motivo de su estado o no
    const hasStatusReason = !!productReason;

    // estado para controlar la visibilidad de opciones al editar el estado del producto
    const [showStatusOptions, setShowStatusOptions] = useState(false);

    // control de grid en casos de overflow
    const gridControl = "wrap-break-word min-w-0";

    return (
        <div className="flex flex-col gap-6 relative pb-20">
            {/* TITULO */}
            <h1 className="text-xl font-bold text-center uppercase tracking-widest text-primary">
                Gestión de Productos
            </h1>

            {/* INFORMACION DE PRODUCTO */}
            <Card title={`${productDetails?.name} (${productDetails?.productCode})`}>
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-foreground-muted">
                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Nombre: </span>
                            {productDetails?.name}
                        </p>

                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Código: </span>
                            {productDetails?.productCode}
                        </p>

                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Descripción: </span>
                            {productDetails?.description}
                        </p>

                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted ">Observación: </span>
                            {productDetails?.observation}
                        </p>

                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Categoría: </span>
                            {categoryTranslations[productCategory]}
                        </p>

                        <p className={gridControl}>
                            <span className="font-bold text-foreground-muted">Condición: </span>
                            {conditionTranslations[productCondition]}
                        </p>

                        <p className="py-3">
                            <span className="font-bold text-foreground-muted">Registrado en: </span>
                            {productDetails?.registrationDate}
                        </p>
                    </div>

                    {/* boton de edicion */}
                    <Button className="absolute bottom-0 right-0 p-2 cursor-pointer" variant="invisible" to="/producto/editar">
                        <SquarePen size={24} strokeWidth={1.5} />
                    </Button>
                </div>
            </Card>

            {/* UBICACION DE PRODUCTO */}
            <Card>
                <div className="flex justify-between items-center text-foreground-muted">
                    <p>
                        <span className="font-bold text-foreground-muted">Ubicación: </span>
                        {productDetails?.department.name} ({productDetails?.department.departmentCode})
                    </p>
                    <Button className="cursor-pointer" variant="invisible">
                        <SquarePen size={24} strokeWidth={1.5} />
                    </Button>
                </div>
            </Card>

            {/* ESTADO */}
            <Card>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-foreground-muted">
                        <p>
                            <span className="font-bold text-foreground-muted">Estado: </span>
                            <ProductBadgeStatus status={productStatus}></ProductBadgeStatus>
                        </p>
                        <p>
                            <span className="font-bold text-foreground-muted">Desde: </span>
                            {productDetails?.statusUpdatedAt}
                        </p>

                        <Button className="cursor-pointer" variant="invisible" onClick={() => setShowStatusOptions(!showStatusOptions)}>
                            <SquarePen size={24} strokeWidth={1.5} />
                        </Button>

                    </div>

                    {hasStatusReason && (
                        <div className=" text-foreground-muted py-2">
                            <hr className="border-t border-muted my-2" />
                            <span className="font-bold text-foreground-muted">Motivo: </span>
                            {productReason}
                        </div>
                    )}
                    {/* opciones que se desplegaran cuando se quiera editar su estado */}
                    {showStatusOptions && (
                        <div>
                            <hr className="border-t border-muted" />
                            {getStatusOptions(productCode as string, productStatus)}
                        </div>
                    )}

                </div>
            </Card>

            {/* ULTIMA CONSTATACION */}
            <Card className={needsCheckReview ? "border-2 border-warning" : ""} >
                <div className={`flex justify-between items-center text-foreground-muted`}>
                    <p>
                        <span className="font-bold text-foreground-muted">Última constatación: </span>
                        {productDetails?.lastCheckDate ?? 'Nunca'}
                    </p>
                    {needsCheckReview && <Button className="cursor-pointer" variant="warning" to={`/product/${productCode}/check-review`}>
                        <AlertTriangle size={24} strokeWidth={1.5} />
                    </Button>}

                </div>
            </Card>

            {/* REPORTES DISPONIBLES */}
            <Card>
                <div className="flex flex-wrap items-center gap-4 justify-start text-foreground-muted">
                    <p>
                        <span className="font-bold text-foreground-muted">Reportes disponibles: </span>
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <FooterLink label="Reportes de mantenimiento" to="/" />
                        <FooterLink label="Reportes de traslados" to="/" />
                    </div>

                </div>
            </Card>

        </div>
    );
}