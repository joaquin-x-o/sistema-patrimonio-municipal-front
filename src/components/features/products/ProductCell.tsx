import type { ColumnDef } from "../../../interfaces/columnDef";
import type { ProductShortResponse } from "../../../interfaces/productShortResponse";
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
        cell: (row) => row.department.departmentCode
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
];