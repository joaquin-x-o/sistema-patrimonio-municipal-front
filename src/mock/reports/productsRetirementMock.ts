import type { RetirementHistoryResponse } from "../../interfaces/retirementHistoryResponse";
import { RetirementType } from "../../types/retirement.type";

export const retirementDatabaseMock: RetirementHistoryResponse[] = [

    {
        documentReference: "EXP-2026-0211",
        retirementReason: "Equipo obsoleto reemplazado por nuevas tablets institucionales.",
        retirementType: RetirementType.OBSOLETE,
        transactionDate: "2026-03-10",

        product: { productCode: 201, name: "Tablet Samsung Galaxy Tab A" },

        user: { name: "María", surname: "González" },

        department: {
            departmentCode: "H3",
            name: "Secretaría de Hacienda",
            responsibleName: "Elena Torres"
        }
    },

    {
        documentReference: "EXP-2026-0208",
        retirementReason: "Cámara dañada irreparablemente tras caída durante cobertura de evento cultural.",
        retirementType: RetirementType.DAMAGE,
        transactionDate: "2026-03-05",

        product: { productCode: 202, name: "Cámara Fotográfica Canon EOS 4000D" },

        user: { name: "Carlos", surname: "Mendoza" },

        department: {
            departmentCode: "C4",
            name: "Secretaría de Cultura",
            responsibleName: "Marta Sánchez"
        }
    },

    {
        documentReference: "EXP-2026-0197",
        retirementReason: "Estructura metálica deteriorada por exposición constante a la intemperie.",
        retirementType: RetirementType.DAMAGE,
        transactionDate: "2026-02-25",

        product: { productCode: 203, name: "Gradas Metálicas Móviles" },

        user: { name: "Roberto", surname: "Martínez" },

        department: {
            departmentCode: "S5",
            name: "Complejo municipal",
            responsibleName: "Jorge Ramírez"
        }
    },

    {
        documentReference: "EXP-2026-0182",
        retirementReason: "Motocicleta retirada del servicio tras accidente en operativo.",
        retirementType: RetirementType.DAMAGE,
        transactionDate: "2026-02-18",

        product: { productCode: 204, name: "Motocicleta Honda XR150" },

        user: { name: "María", surname: "González" },

        department: {
            departmentCode: "G1",
            name: "Departamento de Seguridad",
            responsibleName: "Comisario Vaca"
        }
    },

    {
        documentReference: "EXP-2026-0170",
        retirementReason: "Equipo administrativo obsoleto reemplazado por nueva tecnología.",
        retirementType: RetirementType.OBSOLETE,
        transactionDate: "2026-02-10",

        product: { productCode: 205, name: "Fotocopiadora Ricoh MP 2014" },

        user: { name: "Carlos", surname: "Mendoza" },

        department: {
            departmentCode: "H3",
            name: "Secretaría de Hacienda",
            responsibleName: "Elena Torres"
        }
    },

    {
        documentReference: "EXP-2026-0155",
        retirementReason: "Escenario modular con deformaciones estructurales irreparables.",
        retirementType: RetirementType.DAMAGE,
        transactionDate: "2026-01-30",

        product: { productCode: 206, name: "Escenario Modular para Eventos" },

        user: { name: "Julio", surname: "López" },

        department: {
            departmentCode: "C4",
            name: "Secretaría de Cultura",
            responsibleName: "Marta Sánchez"
        }
    },

    {
        documentReference: "EXP-2026-0140",
        retirementReason: "Proyector extraviado luego de evento institucional.",
        retirementType: RetirementType.LOST,
        transactionDate: "2026-01-18",

        product: { productCode: 207, name: "Proyector Epson PowerLite X39" },

        user: { name: "María", surname: "González" },

        department: {
            departmentCode: "R9",
            name: "Dirección de Rentas",
            responsibleName: "Roberto Díaz"
        }
    },

    {
        documentReference: "EXP-2025-0321",
        retirementReason: "Equipo donado a escuela técnica local para prácticas educativas.",
        retirementType: RetirementType.DONATION,
        transactionDate: "2025-11-22",

        product: { productCode: 208, name: "PC de Escritorio Dell Optiplex 7050" },

        user: { name: "Carlos", surname: "Mendoza" },

        department: {
            departmentCode: "A6",
            name: "Secretaría de Acción Social",
            responsibleName: "Lucía Méndez"
        }
    },

    {
        documentReference: "EXP-2025-0284",
        retirementReason: "Herramienta retirada por desgaste extremo tras años de uso.",
        retirementType: RetirementType.OBSOLETE,
        transactionDate: "2025-10-15",

        product: { productCode: 209, name: "Compresor de Aire Industrial" },

        user: { name: "Roberto", surname: "Martínez" },

        department: {
            departmentCode: "O2",
            name: "Secretaría de Obras Públicas",
            responsibleName: "Ing. Martínez"
        }
    },

    {
        documentReference: "EXP-2025-0202",
        retirementReason: "Archivador sustraído durante robo en depósito municipal.",
        retirementType: RetirementType.STOLEN,
        transactionDate: "2025-08-12",

        product: { productCode: 210, name: "Archivador Metálico de 4 Cajones" },

        user: { name: "María", surname: "González" },

        department: {
            departmentCode: "B2",
            name: "Direccion de Patrimonio",
            responsibleName: "Luís Gomez"
        }
    }

];