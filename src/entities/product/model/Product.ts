type Product = {
    "id": string,
    "groupId": string,
    "name": string,
    "description": string | null,
    "slug": string | null,
    "imageUrl": string,
    "price": number,
    "stock": number,
    "deletedAt": string | null,

};

export type { Product };
