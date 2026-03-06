import type { ProductResponse, ProductShortResponse } from "../../interfaces/productResponse";
import { productMock } from "./productDetailsMock";


function mapProductToShortResponse(product: ProductResponse): ProductShortResponse {

    const productShortResponse = {
        productCode: product.productCode,
        name: product.name,
        category: product.category,
        physicalCondition: product.physicalCondition,
        status: product.status,
        isLegacy: product.isLegacy,
        statusUpdatedAt: product.statusUpdatedAt,
        reviewDaysPending: product.reviewDaysPending,
        dateUnusable: product.dateUnusable ?? "",
        needsCheckReview: product.needsCheckReview,
        lastCheckDate: product.lastCheckDate,
        pendingReviewReason: product.pendingReviewReason,
        unusableReason: product.unusableReason,
        isRetired: product.isRetired,
        department: product.department
    }

    return productShortResponse;
};

export const mockProductsList = productMock.map(mapProductToShortResponse);

export const totalProducts = mockProductsList.length;


// separacion de datos en paginas
export const mockProductsPageOne = mockProductsList.slice(0, 5)
export const mockProductsPageTwo = mockProductsList.slice(5, 10)

// obtener todos los productos
export const allMockListProducts = [...mockProductsPageOne, ...mockProductsPageTwo]
