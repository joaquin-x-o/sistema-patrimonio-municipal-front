import type { ColumnDef } from "../../../interfaces/columnDef";
import type { MaintenanceHistoryResponse } from "../../../interfaces/maintenanceHistoryResponse";


export const MaintenanceHistoryColumnNames: ColumnDef<MaintenanceHistoryResponse>[] = [
    {
        header: "Fecha de avería",
        accessorKey: "unusableDate"
    },
    {
        header: "Motivo de avería",
        accessorKey: "breakdownReason",
    },
    {
        header: "Fecha de reparación",
        accessorKey: "repairDate"
    },
    {
        header: "Reparación",
        accessorKey: "repairDescription"
    },
    {
        header: "Costo",
        accessorKey: "cost",
        cell: (row) => `$${row.cost}`
    },
    {
        header: "Registrado por",
        accessorKey: "user",
        cell: (row) => `${row.user.name} ${row.user.surname}`

    }
];