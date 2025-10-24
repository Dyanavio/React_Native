import { Text, View } from "react-native-web";
import { StyleSheet, useWindowDimensions } from "react-native";
import type { ProductGroup } from "../model/ProductGroup";
import { Link } from "react-router-dom";

export default function ProductGroupCard({productGroup} : {productGroup: ProductGroup})
{
    const {width} = useWindowDimensions();

    return <View style={[styles.card, {width: 
         width >= 1400 ? "14.66%" :
         width >= 1200 ? "18%" :
         width >= 992 ? "23%" :
         width >= 768 ? "31.33%" :
         width >= 576 ? "48%" : "98%"}]}>
        <Link style={styles.link} to={"group/" + productGroup.slug}>
            <img src={productGroup.imageUrl} alt={productGroup.name} style={styles.img}/>
            <Text style={styles.title}>{productGroup.name}</Text>
            <Text style={styles.content}>{productGroup.description}</Text>
        </Link>
        
    </View>;
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "lightgray",
        margin: "1%"
    },
    link: {
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        textDecorationLine: "none"
    },
    img: {
        width: "100%",
    },
    title: {
        marginHorizontal: 10,
        marginVertical: 7,
        fontWeight: 700,
        fontSize: 16
    },
    content: {
        marginHorizontal: 10,
        marginBottom: 10,
    }
});