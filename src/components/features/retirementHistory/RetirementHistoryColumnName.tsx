import type { ColumnDef } from "../../../interfaces/columnDef";
import type { RetirementHistoryResponse } from "../../../interfaces/retirementHistoryResponse";
import { retirementTypeTranslation } from "../../../utils/retirementTypesDictionary";
import { Badge } from "../../ui/Badge";
import { DepartmentNameFormat } from "../department/DepartmentNameFormat";

export const RetirementHistoryColumnNames: ColumnDef<RetirementHistoryResponse>[] = [
    {
        header: "Fecha de baja",
        accessorKey: "transactionDate"
    },
    {
        header: "Documento",
        accessorKey: "documentReference"
    },
    {
        header: "Producto",
        accessorKey: "product",
        cell: (row) => `${row.product.name} (COD. ${row.product.productCode})`
    },
    {
        header: "Área",
        accessorKey: "department",
        cell: (row) => (
            <DepartmentNameFormat
                departmentCode={row.department.departmentCode}
                name={row.department.name}
            />
        )
    },
    {
        header: "Motivo",
        accessorKey: "retirementReason"
    },
    {
        header: "Tipo de baja",
        accessorKey: "retirementType",
        cell: (row) => <Badge color="danger">{retirementTypeTranslation[row.retirementType] || row.retirementType}</Badge>
    },
    {
        header: "Registrado por",
        accessorKey: "user",
        cell: (row) => `${row.user.name} ${row.user.surname}`
    }
];