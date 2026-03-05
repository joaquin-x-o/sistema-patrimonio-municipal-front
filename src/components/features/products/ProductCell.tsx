import type { ColumnDef } from "../../../interfaces/columnDef";
import type { ProductShortResponse } from "../../../interfaces/productShortResponse";
import { Button } from "../../ui/Button";
import { categoryTranslations, conditionTranslations } from "../../../utils/productDictionaries";
import { ProductBadgeStatus } from "./ProductBadgeStatus";


export const ProductCell: ColumnDef<ProductShortResponse>[] = [
    {
        header: "Código",
        accessorKey: "productCode"
    },
    {
        header: "Área",
        accessorKey: "department",
        cell: (row) => (
            <div className="flex flex-col items-center">
                <span className="text-foreground-muted">{row.department.departmentCode}</span>
                <span className="text-[10px] text-neutral  uppercase tracking-wider">
                    {row.department.name}
                </span>
            </div>
        )
    },
    {
        header: "Nombre",
        accessorKey: "name"
    },
    {
        header: "Categoría",
        accessorKey: "category",
        cell: (row) => categoryTranslations[row.category] || row.category
    },
    {
        header: "Condición",
        accessorKey: "physicalCondition",
        cell: (row) => conditionTranslations[row.physicalCondition] || row.physicalCondition
    },
    {
        header: "Estado",
        accessorKey: "status",
        cell: (row) => <ProductBadgeStatus status={row.status} />
    },
    {
        header: "",
        accessorKey: "productCode",
        cell: (row) => (
            <div className="flex justify-center">
                <Button variant="primary" to={`/producto/${row.productCode}`}
                    className="px-3 py-1.5 text-xs"
                >
                    Ver
                </Button>
            </div>
        )
    }
];