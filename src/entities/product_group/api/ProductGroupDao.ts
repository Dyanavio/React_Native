import type { ProductGroup } from "../model/ProductGroup";

export default class ProductGroupDao {
    static getGroups() {
        return new Promise<Array<ProductGroup>>((resolve, reject) => {
            fetch("https://localhost:7195/api/product-group")
            .then(r => {
                let ct = r.headers.get("Content-Type");
                if(ct?.startsWith("application/json"))
                {
                    r.json().then(j => {
                        if(j.status.isOk)
                        {
                            resolve(j.data.productGroups as Array<ProductGroup>);
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