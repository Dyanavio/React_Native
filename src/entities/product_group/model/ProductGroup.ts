import type { Product } from "../../product/model/Product";

type ProductGroup = {
    "id": string,
    "parentId": string | null,
    "name": string,
    "description": string,
    "slug": string,
    "imageUrl": string,
    "deletedAt": string | null,
    "parentGroup": string | null,
    "products": Array<Product>

};

export type { ProductGroup };