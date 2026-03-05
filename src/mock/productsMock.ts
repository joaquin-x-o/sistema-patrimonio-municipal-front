import type { ProductShortResponse } from "../interfaces/productShortResponse";
import { ProductStatus, ProductCategory, ProductCondition } from "../types/product.type";


export const mockProductsPageOne: ProductShortResponse[] = [
    {
        productCode: 109,
        department: { departmentCode: "D4", name: " Departamento de seguridad" },
        name: "Handy Motorola EP450",
        category: ProductCategory.ELECTRONICS,
        physicalCondition: ProductCondition.REGULAR,
        status: ProductStatus.LOST,
        isLegacy: false, statusUpdatedAt: "2026-02-20", reviewDaysPending: 0,
        dateUnusable: "", needsCheckReview: false, lastCheckDate: null,
        pendingReviewReason: "Extraviado en operativo", unusableReason: null, isRetired: false
    },
    {
        productCode: 108,
        department: { departmentCode: "A2", name: "Secretaría de Hacienda" },
        name: "Notebook Lenovo ThinkPad E14",
        category: ProductCategory.IT,
        physicalCondition: ProductCondition.NEW,
        status: ProductStatus.ACTIVE,
        isLegacy: false, statusUpdatedAt: "2026-03-04", reviewDaysPending: 0,
        dateUnusable: "", needsCheckReview: false, lastCheckDate: "2026-01-15",
        pendingReviewReason: null, unusableReason: null, isRetired: false
    },
    {
        productCode: 107,
        department: { departmentCode: "C3", name: "Dirección de Tránsito" },
        name: "Conos Reflectivos (Lote 50)",
        category: ProductCategory.URBAN_ELEMENTS,
        physicalCondition: ProductCondition.EXCELLENT,
        status: ProductStatus.IN_REVIEW,
        isLegacy: false, statusUpdatedAt: "2026-03-03", reviewDaysPending: 2,
        dateUnusable: "", needsCheckReview: false, lastCheckDate: null,
        pendingReviewReason: "Falta recuento", unusableReason: null, isRetired: false
    },
    {
        productCode: 106,
        department: { departmentCode: "A1", name: "Despacho Intendencia" },
        name: "Generador Eléctrico Honda",
        category: ProductCategory.MACHINERY,
        physicalCondition: ProductCondition.BROKEN,
        status: ProductStatus.UNUSABLE,
        isLegacy: false, statusUpdatedAt: "2026-03-01", reviewDaysPending: 0,
        dateUnusable: "2026-03-01", needsCheckReview: true, lastCheckDate: null,
        pendingReviewReason: null, unusableReason: "Motor fundido", isRetired: false
    },
    {
        productCode: 105,
        department: { departmentCode: "B2", name: "Dirección de Cultura" },
        name: "Bandera de Argentina de Ceremonia",
        category: ProductCategory.TEXTILES,
        physicalCondition: ProductCondition.GOOD,
        status: ProductStatus.ACTIVE,
        isLegacy: false, statusUpdatedAt: "2026-03-04", reviewDaysPending: 0,
        dateUnusable: "", needsCheckReview: false, lastCheckDate: null,
        pendingReviewReason: null, unusableReason: null, isRetired: false
    }
];


export const mockProductsPageTwo: ProductShortResponse[] = [
    {
        productCode: 114,
        department: { departmentCode: "B2", name: "Dirección de Cultura" },
        name: "Cuadro Óleo 'Paisaje Salteño'",
        category: ProductCategory.ARTWORK,
        physicalCondition: ProductCondition.EXCELLENT,
        status: ProductStatus.ACTIVE,
        isLegacy: true, statusUpdatedAt: "2026-02-10", reviewDaysPending: 0,
        dateUnusable: "", needsCheckReview: false, lastCheckDate: "2025-12-20",
        pendingReviewReason: null, unusableReason: null, isRetired: false
    },
    {
        productCode: 113,
        department: { departmentCode: "E1", name: "Complejo Municipal" },
        name: "Arco de Fútbol 11 (Par)",
        category: ProductCategory.SPORTS,
        physicalCondition: ProductCondition.BROKEN,
        status: ProductStatus.UNUSABLE,
        isLegacy: false, statusUpdatedAt: "2026-03-01", reviewDaysPending: 0,
        dateUnusable: "2026-03-01", needsCheckReview: false, lastCheckDate: null,
        pendingReviewReason: null, unusableReason: "Estructura oxidada y cedida", isRetired: false
    },
    {
        productCode: 112,
        department: { departmentCode: "F2", name: "Secretaría de Obras Públicas" },
        name: "Camioneta Toyota Hilux",
        category: ProductCategory.VEHICLES,
        physicalCondition: ProductCondition.NEW,
        status: ProductStatus.ACTIVE,
        isLegacy: false, statusUpdatedAt: "2026-02-28", reviewDaysPending: 0,
        dateUnusable: "", needsCheckReview: false, lastCheckDate: "2026-02-28",
        pendingReviewReason: null, unusableReason: null, isRetired: false
    },
    {
        productCode: 111,
        department: { departmentCode: "A1", name: "Despacho Intendencia" },
        name: "Escritorio de Madera Maciza",
        category: ProductCategory.FURNITURE,
        physicalCondition: ProductCondition.REGULAR,
        status: ProductStatus.RETIRED,
        isLegacy: true, statusUpdatedAt: "2026-01-15", reviewDaysPending: 0,
        dateUnusable: "", needsCheckReview: false, lastCheckDate: null,
        pendingReviewReason: null, unusableReason: null, isRetired: true
    },
    {
        productCode: 110,
        department: { departmentCode: "A2", name: "Secretaría de Hacienda" },
        name: "Impresora HP LaserJet",
        category: ProductCategory.OFFICE_EQUIPMENT,
        physicalCondition: ProductCondition.GOOD,
        status: ProductStatus.ACTIVE,
        isLegacy: false, statusUpdatedAt: "2026-03-02", reviewDaysPending: 0,
        dateUnusable: "", needsCheckReview: false, lastCheckDate: "2026-02-01",
        pendingReviewReason: null, unusableReason: null, isRetired: false
    }
];