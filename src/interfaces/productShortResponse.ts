import { ProductCategory, ProductCondition, ProductStatus } from "../types/product.type";

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
    needsCheckReview: boolean;
    lastCheckDate: string | null;
    pendingReviewReason: string | null;
    unusableReason: string | null;
    isRetired: boolean | null;
    department: {
        departmentCode: string;
        name: string;
    };
}