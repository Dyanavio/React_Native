import type { ProductGroup } from "../../product_group/model/ProductGroup";

export default class ProductDao {
    static getGroups(slug: string) {
        return new Promise<ProductGroup>((resolve, reject) => {
            fetch(`https://localhost:7195/api/product-group/${slug}`)
            .then(r => {
                let ct = r.headers.get("Content-Type");
                if(ct?.startsWith("application/json"))
                {
                    r.json().then(j => {
                        if(j.status.isOk)
                        {
                            resolve(j.data as ProductGroup);
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
}


// DAO - Data Access Object