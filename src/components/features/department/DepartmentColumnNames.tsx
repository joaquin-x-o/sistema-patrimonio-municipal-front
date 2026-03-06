import type { ColumnDef } from "../../../interfaces/columnDef";
import type { DepartmentResponse } from "../../../interfaces/departmentResponse";
import { Button } from "../../ui/Button";

export const DepartmentColumnNames: ColumnDef<DepartmentResponse>[] = [
    {
        header: "Código",
        accessorKey: "departmentCode"
    },
    {
        header: "Área",
        accessorKey: "name"
    },
    {
        header: "Responsable",
        accessorKey: "responsibleName"
    },
    {
        header: "Cantidad de bienes",
        accessorKey: "productCount"
    },
    {
        header: "Porcentaje",
        accessorKey: "percentage",
        cell: (row) => row.percentage ? `${row.percentage} %` : "0.0 %"
    },
    {
        header: "",
        accessorKey: "departmentCode",
        cell: (row) => (
            <div className="flex justify-end">
                <Button
                    to={`/area/${row.departmentCode}`}
                    variant="primary"
                    className="px-6 py-1 text-xs"
                >
                    Ver
                </Button>
            </div>
        )
    }
];