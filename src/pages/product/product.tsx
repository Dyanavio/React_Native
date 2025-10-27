import { Text, View } from "react-native-web";
import {StyleSheet} from 'react-native'
import type { Product } from "../../entities/product/model/Product";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDao from "../../entities/product/api/ProductDao";
import type { ProductInfo } from "../../entities/productInfo/model/ProductInfo";
import ProjButton, { ProjButtonTypes } from "../../features/ui/ProjButton";
import ProductCard from "../../entities/product/ui/ProductCard";

export default function Product()
{
    const {slug} = useParams();
    const [productInfo, setProductInfo] = useState<ProductInfo>();

    useEffect(() => {
        if(typeof slug != 'undefined') ProductDao.getProduct(slug).then(setProductInfo).catch(console.error);
    }, []);

    return <View>
        <View style={styles.root}>
            <View style={{width: "30%", marginRight: 10}}>
                <img src={productInfo?.product.imageUrl}/>
            </View>
            <View style={{width: "40%"}}>
                <Text style={styles.productName}>{productInfo?.product.name}</Text>
                <Text style={styles.productDescription}>{productInfo?.product.description}</Text>

                <View style={styles.footer}>
                    <Text style={styles.productDescription}>£ {productInfo?.product.price}</Text>
                    <ProjButton title="Buy" action={() => {}} type={ProjButtonTypes.success} style={styles.buyButton}></ProjButton>
                </View>
            </View>
            <View style={{width: "30%", marginRight: 15}}>
                <img src="https://placehold.co/600x400?text=Your+Ad"/>
            </View>
        </View>

        <View style={styles.root}>
            {productInfo?.associations.map(a => <ProductCard product={a} key={a.id}/>)}
        </View>
    </View>
}

const styles = StyleSheet.create({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
    },
    productName:
    {   
        fontWeight: 800,
        fontSize: 24
    },
    productDescription:
    {
        fontSize: 16
    },
    buyButton:{
        width: "30%",
        marginRight: 10
    },
    footer:
    {
        display: "flex",
        flexDirection: "row",
        marginTop: 100,
        verticalAlign: "center",
        justifyContent: "space-between"
    }
})