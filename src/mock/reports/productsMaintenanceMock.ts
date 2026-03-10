import type { MaintenanceHistoryResponse } from "../../interfaces/maintenanceHistoryResponse";
import type { ProductLightResponse } from "../../interfaces/productResponse";

export const productListMaintanceReportMock: ProductLightResponse[] = [
    {
        productCode: 106,
        name: "Generador Eléctrico Honda"
    },
    {
        productCode: 110,
        name: "Impresora HP LaserJet"
    },
    {
        productCode: 111,
        name: "Escritorio de Madera Maciza"
    },
    {
        productCode: 112,
        name: "Camioneta Toyota Hilux"
    }
];

const maintenanceDatabaseMock: Record<number, MaintenanceHistoryResponse[]> = {

    // generador Honda
    106: [
        {
            unusableDate: "2025-10-15",
            breakdownReason: "Falla en el carburador por uso de combustible sucio durante el operativo de limpieza.",
            repairDate: "2025-10-22",
            repairDescription: "Limpieza completa del carburador, cambio de bujías y filtros.",
            cost: 45000,
            user: { name: "Carlos", surname: "Mendoza" }
        },
        {
            unusableDate: "2024-05-10",
            breakdownReason: "Cortocircuito en el panel de encendido.",
            repairDate: "2024-05-18",
            repairDescription: "Reemplazo de fusibles y recableado del panel frontal.",
            cost: 85000,
            user: { name: "María", surname: "González" }
        }
    ],

    // escritorio de madera
    111: [
        {
            unusableDate: "2026-01-05",
            breakdownReason: "Pérdida de llave y cerradura trabada en el cajón principal con documentos adentro.",
            repairDate: "2026-01-07",
            repairDescription: "Apertura forzada por cerrajero, reemplazo del tambor y entrega de dos copias de llaves nuevas.",
            cost: 18000,
            user: { name: "Roberto", surname: "Martínez" }
        },
        {
            unusableDate: "2025-06-20",
            breakdownReason: "Derrame accidental de un termo de mate caliente que levantó el barniz y manchó la madera.",
            repairDate: "2025-06-25",
            repairDescription: "Lijado de la superficie superior, tratamiento para la madera y aplicación de tres capas de laca poliuretánica.",
            cost: 45000,
            user: { name: "María", surname: "González" }
        },
        {
            unusableDate: "2024-02-15",
            breakdownReason: "Humedad detectada en las bases de las patas tras una inundación leve en la oficina.",
            repairDate: "2024-02-18",
            repairDescription: "Secado industrial, corte de 2cm de la base afectada y colocación de regatones metálicos para aislarlo del piso.",
            cost: 28000,
            user: { name: "Carlos", surname: "Mendoza" }
        },
        {
            unusableDate: "2023-08-05",
            breakdownReason: "Pata lateral derecha aflojada luego de mover el mueble durante la limpieza profunda del área.",
            repairDate: "2023-08-06",
            repairDescription: "Encolado, colocación de escuadras metálicas internas de refuerzo y ajuste general de tornillos.",
            cost: 12000,
            user: { name: "Julio", surname: "López" }
        },
        {
            unusableDate: "2022-03-10",
            breakdownReason: "Guías del cajón inferior vencidas por exceso de peso (demasiados expedientes).",
            repairDate: "2022-03-12",
            repairDescription: "Extracción de guías de madera rotas y reemplazo por guías telescópicas metálicas de alta resistencia.",
            cost: 25000,
            user: { name: "Carlos", surname: "Mendoza" }
        }
    ],

    // camioneta Hylux
    112: [
        {
            unusableDate: "2026-01-10",
            breakdownReason: "Abolladura en paragolpe delantero y óptica derecha rota por choque menor en control vehicular.",
            repairDate: "2026-01-25",
            repairDescription: "Cambio de óptica original, enderezado de chapa y pintura de paragolpe.",
            cost: 350000,
            user: { name: "Roberto", surname: "Martínez" }
        },
        {
            unusableDate: "2025-08-05",
            breakdownReason: "Desgaste de pastillas de freno y service de los 50.000km.",
            repairDate: "2025-08-07",
            repairDescription: "Cambio de aceite, filtros y pastillas de freno delanteras.",
            cost: 120000,
            user: { name: "María", surname: "González" }
        }
    ],

    // impresora HP 
    110: [
        {
            unusableDate: "2025-11-20",
            breakdownReason: "Atasco de papel severo que rompió el rodillo de tracción.",
            repairDate: "2025-11-23",
            repairDescription: "Cambio de kit de rodillos (pick-up roller) y limpieza de tóner derramado.",
            cost: 35000,
            user: { name: "Carlos", surname: "Mendoza" }
        }
    ]
};

export const getMaintenanceHistoryByCode = (productCode: string | number): MaintenanceHistoryResponse[] => {
    const code = typeof productCode === 'string' ? parseInt(productCode, 10) : productCode;

    // Si el producto existe en nuestro mock, devolvemos su historial, sino un array vacío
    return maintenanceDatabaseMock[code] || [];
};