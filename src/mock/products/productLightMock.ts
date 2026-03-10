import type { ProductResponse, ProductLightResponse } from "../../interfaces/productResponse";
import { productMock } from "./productDetailsMock";


function mapProductToLightResponse(product: ProductResponse): ProductLightResponse {

    const productLightResponse = {
        productCode: product.productCode,
        name: product.name,
    }

    return productLightResponse;
};

export const mockProductsLight = productMock.map(mapProductToLightResponse);

export const totalProducts = mockProductsLight.length;

// separacion de datos en paginas
export const mockProductsPageOne = mockProductsLight.slice(0, 5)
export const mockProductsPageTwo = mockProductsLight.slice(5, 10)

// obtener todos los productos
export const allMockLightProducts = [...mockProductsPageOne, ...mockProductsPageTwo]


