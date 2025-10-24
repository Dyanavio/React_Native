import { Text, View } from "react-native-web";
import { useParams } from "react-router-dom";
import type { ProductGroup } from "../../entities/product_group/model/ProductGroup";
import { useEffect, useState } from "react";
import ProductDao from "../../entities/product/api/ProductDao";

export default function Group()
{
    const {slug} = useParams();
    const [group, setGroup] = useState<ProductGroup | null>(null);

    useEffect(() => {
        if(typeof slug  != 'undefined') ProductDao.getGroups(slug).then(setGroup).catch(console.error);
    }, [slug]);

    return <View>
        <Text>Group {group?.name}</Text>
        {group?.products.map(p => <Text>{p.name}</Text>)}
    </View>
}