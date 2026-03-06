import { ProductCategory, ProductCondition, ProductStatus } from "../types/product.type";


export interface ProductResponse {
    name: string;
    description: string;
    observation: string;

    productCode: number;

    category: ProductCategory;
    physicalCondition: ProductCondition;

    isLegacy: boolean;

    status: ProductStatus;
    statusUpdatedAt: string;

    reviewDaysPending: number;

    registrationDate: string | null;

    dateUnusable: string | null;
    unusableReason: string | null;

    retirementDate: string | null;
    isRetired: boolean | null;

    needsCheckReview: boolean;
    lastCheckDate: string | null;
    pendingReviewReason: string | null;

    createdAt: string;
    updatedAt: string;

    department: { departmentCode: string; name: string; };
    user: { name: string; surname: string; };
}

export interface ProductShortResponse {
    name: string;
    productCode: number;
    category: ProductCategory;
    physicalCondition: ProductCondition;

    isLegacy: boolean;

    status: ProductStatus;
    statusUpdatedAt: string;

    reviewDaysPending: number;

    dateUnusable: string;
    unusableReason: string | null;

    needsCheckReview: boolean;
    lastCheckDate: string | null;

    pendingReviewReason: string | null;

    isRetired: boolean | null;

    department: { departmentCode: string, name: string };
}

