import type { Product } from "../model/Product";

export default class ProductDao {
    static getProducts(slug: string) {
        return new Promise<Array<Product>>((resolve, reject) => {
            fetch(`https://localhost:7195/api/product-group/${slug}`)
            .then(r => {
                let ct = r.headers.get("Content-Type");
                if(ct?.startsWith("application/json"))
                {
                    r.json().then(j => {
                        if(j.status.isOk)
                        {
                            resolve(j.data as Array<Product>);
                        }
                        else
                        {
                            reject(j);
                        }
                    }).catch(reject);
                }
                else
                {
                    reject("Unsupported Content Type: " + ct);
                }
            }).catch(reject);
        });
    }

    static getProduct(slug: string)
    {
        return new Promise<Product>((resolve, reject) => {
            fetch(`https://localhost:7195/api/product/${slug}`)
            .then(r => {
                let ct = r.headers.get("Content-Type");
                if(ct?.startsWith("application/json"))
                {
                    r.json().then(j => {
                        if(j.status.isOk)
                        {
                            resolve(j.data as Product);
                        }
                        else
                        {
                            reject(j);
                        }
                    }).catch(reject);
                }
                else
                {
                    reject("Unsupported Content Type: " + ct);
                }
            }).catch(reject);
        })
    }
}

// DAO - Data Access Object