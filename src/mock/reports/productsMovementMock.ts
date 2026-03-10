import type { MovementHistoryResponse } from "../../interfaces/movementHistoryResponse";
import type { ProductLightResponse } from "../../interfaces/productResponse";

// 2. Lista ligera para el modal de búsquedas de traslados
export const productListTransferReportMock: ProductLightResponse[] = [
    {
        productCode: 108,
        name: "Notebook Lenovo ThinkPad E14"
    },
    {
        productCode: 109,
        name: "Handy Motorola EP450"
    },
    {
        productCode: 112,
        name: "Camioneta Toyota Hilux"
    },
    {
        productCode: 113,
        name: "Arco de Fútbol 11"
    },
    {
        productCode: 114,
        name: "Cuadro Óleo 'Paisaje Salteño'"
    }
];

// 3. Base de datos simulada de traslados

export const transferDatabaseMock: Record<number, MovementHistoryResponse[]> = {

    // notebook Lenovo
    108: [
        {
            transferDate: "2026-02-15",
            reasonForMovement: "Reasignación temporal por auditoría externa.",
            originDepartment: { departmentCode: "H3", name: "Secretaría de Hacienda" },
            destinationDepartment: { departmentCode: "R9", name: "Dirección de Rentas" },
            user: { name: "María", surname: "González" }
        },
        {
            transferDate: "2026-01-10",
            reasonForMovement: "Devolución tras finalizar reemplazo.",
            originDepartment: { departmentCode: "A6", name: "Secretaría de Acción Social" },
            destinationDepartment: { departmentCode: "H3", name: "Secretaría de Hacienda" },
            user: { name: "Carlos", surname: "Mendoza" }
        },
        {
            transferDate: "2025-12-20",
            reasonForMovement: "Préstamo para carga de datos de fin de año.",
            originDepartment: { departmentCode: "H3", name: "Secretaría de Hacienda" },
            destinationDepartment: { departmentCode: "A6", name: "Secretaría de Acción Social" },
            user: { name: "Roberto", surname: "Martínez" }
        }
    ],

    // handy Motorola 
    109: [
        {
            transferDate: "2026-02-10",
            reasonForMovement: "Remitido para auditoría general de equipos de comunicación.",
            originDepartment: { departmentCode: "G1", name: "Departamento de Seguridad" },
            destinationDepartment: { departmentCode: "B2", name: "Direccion de Patrimonio" },
            user: { name: "Luís", surname: "Gomez" }
        },
        {
            transferDate: "2026-01-05",
            reasonForMovement: "Cambio de turno y reasignación para operativo de verano.",
            originDepartment: { departmentCode: "T1", name: "Dirección de Tránsito" },
            destinationDepartment: { departmentCode: "G1", name: "Departamento de Seguridad" },
            user: { name: "Roberto", surname: "Martínez" }
        },
        {
            transferDate: "2025-08-12",
            reasonForMovement: "Préstamo para control vehicular en evento masivo.",
            originDepartment: { departmentCode: "G1", name: "Departamento de Seguridad" },
            destinationDepartment: { departmentCode: "T1", name: "Dirección de Tránsito" },
            user: { name: "María", surname: "González" }
        }
    ],

    // camioneta Hilux
    112: [
        {
            transferDate: "2025-10-01",
            reasonForMovement: "Reasignación de vehículo oficial definitivo.",
            originDepartment: { departmentCode: "A1", name: "Despacho Intendencia" },
            destinationDepartment: { departmentCode: "O2", name: "Secretaría de Obras Públicas" },
            user: { name: "Carlos", surname: "Mendoza" }
        },
        {
            transferDate: "2025-08-01",
            reasonForMovement: "Devolución tras finalizar campaña de invierno.",
            originDepartment: { departmentCode: "A6", name: "Secretaría de Acción Social" },
            destinationDepartment: { departmentCode: "A1", name: "Despacho Intendencia" },
            user: { name: "Lucía", surname: "Méndez" }
        },
        {
            transferDate: "2025-06-15",
            reasonForMovement: "Préstamo para reparto de insumos en zonas vulnerables.",
            originDepartment: { departmentCode: "A1", name: "Despacho Intendencia" },
            destinationDepartment: { departmentCode: "A6", name: "Secretaría de Acción Social" },
            user: { name: "Carlos", surname: "Mendoza" }
        }
    ],

    // cuadro al oleo
    114: [
        {
            transferDate: "2025-05-20",
            reasonForMovement: "Devolución tras finalizar la exposición.",
            originDepartment: { departmentCode: "A1", name: "Despacho Intendencia" },
            destinationDepartment: { departmentCode: "C4", name: "Secretaría de Cultura" },
            user: { name: "Julio", surname: "López" }
        },
        {
            transferDate: "2025-05-10",
            reasonForMovement: "Préstamo temporal para decorar despacho del intendente.",
            originDepartment: { departmentCode: "C4", name: "Secretaría de Cultura" },
            destinationDepartment: { departmentCode: "A1", name: "Despacho Intendencia" },
            user: { name: "María", surname: "González" }
        }
    ],

    // arco de futbol 
    113: [
        {
            transferDate: "2024-09-25",
            reasonForMovement: "Devolución al complejo tras finalizar el torneo de la primavera.",
            originDepartment: { departmentCode: "C4", name: "Secretaría de Cultura" },
            destinationDepartment: { departmentCode: "S5", name: "Complejo municipal" },
            user: { name: "Marta", surname: "Sánchez" }
        },
        {
            transferDate: "2024-09-05",
            reasonForMovement: "Préstamo temporal para torneo relámpago organizado por Cultura.",
            originDepartment: { departmentCode: "S5", name: "Complejo municipal" },
            destinationDepartment: { departmentCode: "C4", name: "Secretaría de Cultura" },
            user: { name: "Jorge", surname: "Ramírez" }
        },
        {
            transferDate: "2024-02-10",
            reasonForMovement: "Traslado a complejo deportivo.",
            originDepartment: { departmentCode: "B2", name: "Direccion de Patrimonio" },
            destinationDepartment: { departmentCode: "S5", name: "Complejo municipal" },
            user: { name: "Roberto", surname: "Martínez" }
        }
    ]
};