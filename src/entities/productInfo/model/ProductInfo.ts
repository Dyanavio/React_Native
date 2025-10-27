import type { Product } from "../../product/model/Product";

type ProductInfo = {
    "slug": string | null,
    "product": Product,
    associations: Array<Product>

};

export type { ProductInfo };
