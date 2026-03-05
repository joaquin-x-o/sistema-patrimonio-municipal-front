import type { ColumnDef } from "../../interfaces/columnDef";

interface Props<T> {
    columns: ColumnDef<T>[];
    data: T[];
}

export function Table<T>({ columns, data }: Props<T>) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full text-center border-collapse min-w-[600px]">
                <thead>
                    <tr className="bg-[#e5e5e5] text-gray-800 font-semibold text-sm">
                        {columns.map((col, index) => (
                            <th key={index} className="py-3 px-4 first:rounded-tl-sm last:rounded-tr-sm">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="py-3 px-4">
                                    {col.cell ? col.cell(row) : String(row[col.accessorKey])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}