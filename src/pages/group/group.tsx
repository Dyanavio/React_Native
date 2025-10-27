import { Text, View } from "react-native-web";
import { useParams } from "react-router-dom";
import type { ProductGroup } from "../../entities/product_group/model/ProductGroup";
import { useEffect, useState } from "react";
import ProductDao from "../../entities/product/api/ProductDao";
import ProductCard from "../../entities/product/ui/ProductCard";
import {StyleSheet} from 'react-native'

export default function Group()
{
    const {slug} = useParams();
    const [group, setGroup] = useState<ProductGroup | null>(null);

    useEffect(() => {
        if(typeof slug  != 'undefined') ProductDao.getProducts(slug).then(setGroup).catch(console.error);
    }, [slug]);

    return <View>
        <Text>Group {group?.name}</Text>
        <View style={styles.root}>
            {group?.products.map(p => <ProductCard key={p.id} product={p}/>)}
        </View>
    </View>
}

const styles = StyleSheet.create({
    root: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "stretch",
    }
})