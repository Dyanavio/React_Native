import { Text, View } from "react-native-web";
import { StyleSheet, useWindowDimensions } from "react-native";
import { Link } from "react-router-dom";
import type { Product } from "../model/Product";
import {ProjButton, ProjButtonTypes} from "../../../features/ui/ProjButton";

export default function ProductCard({product} : {product: Product})
{
    const {width} = useWindowDimensions();

    return <View style={[styles.card, {width: 
         width >= 1400 ? "14.66%" :
         width >= 1200 ? "18%" :
         width >= 992 ? "23%" :
         width >= 768 ? "31.33%" :
         width >= 576 ? "48%" : "98%"}]}>
        <Link style={styles.link} to={"../product/" + product.slug}>
            <img src={product.imageUrl} alt={product.name} style={styles.img}/>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.content}>{product.description}</Text>
        </Link>
        <View style={styles.divider}></View>
        <View style={styles.cardFooter}>
            <Text style={styles.price}>£ {product.price}</Text>
            <ProjButton title="Buy" action={() => {}} type={ProjButtonTypes.success} style={styles.buyButton}></ProjButton>
        </View>
  
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
    },
    price:{
        fontSize: 16,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    buyButton:{
        width: "30%",
        marginRight: 10
    },
    cardFooter:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    divider: {
        width: "90%",
        height: 1,
        borderColor: "lightgray",
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 5,
        alignSelf: "center"
    }
});