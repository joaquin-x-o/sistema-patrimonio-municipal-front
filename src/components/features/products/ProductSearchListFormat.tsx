import type { ProductLightResponse } from "../../../interfaces/productResponse";

interface Props {
    product: ProductLightResponse;
}

export function ProductSearchListFormat({ product }: Props) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-foreground-muted">
                {product.name}
            </span>

            <span className="text-sm font-bold bg-primary-hover px-2 py-1 rounded">
                COD. {product.productCode}
            </span>
        </div>
    );
}